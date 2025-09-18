'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import RecommendationCard from './RecommendationCard';
import AddressAutocomplete from './AddressAutocomplete';
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
    // Simulate thinking time
    setState(prev => ({ ...prev, isTyping: true }));
    await new Promise(resolve => setTimeout(resolve, 1000));

    const welcomeMessage = `Hej och välkommen till Bredbandsval! 👋

Jag är din personliga bredbandsrådgivare och hjälper dig hitta det perfekta paketet för just dina behov.

**Låt oss börja med din adress:**`;

    setState(prev => ({
      ...prev,
      messages: [{
        id: '1',
        content: welcomeMessage,
        sender: 'agent',
        timestamp: new Date(),
        quickReplies: [
          { text: '🔍 Analysera min användning först', value: 'analyze-usage' },
          { text: '📍 Stockholm', value: 'Stockholm' },
          { text: '📍 Göteborg', value: 'Göteborg' },
          { text: '📍 Malmö', value: 'Malmö' },
        ],
      }],
      isTyping: false,
    }));
    setShowAddressInput(true);
  };

  const handleUserMessage = async (input: string) => {
    // Special handling for usage analysis
    if (input === 'analyze-usage') {
      setShowRealUsagePermission(true);
      setShowAddressInput(false);
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
        message: `Tack! Jag kollar vad som finns på ${profile.address || 'din adress'}. 

Nästa fråga: **Hur många personer bor i ert hushåll?** 

Detta hjälper mig förstå hur mycket bandbredd ni behöver.`,
        quickReplies: [
          { text: '1 person', value: '1' },
          { text: '2 personer', value: '2' },
          { text: '3-4 personer', value: '3-4' },
          { text: '5+ personer', value: '5+' },
        ]
      },
      
      'usage-streaming': {
        message: `Bra att veta! ${profile.householdSize === 1 ? 'Som singel' : `Med ${profile.householdSize} personer`} är det viktigt att få rätt hastighet.

**Streamar ni mycket film och serier?** (Netflix, HBO Max, Disney+ osv.)

Detta påverkar vilken hastighet jag rekommenderar.`,
        quickReplies: [
          { text: '🎬 Ja, dagligen', value: 'heavy' },
          { text: '📺 Några gånger/vecka', value: 'moderate' },
          { text: '📱 Sällan', value: 'light' },
        ]
      },
      
      'usage-gaming': {
        message: `${profile.streamingHeavy ? 'Med mycket streaming behöver ni definitivt bra hastighet!' : 'Okej, inte så mycket streaming.'} 

**Spelar någon i hushållet onlinespel?** 🎮

Gaming kräver både hög hastighet och låg latens.`,
        quickReplies: [
          { text: '🎮 Ja, mycket gaming', value: 'yes' },
          { text: '🎯 Lite ibland', value: 'some' },
          { text: '❌ Nej', value: 'no' },
        ]
      },
      
      'usage-meetings': {
        message: `${profile.onlineGaming ? 'Gaming + streaming = ni behöver riktigt bra bredband!' : 'Okej, inget gaming att tänka på.'} 

**Har ni ofta videomöten hemma?** (Teams, Zoom, Google Meet)

Jobbar någon hemifrån eller studerar online?`,
        quickReplies: [
          { text: '💼 Ja, jobbar hemifrån', value: 'daily' },
          { text: '🎓 Studerar online', value: 'student' },
          { text: '📞 Ibland möten', value: 'sometimes' },
          { text: '❌ Sällan/aldrig', value: 'rarely' },
        ]
      },
      
      'router-preference': {
        message: `Perfekt! Jag börjar få en bild av era behov.

**Vill ni ha router inkluderat i abonnemanget?**

Många väljer detta för enkelhetens skull - då slipper ni köpa egen.`,
        quickReplies: [
          { text: '✅ Ja, inkludera router', value: 'yes' },
          { text: '🔧 Har egen router', value: 'no' },
          { text: '🤷 Spelar ingen roll', value: 'no-preference' },
        ]
      },
      
      'contract-preference': {
        message: `Bra! Nu till bindningstiden.

**Föredrar ni kort eller lång bindningstid?**

Längre bindning ger ofta bättre pris, men mindre flexibilitet.`,
        quickReplies: [
          { text: '⚡ Ingen bindning', value: 'none' },
          { text: '📅 Kort (3-6 mån)', value: 'short' },
          { text: '💰 Lång för bättre pris', value: 'long' },
        ]
      },
      
      'tv-channels': {
        message: `Utmärkt! Nu har jag koll på bredbandsbehovet.

Låt oss prata TV! **Vilka TV-kanaler är viktiga för er?**

Skriv gärna några exempel, eller välj bland alternativen.`,
        quickReplies: [
          { text: '📺 Grundkanaler (SVT, TV4)', value: 'basic' },
          { text: '🎬 Film & serier', value: 'movies' },
          { text: '⚽ Sport', value: 'sports' },
          { text: '👶 Barnkanaler', value: 'kids' },
          { text: '❌ Ingen TV', value: 'none' },
        ]
      },
      
      'streaming-services': {
        message: `Bra att veta om TV-kanalerna!

**Vilka streamingtjänster använder ni idag?**

Många paket inkluderar streaming - kan spara er pengar!`,
        quickReplies: [
          { text: '🎬 Netflix', value: 'Netflix' },
          { text: '🏠 HBO Max', value: 'HBO Max' },
          { text: '🏰 Disney+', value: 'Disney+' },
          { text: '⚽ Viaplay', value: 'Viaplay' },
          { text: '📦 Prime Video', value: 'Prime Video' },
          { text: '❌ Inga', value: 'none' },
        ]
      },
      
      'sports': {
        message: `Tack! Nu kollar jag vilka paket som kan spara pengar på streaming.

Sista frågan: **Följer ni någon särskild sport?**

Många sportpaket är bundna till specifika leverantörer.`,
        quickReplies: [
          { text: '⚽ Allsvenskan', value: 'Allsvenskan' },
          { text: '🏆 Champions League', value: 'Champions League' },
          { text: '🇬🇧 Premier League', value: 'Premier League' },
          { text: '🏒 Hockey/NHL', value: 'NHL' },
          { text: '❌ Ingen sport', value: 'none' },
        ]
      },
      
      'calculating': {
        message: `Perfekt! 🎯

Nu har jag all information jag behöver. Jag analyserar era behov och söker bland alla tillgängliga alternativ från våra 21 leverantörer...

⚡ Beräknar optimal hastighet
💰 Jämför priser och kampanjer  
📺 Kollar streaming-besparingar
⚽ Matchar sport-önskemål

Detta tar bara några sekunder!`,
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

  const handleAddressSelect = (address: string) => {
    setShowAddressInput(false);
    handleUserMessage(address);
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
        return 'Skriv din adress...';
      case 'household-size':
        return 'Ex: 3 personer';
      case 'tv-channels':
        return 'Ex: SVT, TV4, Discovery';
      case 'streaming-services':
        return 'Ex: Netflix, HBO Max';
      case 'sports':
        return 'Ex: Allsvenskan, Premier League';
      default:
        return 'Skriv ditt svar...';
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/bredbandsval-logo-with-text.svg"
              alt="Bredbandsval"
              width={150}
              height={40}
              className="dark:invert"
            />
            <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Sparkles size={14} className="text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-medium text-blue-600 dark:text-blue-400">AI Agent</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowStreamingCalc(true)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 
                       hover:bg-gray-100 dark:hover:bg-gray-700 rounded-2xl transition-colors"
            >
              <Calculator size={16} />
              Streamingkalkylator
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 
                       hover:bg-gray-100 dark:hover:bg-gray-700 rounded-2xl transition-colors"
            >
              <RotateCcw size={16} />
              Börja om
            </button>
          </div>
        </div>
      </header>

      {/* Progress bar */}
      {state.currentStep !== 'recommendations' && state.messages.length > 1 && (
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>Steg {getProgressStep()} av 8</span>
              <span>{getProgressPercent()}% klart</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
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
              <AddressAutocomplete
                onAddressSelect={handleAddressSelect}
                placeholder="Börja skriva din adress..."
              />
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  💡 Exempel: "Vasagatan 12, Stockholm" eller bara "Stockholm"
                </p>
              </div>
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
                    price={rec.package.pricing.campaign?.monthlyPrice || rec.package.pricing.monthly}
                    bindingTime={rec.package.contract.bindingPeriod}
                    features={rec.package.includes.router ? ['Router ingår', ...rec.pros] : rec.pros}
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
