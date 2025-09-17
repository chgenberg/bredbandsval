import axios from 'axios';
import * as cheerio from 'cheerio';
import { ProviderPackage } from '@/lib/api/types';

export interface ScrapedPackage {
  id: string;
  providerName: string;
  name: string;
  speed: {
    download: number;
    upload: number;
  };
  pricing: {
    monthly: number;
    campaign?: {
      monthlyPrice: number;
      months: number;
      description: string;
    };
    setupFee: number;
  };
  contract: {
    bindingPeriod: number;
    noticePeriod: number;
  };
  includes: {
    router: boolean;
    publicIP: boolean;
    emailAccounts: number;
  };
  features: string[];
  availability: {
    address: string;
    available: boolean;
    technology: 'fiber' | 'cable' | 'dsl' | '5g';
  };
}

export class BredbandsvalScraper {
  private baseUrl = 'https://www.bredbandsval.se';
  private userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

  // Scrape packages for a specific address
  async scrapePackagesForAddress(address: string): Promise<ScrapedPackage[]> {
    try {
      console.log(`🔍 Scraping packages for address: ${address}`);
      
      // First, make a search request to get the search results page
      const searchResponse = await this.makeSearchRequest(address);
      
      if (!searchResponse) {
        console.warn('No search response received');
        return [];
      }

      // Parse the HTML response
      const packages = await this.parsePackagesFromHTML(searchResponse, address);
      
      console.log(`✅ Found ${packages.length} packages for ${address}`);
      return packages;
      
    } catch (error) {
      console.error('Error scraping packages:', error);
      return [];
    }
  }

  private async makeSearchRequest(address: string): Promise<string | null> {
    try {
      // Try different search approaches
      const searchUrls = [
        `${this.baseUrl}/bredband/${encodeURIComponent(address)}`,
        `${this.baseUrl}/search?address=${encodeURIComponent(address)}`,
        `${this.baseUrl}/?address=${encodeURIComponent(address)}`,
      ];

      for (const url of searchUrls) {
        try {
          const response = await axios.get(url, {
            headers: {
              'User-Agent': this.userAgent,
              'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
              'Accept-Language': 'sv-SE,sv;q=0.9,en;q=0.8',
              'Accept-Encoding': 'gzip, deflate, br',
              'DNT': '1',
              'Connection': 'keep-alive',
              'Upgrade-Insecure-Requests': '1',
            },
            timeout: 10000,
          });

          if (response.data && response.data.includes('bredband')) {
            console.log(`✅ Successfully fetched data from: ${url}`);
            return response.data;
          }
        } catch (urlError) {
          console.log(`❌ Failed to fetch from ${url}:`, (urlError as Error).message);
          continue;
        }
      }

      return null;
    } catch (error) {
      console.error('Error making search request:', error);
      return null;
    }
  }

  private async parsePackagesFromHTML(html: string, address: string): Promise<ScrapedPackage[]> {
    const $ = cheerio.load(html);
    const packages: ScrapedPackage[] = [];

    // Look for different possible selectors for packages
    const packageSelectors = [
      '.package-card',
      '.offer-card', 
      '.provider-offer',
      '.broadband-offer',
      '[data-testid*="package"]',
      '[data-testid*="offer"]',
      '.card',
      'article',
    ];

    let foundPackages = false;

    for (const selector of packageSelectors) {
      const elements = $(selector);
      if (elements.length > 0) {
        console.log(`📦 Found ${elements.length} potential packages with selector: ${selector}`);
        
        elements.each((index, element) => {
          try {
            const packageData = this.extractPackageData($, $(element), address, index);
            if (packageData) {
              packages.push(packageData);
              foundPackages = true;
            }
          } catch (error) {
            console.warn(`Error parsing package ${index}:`, error);
          }
        });

        if (foundPackages) break;
      }
    }

    // If no structured packages found, try to extract any pricing info
    if (packages.length === 0) {
      console.log('🔍 No structured packages found, looking for any pricing data...');
      packages.push(...this.extractFallbackPackages($, address));
    }

    return packages;
  }

