// Smart pairing logic for combining broadband and TV packages

interface SmartPair {
  id: string;
  title: string;
  subtitle: string;
  broadband: {
    provider: string;
    package: string;
    speed: number;
    price: number;
    features: string[];
  };
  tv: {
    provider: string;
    package: string;
    price: number;
    features: string[];
  };
  totalPrice: number;
  savings: number; // vs average market price
  reasoning: string;
  type: 'primary' | 'budget' | 'premium';
}

export function generateSmartPairs(
  broadbandPackages: any[],
  tvPackages: any[],
  userProfile: any
): SmartPair[] {
  console.log('🔍 generateSmartPairs input:', {
    broadbandPackages: broadbandPackages.length,
    tvPackages: tvPackages.length,
    broadbandSample: broadbandPackages[0],
    tvSample: tvPackages[0]
  });

  // Filter to get best broadband and TV options
  const topBroadband = broadbandPackages
    .filter(pkg => {
      const hasSpeed = (pkg.package?.speed?.download || pkg.speed?.download || 0) > 0;
      const noTV = !pkg.package?.tv && !pkg.tv;
      console.log('BB filter:', pkg.package?.providerName || pkg.providerName, 'hasSpeed:', hasSpeed, 'noTV:', noTV);
      return hasSpeed && noTV;
    })
    .sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0))
    .slice(0, 5);
    
  const topTV = tvPackages
    .filter(pkg => {
      const hasTV = !!(pkg.package?.tv || pkg.tv);
      const isStreamingOrCombo = (pkg.package?.speed?.download || pkg.speed?.download || 0) === 0 || pkg.package?.isCombo || pkg.isCombo;
      console.log('TV filter:', pkg.package?.providerName || pkg.providerName, 'hasTV:', hasTV, 'isStreamingOrCombo:', isStreamingOrCombo);
      return hasTV;
    })
    .sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0))
    .slice(0, 5);

  console.log('🎯 Filtered results:', {
    topBroadband: topBroadband.length,
    topTV: topTV.length
  });

  const pairs: SmartPair[] = [];

  // Primary recommendation - best overall match
  if (topBroadband[0] && topTV[0]) {
    const broadband = topBroadband[0];
    const tv = topTV[0];
    const bbPrice = broadband.package.pricing.campaign?.monthlyPrice || broadband.package.pricing.monthly;
    const tvPrice = tv.package.pricing.campaign?.monthlyPrice || tv.package.pricing.monthly;
    const total = bbPrice + tvPrice;
    
    pairs.push({
      id: 'primary',
      title: 'Valle AI:s rekommendation',
      subtitle: 'Bästa matchningen för dina behov',
      broadband: {
        provider: broadband.package.providerName,
        package: broadband.package.name,
        speed: broadband.package.speed.download,
        price: bbPrice,
        features: broadband.package.features || [],
      },
      tv: {
        provider: tv.package.providerName,
        package: tv.package.name,
        price: tvPrice,
        features: tv.package.tv?.channelPackages || [],
      },
      totalPrice: total,
      savings: 0, // Reference point
      reasoning: generatePrimaryReasoning(broadband, tv, userProfile),
      type: 'primary',
    });
  }

  // Budget alternative - cheapest combination
  const budgetBroadband = topBroadband.find(pkg => {
    const price = pkg.package.pricing.campaign?.monthlyPrice || pkg.package.pricing.monthly;
    return price < 350;
  }) || topBroadband[topBroadband.length - 1];
  
  const budgetTV = topTV.find(pkg => {
    const price = pkg.package.pricing.campaign?.monthlyPrice || pkg.package.pricing.monthly;
    return price < 300;
  }) || topTV[topTV.length - 1];

  if (budgetBroadband && budgetTV) {
    const bbPrice = budgetBroadband.package.pricing.campaign?.monthlyPrice || budgetBroadband.package.pricing.monthly;
    const tvPrice = budgetTV.package.pricing.campaign?.monthlyPrice || budgetTV.package.pricing.monthly;
    const total = bbPrice + tvPrice;
    const savings = pairs[0] ? total - pairs[0].totalPrice : 0;
    
    pairs.push({
      id: 'budget',
      title: 'Budgetalternativ',
      subtitle: 'Bästa värdet för pengarna',
      broadband: {
        provider: budgetBroadband.package.providerName,
        package: budgetBroadband.package.name,
        speed: budgetBroadband.package.speed.download,
        price: bbPrice,
        features: budgetBroadband.package.features || [],
      },
      tv: {
        provider: budgetTV.package.providerName,
        package: budgetTV.package.name,
        price: tvPrice,
        features: budgetTV.package.tv?.channelPackages || [],
      },
      totalPrice: total,
      savings,
      reasoning: generateBudgetReasoning(budgetBroadband, budgetTV, savings),
      type: 'budget',
    });
  }

  // Premium alternative - best performance/features
  const premiumBroadband = topBroadband.find(pkg => pkg.package.speed.download >= 500) || topBroadband[0];
  const premiumTV = topTV.find(pkg => {
    const channels = pkg.package.tv?.channels || [];
    return channels.some(ch => ch.toLowerCase().includes('sport') || ch.toLowerCase().includes('premium'));
  }) || topTV[0];

  if (premiumBroadband && premiumTV && premiumBroadband.package.id !== pairs[0]?.broadband.provider) {
    const bbPrice = premiumBroadband.package.pricing.campaign?.monthlyPrice || premiumBroadband.package.pricing.monthly;
    const tvPrice = premiumTV.package.pricing.campaign?.monthlyPrice || premiumTV.package.pricing.monthly;
    const total = bbPrice + tvPrice;
    const savings = pairs[0] ? total - pairs[0].totalPrice : 0;
    
    pairs.push({
      id: 'premium',
      title: 'Premiumalternativ',
      subtitle: 'Bästa prestanda och funktioner',
      broadband: {
        provider: premiumBroadband.package.providerName,
        package: premiumBroadband.package.name,
        speed: premiumBroadband.package.speed.download,
        price: bbPrice,
        features: premiumBroadband.package.features || [],
      },
      tv: {
        provider: premiumTV.package.providerName,
        package: premiumTV.package.name,
        price: tvPrice,
        features: premiumTV.package.tv?.channelPackages || [],
      },
      totalPrice: total,
      savings,
      reasoning: generatePremiumReasoning(premiumBroadband, premiumTV, savings),
      type: 'premium',
    });
  }

  return pairs.slice(0, 3);
}

function generatePrimaryReasoning(broadband: any, tv: any, userProfile: any): string {
  const speed = broadband.package.speed.download;
  const gaming = userProfile.onlineGaming ? 'gaming och ' : '';
  const streaming = userProfile.streamingLevel === 'heavy' ? 'mycket streaming' : 'streaming';
  
  return `Perfekt för ${gaming}${streaming} i ditt ${userProfile.householdSize || '2'}-personshushåll med ${speed} Mbit/s`;
}

function generateBudgetReasoning(broadband: any, tv: any, savings: number): string {
  const monthlySavings = Math.abs(savings);
  const yearlySavings = monthlySavings * 12;
  
  return `Sparar ${monthlySavings} kr/mån (${yearlySavings} kr/år) utan att kompromissa med grundläggande behov`;
}

function generatePremiumReasoning(broadband: any, tv: any, savings: number): string {
  const speed = broadband.package.speed.download;
  const extraCost = savings;
  
  return `${speed} Mbit/s och premium-kanaler för ${extraCost} kr/mån extra - värt det för bästa upplevelsen`;
}
