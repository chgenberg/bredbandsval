import { AddressLookupResult, ProviderPackage, StreamingService } from './types';

// Mock address lookup - in production this would use Google Places API or similar
export function mockAddressLookup(address: string): Promise<AddressLookupResult> {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        address: address,
        streetAddress: address.split(',')[0] || address,
        postalCode: '12345',
        city: 'Stockholm',
        coordinates: {
          lat: 59.3293,
          lng: 18.0686,
        },
        availableProviders: ['Telia', 'Comhem', 'Bahnhof', 'Boxer', 'Telenor'],
        fiberAvailable: true,
        cableAvailable: true,
        maxSpeed: 1000,
      });
    }, 500);
  });
}

// Mock provider packages
export function mockProviderPackages(
  address: string,
  filters?: { minSpeed?: number; maxPrice?: number; providers?: string[] }
): Promise<ProviderPackage[]> {
  const allPackages: ProviderPackage[] = [
    // Telia packages
    {
      id: 'telia-100-basic',
      providerId: 'telia',
      providerName: 'Telia',
      name: 'Bredband 100',
      speed: { download: 100, upload: 100 },
      pricing: {
        monthly: 299,
        setupFee: 0,
        campaign: {
          monthlyPrice: 199,
          months: 3,
          description: 'Kampanjpris i 3 månader',
        },
      },
      contract: {
        bindingPeriod: 0,
        noticePeriod: 1,
        autoRenewal: true,
      },
      includes: {
        router: true,
        publicIP: false,
        emailAccounts: 5,
        antiVirus: true,
        cloudStorage: 100,
      },
      availability: {
        address,
        available: true,
        installationTime: '1-2 veckor',
        technology: 'fiber',
      },
    },
    {
      id: 'telia-250-tv',
      providerId: 'telia',
      providerName: 'Telia',
      name: 'Bredband 250 + TV Lagom',
      speed: { download: 250, upload: 250 },
      pricing: {
        monthly: 699,
        setupFee: 0,
      },
      contract: {
        bindingPeriod: 24,
        noticePeriod: 3,
        autoRenewal: true,
      },
      includes: {
        router: true,
        publicIP: true,
        emailAccounts: 10,
        antiVirus: true,
        cloudStorage: 500,
      },
      tv: {
        channels: ['SVT1', 'SVT2', 'TV3', 'TV4', 'Kanal 5', 'TV6', 'Sjuan', 'TV8', 'Kanal 9'],
        channelPackages: ['Bas', 'Sport', 'Film'],
        recordingHours: 100,
        simultaneousStreams: 3,
      },
      streaming: {
        included: ['C More', 'TV4 Play Premium'],
        discounted: [
          { service: 'Netflix', normalPrice: 109, discountedPrice: 89 },
          { service: 'HBO Max', normalPrice: 109, discountedPrice: 89 },
        ],
      },
      availability: {
        address,
        available: true,
        installationTime: '2-3 veckor',
        technology: 'fiber',
      },
    },
    {
      id: 'telia-1000-premium',
      providerId: 'telia',
      providerName: 'Telia',
      name: 'Bredband 1000 Premium',
      speed: { download: 1000, upload: 1000 },
      pricing: {
        monthly: 899,
        setupFee: 0,
        campaign: {
          monthlyPrice: 699,
          months: 6,
          description: '200 kr rabatt i 6 månader',
        },
      },
      contract: {
        bindingPeriod: 12,
        noticePeriod: 3,
        autoRenewal: true,
      },
      includes: {
        router: true,
        publicIP: true,
        emailAccounts: 20,
        antiVirus: true,
        cloudStorage: 1000,
      },
      streaming: {
        included: ['Netflix', 'HBO Max', 'C More'],
        discounted: [],
      },
      availability: {
        address,
        available: true,
        installationTime: '1-2 veckor',
        technology: 'fiber',
      },
    },
    // Comhem packages
    {
      id: 'comhem-100-flex',
      providerId: 'comhem',
      providerName: 'Comhem',
      name: 'Bredband 100 Flex',
      speed: { download: 100, upload: 10 },
      pricing: {
        monthly: 379,
        setupFee: 299,
      },
      contract: {
        bindingPeriod: 0,
        noticePeriod: 1,
        autoRenewal: true,
      },
      includes: {
        router: false,
        publicIP: false,
        emailAccounts: 1,
        antiVirus: false,
      },
      availability: {
        address,
        available: true,
        installationTime: '3-5 dagar',
        technology: 'cable',
      },
    },
    {
      id: 'comhem-500-combomax',
      providerId: 'comhem',
      providerName: 'Comhem',
      name: 'ComboMax 500',
      speed: { download: 500, upload: 50 },
      pricing: {
        monthly: 799,
        setupFee: 0,
      },
      contract: {
        bindingPeriod: 12,
        noticePeriod: 3,
        autoRenewal: true,
      },
      includes: {
        router: true,
        publicIP: true,
        emailAccounts: 5,
        antiVirus: true,
      },
      tv: {
        channels: ['50+ kanaler'],
        channelPackages: ['Silver', 'Film', 'Sport', 'Barn'],
        recordingHours: 200,
        simultaneousStreams: 4,
      },
      streaming: {
        included: ['Comhem Play+', 'Discovery+'],
        discounted: [
          { service: 'Viaplay', normalPrice: 449, discountedPrice: 349 },
        ],
      },
      availability: {
        address,
        available: true,
        installationTime: '1 vecka',
        technology: 'cable',
      },
    },
    // Bahnhof packages
    {
      id: 'bahnhof-100-privacy',
      providerId: 'bahnhof',
      providerName: 'Bahnhof',
      name: 'Integritet 100/100',
      speed: { download: 100, upload: 100 },
      pricing: {
        monthly: 325,
        setupFee: 0,
      },
      contract: {
        bindingPeriod: 0,
        noticePeriod: 1,
        autoRenewal: false,
      },
      includes: {
        router: false,
        publicIP: true,
        emailAccounts: 10,
        antiVirus: false,
      },
      availability: {
        address,
        available: true,
        installationTime: '1-2 veckor',
        technology: 'fiber',
      },
    },
    {
      id: 'bahnhof-1000-gaming',
      providerId: 'bahnhof',
      providerName: 'Bahnhof',
      name: 'Gaming 1000/1000',
      speed: { download: 1000, upload: 1000 },
      pricing: {
        monthly: 498,
        setupFee: 0,
      },
      contract: {
        bindingPeriod: 0,
        noticePeriod: 1,
        autoRenewal: false,
      },
      includes: {
        router: false,
        publicIP: true,
        emailAccounts: 10,
        antiVirus: false,
      },
      availability: {
        address,
        available: true,
        installationTime: '1-2 veckor',
        technology: 'fiber',
      },
    },
    // Boxer packages
    {
      id: 'boxer-total',
      providerId: 'boxer',
      providerName: 'Boxer',
      name: 'Boxer Total',
      speed: { download: 250, upload: 25 },
      pricing: {
        monthly: 849,
        setupFee: 0,
        campaign: {
          monthlyPrice: 649,
          months: 3,
          description: 'Prova-på-pris',
        },
      },
      contract: {
        bindingPeriod: 12,
        noticePeriod: 3,
        autoRenewal: true,
      },
      includes: {
        router: true,
        publicIP: false,
        emailAccounts: 5,
        antiVirus: true,
      },
      tv: {
        channels: ['60+ kanaler'],
        channelPackages: ['Flex', 'Sport', 'Film', 'Dokumentär'],
        recordingHours: 500,
        simultaneousStreams: 5,
      },
      streaming: {
        included: ['Boxer Play', 'Netflix', 'Viaplay Total'],
        discounted: [],
      },
      availability: {
        address,
        available: true,
        installationTime: '1-2 veckor',
        technology: 'fiber',
      },
    },
  ];

  // Apply filters
  let filtered = allPackages;
  
  if (filters?.minSpeed) {
    filtered = filtered.filter(pkg => pkg.speed.download >= filters.minSpeed!);
  }
  
  if (filters?.maxPrice) {
    filtered = filtered.filter(pkg => {
      const price = pkg.pricing.campaign?.monthlyPrice || pkg.pricing.monthly;
      return price <= filters.maxPrice!;
    });
  }
  
  if (filters?.providers && filters.providers.length > 0) {
    filtered = filtered.filter(pkg => filters.providers!.includes(pkg.providerName));
  }

  return Promise.resolve(filtered);
}