  private extractPackageData($: cheerio.CheerioAPI, element: cheerio.Cheerio, address: string, index: number): ScrapedPackage | null {
    try {
      // Extract provider name
      const providerName = this.extractText($, element, [
        '.provider-name',
        '.company-name', 
        '.brand-name',
        'h3',
        'h4',
        '.title'
      ]) || `Provider ${index + 1}`;

      // Extract package name
      const packageName = this.extractText($, element, [
        '.package-name',
        '.offer-name',
        '.product-name',
        'h4',
        'h5',
        '.subtitle'
      ]) || `Package ${index + 1}`;

      // Extract speed
      const speedText = this.extractText($, element, [
        '.speed',
        '.bandwidth',
        '.mbit',
        '*[class*="speed"]',
        '*[class*="mbit"]'
      ]) || '';

      const speed = this.parseSpeed(speedText);

      // Extract price
      const priceText = this.extractText($, element, [
        '.price',
        '.cost',
        '.monthly',
        '*[class*="price"]',
        '*[class*="cost"]',
        '*[class*="kr"]'
      ]) || '';

      const pricing = this.parsePrice(priceText);

      // Extract features
      const features = this.extractFeatures($, element);

      // Only return if we have minimum required data
      if (providerName && (speed.download > 0 || pricing.monthly > 0)) {
        return {
          id: `scraped-${Date.now()}-${index}`,
          providerName: this.cleanText(providerName),
          name: this.cleanText(packageName),
          speed,
          pricing,
          contract: {
            bindingPeriod: this.extractBindingPeriod($, element),
            noticePeriod: 1,
          },
          includes: {
            router: this.checkIncludes($, element, ['router', 'wifi']),
            publicIP: this.checkIncludes($, element, ['ip', 'static']),
            emailAccounts: this.extractEmailAccounts($, element),
          },
          features,
          availability: {
            address,
            available: true,
            technology: this.guessTechnology(providerName, speed.download),
          },
        };
      }

      return null;
    } catch (error) {
      console.warn('Error extracting package data:', error);
      return null;
    }
  }

  private extractText($: cheerio.CheerioAPI, element: cheerio.Cheerio, selectors: string[]): string {
    for (const selector of selectors) {
      const text = element.find(selector).first().text().trim();
      if (text) return text;
    }
    return '';
  }

  private parseSpeed(speedText: string): { download: number; upload: number } {
    const speed = { download: 0, upload: 0 };
    
    // Look for patterns like "100 Mbit/s", "250/25", "1000 Mbps"
    const patterns = [
      /(\d+)\s*(?:\/\s*(\d+))?\s*(?:mbit|mbps|mb)/i,
      /(\d+)\s*(?:mbit|mbps|mb)/i,
      /(\d+)\s*(?:\/\s*(\d+))/,
    ];

    for (const pattern of patterns) {
      const match = speedText.match(pattern);
      if (match) {
        speed.download = parseInt(match[1]) || 0;
        speed.upload = parseInt(match[2]) || speed.download;
        break;
      }
    }

    return speed;
  }

  private parsePrice(priceText: string): { monthly: number; setupFee: number; campaign?: any } {
    const pricing = { monthly: 0, setupFee: 0 };

    // Look for price patterns
    const pricePattern = /(\d+)\s*kr/i;
    const match = priceText.match(pricePattern);
    
    if (match) {
      pricing.monthly = parseInt(match[1]);
    }

    // Look for campaign prices
    const campaignPattern = /(\d+)\s*kr.*?(\d+)\s*(?:mån|månader)/i;
    const campaignMatch = priceText.match(campaignPattern);
    
    if (campaignMatch) {
      pricing.campaign = {
        monthlyPrice: parseInt(campaignMatch[1]),
        months: parseInt(campaignMatch[2]),
        description: 'Kampanjpris',
      };
    }

    return pricing;
  }

  private extractFeatures($: cheerio.CheerioAPI, element: cheerio.Cheerio): string[] {
    const features: string[] = [];
    
    // Look for feature lists
    element.find('ul li, .feature, .benefit, .include').each((_, featureEl) => {
      const feature = $(featureEl).text().trim();
      if (feature && feature.length < 100) {
        features.push(feature);
      }
    });

    return features.slice(0, 5); // Limit to 5 features
  }

