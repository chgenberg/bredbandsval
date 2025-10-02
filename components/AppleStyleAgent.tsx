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
import { RouterAnalysisResult } from '@/lib/network-analysis/router-analyzer';
import { generateRecommendationPDF } from '@/lib/pdf-generator';
import { generateSmartPairs } from '@/lib/smart-pairing';
import { 
  questionGenerator, 
  GeneratedQuestion, 
  QuestionAnswer,
  type UserProfile as DynamicUserProfile 
} from '@/lib/ai/dynamic-question-generator';

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
  const [routerAnalysisResult, setRouterAnalysisResult] = useState<RouterAnalysisResult | null>(null);
  const [followUpQuestion, setFollowUpQuestion] = useState('');
  const [loadingMessage, setLoadingMessage] = useState('Valle AI analyserar');
  const [smartPairs, setSmartPairs] = useState<any[]>([]);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [aiRecommendationText, setAiRecommendationText] = useState('');
  const [structuredRecommendations, setStructuredRecommendations] = useState<any>(null);
  
  // New: Dynamic question system
  const [questionHistory, setQuestionHistory] = useState<QuestionAnswer[]>([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<GeneratedQuestion | null>(null);
  const MAX_QUESTIONS = 7; // Total number of questions including guaranteed ones
  
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
          { text: 'TV', value: 'tv', icon: 'tv' },
          { text: 'Bredband & TV', value: 'both', icon: 'package' },
        ],
        helpText: 'Efter detta behöver jag bara din adress för att visa de billigaste alternativen.'
      };
      setMessages([initialMessage]);
    } else {
      // Normal flow - no initial message, just show welcome section
      setMessages([]);
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
        case 'tv': displayText = 'TV'; break;
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
      // Start dynamic question system
      await askNextQuestion();
      return;
    }
    
    // Process other responses without adding another message
    await processAnswer(value);
  };

  /**
   * NEW: Dynamic question asking using AI
   */
  const askNextQuestion = async () => {
    if (!serviceType) {
      console.error('No service type selected');
      return;
    }

    console.log('🔄 Generating dynamic question...', {
      questionNumber: currentQuestionNumber + 1,
      serviceType,
      profileKeys: Object.keys(userProfile)
    });

    setLoadingMessage(getRandomLoadingMessage());
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 800)); // Slightly longer for AI generation

    try {
      const nextQuestion = await questionGenerator.generateNextQuestion({
        userProfile: userProfile as DynamicUserProfile,
        previousAnswers: questionHistory,
        questionNumber: currentQuestionNumber + 1,
        maxQuestions: MAX_QUESTIONS,
        serviceType: serviceType
      });

      console.log('✅ Generated question:', nextQuestion);

      setCurrentQuestion(nextQuestion);
      setCurrentQuestionNumber(prev => prev + 1);

      const msg: Message = {
        id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        content: nextQuestion.questionText,
        sender: 'agent',
        timestamp: new Date(),
        quickReplies: nextQuestion.suggestedAnswers.map(ans => ({
          text: ans.text,
          value: ans.value,
          icon: ans.icon
        })),
        helpText: nextQuestion.helpText,
        multiSelect: false
      };

      setMessages(prev => [...prev, msg]);
      setIsTyping(false);

    } catch (error) {
      console.error('❌ Error generating question:', error);
      setIsTyping(false);
      
      // Fallback: go straight to recommendations if we can't generate more questions
      if (currentQuestionNumber >= 3) { // Have at least 3 answers
        await calculateRecommendations();
      } else {
        // Show error message
        const errorMsg: Message = {
          id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          content: 'Jag har tillräckligt med information nu. Låt mig hitta de bästa alternativen för dig!',
          sender: 'agent',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, errorMsg]);
        await calculateRecommendations();
      }
    }
  };

  /**
   * NEW: Process answer in dynamic system
   */
  const processAnswer = async (value: string, displayText?: string) => {
    if (!currentQuestion) {
      console.error('No current question to process answer for');
      return;
    }

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

    // Save answer to history
    const answerRecord: QuestionAnswer = {
      question: currentQuestion.questionText,
      answer: value,
      dataField: currentQuestion.dataField,
      timestamp: new Date()
    };

    setQuestionHistory(prev => [...prev, answerRecord]);

    // Update user profile with the answer
    const profileUpdate: any = {};
    
    // Map answer to profile field intelligently
    const field = currentQuestion.dataField;
    
    // Handle specific transformations
    if (field === 'streamingLevel') {
      profileUpdate.streamingHeavy = value === 'heavy';
      profileUpdate.streamingLevel = value;
    } else if (field === 'onlineGaming') {
      profileUpdate.onlineGaming = value === 'yes' || value === 'often';
    } else if (field === 'videoMeetings') {
      profileUpdate.videoMeetings = value === 'daily' || value === 'sometimes';
      profileUpdate.workFromHome = value === 'daily';
    } else if (field === 'includeRouter') {
      profileUpdate.includeRouter = value === 'yes';
    } else {
      // Direct mapping for most fields
      profileUpdate[field] = value;
    }

    setUserProfile(prev => ({ ...prev, ...profileUpdate }));

    console.log('📝 Answer processed:', {
      question: currentQuestion.questionText,
      answer: value,
      field: currentQuestion.dataField,
      questionNumber: currentQuestionNumber,
      maxQuestions: MAX_QUESTIONS
    });

    // Check if we should continue or finish
    if (currentQuestionNumber >= MAX_QUESTIONS) {
      console.log('🎯 Reached max questions, generating recommendations');
      await calculateRecommendations();
    } else {
      // Generate next question
      await askNextQuestion();
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
      
      // Separate broadband and TV packages (less strict filtering to show more options)
      const broadbandRecs = recs.filter(r => (r.package?.speed?.download || 0) > 0 && !r.package?.tv);
      const tvRecs = recs.filter(r => !!r.package?.tv || (r.package?.speed?.download || 0) === 0);
      
      console.log('📊 Package separation:', {
        total: recs.length,
        broadband: broadbandRecs.length,
        tv: tvRecs.length
      });
      
      console.log('📦 Sample broadband packages:', broadbandRecs.slice(0, 3).map(r => ({
        provider: r.package?.providerName,
        name: r.package?.name,
        speed: r.package?.speed?.download
      })));
      
      console.log('📺 Sample TV packages:', tvRecs.slice(0, 3).map(r => ({
        provider: r.package?.providerName,
        name: r.package?.name,
        hasTV: !!r.package?.tv
      })));

      // Helper: map a recommendation to RecommendationCard props shape
      const mapRecToCard = (rec: any) => {
        const pkg = rec.package;
        const price = pkg?.pricing?.campaign?.monthlyPrice ?? pkg?.pricing?.monthly ?? 0;
        const binding = pkg?.contract?.bindingPeriod;
        const speed = pkg?.speed?.download;
        const features: string[] = [];
        if (pkg?.tv?.channelPackages?.length) {
          features.push(...pkg.tv.channelPackages.slice(0, 3));
        }
        if (pkg?.includes?.router) features.push('Router ingår');
        if (pkg?.availability?.technology) features.push(pkg.availability.technology.toUpperCase());
        return {
          provider: pkg?.providerName,
          packageName: pkg?.name,
          speed: speed && speed > 0 ? speed : undefined,
          price,
          bindingTime: typeof binding === 'number' ? binding : undefined,
          features,
          savings: rec?.savings?.streaming ?? rec?.savings?.monthly ?? 0,
          matchScore: rec?.matchScore ?? rec?.score ?? 0,
          reasoning: (rec?.reasons && rec.reasons[0]) || 'Passar dina behov',
          badges: rec?.badges || [],
          trustScore: rec?.trustScore || 70,
          isCombo: pkg?.isCombo,
          comboDetails: pkg?.comboDetails,
        };
      };

      // Structure recommendations in a format ResultsModal/RecommendationCard expects
      const structured = {
        broadband: broadbandRecs.slice(0, 3).map(mapRecToCard),
        tv: tvRecs.slice(0, 3).map(mapRecToCard),
        combined: [] as any[],
      };
      
      // Generate smart pairs for "both" service type
      let generatedPairs: any[] = [];
      if (serviceType === 'both') {
        console.log('🔄 Generating smart pairs from:', {
          broadbandRecs: broadbandRecs.length,
          tvRecs: tvRecs.length
        });
        generatedPairs = generateSmartPairs(broadbandRecs, tvRecs, userProfile);
        console.log('✅ Generated smart pairs:', generatedPairs.length);
        setSmartPairs(generatedPairs);
        structured.combined = generatedPairs;
      }
      
      setStructuredRecommendations(structured);
      
      // Generate AI recommendation with complete profile
      const completeProfile = {
        ...userProfile,
        speedTestResult: speedTestResult,
        calculatedNeeds: needs,
        address: userProfile.address
      };
      
      console.log('🔍 About to call generateAIRecommendation with:');
      console.log('📊 completeProfile:', completeProfile);
      console.log('📦 recommendations:', serviceType === 'both' ? structured.combined : recs.slice(0, 3));
      console.log('🎯 serviceType:', serviceType || 'broadband');
      
      // Ensure GPT always gets recommendations to work with
      let recommendationsForGPT = recs.slice(0, 3);
      if (serviceType === 'both') {
        // For "both" service type, create a simple combination from top broadband + top TV
        const topBroadband = broadbandRecs[0];
        const topTV = tvRecs[0];
        if (topBroadband && topTV) {
          recommendationsForGPT = [{
            type: 'combination',
            broadband: topBroadband,
            tv: topTV,
            totalPrice: (topBroadband.package?.pricing?.monthly || 0) + (topTV.package?.pricing?.monthly || 0)
          }];
        }
      }
      
      console.log('📦 Sending to GPT - recommendations count:', recommendationsForGPT.length);
      
      const aiRecommendation = await generateAIRecommendation({
        userProfile: completeProfile,
        recommendations: recommendationsForGPT,
        serviceType: serviceType || 'broadband'
      });
      
      console.log('✅ generateAIRecommendation returned:', aiRecommendation);
      
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

  const handleRealUsageAccept = async (method: string, routerData?: RouterAnalysisResult) => {
    setShowRealUsage(false);
    
    if (method === 'router' && routerData) {
      // Vi har verklig router-analysdata
      setRouterAnalysisResult(routerData);
      
      // Visa resultatet i chatten
      const msg: Message = {
        id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        content: `Perfekt! Jag analyserade ditt nätverk och hittade ${routerData.devices.length} enheter. Din uppmätta hastighet är ${routerData.currentSpeed.download} Mbit/s ned och ${routerData.currentSpeed.upload} Mbit/s upp. Baserat på din faktiska användning rekommenderar jag ${routerData.recommendations.recommendedSpeed} Mbit/s.`,
        sender: 'agent',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, msg]);
      
      // Uppdatera användarens profil med verklig data
      setUserProfile(prev => ({
        ...prev,
        actualSpeed: routerData.currentSpeed,
        deviceCount: routerData.devices.length,
        peakUsage: Math.max(...routerData.usagePattern.hourlyUsage.map(h => h.usage)),
        analysisAccuracy: routerData.accuracy,
        recommendedSpeed: routerData.recommendations.recommendedSpeed
      }));
      
    } else if (method === 'router') {
      // Fallback till hastighetstestet om router-analysen misslyckades
      setShowSpeedTest(true);
      return;
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
      
      // Add small delay before continuing with dynamic questions
      setTimeout(() => {
        askNextQuestion();
      }, 500);
      return;
    }
    
    // Fortsätt med dynamiska frågor efter router-analys
    console.log('Router analysis complete, starting dynamic questions');
    setTimeout(() => {
      askNextQuestion();
    }, 1000);
  };

  const handleRealUsageDecline = () => {
    setShowRealUsage(false);
    askNextQuestion();
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
    
    // Fortsätt med dynamiska frågor
    console.log('Speed test complete, starting dynamic questions');
    setTimeout(() => askNextQuestion(), 800);
  };

  const handleSpeedTestSkip = () => {
    setShowSpeedTest(false);
    askNextQuestion();
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
    const pdfData = recommendations.slice(0, 3).map(rec => {
      const pkg = rec?.package || {};
      return ({
        provider: pkg?.providerName || 'Okänd',
        packageName: pkg?.name || 'Okänt paket',
        speed: pkg?.speed?.download ?? 0,
        price: pkg?.pricing?.campaign?.monthlyPrice ?? pkg?.pricing?.monthly ?? 0,
        bindingTime: (pkg as any)?.contractLength ?? (pkg as any)?.contract?.bindingPeriod ?? 0,
        features: pkg?.features || [],
        badges: rec?.badges || [],
        trustScore: rec?.trustScore || 70,
        reasoning: rec?.reasons?.[0] || 'Passar dina behov perfekt'
      });
    });
    
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
          {/* Welcome section - only show if no messages and not quick search mode */}
          {!quickSearchMode && messages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Hej! Vad kan jag hjälpa dig med idag?
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                Välj vad du är intresserad av så kan jag hjälpa dig hitta det bästa alternativet för just dina behov.
              </p>
              
              {/* Service type buttons */}
              <div className="flex flex-col gap-4 justify-center max-w-sm mx-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQuickReply('broadband')}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  <Wifi className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">Bredband</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQuickReply('tv')}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  <Tv className="w-5 h-5 text-purple-600" />
                  <span className="font-medium">TV</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQuickReply('both')}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#101929] text-white rounded-xl hover:bg-[#1a2332] transition-all shadow-sm"
                >
                  <Package className="w-5 h-5" />
                  <span className="font-medium">Bredband & TV</span>
                </motion.button>
              </div>
            </motion.div>
          )}
          
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
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 
                  index === 0 && message.sender === 'agent' ? 'justify-center' : 'justify-start'
                } mb-3 px-2 sm:px-0`}
              >
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className={`relative px-5 py-3 max-w-[85%] md:max-w-[75%] ${
                    message.sender === 'user' 
                      ? 'bg-[#101929] text-white rounded-[24px] rounded-br-[4px] shadow-sm' 
                      : `bg-white text-gray-900 rounded-[24px] rounded-bl-[4px] shadow-sm border border-gray-100 ${
                          index === 0 && message.sender === 'agent' ? 'first-message' : ''
                        }`
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
                        ? 'grid grid-cols-1 sm:grid-cols-2 gap-3' 
                        : message.quickReplies.length === 3
                        ? 'grid grid-cols-1 sm:grid-cols-3 gap-3'
                        : message.quickReplies.length === 4
                        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'
                        : message.quickReplies.length >= 5
                        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'
                        : 'grid grid-cols-1 sm:grid-cols-2 gap-3'
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
                            className={`flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 
                                     rounded-full text-sm font-medium transition-all
                                     min-h-[48px] sm:min-h-[52px] w-full text-center leading-tight
                                     ${isSelected 
                                       ? 'bg-[#101929] text-white border-[#101929]' 
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
                                           ? 'bg-[#101929] text-white hover:bg-[#1a2332]' 
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
                      <div className="absolute -left-[8px] bottom-0 w-4 h-4 bg-[#101929] transform rotate-45"></div>
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
                            className="w-1.5 h-1.5 bg-[#101929] rounded-full"
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
                className="flex items-center gap-3 px-8 py-4 bg-[#101929] 
                         hover:bg-[#1a2332] text-white rounded-2xl 
                         text-lg font-semibold shadow-lg transition-all"
              >
                <Package className="w-6 h-6" />
                Visa dina personliga rekommendationer
              </motion.button>
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
