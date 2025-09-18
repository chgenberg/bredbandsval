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
): { score: number; reasons: string[] } {
  let score = 100;
  const reasons: string[] = [];

  // Hastighetsmatching
  const speedRatio = packageInfo.speed.download / needs.recommendedTier;
  if (speedRatio >= 0.8 && speedRatio <= 1.5) {
    score += 20;
    reasons.push('Perfekt hastighetsmatchning');
  } else if (speedRatio < 0.8) {
    score -= 30;
    reasons.push('Kan vara för långsamt');
  } else if (speedRatio > 2) {
    score -= 10;
    reasons.push('Överkapacitet');
  }

  // Upload-hastighet
  if (packageInfo.speed.upload >= needs.requiredUploadMbps) {
    score += 10;
    if (needs.requiredUploadMbps >= 20) {
      reasons.push('Bra uppladdningshastighet');
    }
  } else {
    score -= 20;
    reasons.push('Låg uppladdningshastighet');
  }

  // Router inkluderad
  if (needs.meshNeeded && packageInfo.features?.includes('mesh')) {
    score += 15;
    reasons.push('Mesh-router ingår');
  } else if (packageInfo.includesRouter) {
    score += 5;
  }

  // Pris (om tillgängligt)
  if (packageInfo.pricing?.monthly) {
    const pricePerMbit = packageInfo.pricing.monthly / packageInfo.speed.download;
    if (pricePerMbit < 1) {
      score += 10;
      reasons.push('Bra pris per Mbit');
    }
  }

  return { score: Math.max(0, Math.min(100, score)), reasons };
}
