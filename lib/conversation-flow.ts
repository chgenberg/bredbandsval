import { ConversationStep, UserProfile, QuickReply } from '@/types';

export const conversationFlow: Record<ConversationStep, {
  getMessage: (profile: UserProfile) => string;
  getQuickReplies?: () => QuickReply[];
  processInput: (input: string, profile: UserProfile) => Partial<UserProfile>;
  nextStep: (profile: UserProfile) => ConversationStep;
}> = {
  welcome: {
    getMessage: () => `Hej! 👋 Jag är din personliga bredbandsrådgivare från Bredbandsval.

Jag hjälper dig hitta det perfekta bredbandet och TV-paketet baserat på just dina behov. 

Låt oss börja med att ta reda på vad som finns tillgängligt där du bor. Vilken adress söker du bredband till?`,
    processInput: (input) => ({
      address: input,
    }),
    nextStep: () => 'household-size',
  },

  'household-size': {
    getMessage: (profile) => `Perfekt! Jag kollar vad som finns på ${profile.address}. 

För att ge dig de bästa rekommendationerna behöver jag veta lite mer om era behov.

Hur många personer bor i ert hushåll?`,
    getQuickReplies: () => [
      { text: '1 person', value: '1' },
      { text: '2 personer', value: '2' },
      { text: '3-4 personer', value: '3-4' },
      { text: '5+ personer', value: '5+' },
    ],
    processInput: (input) => {
      const cleaned = input.replace(/[^0-9+-]/g, '');
      let size = 1;
      if (cleaned.includes('+')) {
        size = parseInt(cleaned.replace('+', '')) || 5;
      } else if (cleaned.includes('-')) {
        const parts = cleaned.split('-');
        size = Math.ceil((parseInt(parts[0]) + parseInt(parts[1])) / 2);
      } else {
        size = parseInt(cleaned) || 1;
      }
      return { householdSize: size };
    },
    nextStep: () => 'usage-streaming',
  },

  'usage-streaming': {
    getMessage: () => `Streamar ni mycket film och serier? (Netflix, SVT Play, etc.)`,
    getQuickReplies: () => [
      { text: 'Ja, varje dag', value: 'heavy' },
      { text: 'Några gånger i veckan', value: 'moderate' },
      { text: 'Sällan', value: 'light' },
    ],
    processInput: (input) => {
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('varje dag') || lowerInput.includes('mycket') || lowerInput === 'heavy') {
        return { streamingHeavy: true };
      }
      return { streamingHeavy: false };
    },
    nextStep: () => 'usage-gaming',
  },

  'usage-gaming': {
    getMessage: () => `Spelar någon i hushållet onlinespel? 🎮`,
    getQuickReplies: () => [
      { text: 'Ja', value: 'yes' },
      { text: 'Nej', value: 'no' },
    ],
    processInput: (input) => ({
      onlineGaming: input.toLowerCase().includes('ja') || input.toLowerCase() === 'yes',
    }),
    nextStep: () => 'usage-meetings',
  },

  'usage-meetings': {
    getMessage: () => `Har ni ofta videomöten (Teams, Zoom, etc.) hemma? 💼`,
    getQuickReplies: () => [
      { text: 'Ja, dagligen', value: 'daily' },
      { text: 'Några gånger i veckan', value: 'weekly' },
      { text: 'Sällan/aldrig', value: 'rarely' },
    ],
    processInput: (input) => {
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('daglig') || lowerInput === 'daily' || lowerInput.includes('ofta')) {
        return { videoMeetings: true };
      }
      return { videoMeetings: false };
    },
    nextStep: () => 'router-preference',
  },

  'router-preference': {
    getMessage: () => `Vill ni ha router inkluderat i abonnemanget?`,
    getQuickReplies: () => [
      { text: 'Ja, inkludera router', value: 'yes' },
      { text: 'Nej, har egen', value: 'no' },
      { text: 'Spelar ingen roll', value: 'no-preference' },
    ],
    processInput: (input) => {
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('ja') || lowerInput === 'yes') {
        return { includeRouter: true };
      } else if (lowerInput.includes('nej') || lowerInput === 'no') {
        return { includeRouter: false };
      }
      return { includeRouter: undefined };
    },
    nextStep: () => 'contract-preference',
  },

  'contract-preference': {
    getMessage: () => `Föredrar ni kort eller lång bindningstid?`,
    getQuickReplies: () => [
      { text: 'Kort (0-3 mån)', value: 'short' },
      { text: 'Lång (12-24 mån)', value: 'long' },
      { text: 'Spelar ingen roll', value: 'no-preference' },
    ],
    processInput: (input) => {
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('kort') || lowerInput === 'short') {
        return { contractPreference: 'short' };
      } else if (lowerInput.includes('lång') || lowerInput === 'long') {
        return { contractPreference: 'long' };
      }
      return { contractPreference: 'no-preference' };
    },
    nextStep: () => 'tv-channels',
  },

  'tv-channels': {
    getMessage: () => `Nu över till TV och streaming! 📺

Vilka TV-kanaler är viktiga för er? (Du kan nämna flera)`,
    processInput: (input) => {
      const channels = input.split(/[,\n]/).map(c => c.trim()).filter(c => c.length > 0);
      return { tvChannels: channels };
    },
    nextStep: () => 'streaming-services',
  },

  'streaming-services': {
    getMessage: () => `Vilka streamingtjänster använder ni idag eller vill ha?`,
    getQuickReplies: () => [
      { text: 'Netflix', value: 'Netflix' },
      { text: 'HBO Max', value: 'HBO Max' },
      { text: 'Disney+', value: 'Disney+' },
      { text: 'Viaplay', value: 'Viaplay' },
      { text: 'Prime Video', value: 'Prime Video' },
      { text: 'Inga', value: 'none' },
    ],
    processInput: (input) => {
      if (input.toLowerCase() === 'none' || input.toLowerCase().includes('inga')) {
        return { streamingServices: [] };
      }
      const services = input.split(/[,\n]/).map(s => s.trim()).filter(s => s.length > 0);
      return { streamingServices: services };
    },
    nextStep: () => 'sports',
  },

  'sports': {
    getMessage: () => `Är det någon särskild sport ni vill kunna se? ⚽`,
    getQuickReplies: () => [
      { text: 'Allsvenskan', value: 'Allsvenskan' },
      { text: 'Champions League', value: 'Champions League' },
      { text: 'Premier League', value: 'Premier League' },
      { text: 'NHL', value: 'NHL' },
      { text: 'Ingen sport', value: 'none' },
    ],
    processInput: (input) => {
      if (input.toLowerCase() === 'none' || input.toLowerCase().includes('ingen')) {
        return { sports: [] };
      }
      const sports = input.split(/[,\n]/).map(s => s.trim()).filter(s => s.length > 0);
      return { sports: sports };
    },
    nextStep: () => 'calculating',
  },

  'calculating': {
    getMessage: () => `Tack! Nu analyserar jag era behov och söker bland alla tillgängliga alternativ...`,
    processInput: () => ({}),
    nextStep: () => 'recommendations',
  },

  'recommendations': {
    getMessage: () => `Baserat på era behov har jag hittat de bästa alternativen för er!`,
    processInput: () => ({}),
    nextStep: () => 'recommendations',
  },
};

export function calculateBandwidthNeed(profile: UserProfile): number {
  let baseBandwidth = 25; // Minimum för basic användning
  
  // Hushållsstorlek
  const householdMultiplier = Math.min(profile.householdSize || 1, 5) * 0.7;
  
  // Streaming
  if (profile.streamingHeavy) {
    baseBandwidth += 25 * householdMultiplier;
  } else {
    baseBandwidth += 10 * householdMultiplier;
  }
  
  // Gaming
  if (profile.onlineGaming) {
    baseBandwidth += 50;
  }
  
  // Video meetings
  if (profile.videoMeetings) {
    baseBandwidth += 25;
  }
  
  // 4K streaming för större hushåll
  if ((profile.householdSize || 1) > 2 && profile.streamingHeavy) {
    baseBandwidth += 25;
  }
  
  return Math.ceil(baseBandwidth / 10) * 10; // Avrunda till närmaste 10
}
