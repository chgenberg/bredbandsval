import { AddressLookupResult, ProviderPackage, StreamingService, UserPreferences, Recommendation } from './types';
import { mockAddressLookup, mockProviderPackages, mockStreamingServices } from './mock-data';

// Configuration - easy to switch between mock and real APIs
const USE_MOCK_DATA = process.env.NEXT_PUBLIC_USE_MOCK_DATA !== 'false';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.bredbandsval.se/v1';

export class BredbandsvalAPI {
  private static instance: BredbandsvalAPI;
  
  private constructor() {}
  
  static getInstance(): BredbandsvalAPI {
    if (!BredbandsvalAPI.instance) {
      BredbandsvalAPI.instance = new BredbandsvalAPI();
    }
    return BredbandsvalAPI.instance;
  }

  // Address lookup with fallback to mock data
  async lookupAddress(address: string): Promise<AddressLookupResult> {
    if (USE_MOCK_DATA) {
      return mockAddressLookup(address);
    }

    try {
      const response = await fetch(`${API_BASE_URL}/address/lookup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address }),
      });
      
      if (!response.ok) throw new Error('Address lookup failed');
      return await response.json();
    } catch (error) {
      console.warn('API call failed, using mock data:', error);
      return mockAddressLookup(address);
    }
  }

  // Get available packages for an address
  async getAvailablePackages(address: string, filters?: {
    minSpeed?: number;
    maxPrice?: number;
    providers?: string[];
  }): Promise<ProviderPackage[]> {
    // Try scraping real data first
    try {
      console.log(`🔍 Fetching real data for ${address}`);
      
      const response = await fetch('/api/scrape-packages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.packages && data.packages.length > 0) {
          console.log(`✅ Got ${data.packages.length} real packages from ${data.source}`);
          
          // Convert scraped data to our format with safe defaults
          const convertedPackages = data.packages.map((pkg: any) => ({
            id: pkg.id || `scraped-${Date.now()}-${Math.random()}`,
            providerId: pkg.providerName?.toLowerCase().replace(/\s+/g, '-') || 'unknown',
            providerName: pkg.providerName || 'Okänd leverantör',
            name: pkg.name || 'Okänt paket',
            speed: pkg.speed || { download: 0, upload: 0 },
            pricing: pkg.pricing || { monthly: 0, setupFee: 0 },
            contract: pkg.contract || { bindingPeriod: 0, noticePeriod: 1, autoRenewal: false },
            includes: pkg.includes || { 
              router: false, 
              publicIP: false, 
              emailAccounts: 0, 
              antiVirus: false 
            },
            availability: pkg.availability || { 
              address, 
              available: true, 
              installationTime: 'Okänt', 
              technology: 'fiber' 
            },
            tv: pkg.tv || undefined,
            streaming: pkg.streaming || undefined,
            isCombo: pkg.isCombo || false,
            comboDetails: pkg.comboDetails || undefined,
          }));

          // Apply filters if provided
          let filtered = convertedPackages;
          if (filters?.minSpeed) {
            filtered = filtered.filter((pkg: any) => (pkg.speed?.download || 0) >= filters.minSpeed!);
          }
          if (filters?.maxPrice) {
            filtered = filtered.filter((pkg: any) => {
              const price = pkg.pricing?.campaign?.monthlyPrice || pkg.pricing?.monthly || 0;
              return price <= filters.maxPrice!;
            });
          }
          if (filters?.providers && filters.providers.length > 0) {
            filtered = filtered.filter((pkg: any) => 
              filters.providers!.some(p => 
                pkg.providerName.toLowerCase().includes(p.toLowerCase())
              )
            );
          }

          // Combine scraped data with mock data for richer recommendations
          console.log('🔄 Combining scraped data with mock data for richer selection');
          const mockData = await mockProviderPackages(address, filters);
          const combined = [...filtered, ...mockData];
          
          // Remove duplicates based on provider and package name
          const unique = combined.filter((pkg, index, self) => 
            index === self.findIndex(p => 
              p.providerName === pkg.providerName && p.name === pkg.name
            )
          );
          
          console.log(`📦 Combined: ${filtered.length} scraped + ${mockData.length} mock = ${unique.length} total packages`);
          return unique;
        }
      }
    } catch (error) {
      console.warn('Scraping failed, falling back to mock data:', error);
    }

    // Fallback to mock data
    if (USE_MOCK_DATA) {
      console.log('📦 Using mock data as fallback');
      return mockProviderPackages(address, filters);
    }

    // Try original API as last resort
    try {
      const params = new URLSearchParams({
        address,
        ...(filters?.minSpeed && { minSpeed: filters.minSpeed.toString() }),
        ...(filters?.maxPrice && { maxPrice: filters.maxPrice.toString() }),
        ...(filters?.providers && { providers: filters.providers.join(',') }),
      });

      const response = await fetch(`${API_BASE_URL}/packages?${params}`);
      if (!response.ok) throw new Error('Failed to fetch packages');
      return await response.json();
    } catch (error) {
      console.warn('All data sources failed, using mock data:', error);
      return mockProviderPackages(address, filters);
    }
  }

  // Get streaming services
  async getStreamingServices(): Promise<StreamingService[]> {
    if (USE_MOCK_DATA) {
      return mockStreamingServices();
    }

    try {
      const response = await fetch(`${API_BASE_URL}/streaming-services`);
      if (!response.ok) throw new Error('Failed to fetch streaming services');
      return await response.json();
    } catch (error) {
      console.warn('API call failed, using mock data:', error);
      return mockStreamingServices();
    }
  }

  // Get personalized recommendations
  async getRecommendations(preferences: UserPreferences): Promise<Recommendation[]> {
    if (USE_MOCK_DATA) {
      // Use local recommendation engine
      const packages = await this.getAvailablePackages(preferences.address.address);
      return this.calculateRecommendations(packages, preferences);
    }

    try {
      const response = await fetch(`${API_BASE_URL}/recommendations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(preferences),
      });
      
      if (!response.ok) throw new Error('Failed to get recommendations');
      return await response.json();
    } catch (error) {
      console.warn('API call failed, using local recommendation engine:', error);
      const packages = await this.getAvailablePackages(preferences.address.address);
      return this.calculateRecommendations(packages, preferences);
    }
  }

  // Local recommendation engine (used for mock data and as fallback)
  private calculateRecommendations(packages: ProviderPackage[], preferences: UserPreferences): Recommendation[] {
    const bandwidthNeed = this.calculateBandwidthNeed(preferences);
    
    const scoredPackages = packages.map(pkg => {
      let score = 0;
      const reasons: string[] = [];
      const pros: string[] = [];
      const cons: string[] = [];

      // Speed matching (safe access)
      if ((pkg.speed?.download || 0) >= bandwidthNeed) {
        score += 30;
        reasons.push(`Hastigheten ${pkg.speed?.download || 0} Mbit/s täcker era behov`);
        pros.push('Tillräcklig hastighet');
      } else {
        score -= 20;
        cons.push('För låg hastighet för era behov');
      }

      // Price evaluation (safe access)
      const monthlyPrice = pkg.pricing?.campaign?.monthlyPrice || pkg.pricing?.monthly || 0;
      if (preferences.preferences.maxBudget) {
        if (monthlyPrice <= preferences.preferences.maxBudget) {
          score += 20;
          pros.push('Inom budget');
        } else {
          score -= 30;
          cons.push('Över budget');
        }
      }

      // Contract preference (safe access)
      if (preferences.preferences.contractLength === 'none' && pkg.contract?.bindingPeriod === 0) {
        score += 15;
        pros.push('Ingen bindningstid');
      } else if (preferences.preferences.contractLength === 'long' && (pkg.contract?.bindingPeriod || 0) >= 12) {
        score += 10;
        pros.push('Bra pris med bindningstid');
      }

      // Router preference (safe access)
      if (preferences.preferences.includeRouter === true && pkg.includes?.router) {
        score += 10;
        pros.push('Router ingår');
      } else if (preferences.preferences.includeRouter === false && !pkg.includes?.router) {
        score += 5;
        pros.push('Inget routertillägg');
      }

      // Streaming services matching
      const includedStreaming = pkg.streaming?.included || [];
      const wantedStreaming = preferences.preferences.streamingServices;
      const matchingServices = includedStreaming.filter(s => wantedStreaming.includes(s));
      
      if (matchingServices.length > 0) {
        score += matchingServices.length * 15;
        reasons.push(`Inkluderar ${matchingServices.join(', ')}`);
        pros.push(`${matchingServices.length} streamingtjänster ingår`);
      }

      // Calculate savings
      const streamingSavings = this.calculateStreamingSavings(
        preferences.currentServices?.streamingServices || [],
        includedStreaming
      );

      return {
        package: pkg,
        score,
        reasons,
        pros,
        cons,
        savings: {
          monthly: streamingSavings,
          yearly: streamingSavings * 12,
          streaming: streamingSavings,
          vsCurrentProvider: preferences.currentServices?.monthlyPrice 
            ? preferences.currentServices.monthlyPrice - monthlyPrice 
            : 0,
        },
      };
    });

    // Sort by score and return top 5
    return scoredPackages
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  }

  private calculateBandwidthNeed(preferences: UserPreferences): number {
    let bandwidth = 25; // Base need
    
    // Household size impact
    const activePeople = preferences.household.size;
    bandwidth += activePeople * 15;
    
    // Work from home
    if (preferences.household.workFromHome > 0) {
      bandwidth += preferences.household.workFromHome * 25;
    }
    
    // Usage patterns
    if (preferences.usage.streaming === 'heavy') {
      bandwidth += 50;
    } else if (preferences.usage.streaming === 'moderate') {
      bandwidth += 25;
    }
    
    if (preferences.usage.gaming) {
      bandwidth += 50;
    }
    
    if (preferences.usage.videoConferencing) {
      bandwidth += 25;
    }
    
    if (preferences.usage.smartHome) {
      bandwidth += 15;
    }
    
    // Round up to nearest 50
    return Math.ceil(bandwidth / 50) * 50;
  }

  private calculateStreamingSavings(current: string[], included: string[]): number {
    const streamingPrices: Record<string, number> = {
      'Netflix': 109,
      'HBO Max': 109,
      'Disney+': 99,
      'Viaplay': 449,
      'Prime Video': 59,
      'C More': 349,
      'Discovery+': 79,
      'Apple TV+': 99,
    };
    
    return current
      .filter(service => included.includes(service))
      .reduce((total, service) => total + (streamingPrices[service] || 0), 0);
  }
}

// Export singleton instance
export const bredbandsvalAPI = BredbandsvalAPI.getInstance();
