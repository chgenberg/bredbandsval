// Profilbaserad behovsmodell för att beräkna kundens faktiska bredbandsbehov

export type StreamingLevel = 'light' | 'moderate' | 'heavy';
export type VideoMeetingFrequency = 'none' | 'sometimes' | 'daily';
export type HousingType = 'apartment' | 'house' | 'multi-floor';

export interface UserSignals {
  householdSize: number;
  streamingLevel: StreamingLevel;
  onlineGaming: boolean;
  videoMeetings: VideoMeetingFrequency;
  smartDevices: number;
  housingType?: HousingType;
  workFromHome: boolean;
  streamingServicesCount: number;
  tvPreference?: string;
}

export interface NetworkNeeds {
  requiredDownloadMbps: number;
  requiredUploadMbps: number;
  latencyTargetMs: number;
  recommendedTier: 100 | 250 | 500 | 1000;
  routerClass: 'basic' | 'wifi6' | 'wifi6_mesh';
  meshNeeded: boolean;
  failoverNeeded: boolean;
  priorityFeatures: string[];
}

// Leverantörsbetyg (support/nöjdhet 1-5)
const PROVIDER_RATINGS: Record<string, { support: number; reliability: number; value: number }> = {
  'Telia': { support: 3.8, reliability: 4.2, value: 3.5 },
  'Telenor': { support: 3.6, reliability: 4.0, value: 3.7 },
  'Tele2': { support: 3.4, reliability: 3.8, value: 4.0 },
  'Bahnhof': { support: 4.3, reliability: 4.1, value: 3.9 },
  'Comhem': { support: 3.2, reliability: 3.9, value: 3.8 },
  'Bredband2': { support: 3.9, reliability: 3.7, value: 4.2 },
  'Boxer': { support: 3.5, reliability: 3.6, value: 3.9 },
  'Fibio': { support: 4.0, reliability: 3.8, value: 4.1 },
  'Halebop': { support: 3.3, reliability: 3.5, value: 4.3 },
  'Tre': { support: 3.1, reliability: 3.4, value: 4.0 }
};

export function computeNeeds(signals: UserSignals): NetworkNeeds {
  // Baslinjer
  let downloadMbps = 25;
  let uploadMbps = 5;
  let latencyMs = 40;
  const priorityFeatures: string[] = [];

  // Hushållsstorlek - mer personer = mer samtidig användning
  const extraPersons = Math.max(0, signals.householdSize - 1);
  downloadMbps += extraPersons * 15;
  uploadMbps += extraPersons * 2;

  // Streaming-behov
  switch (signals.streamingLevel) {
    case 'light':
      downloadMbps += 10;
      break;
    case 'moderate':
      downloadMbps += 35;
      priorityFeatures.push('HD-streaming');
      break;
    case 'heavy':
      downloadMbps += 75;
      priorityFeatures.push('4K-streaming');
      break;
  }

  // Simultanitet baserat på hushåll och streaming
  const simultaneousStreams = signals.streamingLevel === 'heavy' 
    ? Math.ceil(signals.householdSize * 0.7)
    : Math.ceil(signals.householdSize * 0.4);
  
  if (simultaneousStreams > 1) {
    downloadMbps += (simultaneousStreams - 1) * 25;
  }

  // Videomöten
  switch (signals.videoMeetings) {
    case 'sometimes':
      downloadMbps += 10;
      uploadMbps = Math.max(uploadMbps, 10);
      break;
    case 'daily':
      downloadMbps += 25;
      uploadMbps = Math.max(uploadMbps, 25);
      latencyMs = Math.min(latencyMs, 25);
      priorityFeatures.push('Videomöten');
      break;
  }

  // Gaming - kräver låg latens och stabil uppkoppling
  if (signals.onlineGaming) {
    downloadMbps += 15;
    uploadMbps = Math.max(uploadMbps, 10);
    latencyMs = Math.min(latencyMs, 20);
    priorityFeatures.push('Gaming');
  }

  // Smart home enheter
  if (signals.smartDevices > 10) {
    downloadMbps += 10;
    uploadMbps += 5;
  }
  if (signals.smartDevices > 20) {
    downloadMbps += 20;
    uploadMbps += 10;
    priorityFeatures.push('Smart home');
  }

  // Hemarbete
  if (signals.workFromHome) {
    downloadMbps += 20;
    uploadMbps = Math.max(uploadMbps, 15);
    priorityFeatures.push('Hemarbete');
  }

  // Många streamingtjänster = mer simultant
  if (signals.streamingServicesCount >= 4) {
    downloadMbps += 30;
    priorityFeatures.push('Multi-streaming');
  }

  // Bestäm hastighetsnivå
  let recommendedTier: 100 | 250 | 500 | 1000;
  if (downloadMbps >= 400) {
    recommendedTier = 1000;
  } else if (downloadMbps >= 200) {
    recommendedTier = 500;
  } else if (downloadMbps >= 80) {
    recommendedTier = 250;
  } else {
    recommendedTier = 100;
  }

  // Router och mesh-behov
  const needsMesh = signals.housingType === 'multi-floor' || 
                    signals.housingType === 'house' ||
                    signals.householdSize >= 4 ||
                    signals.smartDevices > 15;

  const routerClass = needsMesh ? 'wifi6_mesh' : 
                      (downloadMbps >= 250 || signals.smartDevices > 10) ? 'wifi6' : 
                      'basic';

  // Failover behövs för kritiska användare
  const failoverNeeded = signals.videoMeetings === 'daily' || 
                         signals.workFromHome ||
                         (signals.onlineGaming && signals.householdSize >= 3);

  return {
    requiredDownloadMbps: Math.round(downloadMbps),
    requiredUploadMbps: Math.round(uploadMbps),
    latencyTargetMs: latencyMs,
    recommendedTier,
    routerClass,
    meshNeeded: needsMesh,
    failoverNeeded,
    priorityFeatures
  };
}

