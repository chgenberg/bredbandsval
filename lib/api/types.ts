// API Types that match what real provider APIs would return

export interface AddressLookupResult {
  address: string;
  streetAddress: string;
  postalCode: string;
  city: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  availableProviders: string[];
  fiberAvailable: boolean;
  cableAvailable: boolean;
  maxSpeed: number;
}

export interface ProviderPackage {
  id: string;
  providerId: string;
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
    routerFee?: number;
  };
  contract: {
    bindingPeriod: number; // months
    noticePeriod: number; // months
    autoRenewal: boolean;
  };
  includes: {
    router: boolean;
    publicIP: boolean;
    emailAccounts: number;
    antiVirus: boolean;
    cloudStorage?: number; // GB
  };
  tv?: {
    channels: string[];
    channelPackages: string[];
    recordingHours?: number;
    simultaneousStreams: number;
  };
  streaming?: {
    included: string[];
    discounted: Array<{
      service: string;
      normalPrice: number;
      discountedPrice: number;
    }>;
  };
  availability: {
    address: string;
    available: boolean;
    installationTime: string;
    technology: 'fiber' | 'cable' | 'dsl' | '5g';
  };
}

export interface StreamingService {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice?: number;
  content: {
    movies: boolean;
    series: boolean;
    sports: string[];
    kids: boolean;
    documentaries: boolean;
  };
  devices: number;
  offlineDownloads: boolean;
  quality: '4K' | 'HD' | 'SD';
}

export interface UserPreferences {
  address: AddressLookupResult;
  household: {
    size: number;
    workFromHome: number;
    students: number;
  };
  usage: {
    streaming: 'heavy' | 'moderate' | 'light';
    gaming: boolean;
    videoConferencing: boolean;
    smartHome: boolean;
    devicesCount: number;
  };
  preferences: {
    maxBudget?: number;
    contractLength: 'none' | 'short' | 'long';
    includeRouter: boolean | null;
    tvChannels: string[];
    streamingServices: string[];
    sports: string[];
  };
  currentServices?: {
    provider?: string;
    speed?: number;
    monthlyPrice?: number;
    streamingServices: string[];
  };
}

export interface Recommendation {
  package: ProviderPackage;
  score: number;
  reasons: string[];
  savings: {
    monthly: number;
    yearly: number;
    streaming: number;
    vsCurrentProvider?: number;
  };
  pros: string[];
  cons: string[];
}