// Mock streaming services
export function mockStreamingServices(): Promise<StreamingService[]> {
  return Promise.resolve([
    {
      id: 'netflix',
      name: 'Netflix',
      monthlyPrice: 109,
      yearlyPrice: 1199,
      content: {
        movies: true,
        series: true,
        sports: [],
        kids: true,
        documentaries: true,
      },
      devices: 4,
      offlineDownloads: true,
      quality: '4K',
    },
    {
      id: 'hbo-max',
      name: 'HBO Max',
      monthlyPrice: 109,
      content: {
        movies: true,
        series: true,
        sports: [],
        kids: true,
        documentaries: true,
      },
      devices: 3,
      offlineDownloads: true,
      quality: '4K',
    },
    {
      id: 'disney-plus',
      name: 'Disney+',
      monthlyPrice: 99,
      yearlyPrice: 990,
      content: {
        movies: true,
        series: true,
        sports: [],
        kids: true,
        documentaries: true,
      },
      devices: 4,
      offlineDownloads: true,
      quality: '4K',
    },
    {
      id: 'viaplay',
      name: 'Viaplay Total',
      monthlyPrice: 449,
      content: {
        movies: true,
        series: true,
        sports: ['Allsvenskan', 'Premier League', 'NHL', 'NFL', 'Formel 1'],
        kids: true,
        documentaries: true,
      },
      devices: 5,
      offlineDownloads: true,
      quality: '4K',
    },
    {
      id: 'c-more',
      name: 'C More',
      monthlyPrice: 349,
      content: {
        movies: true,
        series: true,
        sports: ['Champions League', 'Europa League', 'SHL'],
        kids: false,
        documentaries: false,
      },
      devices: 2,
      offlineDownloads: false,
      quality: 'HD',
    },
    {
      id: 'discovery-plus',
      name: 'Discovery+',
      monthlyPrice: 79,
      content: {
        movies: false,
        series: true,
        sports: ['Eurosport'],
        kids: true,
        documentaries: true,
      },
      devices: 4,
      offlineDownloads: true,
      quality: 'HD',
    },
  ]);
}
