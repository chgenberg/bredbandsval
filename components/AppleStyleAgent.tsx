'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, BarChart3, User, Users, Play, Gamepad2, 
  Briefcase, Video, Router, Zap, ArrowRight
} from 'lucide-react';
import GoogleAddressAutocomplete from './GoogleAddressAutocomplete';
import RealUsagePermission from './RealUsagePermission';
import { analytics } from '@/lib/analytics';
import { bredbandsvalAPI } from '@/lib/api/client';

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
}

export default function AppleStyleAgent() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState('address');
  const [userProfile, setUserProfile] = useState<any>({});
  const [showAddressInput, setShowAddressInput] = useState(true);
  const [showRealUsage, setShowRealUsage] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Start with minimal question
    const initialMessage: Message = {
      id: '1',
      content: 'Var befinner du dig?',
      sender: 'agent',
      timestamp: new Date(),
    };
    setMessages([initialMessage]);
  }, []);

  const handleAddressSelect = async (address: string) => {
    setShowAddressInput(false);
    
    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      content: address,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMsg]);
    setUserProfile(prev => ({ ...prev, address }));
    setIsTyping(true);
    
    // Brief pause
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Ask about usage analysis
    const analysisQuestion: Message = {
      id: (Date.now() + 1).toString(),
      content: 'Analysera din användning?',
      sender: 'agent',
      timestamp: new Date(),
      quickReplies: [
        { text: 'Ja', value: 'analyze', icon: 'chart' },
        { text: 'Nej', value: 'skip', icon: 'arrow-right' },
      ],
    };
    
    setMessages(prev => [...prev, analysisQuestion]);
    setIsTyping(false);
    setCurrentStep('usage-choice');
    
    analytics.trackFunnelStep('address_entered');
  };

  const handleQuickReply = async (value: string) => {
    // Add user click as message
    const userMsg: Message = {
      id: Date.now().toString(),
      content: value === 'analyze' ? 'Ja' : value === 'skip' ? 'Nej' : value,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMsg]);
    
    if (value === 'analyze') {
      setShowRealUsage(true);
      return;
    }
    
    if (value === 'skip') {
      await askNextQuestion('household');
      return;
    }
    
    // Process other responses
    await processAnswer(value);
  };

  const askNextQuestion = async (step: string) => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const questions = {
      'household': {
        text: 'Antal personer?',
        replies: [
          { text: '1', value: '1', icon: 'user' },
          { text: '2', value: '2', icon: 'users' },
          { text: '3-4', value: '3-4', icon: 'users' },
          { text: '5+', value: '5+', icon: 'users' },
        ]
      },
      'streaming': {
        text: 'Streamar ni mycket?',
        replies: [
          { text: 'Dagligen', value: 'heavy', icon: 'play' },
          { text: 'Ibland', value: 'moderate', icon: 'play' },
          { text: 'Sällan', value: 'light', icon: 'play' },
        ]
      },
      'gaming': {
        text: 'Gaming?',
        replies: [
          { text: 'Ja', value: 'yes', icon: 'gamepad' },
          { text: 'Nej', value: 'no', icon: 'arrow-right' },
        ]
      },
      'meetings': {
        text: 'Videomöten?',
        replies: [
          { text: 'Dagligen', value: 'daily', icon: 'briefcase' },
          { text: 'Ibland', value: 'sometimes', icon: 'video' },
          { text: 'Nej', value: 'no', icon: 'arrow-right' },
        ]
      },
      'router': {
        text: 'Router inkluderad?',
        replies: [
          { text: 'Ja', value: 'yes', icon: 'router' },
          { text: 'Nej', value: 'no', icon: 'arrow-right' },
        ]
      },
      'contract': {
        text: 'Bindningstid?',
        replies: [
          { text: 'Ingen', value: 'none', icon: 'zap' },
          { text: '3-6 mån', value: 'short', icon: 'zap' },
          { text: 'Längre', value: 'long', icon: 'zap' },
        ]
      }
    };
    
    const question = questions[step];
    if (question) {
      const msg: Message = {
        id: Date.now().toString(),
        content: question.text,
        sender: 'agent',
        timestamp: new Date(),
        quickReplies: question.replies,
      };
      
      setMessages(prev => [...prev, msg]);
      setCurrentStep(step);
    }
    
    setIsTyping(false);
  };

  const processAnswer = async (value: string) => {
    // Save to profile based on current step
    const profileUpdate = {};
    
    switch (currentStep) {
      case 'household':
        profileUpdate['householdSize'] = value;
        await askNextQuestion('streaming');
        break;
      case 'streaming':
        profileUpdate['streamingHeavy'] = value === 'heavy';
        await askNextQuestion('gaming');
        break;
      case 'gaming':
        profileUpdate['onlineGaming'] = value === 'yes';
        await askNextQuestion('meetings');
        break;
      case 'meetings':
        profileUpdate['videoMeetings'] = value === 'daily' || value === 'sometimes';
        await askNextQuestion('router');
        break;
      case 'router':
        profileUpdate['includeRouter'] = value === 'yes';
        await askNextQuestion('contract');
        break;
      case 'contract':
        profileUpdate['contractPreference'] = value;
        await calculateRecommendations();
        break;
    }
    
    setUserProfile(prev => ({ ...prev, ...profileUpdate }));
  };

  const calculateRecommendations = async () => {
    setIsTyping(true);
    
    const calcMsg: Message = {
      id: Date.now().toString(),
      content: 'Analyserar...',
      sender: 'agent',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, calcMsg]);
    
    // Call API
    const addressData = await bredbandsvalAPI.lookupAddress(userProfile.address || '');
    const preferences = {
      address: addressData,
      household: {
        size: parseInt(userProfile.householdSize) || 1,
        workFromHome: userProfile.videoMeetings ? 1 : 0,
        students: 0,
      },
      usage: {
        streaming: userProfile.streamingHeavy ? 'heavy' as const : 'moderate' as const,
        gaming: userProfile.onlineGaming || false,
        videoConferencing: userProfile.videoMeetings || false,
        smartHome: false,
        devicesCount: (parseInt(userProfile.householdSize) || 1) * 3,
      },
      preferences: {
        contractLength: userProfile.contractPreference || 'no-preference' as const,
        includeRouter: userProfile.includeRouter ?? null,
        tvChannels: [],
        streamingServices: [],
        sports: [],
      },
    };
    
    const recs = await bredbandsvalAPI.getRecommendations(preferences);
    setRecommendations(recs);
    
    // Show results
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const resultsMsg: Message = {
      id: (Date.now() + 1).toString(),
      content: `Här är dina rekommendationer:

${recs.slice(0, 3).map((rec, i) => 
  `${i + 1}. **${rec.package.providerName}** ${rec.package.speed.download} Mbit/s
     ${rec.package.pricing.campaign?.monthlyPrice || rec.package.pricing.monthly} kr/mån
     ${rec.reasons[0] || ''}`
).join('\n\n')}`,
      sender: 'agent',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, resultsMsg]);
    setIsTyping(false);
    
    analytics.trackRecommendationsShown(recs, userProfile);
  };

  const handleRealUsageAccept = async (method: string) => {
    setShowRealUsage(false);
    
    // Continue with questions after analysis
    await askNextQuestion('household');
  };

  const handleRealUsageDecline = () => {
    setShowRealUsage(false);
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
      default: return ArrowRight;
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">AI</span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">Bredbandsval AI</h3>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Online
            </p>
          </div>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-2xl mx-auto">
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
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-3`}
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className={`relative px-5 py-3 max-w-[70%] ${
                    message.sender === 'user' 
                      ? 'bg-blue-500 text-white rounded-[24px] rounded-br-[4px] shadow-sm' 
                      : 'bg-white text-gray-900 rounded-[24px] rounded-bl-[4px] shadow-sm border border-gray-100'
                  }`}
                >
                  <p className="text-[15px] leading-relaxed break-words">{message.content}</p>
                  
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
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.quickReplies.map((reply) => {
                        const Icon = getIcon(reply.icon);
                        return (
                          <motion.button
                            key={reply.value}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleQuickReply(reply.value)}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-50 
                                     rounded-full text-sm text-gray-700 font-medium 
                                     border border-gray-200 hover:border-gray-300 
                                     hover:bg-gray-100 transition-all"
                          >
                            <Icon size={14} className="text-gray-500" />
                            {reply.text}
                          </motion.button>
                        );
                      })}
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
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex justify-start mb-3"
              >
                <div className="relative px-5 py-4 bg-white rounded-[24px] rounded-bl-[4px] shadow-sm border border-gray-100">
                  <div className="flex gap-1.5">
                    <motion.div
                      className="w-2.5 h-2.5 bg-gray-400 rounded-full"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0
                      }}
                    />
                    <motion.div
                      className="w-2.5 h-2.5 bg-gray-400 rounded-full"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.2
                      }}
                    />
                    <motion.div
                      className="w-2.5 h-2.5 bg-gray-400 rounded-full"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.4
                      }}
                    />
                  </div>
                  
                  {/* Message tail */}
                  <div className="absolute -left-[8px] bottom-0 w-4 h-4 overflow-hidden">
                    <div className="absolute -right-[8px] bottom-0 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
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
    </div>
  );
}
