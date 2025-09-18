'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  MapPin, BarChart3, User, Users, Play, Gamepad2, 
  Briefcase, Video, Router, Zap, ArrowRight, HelpCircle,
  Tv, Wifi, Package, X, Brain, MessageCircle, Send, Download, Mail,
  PiggyBank, Home
} from 'lucide-react';
import GoogleAddressAutocomplete from './GoogleAddressAutocomplete';
import RealUsagePermission from './RealUsagePermission';
import SpeedTestModal from './SpeedTestModal';
import { ResultsModal } from './ResultsModal';
import { analytics } from '@/lib/analytics';
import { bredbandsvalAPI } from '@/lib/api/client';
import RecommendationCard from './RecommendationCard';
import SmartPairingCard from './SmartPairingCard';
import { generateAIRecommendation, generateFollowUpAnswer } from '@/lib/ai/openai-client';
import { computeNeeds, scorePackageMatch } from '@/lib/decision/profile-model';
import { SpeedTestResult } from '@/lib/network-analysis/webrtc-speed-test';
import { generateRecommendationPDF } from '@/lib/pdf-generator';
import { generateSmartPairs } from '@/lib/smart-pairing';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'agent';
  timestamp: Date;
  quickReplies?: Array<{
    text: string;
    value: string;
    icon?: string;
  }>;
  helpText?: string;
  multiSelect?: boolean;
}

interface HelpTooltipProps {
  text: string;
  isOpen: boolean;
  onClose: () => void;
}

const HelpTooltip = ({ text, isOpen, onClose }: HelpTooltipProps) => {
  if (!isOpen) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="absolute z-[100] bg-white rounded-lg shadow-xl p-4 max-w-xs
                 border border-gray-200 top-full mt-2 right-0"
      style={{ minWidth: '250px' }}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        <X size={16} />
      </button>
      <p className="text-sm text-gray-700 pr-6">{text}</p>
      <div className="absolute top-[-6px] right-4 
                      w-3 h-3 bg-white border-l border-t border-gray-200 rotate-45"></div>
    </motion.div>
  );
};

interface AppleStyleAgentProps {
  quickSearchMode?: boolean;
}

