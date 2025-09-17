export interface UserProfile {
  address?: string;
  householdSize?: number;
  streamingHeavy?: boolean;
  onlineGaming?: boolean;
  videoMeetings?: boolean;
  includeRouter?: boolean;
  contractPreference?: 'short' | 'long' | 'no-preference';
  
  // TV & Streaming
  tvChannels?: string[];
  streamingServices?: string[];
  sports?: string[];
  currentStreamingServices?: string[];
  
  // Calculated
  estimatedBandwidthNeed?: number;
  monthlyBudget?: number;
}

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'agent';
  timestamp: Date;
  options?: string[];
  quickReplies?: QuickReply[];
}

export interface QuickReply {
  text: string;
  value: string;
  icon?: string;
}

export interface Recommendation {
  provider: string;
  packageName: string;
  speed: number;
  price: number;
  bindingTime?: number;
  features: string[];
  savings?: number;
  matchScore: number;
  reasoning: string;
}

export type ConversationStep = 
  | 'welcome'
  | 'household-size'
  | 'usage-streaming'
  | 'usage-gaming'
  | 'usage-meetings'
  | 'router-preference'
  | 'contract-preference'
  | 'tv-channels'
  | 'streaming-services'
  | 'sports'
  | 'calculating'
  | 'recommendations';

export interface ConversationState {
  currentStep: ConversationStep;
  userProfile: UserProfile;
  messages: Message[];
  isTyping: boolean;
}
