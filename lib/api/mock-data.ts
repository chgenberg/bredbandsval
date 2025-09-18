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
    // Telenor packages
    {
      id: 'telenor-100-basic',
      providerId: 'telenor',
      providerName: 'Telenor',
      name: 'Bredband 100',
      speed: { download: 100, upload: 100 },
      pricing: {
        monthly: 329,
        setupFee: 0,
        campaign: {
          monthlyPrice: 249,
          months: 6,
          description: 'Halvt pris i 6 månader',
        },
      },
      contract: {
        bindingPeriod: 12,
        noticePeriod: 1,
        autoRenewal: true,
      },
      includes: {
        router: true,
        publicIP: false,
        emailAccounts: 3,
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
      id: 'telenor-tv-sport',
      providerId: 'telenor',
      providerName: 'Telenor',
      name: 'TV Sport + Film',
      speed: { download: 0, upload: 0 }, // TV-only package
      pricing: {
        monthly: 459,
        setupFee: 99,
      },
      contract: {
        bindingPeriod: 12,
        noticePeriod: 3,
        autoRenewal: true,
      },
      tv: {
        channels: ['40+ kanaler', 'Allsvenskan', 'Premier League', 'Champions League'],
        channelPackages: ['Sport', 'Film', 'Dokumentär'],
        recordingHours: 150,
        simultaneousStreams: 3,
      },
      streaming: {
        included: ['Viaplay Sport', 'C More Sport'],
        discounted: [],
      },
      availability: {
        address,
        available: true,
        installationTime: '5-7 dagar',
        technology: 'streaming',
      },
    },
    // Bredband2 packages
    {
      id: 'bredband2-250-value',
      providerId: 'bredband2',
      providerName: 'Bredband2',
      name: 'Värde 250',
      speed: { download: 250, upload: 250 },
      pricing: {
        monthly: 349,
        setupFee: 0,
      },
      contract: {
        bindingPeriod: 0,
        noticePeriod: 1,
        autoRenewal: false,
      },
      includes: {
        router: true,
        publicIP: true,
        emailAccounts: 5,
        antiVirus: false,
      },
      availability: {
        address,
        available: true,
        installationTime: '2-3 veckor',
        technology: 'fiber',
      },
    },
    // Combination packages
    {
      id: 'combo-telia-telenor',
      providerId: 'combo',
      providerName: 'Telia + Telenor',
      name: 'Bredband från Telia + TV från Telenor',
      speed: { download: 250, upload: 250 },
      pricing: {
        monthly: 758, // 329 + 459 - 30 (combo discount)
        setupFee: 99,
        campaign: {
          monthlyPrice: 628,
          months: 3,
          description: 'Kombinationsrabatt första 3 månaderna',
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
        emailAccounts: 5,
        antiVirus: false,
      },
      tv: {
        channels: ['40+ kanaler', 'Sport', 'Film'],
        channelPackages: ['Sport', 'Film'],
        recordingHours: 150,
        simultaneousStreams: 3,
      },
      streaming: {
        included: ['Viaplay Sport'],
        discounted: [],
      },
      availability: {
        address,
        available: true,
        installationTime: '2-3 veckor',
        technology: 'combo',
      },
      isCombo: true,
      comboDetails: {
        broadbandProvider: 'Telia',
        tvProvider: 'Telenor',
        savings: 30,
      },
    },
    {
      id: 'combo-bahnhof-boxer',
      providerId: 'combo',
      providerName: 'Bahnhof + Boxer',
      name: 'Bredband från Bahnhof + TV från Boxer',
      speed: { download: 250, upload: 250 },
      pricing: {
        monthly: 674, // 325 + 399 - 50 (combo discount)
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
      tv: {
        channels: ['50+ kanaler', 'Dokumentärer'],
        channelPackages: ['Bas', 'Dokumentär'],
        recordingHours: 100,
        simultaneousStreams: 2,
      },
      streaming: {
        included: ['Boxer Play'],
        discounted: [],
      },
      availability: {
        address,
        available: true,
        installationTime: '2-4 veckor',
        technology: 'combo',
      },
      isCombo: true,
      comboDetails: {
        broadbandProvider: 'Bahnhof',
        tvProvider: 'Boxer',
        savings: 50,
      },
    },
    // Tele2 packages
    {
      id: 'tele2-100-basic',
      providerId: 'tele2',
      providerName: 'Tele2',
      name: 'Bredband 100',
      speed: { download: 100, upload: 100 },
      pricing: {
        monthly: 349,
        setupFee: 0,
        campaign: {
          monthlyPrice: 299,
          months: 3,
          description: 'Kampanjpris första 3 månaderna',
        },
      },
      contract: {
        bindingPeriod: 12,
        noticePeriod: 1,
        autoRenewal: true,
      },
      includes: {
        router: true,
        publicIP: false,
        emailAccounts: 3,
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
      id: 'tele2-250-tv',
      providerId: 'tele2',
      providerName: 'Tele2',
      name: 'Bredband 250 + TV Silver',
      speed: { download: 250, upload: 100 },
      pricing: {
        monthly: 599,
        setupFee: 0,
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
        channels: ['SVT1', 'SVT2', 'TV3', 'TV4', 'Kanal 5', 'TV6', 'Sjuan', 'TV8', 'Kanal 9', 'Discovery Channel', 'National Geographic', 'History Channel'],
        channelPackages: ['Silver', 'Barn', 'Dokumentär'],
        recordingHours: 100,
        simultaneousStreams: 3,
      },
      streaming: {
        included: ['HBO Max'],
        discounted: [
          { service: 'Netflix', normalPrice: 109, discountedPrice: 89 },
        ],
      },
      availability: {
        address,
        available: true,
        installationTime: '1-2 veckor',
        technology: 'fiber',
      },
    },
    // Ownit packages
    {
      id: 'ownit-500-premium',
      providerId: 'ownit',
      providerName: 'Ownit',
      name: 'Bredband 500/500',
      speed: { download: 500, upload: 500 },
      pricing: {
        monthly: 399,
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
        emailAccounts: 5,
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
      id: 'ownit-1000-tv',
      providerId: 'ownit',
      providerName: 'Ownit',
      name: 'Bredband 1000 + TV Standard',
      speed: { download: 1000, upload: 1000 },
      pricing: {
        monthly: 749,
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
      tv: {
        channels: ['30+ kanaler', 'MTV', 'Comedy Central', 'Animal Planet'],
        channelPackages: ['Standard', 'Underhållning'],
        recordingHours: 50,
        simultaneousStreams: 2,
      },
      availability: {
        address,
        available: true,
        installationTime: '1-2 veckor',
        technology: 'fiber',
      },
    },
    // Sappa packages
    {
      id: 'sappa-100-lagom',
      providerId: 'sappa',
      providerName: 'Sappa',
      name: 'Bredband 100 + TV Lagom',
      speed: { download: 100, upload: 100 },
      pricing: {
        monthly: 429,
        setupFee: 0,
      },
      contract: {
        bindingPeriod: 0,
        noticePeriod: 1,
        autoRenewal: false,
      },
      includes: {
        router: true,
        publicIP: false,
        emailAccounts: 3,
        antiVirus: false,
      },
      tv: {
        channels: ['18 kanaler', 'SVT', 'TV4', 'Kanal 5'],
        channelPackages: ['Lagom'],
        recordingHours: 25,
        simultaneousStreams: 2,
      },
      streaming: {
        included: ['Sappa Play'],
        discounted: [],
      },
      availability: {
        address,
        available: true,
        installationTime: '1 vecka',
        technology: 'fiber',
      },
    },
    {
      id: 'sappa-250-plus',
      providerId: 'sappa',
      providerName: 'Sappa',
      name: 'Bredband 250 Plus',
      speed: { download: 250, upload: 100 },
      pricing: {
        monthly: 379,
        setupFee: 0,
      },
      contract: {
        bindingPeriod: 0,
        noticePeriod: 1,
        autoRenewal: false,
      },
      includes: {
        router: true,
        publicIP: true,
        emailAccounts: 5,
        antiVirus: false,
      },
      availability: {
        address,
        available: true,
        installationTime: '1 vecka',
        technology: 'fiber',
      },
    },
    // AllTele packages
    {
      id: 'alltele-100-smart',
      providerId: 'alltele',
      providerName: 'AllTele',
      name: 'Smart 100/100',
      speed: { download: 100, upload: 100 },
      pricing: {
        monthly: 295,
        setupFee: 0,
        campaign: {
          monthlyPrice: 195,
          months: 6,
          description: '100 kr rabatt i 6 månader',
        },
      },
      contract: {
        bindingPeriod: 12,
        noticePeriod: 1,
        autoRenewal: true,
      },
      includes: {
        router: true,
        publicIP: false,
        emailAccounts: 3,
        antiVirus: false,
      },
      availability: {
        address,
        available: true,
        installationTime: '5-7 dagar',
        technology: 'fiber',
      },
    },
    {
      id: 'alltele-250-family',
      providerId: 'alltele',
      providerName: 'AllTele',
      name: 'Family 250/250',
      speed: { download: 250, upload: 250 },
      pricing: {
        monthly: 395,
        setupFee: 0,
      },
      contract: {
        bindingPeriod: 12,
        noticePeriod: 1,
        autoRenewal: true,
      },
      includes: {
        router: true,
        publicIP: true,
        emailAccounts: 5,
        antiVirus: true,
      },
      availability: {
        address,
        available: true,
        installationTime: '5-7 dagar',
        technology: 'fiber',
      },
    },
    // IP-Only packages
    {
      id: 'iponly-100-basic',
      providerId: 'iponly',
      providerName: 'IP-Only',
      name: 'Bredband 100/100',
      speed: { download: 100, upload: 100 },
      pricing: {
        monthly: 279,
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
        emailAccounts: 1,
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
      id: 'iponly-500-pro',
      providerId: 'iponly',
      providerName: 'IP-Only',
      name: 'Pro 500/500',
      speed: { download: 500, upload: 500 },
      pricing: {
        monthly: 379,
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
        emailAccounts: 3,
        antiVirus: false,
      },
      availability: {
        address,
        available: true,
        installationTime: '1-2 veckor',
        technology: 'fiber',
      },
    },
    // TV-only packages
    {
      id: 'viaplay-total-only',
      providerId: 'viaplay',
      providerName: 'Viaplay',
      name: 'Viaplay Total',
      speed: { download: 0, upload: 0 }, // Streaming only
      pricing: {
        monthly: 449,
        setupFee: 0,
      },
      contract: {
        bindingPeriod: 0,
        noticePeriod: 1,
        autoRenewal: true,
      },
      tv: {
        channels: ['Alla Viaplay-kanaler', 'Sport', 'Film', 'Serier'],
        channelPackages: ['Sport', 'Film & Serier', 'Barn'],
        recordingHours: 0, // Streaming only
        simultaneousStreams: 4,
      },
      streaming: {
        included: ['Viaplay Sport', 'Viaplay Film & Serier', 'Viaplay Barn'],
        discounted: [],
      },
      availability: {
        address,
        available: true,
        installationTime: 'Omgående',
        technology: 'streaming',
      },
    },
    {
      id: 'allente-tv-standard',
      providerId: 'allente',
      providerName: 'Allente',
      name: 'TV Standard',
      speed: { download: 0, upload: 0 },
      pricing: {
        monthly: 399,
        setupFee: 99,
      },
      contract: {
        bindingPeriod: 12,
        noticePeriod: 3,
        autoRenewal: true,
      },
      tv: {
        channels: ['30 kanaler', 'TV3', 'TV6', 'TV8', 'Kanal 5', 'Discovery Channel'],
        channelPackages: ['Standard', 'Underhållning'],
        recordingHours: 100,
        simultaneousStreams: 3,
      },
      streaming: {
        included: ['Viaplay Film & Serier'],
        discounted: [
          { service: 'Discovery+', normalPrice: 79, discountedPrice: 49 },
        ],
      },
      availability: {
        address,
        available: true,
        installationTime: '1-2 veckor',
        technology: 'streaming',
      },
    },
    {
      id: 'cmore-sport-only',
      providerId: 'cmore',
      providerName: 'C More',
      name: 'C More Sport',
      speed: { download: 0, upload: 0 },
      pricing: {
        monthly: 399,
        setupFee: 0,
      },
      contract: {
        bindingPeriod: 0,
        noticePeriod: 1,
        autoRenewal: true,
      },
      tv: {
        channels: ['Champions League', 'Europa League', 'SHL', 'Bundesliga'],
        channelPackages: ['Sport'],
        recordingHours: 0,
        simultaneousStreams: 2,
      },
      streaming: {
        included: ['C More Sport', 'C More Hits'],
        discounted: [],
      },
      availability: {
        address,
        available: true,
        installationTime: 'Omgående',
        technology: 'streaming',
      },
    },
    {
      id: 'discovery-family-tv',
      providerId: 'discovery',
      providerName: 'Discovery',
      name: 'Family TV',
      speed: { download: 0, upload: 0 },
      pricing: {
        monthly: 149,
        setupFee: 0,
      },
      contract: {
        bindingPeriod: 0,
        noticePeriod: 1,
        autoRenewal: true,
      },
      tv: {
        channels: ['Discovery Channel', 'Animal Planet', 'TLC', 'Investigation Discovery', 'Discovery Science'],
        channelPackages: ['Dokumentär', 'Familj'],
        recordingHours: 0,
        simultaneousStreams: 4,
      },
      streaming: {
        included: ['Discovery+', 'Eurosport Player'],
        discounted: [],
      },
      availability: {
        address,
        available: true,
        installationTime: 'Omgående',
        technology: 'streaming',
      },
    },
    // More combination packages
    {
      id: 'combo-tele2-viaplay',
      providerId: 'combo',
      providerName: 'Tele2 + Viaplay',
      name: 'Bredband från Tele2 + Viaplay Total',
      speed: { download: 250, upload: 100 },
      pricing: {
        monthly: 748, // 349 + 449 - 50 (combo discount)
        setupFee: 0,
        campaign: {
          monthlyPrice: 648,
          months: 6,
          description: 'Kombinationsrabatt i 6 månader',
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
        emailAccounts: 3,
        antiVirus: false,
      },
      tv: {
        channels: ['Viaplay Sport', 'Viaplay Film & Serier'],
        channelPackages: ['Sport', 'Film', 'Serier'],
        recordingHours: 0,
        simultaneousStreams: 4,
      },
      streaming: {
        included: ['Viaplay Total'],
        discounted: [],
      },
      availability: {
        address,
        available: true,
        installationTime: '1-2 veckor',
        technology: 'combo',
      },
      isCombo: true,
      comboDetails: {
        broadbandProvider: 'Tele2',
        tvProvider: 'Viaplay',
        savings: 50,
      },
    },
    {
      id: 'combo-ownit-allente',
      providerId: 'combo',
      providerName: 'Ownit + Allente',
      name: 'Bredband från Ownit + TV från Allente',
      speed: { download: 500, upload: 500 },
      pricing: {
        monthly: 748, // 399 + 399 - 50 (combo discount)
        setupFee: 99,
      },
      contract: {
        bindingPeriod: 0,
        noticePeriod: 1,
        autoRenewal: false,
      },
      includes: {
        router: false,
        publicIP: true,
        emailAccounts: 5,
        antiVirus: false,
      },
      tv: {
        channels: ['30 kanaler', 'Viaplay Film & Serier'],
        channelPackages: ['Standard'],
        recordingHours: 100,
        simultaneousStreams: 3,
      },
      streaming: {
        included: ['Viaplay Film & Serier'],
        discounted: [
          { service: 'Discovery+', normalPrice: 79, discountedPrice: 49 },
        ],
      },
      availability: {
        address,
        available: true,
        installationTime: '2-3 veckor',
        technology: 'combo',
      },
      isCombo: true,
      comboDetails: {
        broadbandProvider: 'Ownit',
        tvProvider: 'Allente',
        savings: 50,
      },
    },
    {
      id: 'combo-alltele-cmore',
      providerId: 'combo',
      providerName: 'AllTele + C More',
      name: 'Bredband från AllTele + C More Sport',
      speed: { download: 250, upload: 250 },
      pricing: {
        monthly: 664, // 395 + 399 - 130 (combo discount)
        setupFee: 0,
        campaign: {
          monthlyPrice: 564,
          months: 3,
          description: 'Extra 100 kr rabatt första 3 månaderna',
        },
      },
      contract: {
        bindingPeriod: 12,
        noticePeriod: 1,
        autoRenewal: true,
      },
      includes: {
        router: true,
        publicIP: true,
        emailAccounts: 5,
        antiVirus: true,
      },
      tv: {
        channels: ['Champions League', 'Europa League', 'SHL', 'Bundesliga'],
        channelPackages: ['Sport'],
        recordingHours: 0,
        simultaneousStreams: 2,
      },
      streaming: {
        included: ['C More Sport', 'C More Hits'],
        discounted: [],
      },
      availability: {
        address,
        available: true,
        installationTime: '1 vecka',
        technology: 'combo',
      },
      isCombo: true,
      comboDetails: {
        broadbandProvider: 'AllTele',
        tvProvider: 'C More',
        savings: 130,
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