export default function AppleStyleAgent({ quickSearchMode = false }: AppleStyleAgentProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState('service-type');
  const [userProfile, setUserProfile] = useState<any>({});
  const [showAddressInput, setShowAddressInput] = useState(false);
  const [showRealUsage, setShowRealUsage] = useState(false);
  const [showSpeedTest, setShowSpeedTest] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [openHelpTooltip, setOpenHelpTooltip] = useState<string | null>(null);
  const [serviceType, setServiceType] = useState<'broadband' | 'tv' | 'both' | null>(null);
  const [selectedStreamingServices, setSelectedStreamingServices] = useState<string[]>([]);
  const [selectedMultiValues, setSelectedMultiValues] = useState<string[]>([]);
  const [speedTestResult, setSpeedTestResult] = useState<SpeedTestResult | null>(null);
  const [followUpQuestion, setFollowUpQuestion] = useState('');
  const [loadingMessage, setLoadingMessage] = useState('Valle AI analyserar');
  const [smartPairs, setSmartPairs] = useState<any[]>([]);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [aiRecommendationText, setAiRecommendationText] = useState('');
  const [structuredRecommendations, setStructuredRecommendations] = useState<any>(null);
  const [showBuildYourOwn, setShowBuildYourOwn] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getRandomLoadingMessage = () => {
    const messages = [
      'Valle AI analyserar',
      'Analyserar dina svar',
      'Räknar ut bästa lösning',
      'Jämför leverantörer',
      'Beräknar dina behov',
      'Söker bästa priser',
      'Matchar dina önskemål'
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (quickSearchMode) {
      // Quick search mode - start with service type but different message
      const initialMessage: Message = {
        id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        content: 'Snabbsökning! Först behöver jag veta vad du letar efter:',
        sender: 'agent',
        timestamp: new Date(),
        quickReplies: [
          { text: 'Bredband', value: 'broadband', icon: 'wifi' },
          { text: 'TV-paket', value: 'tv', icon: 'tv' },
          { text: 'Bredband & TV', value: 'both', icon: 'package' },
        ],
        helpText: 'Efter detta behöver jag bara din adress för att visa de billigaste alternativen.'
      };
      setMessages([initialMessage]);
    } else {
      // Normal flow
      const initialMessage: Message = {
        id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        content: 'Hej! Vad kan jag hjälpa dig med idag?',
        sender: 'agent',
        timestamp: new Date(),
        quickReplies: [
          { text: 'Bredband', value: 'broadband', icon: 'wifi' },
          { text: 'TV-paket', value: 'tv', icon: 'tv' },
          { text: 'Bredband & TV', value: 'both', icon: 'package' },
        ],
        helpText: 'Välj vad du är intresserad av så kan jag hjälpa dig hitta det bästa alternativet för just dina behov.'
      };
      setMessages([initialMessage]);
    }
  }, [quickSearchMode]);

  const handleAddressSelect = async (address: string) => {
    setShowAddressInput(false);
    
    // Add user message
    const userMsg: Message = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      content: address,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMsg]);
    setUserProfile(prev => ({ ...prev, address }));
    setLoadingMessage(getRandomLoadingMessage());
    setIsTyping(true);
    
    // Brief pause
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (quickSearchMode) {
      // For quick search, go directly to recommendations with minimal profile
      setUserProfile(prev => ({ 
        ...prev, 
        // Set defaults for quick search
        householdSize: '2',
        streamingLevel: 'moderate',
        onlineGaming: false,
        videoMeetings: false,
        workFromHome: false,
        includeRouter: true,
        contractPreference: 'none'
      }));
      
      // Show loading message
      const loadingMsg: Message = {
        id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        content: 'Söker efter de billigaste alternativen på din adress...',
        sender: 'agent',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, loadingMsg]);
      setIsTyping(true);
      
      // Calculate recommendations directly
      setTimeout(() => {
        calculateRecommendations();
      }, 1000);
    } else {
      // Normal flow - ask about usage analysis
      const analysisQuestion: Message = {
        id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        content: 'Vill du att jag ska analysera din nuvarande internetanvändning för att ge dig en mer precis rekommendation?',
        sender: 'agent',
        timestamp: new Date(),
        quickReplies: [
          { text: 'Ja, analysera', value: 'analyze', icon: 'chart' },
          { text: 'Nej, fortsätt med frågor', value: 'skip', icon: 'arrow-right' },
        ],
        helpText: 'Genom att analysera din faktiska användning kan jag ge dig en mer träffsäker rekommendation. Detta kräver tillgång till din router.'
      };
      
      setMessages(prev => [...prev, analysisQuestion]);
      setIsTyping(false);
      setCurrentStep('usage-choice');
    }
    
    analytics.trackFunnelStep('address_entered');
  };

  const handleQuickReply = async (value: string) => {
    // Close any open help tooltips
    setOpenHelpTooltip(null);
    
    // Get display text for the clicked button
    let displayText = value;
    const lastMessage = messages[messages.length - 1];
    const clickedReply = lastMessage?.quickReplies?.find(r => r.value === value);
    
    if (clickedReply) {
      displayText = clickedReply.text;
    } else {
      // Fallback translations
      switch (value) {
        case 'broadband': displayText = 'Bredband'; break;
        case 'tv': displayText = 'TV-paket'; break;
        case 'both': displayText = 'Bredband & TV'; break;
        case 'analyze': displayText = 'Ja, analysera'; break;
        case 'skip': displayText = 'Nej, fortsätt med frågor'; break;
      }
    }
    
    // Add user message
    const userMsg: Message = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      content: displayText,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMsg]);
    
    // Handle service type selection
    if (currentStep === 'service-type') {
      setServiceType(value as 'broadband' | 'tv' | 'both');
      setUserProfile(prev => ({ ...prev, serviceType: value }));
      setLoadingMessage(getRandomLoadingMessage());
      setIsTyping(true);
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Ask for address
      const addressMsg: Message = {
        id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        content: 'Perfekt! För att hitta de bästa alternativen behöver jag veta var du bor.',
        sender: 'agent',
        timestamp: new Date(),
        helpText: 'Vi behöver din adress för att kontrollera vilka leverantörer som kan leverera till just dig.'
      };
      
      setMessages(prev => [...prev, addressMsg]);
      setIsTyping(false);
      setCurrentStep('address');
      setShowAddressInput(true);
      return;
    }
    
    if (value === 'analyze') {
      setShowRealUsage(true);
      return;
    }
    
    if (value === 'skip') {
      await askNextQuestion(serviceType === 'tv' ? 'tv-type' : 'household');
      return;
    }
    
    // Process other responses without adding another message
    await processAnswer(value);
  };

  const askNextQuestion = async (step: string) => {
    setLoadingMessage(getRandomLoadingMessage());
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const broadbandQuestions = {
      'household': {
        text: 'Hur många personer bor i ditt hushåll?',
        replies: [
          { text: 'Bara jag', value: '1', icon: 'user' },
          { text: '2 personer', value: '2', icon: 'users' },
          { text: '3-4 personer', value: '3-4', icon: 'users' },
          { text: '5 eller fler', value: '5+', icon: 'users' },
        ],
        helpText: 'Antalet personer påverkar hur mycket bandbredd som behövs för att alla ska kunna surfa samtidigt utan störningar.'
      },
      'streaming': {
        text: 'Hur ofta streamar ni film och serier i hemmet?',
        replies: [
          { text: 'Varje dag', value: 'heavy', icon: 'play' },
          { text: 'Några gånger i veckan', value: 'moderate', icon: 'play' },
          { text: 'Sällan eller aldrig', value: 'light', icon: 'play' },
        ],
        helpText: 'Streaming i 4K kräver cirka 25 Mbit/s per stream. HD kräver cirka 5-8 Mbit/s.'
      },
      'gaming': {
        text: 'Spelar någon i hushållet onlinespel?',
        replies: [
          { text: 'Ja, ofta', value: 'yes', icon: 'gamepad' },
          { text: 'Nej', value: 'no', icon: 'arrow-right' },
        ],
        helpText: 'Onlinespel kräver låg latens (ping) för bästa upplevelse, inte nödvändigtvis högsta hastigheten.'
      },
      'meetings': {
        text: 'Arbetar någon hemifrån med videomöten?',
        replies: [
          { text: 'Ja, dagligen', value: 'daily', icon: 'briefcase' },
          { text: 'Ibland', value: 'sometimes', icon: 'video' },
          { text: 'Nej', value: 'no', icon: 'arrow-right' },
        ],
        helpText: 'Videomöten kräver stabil uppkoppling och bra uppladdningshastighet, minst 3-5 Mbit/s.'
      },
      'router': {
        text: 'Behöver du en router från leverantören?',
        replies: [
          { text: 'Ja, jag vill ha en router', value: 'yes', icon: 'router' },
          { text: 'Nej, jag har redan', value: 'no', icon: 'arrow-right' },
        ],
        helpText: 'Många leverantörer inkluderar router i priset. Om du redan har en bra router kan du spara pengar.'
      },
      'contract': {
        text: 'Vilken bindningstid föredrar du?',
        replies: [
          { text: 'Ingen bindning', value: 'none', icon: 'zap' },
          { text: '3-6 månader', value: 'short', icon: 'zap' },
          { text: 'Längre för bättre pris', value: 'long', icon: 'zap' },
        ],
        helpText: 'Längre bindningstid ger ofta lägre månadspris, men ingen bindning ger mer flexibilitet.'
      },
      'budget': {
        text: 'Vad är din ungefärliga budget per månad?',
        replies: [
          { text: 'Under 400 kr', value: 'low', icon: 'piggy' },
          { text: '400-600 kr', value: 'medium', icon: 'piggy' },
          { text: '600-800 kr', value: 'high', icon: 'piggy' },
          { text: 'Över 800 kr', value: 'premium', icon: 'piggy' },
        ],
        helpText: 'Budget hjälper oss filtrera bort för dyra alternativ och hitta bästa värdet.'
      },
      'current-provider': {
        text: 'Har du bredband idag? Vad betalar du ungefär?',
        replies: [
          { text: 'Ja, under 300 kr', value: 'cheap', icon: 'zap' },
          { text: 'Ja, 300-500 kr', value: 'medium', icon: 'zap' },
          { text: 'Ja, över 500 kr', value: 'expensive', icon: 'zap' },
          { text: 'Nej, första gången', value: 'first-time', icon: 'zap' },
        ],
        helpText: 'Hjälper oss beräkna besparingar och om uppgradering är värt det.'
      },
      'priorities': {
        text: 'Vad är viktigast för dig?',
        multiSelect: true,
        replies: [
          { text: 'Lägsta pris', value: 'price', icon: 'piggy' },
          { text: 'Högsta hastighet', value: 'speed', icon: 'zap' },
          { text: 'Bästa supporten', value: 'support', icon: 'help' },
          { text: 'Ingen bindning', value: 'flexibility', icon: 'calendar' },
          { text: 'Allt-i-ett-lösning', value: 'convenience', icon: 'package' },
        ],
        helpText: 'Hjälper oss vikta olika faktorer i rekommendationen.'
      }
    };
    
    const tvQuestions = {
      'tv-type': {
        text: 'Vad är viktigast för dig när det gäller TV?',
        replies: [
          { text: 'Sport', value: 'sports', icon: 'tv' },
          { text: 'Film & serier', value: 'entertainment', icon: 'play' },
          { text: 'Nyheter & dokumentärer', value: 'news', icon: 'tv' },
          { text: 'Allt', value: 'all', icon: 'package' },
        ],
        helpText: 'Detta hjälper oss att hitta paket med rätt kanaler för dina intressen.'
      },
      'streaming-services': {
        text: 'Vilka streamingtjänster använder du? (välj alla som stämmer)',
        multiSelect: true,
        replies: [
          { text: 'Netflix', value: 'netflix', icon: 'play' },
          { text: 'HBO Max', value: 'hbo', icon: 'play' },
          { text: 'Disney+', value: 'disney', icon: 'play' },
          { text: 'Viaplay', value: 'viaplay', icon: 'play' },
          { text: 'SVT Play', value: 'svtplay', icon: 'tv' },
          { text: 'TV4 Play', value: 'tv4play', icon: 'tv' },
          { text: 'Prime Video', value: 'prime', icon: 'play' },
          { text: 'Apple TV+', value: 'appletv', icon: 'play' },
          { text: 'SkyShowtime', value: 'skyshowtime', icon: 'play' },
          { text: 'Paramount+', value: 'paramount', icon: 'play' },
          { text: 'Discovery+', value: 'discovery', icon: 'play' },
          { text: 'YouTube Premium', value: 'youtube', icon: 'play' },
        ],
        helpText: 'Vissa TV-paket inkluderar streamingtjänster vilket kan ge bättre totalpris.'
      },
      'tv-contract': {
        text: 'Hur länge vill du binda dig för TV-paketet?',
        replies: [
          { text: 'Ingen bindning', value: 'none', icon: 'zap' },
          { text: '12 månader', value: 'year', icon: 'zap' },
          { text: '24 månader för bästa pris', value: 'long', icon: 'zap' },
        ],
        helpText: 'TV-paket har ofta kampanjpriser första året med längre bindningstid.'
      }
    };
    
    // Choose questions based on service type
    let questions = broadbandQuestions;
    if (serviceType === 'tv') {
      questions = tvQuestions;
    } else if (serviceType === 'both') {
      // Merge both question sets for combined service
      questions = { ...broadbandQuestions, ...tvQuestions };
    }
    
    const question = questions[step];
    if (question) {
      const msg: Message = {
        id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        content: question.text,
        sender: 'agent',
        timestamp: new Date(),
        quickReplies: question.replies,
        helpText: question.helpText,
        multiSelect: question.multiSelect
      };
      
      setMessages(prev => [...prev, msg]);
      setCurrentStep(step);
      
      // Reset selected streaming services when we show the question
      if (step === 'streaming-services') {
        setSelectedStreamingServices([]);
      }
    }
    
    setIsTyping(false);
  };

  const processAnswer = async (value: string, displayText?: string) => {
    // Only add user message if displayText is provided (from multiselect)
    if (displayText) {
      const userMsg: Message = {
        id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        content: displayText,
        sender: 'user',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, userMsg]);
    }
    
    // Save to profile based on current step
    const profileUpdate = {};
    
    // Define question flow based on service type
    const getNextStep = () => {
      if (serviceType === 'broadband') {
        const flow = ['household', 'streaming', 'gaming', 'meetings', 'router', 'contract', 'budget', 'current-provider', 'priorities'];
        const currentIndex = flow.indexOf(currentStep);
        return currentIndex < flow.length - 1 ? flow[currentIndex + 1] : null;
      } else if (serviceType === 'tv') {
        const flow = ['tv-type', 'streaming-services', 'tv-contract', 'budget', 'current-provider', 'priorities'];
        const currentIndex = flow.indexOf(currentStep);
        return currentIndex < flow.length - 1 ? flow[currentIndex + 1] : null;
      } else { // both
        const flow = ['household', 'streaming', 'gaming', 'meetings', 'tv-type', 'streaming-services', 'router', 'contract', 'budget', 'current-provider', 'priorities'];
        const currentIndex = flow.indexOf(currentStep);
        return currentIndex < flow.length - 1 ? flow[currentIndex + 1] : null;
      }
    };
    
    switch (currentStep) {
      case 'household':
        profileUpdate['householdSize'] = value;
        break;
      case 'streaming':
        profileUpdate['streamingHeavy'] = value === 'heavy';
        profileUpdate['streamingLevel'] = value;
        break;
      case 'gaming':
        profileUpdate['onlineGaming'] = value === 'yes';
        break;
      case 'meetings':
        profileUpdate['videoMeetings'] = value === 'daily' || value === 'sometimes';
        profileUpdate['workFromHome'] = value === 'daily';
        break;
      case 'router':
        profileUpdate['includeRouter'] = value === 'yes';
        break;
      case 'contract':
        profileUpdate['contractPreference'] = value;
        break;
      case 'tv-type':
        profileUpdate['tvPreference'] = value;
        break;
      case 'streaming-services':
        profileUpdate['streamingServices'] = value;
        break;
      case 'tv-contract':
        profileUpdate['tvContractPreference'] = value;
        break;
      case 'budget':
        profileUpdate['budget'] = value;
        break;
      case 'current-provider':
        profileUpdate['currentProvider'] = value;
        break;
      case 'priorities':
        profileUpdate['priorities'] = value;
        break;
    }
    
    setUserProfile(prev => ({ ...prev, ...profileUpdate }));
    
    const nextStep = getNextStep();
    if (nextStep) {
      await askNextQuestion(nextStep);
    } else {
      await calculateRecommendations();
    }
  };

  const calculateRecommendations = async () => {
    setLoadingMessage('Räknar ut bästa lösning');
    setIsTyping(true);
    
    const calcMsg: Message = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      content: 'Låt mig analysera dina behov och hitta de bästa alternativen för dig...',
      sender: 'agent',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, calcMsg]);
    
    try {
      // Beräkna behov baserat på profil
      const userSignals = {
        householdSize: parseInt(userProfile.householdSize) || 1,
        streamingLevel: userProfile.streamingLevel || 'moderate' as const,
        onlineGaming: userProfile.onlineGaming || false,
        videoMeetings: userProfile.videoMeetings ? 
          (userProfile.workFromHome ? 'daily' : 'sometimes') as const : 
          'none' as const,
        smartDevices: (parseInt(userProfile.householdSize) || 1) * 5,
        workFromHome: userProfile.workFromHome || false,
        streamingServicesCount: userProfile.streamingServices ? 
          userProfile.streamingServices.split(',').length : 0,
        tvPreference: userProfile.tvPreference
      };
      
      const needs = computeNeeds(userSignals);
      
      // Om vi har hastighetstestresultat, justera behov
      if (speedTestResult) {
        // Om faktisk hastighet är mycket lägre än behov, flagga det
        if (speedTestResult.downloadMbps < needs.requiredDownloadMbps * 0.8) {
          needs.priorityFeatures.push('Hastighetsuppgradering behövs');
        }
      }
      
      // Call API
      const addressData = await bredbandsvalAPI.lookupAddress(userProfile.address || '');
      const preferences = {
        address: addressData,
        household: {
          size: parseInt(userProfile.householdSize) || 1,
          workFromHome: userProfile.workFromHome ? 1 : 0,
          students: 0,
        },
        usage: {
          streaming: userProfile.streamingLevel || 'moderate' as const,
          gaming: userProfile.onlineGaming || false,
          videoConferencing: userProfile.videoMeetings || false,
          smartHome: false,
          devicesCount: (parseInt(userProfile.householdSize) || 1) * 3,
        },
        preferences: {
          contractLength: userProfile.contractPreference || 'no-preference' as const,
          includeRouter: userProfile.includeRouter ?? null,
          tvChannels: userProfile.tvPreference ? [userProfile.tvPreference] : [],
          streamingServices: userProfile.streamingServices ? [userProfile.streamingServices] : [],
          sports: userProfile.tvPreference === 'sports' ? ['all'] : [],
        },
      };
      
      let recs = await bredbandsvalAPI.getRecommendations(preferences);
      
      // Sortera om baserat på behovsmodellen
      recs = recs.map(rec => {
        const { score, reasons, badges, trustScore } = scorePackageMatch(rec.package, needs);
        return {
          ...rec,
          matchScore: score,
          reasons: [...reasons, ...(rec.reasons || [])],
          badges,
          trustScore
        };
      }).sort((a, b) => b.matchScore - a.matchScore);
      
      setRecommendations(recs);
      
      // Separate broadband and TV packages
      const broadbandPackages = recs.filter(r => r.package.speed > 0);
      const tvPackages = recs.filter(r => r.package.channels?.length > 0 && (r.package.speed === 0 || r.package.speed === undefined));
      
      // Structure recommendations
      const structured = {
        broadband: broadbandPackages.slice(0, 3),
        tv: tvPackages.slice(0, 3),
        combined: []
      };
      
      // Generate smart pairs for "both" service type
      if (serviceType === 'both') {
        const pairs = generateSmartPairs(broadbandPackages, tvPackages, userProfile);
        setSmartPairs(pairs);
        structured.combined = pairs;
      }
      
      setStructuredRecommendations(structured);
      
      // Generate AI recommendation with complete profile
      const completeProfile = {
        ...userProfile,
        speedTestResult: speedTestResult,
        calculatedNeeds: needs,
        address: userProfile.address
      };
      
      const aiRecommendation = await generateAIRecommendation({
        userProfile: completeProfile,
        recommendations: serviceType === 'both' ? smartPairs : recs.slice(0, 3),
        serviceType: serviceType || 'broadband'
      });
      
      setAiRecommendationText(aiRecommendation || 'Baserat på dina svar har jag hittat de bästa alternativen för dig.');
      
      // Show results
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const resultsMsg: Message = {
        id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        content: 'Perfekt! Jag har analyserat dina behov och hittat de bästa alternativen för dig. Klicka nedan för att se din personliga rekommendation.',
        sender: 'agent',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, resultsMsg]);
      setIsTyping(false);
      
      // Show modal after a short delay
      setTimeout(() => {
        setCurrentStep('results');
        setShowResultsModal(true);
      }, 500);
      
      analytics.trackRecommendationsShown(recs, userProfile);
    } catch (error) {
      console.error('Error calculating recommendations:', error);
      
      const errorMsg: Message = {
        id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        content: 'Ursäkta, jag hade problem att hämta rekommendationer. Försök igen senare.',
        sender: 'agent',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorMsg]);
      setIsTyping(false);
    }
  };

  const handleRealUsageAccept = async (method: string) => {
    setShowRealUsage(false);
    
    if (method === 'router') {
      // Visa hastighetstestet
      setShowSpeedTest(true);
    } else {
      // För ISP-metoden, fortsätt med frågor (BankID inte implementerat än)
      const msg: Message = {
        id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        content: 'BankID-inloggning kommer snart! Låt oss fortsätta med några frågor istället.',
        sender: 'agent',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, msg]);
      setIsTyping(false); // Ensure typing is false
      
      // Add small delay before continuing
      setTimeout(() => {
        askNextQuestion(serviceType === 'tv' ? 'tv-type' : 'household');
      }, 500);
    }
  };

  const handleRealUsageDecline = () => {
    setShowRealUsage(false);
    askNextQuestion('household');
  };

  const handleSpeedTestComplete = async (result: SpeedTestResult) => {
    setShowSpeedTest(false);
    setSpeedTestResult(result);
    
    // Visa resultat i chatten
    const msg: Message = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      content: `Utmärkt! Jag mätte din hastighet till ${result.downloadMbps} Mbit/s ned och ${result.uploadMbps} Mbit/s upp. Det ger en bra bild!`,
      sender: 'agent',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, msg]);
    
    // Fortsätt med frågor
    await askNextQuestion('household');
  };

  const handleSpeedTestSkip = () => {
    setShowSpeedTest(false);
    askNextQuestion('household');
  };

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'user': return User;
      case 'users': return Users;
      case 'play': return Play;
      case 'gamepad': return Gamepad2;
      case 'briefcase': return Briefcase;
      case 'video': return Video;
      case 'router': return Router;
      case 'zap': return Zap;
      case 'chart': return BarChart3;
      case 'arrow-right': return ArrowRight;
      case 'location': return MapPin;
      case 'wifi': return Wifi;
      case 'tv': return Tv;
      case 'package': return Package;
      case 'piggy': return PiggyBank;
      case 'help': return HelpCircle;
      case 'calendar': return ArrowRight;
      case 'home': return Home;
      default: return ArrowRight;
    }
  };

  const handleFollowUpQuestion = async (question: string) => {
    if (!question.trim()) return;
    
    // Reset input
    setFollowUpQuestion('');
    
    // Add user message
    const userMsg: Message = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      content: question,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMsg]);
    
    // Check if user wants to contact support
    const lowerQ = question.toLowerCase();
    if (lowerQ.includes('mejla') || lowerQ.includes('kontakta') || lowerQ.includes('kundtjänst') || 
        lowerQ.includes('support') || lowerQ.includes('hjälp')) {
      handleContactSupport();
      return;
    }
    
    setLoadingMessage(getRandomLoadingMessage());
    setIsTyping(true);
    
    // Generate AI response based on question context
    setTimeout(async () => {
      const response = await generateFollowUpResponse(question, recommendations, userProfile);
      
      const aiMsg: Message = {
        id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        content: response,
        sender: 'agent',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const generateFollowUpResponse = async (
    question: string, 
    recommendations: any[], 
    profile: any
  ): Promise<string> => {
    // Get conversation context from last few messages
    const recentMessages = messages.slice(-6).map(m => 
      `${m.sender === 'user' ? 'Användare' : 'AI'}: ${m.content.replace(/<[^>]*>/g, '')}`
    ).join('\n');
    
    // Use the new AI function with OpenAI
    return await generateFollowUpAnswer({
      question,
      recommendations,
      userProfile: profile,
      conversationContext: recentMessages
    });
  };

  const handleDownloadPDF = () => {
    const pdfData = recommendations.slice(0, 3).map(rec => ({
      provider: rec.package.providerName,
      packageName: rec.package.name,
      speed: rec.package.speed.download,
      price: rec.package.pricing.campaign?.monthlyPrice || rec.package.pricing.monthly,
      bindingTime: rec.package.contractLength,
      features: rec.package.features || [],
      badges: rec.badges || [],
      trustScore: rec.trustScore || 70,
      reasoning: rec.reasons?.[0] || 'Passar dina behov perfekt'
    }));
    
    generateRecommendationPDF(pdfData, userProfile);
  };

  const handleContactSupport = () => {
    // Add support message
    const supportMsg: Message = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      content: '<p><strong>Kontaktuppgifter till vår kundtjänst:</strong></p><p>📧 E-post: support@bredbandsval.se<br/>📞 Telefon: 08-123 456 78<br/>⏰ Öppettider: Mån-Fre 9-17</p><p>Vi hjälper dig gärna med frågor om leverantörer, priser eller teknisk rådgivning!</p>',
      sender: 'agent',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, supportMsg]);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-white border-2 border-blue-500 flex items-center justify-center">
            <Image
              src="/valle.png"
              alt="Valle AI"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">Valle AI</h3>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Online
            </p>
          </div>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-2 sm:px-4 py-4 sm:py-6">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  delay: index * 0.05 
                }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-3 px-2 sm:px-0`}
              >
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className={`relative px-5 py-3 max-w-[85%] md:max-w-[75%] ${
                    message.sender === 'user' 
                      ? 'bg-blue-500 text-white rounded-[24px] rounded-br-[4px] shadow-sm' 
                      : 'bg-white text-gray-900 rounded-[24px] rounded-bl-[4px] shadow-sm border border-gray-100'
                  }`}
                  animate={message.sender === 'agent' && index === messages.length - 1 ? {
                    boxShadow: [
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                    ]
                  } : {}}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <div className="flex items-start gap-2">
                    <div className="text-[15px] leading-relaxed break-words flex-1">
                      {message.sender === 'agent' ? (
                        <div 
                          className="ai-content"
                          dangerouslySetInnerHTML={{ __html: message.content }} 
                        />
                      ) : (
                        <p className={message.content.length < 50 ? '' : 'wrap'}>{message.content}</p>
                      )}
                    </div>
                    
                    {/* Help icon */}
                    {message.helpText && message.sender === 'agent' && (
                      <div className="relative">
                        <button
                          onClick={() => setOpenHelpTooltip(openHelpTooltip === message.id ? null : message.id)}
                          className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                        >
                          <HelpCircle size={16} />
                        </button>
                        <AnimatePresence>
                          <HelpTooltip
                            text={message.helpText}
                            isOpen={openHelpTooltip === message.id}
                            onClose={() => setOpenHelpTooltip(null)}
                          />
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                  
                  {/* Timestamp */}
                  <div className={`text-[11px] mt-1 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString('sv-SE', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                  
                  {message.quickReplies && (
                    <div className={`mt-4 ${
                      message.quickReplies.length <= 2 
                        ? 'grid grid-cols-2 gap-5' 
                        : message.quickReplies.length === 3
                        ? 'grid grid-cols-1 sm:grid-cols-3 gap-5'
                        : message.quickReplies.length === 4
                        ? 'grid grid-cols-2 lg:grid-cols-4 gap-5'
                        : message.quickReplies.length === 5
                        ? 'grid grid-cols-2 lg:grid-cols-3 gap-5'
                        : message.quickReplies.length === 6
                        ? 'grid grid-cols-2 lg:grid-cols-3 gap-5'
                        : 'grid grid-cols-2 lg:grid-cols-4 gap-5'
                    }`}>
                      {message.quickReplies.map((reply) => {
                        const Icon = getIcon(reply.icon);
                        // Determine which state to use based on the question
                        const isStreamingQuestion = message.content.includes('streamingtjänster');
                        const currentSelection = isStreamingQuestion ? selectedStreamingServices : selectedMultiValues;
                        const isSelected = currentSelection.includes(reply.value);
                        
                        return (
                          <motion.button
                            key={reply.value}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              if (message.multiSelect) {
                                const setter = isStreamingQuestion ? setSelectedStreamingServices : setSelectedMultiValues;
                                if (isSelected) {
                                  setter(prev => prev.filter(s => s !== reply.value));
                                } else {
                                  setter(prev => [...prev, reply.value]);
                                }
                              } else {
                                handleQuickReply(reply.value);
                              }
                            }}
                            className={`flex items-center justify-center gap-2 px-6 py-3 
                                     rounded-full text-sm font-medium transition-all
                                     min-h-[52px] min-w-[200px] w-full whitespace-nowrap
                                     ${isSelected 
                                       ? 'bg-blue-500 text-white border-blue-500' 
                                       : 'bg-gray-50 text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-100'
                                     }`}
                          >
                            <Icon size={14} className={isSelected ? 'text-white' : 'text-gray-500'} />
                            {reply.text}
                          </motion.button>
                        );
                      })}
                      {message.multiSelect && (() => {
                        const isStreamingQuestion = message.content.includes('streamingtjänster');
                        const currentSelection = isStreamingQuestion ? selectedStreamingServices : selectedMultiValues;
                        
                        return (
                          <div className="col-span-full mt-3 space-y-2">
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => {
                                if (currentSelection.length > 0) {
                                  const displayText = currentSelection
                                    .map(value => 
                                      message.quickReplies?.find(r => r.value === value)?.text
                                    )
                                    .filter(Boolean)
                                    .join(', ');
                                  processAnswer(currentSelection.join(','), displayText);
                                  
                                  // Reset the appropriate state
                                  if (isStreamingQuestion) {
                                    setSelectedStreamingServices([]);
                                  } else {
                                    setSelectedMultiValues([]);
                                  }
                                }
                              }}
                              disabled={currentSelection.length === 0}
                              className={`w-full py-3 px-6 rounded-full font-medium
                                       transition-all ${
                                         currentSelection.length > 0
                                           ? 'bg-blue-500 text-white hover:bg-blue-600' 
                                           : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                       }`}
                            >
                              {currentSelection.length > 0 
                                ? `Fortsätt med ${currentSelection.length} val` 
                                : (isStreamingQuestion ? 'Välj minst en tjänst' : 'Välj minst ett alternativ')}
                            </motion.button>
                            {isStreamingQuestion && (
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                  processAnswer('none', 'Inga tjänster');
                                  setSelectedStreamingServices([]);
                                }}
                                className="w-full py-3 px-6 rounded-full font-medium
                                         bg-gray-100 text-gray-700 border border-gray-300
                                         hover:bg-gray-200 transition-all"
                              >
                                Jag använder inga streamingtjänster
                              </motion.button>
                            )}
                          </div>
                        );
                      })()}
                    </div>
                  )}
                  
                  {/* Message tail */}
                  {message.sender === 'user' ? (
                    <div className="absolute -right-[8px] bottom-0 w-4 h-4 overflow-hidden">
                      <div className="absolute -left-[8px] bottom-0 w-4 h-4 bg-blue-500 transform rotate-45"></div>
                    </div>
                  ) : (
                    <div className="absolute -left-[8px] bottom-0 w-4 h-4 overflow-hidden">
                      <div className="absolute -right-[8px] bottom-0 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex justify-start mb-3 px-2 sm:px-0"
              >
                <div className="relative px-5 py-4 bg-gradient-to-r from-blue-50 to-white rounded-[24px] rounded-bl-[4px] shadow-sm border border-blue-100 flex items-center gap-3 min-height-[48px] min-width-[180px]">
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-blue-400 blur-xl opacity-30"
                    />
                    <div className="w-6 h-6 rounded-full bg-white border border-blue-300 flex items-center justify-center relative z-10">
                      <Image
                        src="/valle.png"
                        alt="Valle AI"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-800">{loadingMessage}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex gap-1">
                        {[0, 0.15, 0.3].map((delay, i) => (
                          <motion.div
                            key={i}
                            className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                            animate={{ 
                              y: [0, -6, 0],
                              opacity: [0.3, 1, 0.3]
                            }}
                            transition={{
                              duration: 1.2,
                              repeat: Infinity,
                              delay,
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        {loadingMessage.includes('analyserar') ? 'Förbereder svar' : 
                         loadingMessage.includes('Räknar') ? 'Bearbetar data' : 
                         loadingMessage.includes('Jämför') ? 'Kontrollerar priser' : 
                         'Arbetar'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Message tail */}
                  <div className="absolute -left-[8px] bottom-0 w-4 h-4 overflow-hidden">
                    <div className="absolute -right-[8px] bottom-0 w-4 h-4 bg-gradient-to-br from-blue-50 to-white border-r border-b border-blue-100 transform rotate-45"></div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Address input */}
          {showAddressInput && currentStep === 'address' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8"
            >
              <GoogleAddressAutocomplete
                onAddressSelect={handleAddressSelect}
                placeholder="Ange din adress"
              />
            </motion.div>
          )}
          
          {/* Results view - Show button to open modal */}
          {currentStep === 'results' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowResultsModal(true)}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 
                         hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl 
                         text-lg font-semibold shadow-lg transition-all"
              >
                <Package className="w-6 h-6" />
                Visa dina personliga rekommendationer
              </motion.button>
            </motion.div>

              {/* Smart Pairing for "both" service type */}
              {serviceType === 'both' && smartPairs.length > 0 ? (
                <div className="space-y-6">
                  {smartPairs.map((pair, index) => (
                    <SmartPairingCard
                      key={pair.id}
                      title={pair.title}
                      subtitle={pair.subtitle}
                      broadbandProvider={pair.broadband.provider}
                      broadbandPackage={pair.broadband.package}
                      broadbandSpeed={pair.broadband.speed}
                      broadbandPrice={pair.broadband.price}
                      tvProvider={pair.tv.provider}
                      tvPackage={pair.tv.package}
                      tvPrice={pair.tv.price}
                      totalPrice={pair.totalPrice}
                      savings={pair.savings}
                      reasoning={pair.reasoning}
                      index={index}
                      isPrimary={pair.type === 'primary'}
                    />
                  ))}
                  
                  {/* Expandable "Build your own" section */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-8 p-4 bg-gray-50 rounded-2xl"
                  >
                    <motion.button
                      onClick={() => setShowBuildYourOwn(!showBuildYourOwn)}
                      className="w-full text-left flex items-center justify-between p-2"
                    >
                      <span className="font-medium text-gray-700">
                        Vill du välja bredband och TV separat?
                      </span>
                      <span className="text-gray-400">
                        {showBuildYourOwn ? '▲' : '▼'}
                      </span>
                    </motion.button>
                    
                    {showBuildYourOwn && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className="mt-4 space-y-6"
                      >
                        {/* Broadband section */}
                        <div>
                          <h5 className="text-md font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <Wifi size={18} className="text-blue-500" />
                            Bredbandsalternativ
                          </h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {recommendations
                              .filter(rec => !rec.package.tv || rec.package.speed.download > 0)
                              .slice(0, 3)
                              .map((rec, index) => (
                                <RecommendationCard
                                  key={rec.package.id}
                                  provider={rec.package.providerName}
                                  packageName={rec.package.name}
                                  speed={rec.package.speed.download}
                                  price={rec.package.pricing.campaign?.monthlyPrice || rec.package.pricing.monthly}
                                  bindingTime={rec.package.contractLength}
                                  features={rec.package.features || []}
                                  savings={rec.savings}
                                  matchScore={rec.matchScore}
                                  reasoning={rec.reasons?.[0] || 'Passar dina behov perfekt'}
                                  index={index}
                                  badges={rec.badges || []}
                                  trustScore={rec.trustScore || 70}
                                />
                              ))}
                          </div>
                        </div>
                        
                        {/* TV section */}
                        <div>
                          <h5 className="text-md font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <Tv size={18} className="text-purple-500" />
                            TV-alternativ
                          </h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {recommendations
                              .filter(rec => rec.package.tv && (rec.package.speed.download === 0 || rec.package.isCombo))
                              .slice(0, 3)
                              .map((rec, index) => (
                                <RecommendationCard
                                  key={rec.package.id}
                                  provider={rec.package.providerName}
                                  packageName={rec.package.name}
                                  speed={rec.package.speed.download > 0 ? rec.package.speed.download : undefined}
                                  price={rec.package.pricing.campaign?.monthlyPrice || rec.package.pricing.monthly}
                                  bindingTime={rec.package.contractLength}
                                  features={rec.package.tv?.channelPackages || rec.package.features || []}
                                  savings={rec.savings}
                                  matchScore={rec.matchScore}
                                  reasoning={rec.reasons?.[0] || 'Passar dina behov perfekt'}
                                  index={index}
                                  badges={rec.badges || []}
                                  trustScore={rec.trustScore || 70}
                                />
                              ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              ) : (
                // For single service type (broadband or tv only)
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recommendations.slice(0, 3).map((rec, index) => (
                    <RecommendationCard
                      key={rec.package.id}
                      provider={rec.package.providerName}
                      packageName={rec.package.name}
                      speed={rec.package.speed.download > 0 ? rec.package.speed.download : undefined}
                      price={rec.package.pricing.campaign?.monthlyPrice || rec.package.pricing.monthly}
                      bindingTime={rec.package.contractLength}
                      features={rec.package.features || []}
                      savings={rec.savings}
                      matchScore={rec.matchScore}
                      reasoning={rec.reasons?.[0] || 'Passar dina behov perfekt'}
                      index={index}
                      badges={rec.badges || []}
                      trustScore={rec.trustScore || 70}
                      isCombo={rec.package.isCombo}
                      comboDetails={rec.package.comboDetails}
                    />
                  ))}
                </div>
              )}
              
              {/* Follow-up questions section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 p-4 bg-gray-50 rounded-2xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MessageCircle size={20} className="text-blue-500" />
                    <h4 className="font-medium text-gray-900">Har du frågor?</h4>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleContactSupport()}
                    className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 
                             hover:text-gray-900 bg-white rounded-xl border border-gray-200 
                             hover:border-gray-300 transition-all"
                  >
                    <Mail size={14} />
                    Kontakta kundtjänst
                  </motion.button>
                </div>
                
                {/* Suggested questions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                  {[
                    'Varför inte ' + (recommendations[0]?.package.providerName !== 'Telia' ? 'Telia' : 'Bahnhof') + '?',
                    'Vad händer om jag flyttar?',
                    'Hur byter jag leverantör?',
                    'Vilken router är bäst?'
                  ].map((question) => (
                    <motion.button
                      key={question}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleFollowUpQuestion(question)}
                      className="text-left px-3 py-2 bg-white rounded-xl text-sm text-gray-700 
                               hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
                
                {/* Custom question input */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={followUpQuestion}
                    onChange={(e) => setFollowUpQuestion(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleFollowUpQuestion(followUpQuestion)}
                    placeholder="Eller ställ din egen fråga..."
                    className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:border-blue-500 
                             focus:outline-none transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleFollowUpQuestion(followUpQuestion)}
                    disabled={!followUpQuestion.trim()}
                    className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 
                             disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send size={18} />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Real usage modal */}
      <AnimatePresence>
        {showRealUsage && (
          <RealUsagePermission
            onAccept={handleRealUsageAccept}
            onDecline={handleRealUsageDecline}
          />
        )}
      </AnimatePresence>
      
      {/* Speed test modal */}
      <AnimatePresence>
        {showSpeedTest && (
          <SpeedTestModal
            onComplete={handleSpeedTestComplete}
            onSkip={handleSpeedTestSkip}
          />
        )}
      </AnimatePresence>

      {/* Results Modal */}
      {structuredRecommendations && (
        <ResultsModal
          isOpen={showResultsModal}
          onClose={() => setShowResultsModal(false)}
          serviceType={serviceType || 'broadband'}
          recommendations={structuredRecommendations}
          smartPairs={smartPairs}
          aiRecommendation={aiRecommendationText}
          userProfile={{
            address: userProfile.address,
            householdSize: userProfile.householdSize,
            serviceType: serviceType,
            ...userProfile
          }}
          onPrint={() => {
            generateRecommendationPDF(recommendations.slice(0, 3), userProfile);
          }}
          onChatOpen={() => {
            setShowResultsModal(false);
            // Focus on follow-up input or similar
          }}
        />
      )}
    </div>
  );
}