  private extractBindingPeriod($: cheerio.CheerioAPI, element: cheerio.Cheerio): number {
    const bindingText = this.extractText($, element, [
      '.binding',
      '.contract',
      '*[class*="binding"]',
      '*[class*="contract"]'
    ]);

    const match = bindingText.match(/(\d+)\s*(?:mån|månader|month)/i);
    return match ? parseInt(match[1]) : 0;
  }

  private checkIncludes($: cheerio.CheerioAPI, element: cheerio.Cheerio, keywords: string[]): boolean {
    const text = element.text().toLowerCase();
    return keywords.some(keyword => text.includes(keyword));
  }

  private extractEmailAccounts($: cheerio.CheerioAPI, element: cheerio.Cheerio): number {
    const text = element.text();
    const match = text.match(/(\d+)\s*(?:e-?post|email)/i);
    return match ? parseInt(match[1]) : 1;
  }

  private guessTechnology(provider: string, speed: number): 'fiber' | 'cable' | 'dsl' | '5g' {
    const providerLower = provider.toLowerCase();
    
    if (speed >= 1000) return 'fiber';
    if (providerLower.includes('comhem') || providerLower.includes('boxer')) return 'cable';
    if (providerLower.includes('tele2') && speed < 100) return 'dsl';
    if (speed >= 250) return 'fiber';
    return 'cable';
  }

  private cleanText(text: string): string {
    return text.replace(/\s+/g, ' ').trim();
  }

  private extractFallbackPackages($: cheerio.CheerioAPI, address: string): ScrapedPackage[] {
    // If structured parsing fails, create basic packages from any price/speed info found
    const packages: ScrapedPackage[] = [];
    
    // Look for any pricing information on the page
    $('*').each((_, element) => {
      const text = $(element).text();
      const priceMatch = text.match(/(\d+)\s*kr.*?(?:mån|month)/i);
      const speedMatch = text.match(/(\d+)\s*(?:mbit|mbps)/i);
      
      if (priceMatch && speedMatch && packages.length < 3) {
        packages.push({
          id: `fallback-${packages.length}`,
          providerName: 'Leverantör',
          name: `Bredband ${speedMatch[1]} Mbit/s`,
          speed: {
            download: parseInt(speedMatch[1]),
            upload: parseInt(speedMatch[1]),
          },
          pricing: {
            monthly: parseInt(priceMatch[1]),
            setupFee: 0,
          },
          contract: {
            bindingPeriod: 0,
            noticePeriod: 1,
          },
          includes: {
            router: false,
            publicIP: false,
            emailAccounts: 1,
          },
          features: ['Bredband'],
          availability: {
            address,
            available: true,
            technology: 'fiber',
          },
        });
      }
    });

    return packages;
  }

  // Method to get fresh data and cache it
  async getFreshPackageData(address: string, maxAge: number = 3600000): Promise<ScrapedPackage[]> {
    const cacheKey = `packages_${address.replace(/\s+/g, '_')}`;
    const cached = this.getFromCache(cacheKey);
    
    if (cached && Date.now() - cached.timestamp < maxAge) {
      console.log('📦 Using cached package data');
      return cached.data;
    }

    const freshData = await this.scrapePackagesForAddress(address);
    this.saveToCache(cacheKey, freshData);
    
    return freshData;
  }

  private getFromCache(key: string): { data: ScrapedPackage[]; timestamp: number } | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const cached = localStorage.getItem(`scraper_${key}`);
      return cached ? JSON.parse(cached) : null;
    } catch {
      return null;
    }
  }

  private saveToCache(key: string, data: ScrapedPackage[]): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(`scraper_${key}`, JSON.stringify({
        data,
        timestamp: Date.now(),
      }));
    } catch (error) {
      console.warn('Failed to cache scraped data:', error);
    }
  }
}

// Export singleton instance
export const bredbandsvalScraper = new BredbandsvalScraper();
