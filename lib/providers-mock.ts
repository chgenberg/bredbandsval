export interface Provider {
  name: string;
  packages: Package[];
}

export interface Package {
  id: string;
  name: string;
  speed: number;
  price: number;
  bindingTime: number;
  includesRouter: boolean;
  tvChannels: string[];
  streamingServices: string[];
  sports: string[];
  features: string[];
}

export const mockProviders: Provider[] = [
  {
    name: 'Telia',
    packages: [
      {
        id: 'telia-100',
        name: 'Telia Bredband 100',
        speed: 100,
        price: 299,
        bindingTime: 0,
        includesRouter: true,
        tvChannels: [],
        streamingServices: [],
        sports: [],
        features: ['Wifi-router ingår', 'Ingen bindningstid', 'Säker surf'],
      },
      {
        id: 'telia-250-tv',
        name: 'Telia Bredband 250 + TV Lagom',
        speed: 250,
        price: 599,
        bindingTime: 24,
        includesRouter: true,
        tvChannels: ['SVT1', 'SVT2', 'TV3', 'TV4', 'Kanal 5'],
        streamingServices: ['C More', 'TV4 Play'],
        sports: ['Allsvenskan', 'Champions League'],
        features: ['Wifi 6 router', '24 mån bindning', 'TV-box ingår'],
      },
      {
        id: 'telia-500-stream',
        name: 'Telia Bredband 500 + Streaming',
        speed: 500,
        price: 799,
        bindingTime: 12,
        includesRouter: true,
        tvChannels: [],
        streamingServices: ['Netflix', 'HBO Max', 'Disney+'],
        sports: [],
        features: ['Premium router', 'Streaming-paket', '3 mån gratis'],
      },
    ],
  },
  {
    name: 'Comhem',
    packages: [
      {
        id: 'comhem-100',
        name: 'Comhem Bredband 100',
        speed: 100,
        price: 349,
        bindingTime: 3,
        includesRouter: false,
        tvChannels: [],
        streamingServices: [],
        sports: [],
        features: ['Stabilt kabelbredband', 'Kort bindningstid'],
      },
      {
        id: 'comhem-250-tv',
        name: 'Comhem 250 + TV Medium',
        speed: 250,
        price: 649,
        bindingTime: 12,
        includesRouter: true,
        tvChannels: ['SVT', 'TV4', 'Discovery-kanaler', 'Viasat-kanaler'],
        streamingServices: ['Comhem Play+'],
        sports: ['Premier League', 'NHL'],
        features: ['Smart TV-box', 'Play+ ingår', 'Inspelning'],
      },
    ],
  },
  {
    name: 'Bahnhof',
    packages: [
      {
        id: 'bahnhof-100',
        name: 'Bahnhof 100/100',
        speed: 100,
        price: 298,
        bindingTime: 0,
        includesRouter: false,
        tvChannels: [],
        streamingServices: [],
        sports: [],
        features: ['Symmetrisk hastighet', 'Ingen bindning', 'Integritetsfokus'],
      },
      {
        id: 'bahnhof-1000',
        name: 'Bahnhof 1000/1000',
        speed: 1000,
        price: 498,
        bindingTime: 0,
        includesRouter: false,
        tvChannels: [],
        streamingServices: [],
        sports: [],
        features: ['1 Gbit/s', 'Perfekt för gaming', 'Låg latens'],
      },
    ],
  },
  {
    name: 'Boxer',
    packages: [
      {
        id: 'boxer-stream',
        name: 'Boxer Stream & Surf',
        speed: 250,
        price: 699,
        bindingTime: 12,
        includesRouter: true,
        tvChannels: ['Alla baskanaler'],
        streamingServices: ['Boxer Play', 'Netflix', 'Viaplay'],
        sports: ['Allsvenskan', 'Champions League', 'Premier League'],
        features: ['Allt-i-ett', 'Sport ingår', 'Flexibel TV'],
      },
    ],
  },
];

export function getRecommendations(profile: any, bandwidthNeed: number) {
  const allPackages = mockProviders.flatMap(provider => 
    provider.packages.map(pkg => ({ ...pkg, provider: provider.name }))
  );

  // Filtrera och poängsätt paket
  const scoredPackages = allPackages.map(pkg => {
    let score = 100;
    const reasons: string[] = [];

    // Hastighet
    if (pkg.speed >= bandwidthNeed) {
      score += 20;
      reasons.push(`Hastigheten ${pkg.speed} Mbit/s täcker era behov (${bandwidthNeed} Mbit/s)`);
    } else {
      score -= 30;
    }

    // Pris
    if (pkg.price < 400) {
      score += 15;
      reasons.push('Prisvärt alternativ');
    } else if (pkg.price > 700) {
      score -= 10;
    }

    // Bindningstid
    if (profile.contractPreference === 'short' && pkg.bindingTime <= 3) {
      score += 15;
      reasons.push('Kort bindningstid som önskat');
    } else if (profile.contractPreference === 'long' && pkg.bindingTime >= 12) {
      score += 10;
      reasons.push('Längre bindningstid ger ofta bättre pris');
    }

    // Router
    if (profile.includeRouter && pkg.includesRouter) {
      score += 10;
      reasons.push('Router ingår');
    }

    // Streaming services match
    const matchingServices = pkg.streamingServices.filter(service => 
      profile.streamingServices?.includes(service)
    );
    if (matchingServices.length > 0) {
      score += matchingServices.length * 15;
      reasons.push(`Inkluderar ${matchingServices.join(', ')}`);
    }

    // Sports match
    const matchingSports = pkg.sports.filter(sport => 
      profile.sports?.includes(sport)
    );
    if (matchingSports.length > 0) {
      score += matchingSports.length * 20;
      reasons.push(`Kan se ${matchingSports.join(', ')}`);
    }

    // Beräkna potentiell besparing
    let savings = 0;
    if (profile.currentStreamingServices?.length > 0) {
      const streamingCosts: Record<string, number> = {
        'Netflix': 109,
        'HBO Max': 109,
        'Disney+': 99,
        'Viaplay': 449,
        'Prime Video': 59,
      };
      
      savings = matchingServices.reduce((total, service) => 
        total + (streamingCosts[service] || 0), 0
      );
    }

    return {
      ...pkg,
      matchScore: score,
      reasoning: reasons.join('. '),
      savings,
    };
  });

  // Sortera och returnera top 3
  return scoredPackages
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);
}
