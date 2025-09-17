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
      // Initial welcome message
      const welcomeMessage = conversationFlow.welcome.getMessage({});
      const quickReplies = conversationFlow.welcome.getQuickReplies?.();
      
      setState(prev => ({
        ...prev,
        messages: [{
          id: '1',
          content: welcomeMessage,
          sender: 'agent',
          timestamp: new Date(),
          quickReplies,
        }],
      }));
      
      analytics.trackFunnelStep('started');
      setShowAddressInput(true);
    }
  }, []);

  const handleUserMessage = async (input: string) => {
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

    // Get next message
    const nextFlow = conversationFlow[nextStep];
    const agentMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: nextFlow.getMessage(updatedProfile),
      sender: 'agent',
      timestamp: new Date(),
      quickReplies: nextFlow.getQuickReplies?.(),
    };

    setState(prev => ({
      ...prev,
      currentStep: nextStep,
      userProfile: updatedProfile,
      messages: [...prev.messages, agentMessage],
      isTyping: false,
    }));
  };

  const handleQuickReply = (value: string) => {
    handleUserMessage(value);
  };

  const handleAddressSelect = (address: string) => {
    setShowAddressInput(false);
    handleUserMessage(address);
    analytics.trackFunnelStep('address_entered');
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
                       hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Calculator size={16} />
              Streamingkalkylator
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 
                       hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <RotateCcw size={16} />
              Börja om
            </button>
          </div>
        </div>
      </header>

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
            </motion.div>
          )}

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