// Scoring-funktion för att matcha paket mot behov
export function scorePackageMatch(
  packageInfo: any,
  needs: NetworkNeeds
): { score: number; reasons: string[]; badges: string[]; trustScore: number } {
  let score = 100;
  const reasons: string[] = [];
  const badges: string[] = [];
  
  // Leverantörsbetyg
  const providerRating = PROVIDER_RATINGS[packageInfo.providerName] || 
    { support: 3.5, reliability: 3.5, value: 3.5 };
  const trustScore = Math.round(((providerRating.support + providerRating.reliability + providerRating.value) / 3) * 20); // 0-100
  score += (trustScore - 70) * 0.3; // Justera för förtroende

  // Hastighetsmatching med badges
  const speedRatio = packageInfo.speed.download / needs.recommendedTier;
  if (speedRatio >= 0.8 && speedRatio <= 1.5) {
    score += 20;
    badges.push('Perfekt hastighet');
    reasons.push('Exakt rätt hastighet för dina behov');
  } else if (speedRatio < 0.8) {
    score -= 30;
    badges.push('Kan vara långsamt');
    reasons.push('Hastigheten kan vara för låg vid hög användning');
  } else if (speedRatio > 2) {
    score -= 10;
    badges.push('Överkapacitet');
    reasons.push('Högre hastighet än nödvändigt');
  } else {
    badges.push('Bra hastighet');
  }

  // Upload-hastighet
  if (packageInfo.speed.upload >= needs.requiredUploadMbps) {
    score += 10;
    if (needs.requiredUploadMbps >= 20) {
      badges.push('Hög uppladdning');
      reasons.push('Utmärkt för videomöten och fildelning');
    }
  } else {
    score -= 20;
    badges.push('Låg uppladdning');
    reasons.push('Uppladdningshastigheten kan begränsa videomöten');
  }

  // Router inkluderad
  if (needs.meshNeeded && packageInfo.features?.includes('mesh')) {
    score += 15;
    badges.push('Mesh ingår');
    reasons.push('Mesh-system för hela hemmet ingår');
  } else if (packageInfo.includesRouter || packageInfo.features?.includes('router')) {
    score += 5;
    badges.push('Router ingår');
  }

  // Pris-värde analys
  if (packageInfo.pricing?.monthly) {
    const pricePerMbit = packageInfo.pricing.monthly / packageInfo.speed.download;
    if (pricePerMbit < 1.5) {
      score += 15;
      badges.push('Bäst värde');
      reasons.push('Utmärkt pris per Mbit/s');
    } else if (pricePerMbit > 3) {
      score -= 10;
      badges.push('Dyrt');
      reasons.push('Högt pris i förhållande till hastigheten');
    }
  }

  // Kontraktslängd
  if (packageInfo.contractLength === 0) {
    score += 5;
    badges.push('Ingen bindning');
  } else if (packageInfo.contractLength >= 24) {
    score -= 5;
    badges.push('Lång bindning');
  }

  // Gaming-optimering
  if (needs.priorityFeatures.includes('Gaming')) {
    if (packageInfo.features?.some(f => f.toLowerCase().includes('gaming') || f.toLowerCase().includes('latens'))) {
      score += 10;
      badges.push('Gaming-optimerad');
    }
  }

  // Streaming-optimering
  if (needs.priorityFeatures.includes('4K-streaming')) {
    if (packageInfo.speed.download >= 100) {
      badges.push('4K-redo');
    }
  }

  // Support-betyg badge
  if (providerRating.support >= 4.0) {
    badges.push('Bra support');
  } else if (providerRating.support <= 3.2) {
    badges.push('Svag support');
  }

  return { 
    score: Math.max(0, Math.min(100, score)), 
    reasons: reasons.slice(0, 3), // Max 3 reasons
    badges: badges.slice(0, 4), // Max 4 badges
    trustScore 
  };
}
