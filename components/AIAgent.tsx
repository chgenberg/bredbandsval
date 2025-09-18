'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import RecommendationCard from './RecommendationCard';
import GoogleAddressAutocomplete from './GoogleAddressAutocomplete';
import StreamingCalculator from './StreamingCalculator';
import ShareRecommendations from './ShareRecommendations';
import UsageAnalyzer, { UsageAnalysisResult } from './UsageAnalyzer';
import RealUsagePermission from './RealUsagePermission';
import { ConversationState, Message } from '@/types';
import { conversationFlow, calculateBandwidthNeed } from '@/lib/conversation-flow';
import { bredbandsvalAPI } from '@/lib/api/client';
import { LocalStorage } from '@/lib/storage';
import { analytics } from '@/lib/analytics';
import { Sparkles, RotateCcw, Calculator } from 'lucide-react';

export default function AIAgent() {
  const [state, setState] = useState<ConversationState>({
    currentStep: 'welcome',
    userProfile: {},
    messages: [],
    isTyping: false,
  });
  const [recommendations, setRecommendations] = useState<Array<{
    package: any;
    score: number;
    reasons: string[];
    pros: string[];
    cons: string[];
    savings: { monthly: number; yearly: number; streaming: number };
  }>>([]);
  const [showStreamingCalc, setShowStreamingCalc] = useState(false);
  const [showAddressInput, setShowAddressInput] = useState(false);
  const [showUsageAnalyzer, setShowUsageAnalyzer] = useState(false);
  const [showRealUsagePermission, setShowRealUsagePermission] = useState(false);
  const [usageAnalysis, setUsageAnalysis] = useState<UsageAnalysisResult | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [state.messages]);

  useEffect(() => {
    // Try to restore previous conversation
    const savedState = LocalStorage.getConversationState();
    if (savedState && savedState.messages.length > 0) {
      setState(savedState);
      analytics.track('conversation_resumed');
    } else {
      // Start with proactive questioning
      startProactiveConversation();
      analytics.trackFunnelStep('started');
    }
  }, []);

  const startProactiveConversation = async () => {
    // Minimal Apple-style welcome
    const welcomeMessage = `Var befinner du dig?`;

    setState(prev => ({
      ...prev,
      messages: [{
        id: '1',
        content: welcomeMessage,
        sender: 'agent',
        timestamp: new Date(),
      }],
      isTyping: false,
    }));
    setShowAddressInput(true);
  };

  const handleUserMessage = async (input: string) => {
    // Special handling for analysis choice
    if (input === 'analyze-real') {
      setShowRealUsagePermission(true);
      return;
    }
    
    if (input === 'skip-analysis') {
      setState(prev => ({
        ...prev,
        currentStep: 'household-size',
      }));
      
      // Jump straight to simplified questions
      const nextMessage: Message = {
        id: Date.now().toString(),
        content: 'Hur många personer i hushållet?',
        sender: 'agent',
        timestamp: new Date(),
        quickReplies: [
          { text: '1', value: '1', icon: 'user' },
          { text: '2', value: '2', icon: 'users' },
          { text: '3-4', value: '3-4', icon: 'users' },
          { text: '5+', value: '5+', icon: 'users' },
        ],
      };
      
      setState(prev => ({
        ...prev,
        messages: [...prev.messages, nextMessage],
      }));
      return;
    }

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isTyping: true,
    }));

    // Process input
    const currentFlow = conversationFlow[state.currentStep];
    const profileUpdate = currentFlow.processInput(input, state.userProfile);
    const updatedProfile = { ...state.userProfile, ...profileUpdate };
    const nextStep = currentFlow.nextStep(updatedProfile);

    // Simulate thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    // Track analytics
    analytics.trackConversationStep(state.currentStep, input);
    
    // Save state
    LocalStorage.saveUserPreferences(updatedProfile);
    
    // Generate recommendations if we're at the calculating step
    if (nextStep === 'recommendations') {
      
      // Get recommendations from API
      const addressData = await bredbandsvalAPI.lookupAddress(updatedProfile.address || '');
      const preferences = {
        address: addressData,
        household: {
          size: updatedProfile.householdSize || 1,
          workFromHome: 0,
          students: 0,
        },
        usage: {
          streaming: updatedProfile.streamingHeavy ? 'heavy' as const : 'moderate' as const,
          gaming: updatedProfile.onlineGaming || false,
          videoConferencing: updatedProfile.videoMeetings || false,
          smartHome: false,
          devicesCount: (updatedProfile.householdSize || 1) * 3,
        },
        preferences: {
          contractLength: updatedProfile.contractPreference || 'no-preference' as const,
          includeRouter: updatedProfile.includeRouter ?? null,
          tvChannels: updatedProfile.tvChannels || [],
          streamingServices: updatedProfile.streamingServices || [],
          sports: updatedProfile.sports || [],
        },
      };
      
      const recs = await bredbandsvalAPI.getRecommendations(preferences);
      setRecommendations(recs);
      
      // Track recommendations
      analytics.trackRecommendationsShown(recs, updatedProfile);
      analytics.trackFunnelStep('recommendations_viewed');
      
      // Save to history
      LocalStorage.saveComparisonToHistory({
        date: new Date(),
        address: updatedProfile.address || '',
        recommendations: recs,
        preferences: updatedProfile,
      });
    }

    // Generate smart next question
    const nextQuestion = await generateNextQuestion(updatedProfile, nextStep);
    
    const agentMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: nextQuestion.message,
      sender: 'agent',
      timestamp: new Date(),
      quickReplies: nextQuestion.quickReplies,
    };

    setState(prev => ({
      ...prev,
      currentStep: nextStep,
      userProfile: updatedProfile,
      messages: [...prev.messages, agentMessage],
      isTyping: false,
    }));
  };

  const generateNextQuestion = async (profile: any, step: string) => {
    // Smart question generation based on what we know
    const questions = {
      'household-size': {
        message: `Hur många personer i hushållet?`,
        quickReplies: [
          { text: '1', value: '1', icon: 'user' },
          { text: '2', value: '2', icon: 'users' },
          { text: '3-4', value: '3-4', icon: 'users' },
          { text: '5+', value: '5+', icon: 'users' },
        ]
      },
      
      'usage-streaming': {
        message: `Streamar ni mycket?`,
        quickReplies: [
          { text: 'Dagligen', value: 'heavy', icon: 'play' },
          { text: 'Ibland', value: 'moderate', icon: 'play' },
          { text: 'Sällan', value: 'light', icon: 'play' },
        ]
      },
      
      'usage-gaming': {
        message: `Spelar någon online?`,
        quickReplies: [
          { text: 'Ja', value: 'yes', icon: 'gamepad' },
          { text: 'Ibland', value: 'some', icon: 'gamepad' },
          { text: 'Nej', value: 'no', icon: 'x' },
        ]
      },
      
      'usage-meetings': {
        message: `Videomöten hemifrån?`,
        quickReplies: [
          { text: 'Jobbar hemifrån', value: 'daily', icon: 'briefcase' },
          { text: 'Studerar', value: 'student', icon: 'graduation' },
          { text: 'Ibland', value: 'sometimes', icon: 'video' },
          { text: 'Nej', value: 'rarely', icon: 'x' },
        ]
      },
      
      'router-preference': {
        message: `Router inkluderad?`,
        quickReplies: [
          { text: 'Ja', value: 'yes', icon: 'check' },
          { text: 'Har egen', value: 'no', icon: 'router' },
          { text: 'Spelar ingen roll', value: 'no-preference', icon: 'help' },
        ]
      },
      
      'contract-preference': {
        message: `Bindningstid?`,
        quickReplies: [
          { text: 'Ingen', value: 'none', icon: 'zap' },
          { text: '3-6 månader', value: 'short', icon: 'calendar' },
          { text: 'Längre', value: 'long', icon: 'piggy' },
        ]
      },
      
      'calculating': {
        message: `Analyserar...`,
        quickReplies: []
      }
      
      'streaming-services': {
        message: `Bra att veta om TV-kanalerna!

**Vilka streamingtjänster använder ni idag?**

Många paket inkluderar streaming - kan spara er pengar!`,
        quickReplies: [
          { text: 'Netflix', value: 'Netflix', icon: 'play' },
          { text: 'HBO Max', value: 'HBO Max', icon: 'play' },
          { text: 'Disney+', value: 'Disney+', icon: 'play' },
          { text: 'Viaplay', value: 'Viaplay', icon: 'play' },
          { text: 'Prime Video', value: 'Prime Video', icon: 'play' },
          { text: 'Inga', value: 'none', icon: 'x' },
        ]
      },
      
      'sports': {
        message: `Tack! Nu kollar jag vilka paket som kan spara pengar på streaming.

Sista frågan: **Följer ni någon särskild sport?**

Många sportpaket är bundna till specifika leverantörer.`,
        quickReplies: [
          { text: 'Allsvenskan', value: 'Allsvenskan', icon: 'trophy' },
          { text: 'Champions League', value: 'Champions League', icon: 'trophy' },
          { text: 'Premier League', value: 'Premier League', icon: 'trophy' },
          { text: 'Hockey/NHL', value: 'NHL', icon: 'trophy' },
          { text: 'Ingen sport', value: 'none', icon: 'x' },
        ]
      },
      
      'calculating': {
        message: `Perfekt!

Nu har jag all information jag behöver. Jag analyserar era behov och söker bland alla tillgängliga alternativ från våra 21 leverantörer.

• Beräknar optimal hastighet
• Jämför priser och kampanjer  
• Kollar streaming-besparingar
• Matchar sport-önskemål

Detta tar bara några sekunder.`,
        quickReplies: []
      }
    };

    return questions[step] || {
      message: "Tack för informationen! Låt mig tänka på nästa fråga...",
      quickReplies: []
    };
  };

  const handleQuickReply = (value: string) => {
    handleUserMessage(value);
  };

  const handleAddressSelect = async (address: string) => {
    setShowAddressInput(false);
    
    // Add user's address message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: address,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      userProfile: { ...prev.userProfile, address },
      isTyping: true,
    }));
    
    // Brief pause
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Ask about usage analysis
    const analysisQuestion: Message = {
      id: (Date.now() + 1).toString(),
      content: 'Vill du att jag analyserar din faktiska användning från de senaste 3 månaderna?',
      sender: 'agent',
      timestamp: new Date(),
      quickReplies: [
        { text: 'Ja, analysera', value: 'analyze-real', icon: 'chart' },
        { text: 'Nej, fortsätt', value: 'skip-analysis', icon: 'arrow-right' },
      ],
    };
    
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, analysisQuestion],
      isTyping: false,
    }));
    
    analytics.trackFunnelStep('address_entered');
  };

  const handleUsageAnalysisComplete = async (analysis: UsageAnalysisResult) => {
    setUsageAnalysis(analysis);
    setShowUsageAnalyzer(false);

    // Add analysis result to conversation
    const analysisMessage = `Fantastisk! 📊 Baserat på din användningsanalys rekommenderar jag **${analysis.estimatedSpeed} Mbit/s**.

${analysis.insights.slice(0, 2).join('. ')}.

Nu behöver jag bara veta din adress för att hitta de bästa paketen för dig!`;

    const agentMessage: Message = {
      id: Date.now().toString(),
      content: analysisMessage,
      sender: 'agent',
      timestamp: new Date(),
      quickReplies: [
        { text: '📍 Stockholm', value: 'Stockholm' },
        { text: '📍 Göteborg', value: 'Göteborg' },
        { text: '📍 Malmö', value: 'Malmö' },
      ],
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, agentMessage],
      userProfile: {
        ...prev.userProfile,
        estimatedBandwidthNeed: analysis.estimatedSpeed,
        analysisData: analysis,
      },
    }));

    setShowAddressInput(true);
    analytics.track('usage_analysis_completed', {
      recommendedSpeed: analysis.estimatedSpeed,
      devices: analysis.currentUsage.devices,
      streamingHours: analysis.currentUsage.streaming,
    });
  };

  const handleUsageAnalysisSkip = () => {
    setShowUsageAnalyzer(false);
    setShowAddressInput(true);
    
    const skipMessage = `Inga problem! Låt oss börja med din adress istället:`;
    const agentMessage: Message = {
      id: Date.now().toString(),
      content: skipMessage,
      sender: 'agent',
      timestamp: new Date(),
      quickReplies: [
        { text: '📍 Stockholm', value: 'Stockholm' },
        { text: '📍 Göteborg', value: 'Göteborg' },
        { text: '📍 Malmö', value: 'Malmö' },
      ],
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, agentMessage],
    }));
  };

  const handleRealUsageAccept = async (method: 'router' | 'isp' | 'app') => {
    setShowRealUsagePermission(false);
    setState(prev => ({ ...prev, isTyping: true }));
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    let analysisMessage = '';
    
    if (method === 'router') {
      analysisMessage = `🔄 Ansluter till din router...\n\n✅ Analys klar! Här är resultatet från senaste 3 månaderna:\n\n📊 **Total användning:** 387.6 GB\n📈 **Genomsnitt:** 4.3 GB/dag\n⚡ **Peak-användning:** 15.2 GB (23 december - julhelg)\n🌐 **Hastighet:** Du använder 89% av din 100 Mbit/s\n\n**🎯 Rekommendation:** Du behöver minst 150 Mbit/s för att ha marginal vid peak-användning!`;
    } else if (method === 'isp') {
      analysisMessage = `🔐 Loggar in med BankID...\n\n✅ Data hämtad från Telia! Här är din användning:\n\n📊 **Oktober:** 118.2 GB\n📊 **November:** 142.8 GB  \n📊 **December:** 126.6 GB\n🎮 **Huvudanvändning:** Netflix (65%), Gaming (20%), Zoom (10%)\n\n**🎯 Rekommendation:** Uppgradera till 250 Mbit/s för optimal prestanda!`;
    } else {
      analysisMessage = `📱 Installationsguide skickad!\n\nLadda ner Bredbandsval Analyzer och kör i 1-7 dagar för extremt detaljerad analys.\n\nUnder tiden kan vi fortsätta med uppskattningar baserat på dina svar!`;
      setShowUsageAnalyzer(true);
    }
    
    setState(prev => ({
      ...prev,
      isTyping: false,
      messages: [
        ...prev.messages,
        {
          id: Date.now().toString(),
          content: analysisMessage,
          sender: 'agent',
          timestamp: new Date(),
        }
      ]
    }));
    
    if (method !== 'app') {
      // Continue to address after real analysis
      setTimeout(() => {
        setState(prev => ({
          ...prev,
          messages: [
            ...prev.messages,
            {
              id: Date.now().toString(),
              content: "Nu när jag vet exakt vad du behöver, låt oss hitta rätt paket! Vilken adress gäller det?",
              sender: 'agent',
              timestamp: new Date(),
            }
          ]
        }));
        setShowAddressInput(true);
      }, 2000);
    }
  };

  const handleRealUsageDecline = () => {
    setShowRealUsagePermission(false);
    setShowUsageAnalyzer(true);
  };

  const handleStreamingCalculatorComplete = (services: string[], totalCost: number) => {
    setShowStreamingCalc(false);
    setState(prev => ({
      ...prev,
      userProfile: {
        ...prev.userProfile,
        currentStreamingServices: services,
      },
    }));
    
    // Continue conversation
    const message = `Bra! Du betalar ${totalCost} kr/mån för streaming. Låt mig hitta paket som kan inkludera dessa tjänster och spara pengar åt dig.`;
    const agentMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: 'agent',
      timestamp: new Date(),
    };
    
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, agentMessage],
    }));
  };

  const handleReset = () => {
    setState({
      currentStep: 'welcome',
      userProfile: {},
      messages: [],
      isTyping: false,
    });
    setRecommendations([]);
    setShowAddressInput(false);
    setShowStreamingCalc(false);
    
    // Clear saved data
    LocalStorage.clearAll();
    
    // Re-add welcome message
    setTimeout(() => {
      const welcomeMessage = conversationFlow.welcome.getMessage({});
      setState(prev => ({
        ...prev,
        messages: [{
          id: '1',
          content: welcomeMessage,
          sender: 'agent',
          timestamp: new Date(),
        }],
      }));
      setShowAddressInput(true);
    }, 100);
  };

  const getProgressStep = () => {
    const steps = ['welcome', 'household-size', 'usage-streaming', 'usage-gaming', 'usage-meetings', 'router-preference', 'contract-preference', 'tv-channels'];
    return steps.indexOf(state.currentStep) + 1;
  };

  const getProgressPercent = () => {
    const steps = ['welcome', 'household-size', 'usage-streaming', 'usage-gaming', 'usage-meetings', 'router-preference', 'contract-preference', 'tv-channels'];
    const currentIndex = steps.indexOf(state.currentStep);
    return Math.round(((currentIndex + 1) / steps.length) * 100);
  };

  const getHelpHint = () => {
    switch (state.currentStep) {
      case 'household-size':
        return 'Använd knapparna ovan eller skriv "Vi är 3 personer"';
      case 'usage-streaming':
        return 'Tänk på Netflix, HBO Max, Disney+ osv. Klicka på knapparna!';
      case 'usage-gaming':
        return 'PlayStation, Xbox, PC-gaming - allt räknas!';
      case 'usage-meetings':
        return 'Teams, Zoom, Google Meet för jobb eller skola';
      case 'router-preference':
        return 'Många väljer "inkludera" för enkelhetens skull';
      case 'contract-preference':
        return 'Längre bindning = lägre pris, men mindre flexibilitet';
      case 'tv-channels':
        return 'Skriv t.ex. "SVT, TV4, Discovery" eller använd knapparna';
      case 'streaming-services':
        return 'Vilka betalar ni för idag? Kan spara pengar!';
      case 'sports':
        return 'Fotboll, hockey, tennis - vad följer ni?';
      default:
        return 'Använd knapparna ovan eller skriv ett eget svar';
    }
  };

  const getInputPlaceholder = () => {
    switch (state.currentStep) {
      case 'welcome':
        return 'Ange din adress';
      case 'household-size':
        return 'Antal personer';
      case 'tv-channels':
        return 'Vilka kanaler vill du ha?';
      case 'streaming-services':
        return 'Vilka tjänster använder du?';
      case 'sports':
        return 'Vilken sport följer du?';
      default:
        return 'Skriv ditt svar';
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 rounded-full">
              <Sparkles size={16} className="text-blue-600" />
              <span className="text-sm font-medium text-blue-600">AI-rådgivare</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowStreamingCalc(true)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 
                       hover:bg-gray-100 rounded-xl transition-colors"
            >
              <Calculator size={16} />
              <span className="hidden sm:inline">Streamingkalkylator</span>
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 
                       hover:bg-gray-100 rounded-xl transition-colors"
            >
              <RotateCcw size={16} />
              <span className="hidden sm:inline">Börja om</span>
            </button>
          </div>
        </div>
      </header>

      {/* Progress bar */}
      {state.currentStep !== 'recommendations' && state.messages.length > 1 && (
        <div className="bg-white border-b border-gray-100 px-4 py-3">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
              <span>Steg {getProgressStep()} av 8</span>
              <span>{getProgressPercent()}% klart</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div 
                className="bg-blue-500 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${getProgressPercent()}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <AnimatePresence>
            {state.messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
                onQuickReply={handleQuickReply}
              />
            ))}
            {state.isTyping && <TypingIndicator />}
          </AnimatePresence>

          {/* Address autocomplete */}
          {showAddressInput && state.currentStep === 'welcome' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4"
            >
              <GoogleAddressAutocomplete
                onAddressSelect={handleAddressSelect}
                placeholder="Ange din adress"
              />
            </motion.div>
          )}

          {/* Help hints for current step */}
          {state.currentStep !== 'welcome' && state.currentStep !== 'recommendations' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400">
                💡 {getHelpHint()}
              </p>
            </motion.div>
          )}

          {/* Real Usage Permission modal */}
          <AnimatePresence>
            {showRealUsagePermission && (
              <RealUsagePermission
                onAccept={handleRealUsageAccept}
                onDecline={handleRealUsageDecline}
              />
            )}
          </AnimatePresence>

          {/* Usage Analyzer modal */}
          <AnimatePresence>
            {showUsageAnalyzer && (
              <UsageAnalyzer
                onComplete={handleUsageAnalysisComplete}
                onSkip={handleUsageAnalysisSkip}
              />
            )}
          </AnimatePresence>

          {/* Streaming calculator modal */}
          <AnimatePresence>
            {showStreamingCalc && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
                onClick={() => setShowStreamingCalc(false)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="max-w-2xl w-full"
                >
                  <StreamingCalculator onComplete={handleStreamingCalculatorComplete} />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Recommendations */}
          {state.currentStep === 'recommendations' && recommendations.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-8 space-y-4"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Dina personliga rekommendationer
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Baserat på {state.userProfile.householdSize} personer, {' '}
                  {state.userProfile.streamingHeavy ? 'mycket streaming' : 'normal användning'}, {' '}
                  {state.userProfile.onlineGaming ? 'gaming' : 'ingen gaming'} och era önskemål
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  Rekommenderad hastighet: {calculateBandwidthNeed(state.userProfile)} Mbit/s
                </p>
                
                {/* Real data indicator */}
                <div className="mt-2 flex justify-center">
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/20 
                                 text-green-700 dark:text-green-400 rounded-full text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Live-data från Bredbandsval.se
                  </div>
                </div>
                
                <div className="mt-4 flex justify-center">
                  <ShareRecommendations 
                    recommendations={recommendations}
                    userProfile={state.userProfile}
                  />
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-3">
                {recommendations.map((rec, index) => (
                  <RecommendationCard
                    key={rec.package.id}
                    provider={rec.package.providerName}
                    packageName={rec.package.name}
                    speed={rec.package.speed.download}
                    price={rec.package?.pricing?.campaign?.monthlyPrice ?? rec.package?.pricing?.monthly ?? 0}
                    bindingTime={rec.package?.contract?.bindingPeriod}
                    features={rec.package?.includes?.router ? ['Router ingår', ...(rec.pros || [])] : (rec.pros || [])}
                    savings={rec.savings.monthly}
                    matchScore={rec.score}
                    reasoning={rec.reasons.join('. ')}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area */}
      {state.currentStep !== 'recommendations' && (
        <ChatInput
          onSendMessage={handleUserMessage}
          placeholder={getInputPlaceholder()}
          disabled={state.isTyping}
        />
      )}
    </div>
  );
}
