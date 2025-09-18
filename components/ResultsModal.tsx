'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, MessageCircle, Wifi, Tv, Package, Star, Check, ChevronRight, Send } from 'lucide-react';
import Image from 'next/image';
import { ServiceType, UserProfile } from '@/types';
import RecommendationCard from './RecommendationCard';
import SmartPairingCard from './SmartPairingCard';
import { AnalysisCards } from './AnalysisCards';
import { SimpleCombinationView } from './SimpleCombinationView';
import { generateFollowUpAnswer } from '@/lib/ai/openai-client';

interface ResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: ServiceType;
  recommendations: any;
  smartPairs?: any[];
  aiRecommendation: string;
  userProfile: UserProfile;
  onPrint: () => void;
  onChatOpen: () => void;
}

export function ResultsModal({
  isOpen,
  onClose,
  serviceType,
  recommendations,
  smartPairs,
  aiRecommendation,
  userProfile,
  onPrint,
  onChatOpen
}: ResultsModalProps) {
  const [activeTab, setActiveTab] = useState<'broadband' | 'tv' | 'combined'>(
    serviceType === 'both' ? 'combined' : serviceType === 'tv' ? 'tv' : 'broadband'
  );
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{id: string, content: string, sender: 'user' | 'agent', timestamp: Date}>>([]);
  const [chatInput, setChatInput] = useState('');

  // Determine which tabs to show based on service type
  const tabs = serviceType === 'both' 
    ? [
        { id: 'combined', label: 'Rekommenderad kombination', icon: Package },
        { id: 'broadband', label: 'Bredband', icon: Wifi },
        { id: 'tv', label: 'TV', icon: Tv }
      ]
    : serviceType === 'broadband'
    ? [{ id: 'broadband', label: 'Bredband', icon: Wifi }]
    : [{ id: 'tv', label: 'TV', icon: Tv }];

  // Filter recommendations by type
  const broadbandPackages = recommendations.broadband || [];
  const tvPackages = recommendations.tv || [];

  const handleSendChatMessage = async () => {
    if (!chatInput.trim()) return;
    
    const userMessage = {
      id: `msg-${Date.now()}`,
      content: chatInput,
      sender: 'user' as const,
      timestamp: new Date()
    };
    
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    
    // Generate AI response using the real AI function
    try {
      const aiAnswer = await generateFollowUpAnswer(
        chatInput,
        recommendations,
        userProfile,
        aiRecommendation
      );
      
      const aiResponse = {
        id: `msg-${Date.now()}`,
        content: aiAnswer,
        sender: 'agent' as const,
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      const errorResponse = {
        id: `msg-${Date.now()}`,
        content: 'Ursäkta, jag hade problem att svara på din fråga. Kan du försöka igen?',
        sender: 'agent' as const,
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, errorResponse]);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="relative bg-[#101929] px-6 py-8 text-white">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center text-center mb-6">
                <Image
                  src="/val2.png"
                  alt="Valle AI Banner"
                  width={200}
                  height={80}
                  className="object-contain mb-4"
                />
                <p className="text-white/80 text-lg">Personligt anpassad för {userProfile.address}</p>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={onPrint}
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span className="text-sm font-medium">Skriv ut</span>
                </button>
                <button
                  onClick={() => setShowChat(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-[#101929] hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Har du frågor?</span>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {/* Tabs */}
              {tabs.length > 1 && (
                <div className="px-6 py-8">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 flex gap-3">
                      {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`
                              flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all
                              ${activeTab === tab.id 
                                ? 'bg-[#101929] text-white shadow-sm' 
                                : 'text-gray-600 hover:bg-gray-50'
                              }
                            `}
                          >
                            <Icon className="w-4 h-4" />
                            <span>{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Recommendations */}
              <div className="px-6 py-12">
                <div className="max-w-6xl mx-auto">
                  <AnimatePresence mode="wait">
                    {/* Combined view for both services */}
                    {activeTab === 'combined' && broadbandPackages.length > 0 && tvPackages.length > 0 && (
                      <motion.div
                        key="combined"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                      >
                        <SimpleCombinationView
                          broadbandPackage={broadbandPackages[0]}
                          tvPackage={tvPackages[0]}
                          totalPrice={(broadbandPackages[0]?.price || 0) + (tvPackages[0]?.price || 0)}
                          reasoning="De bästa alternativen för bredband och TV baserat på dina svar"
                        />
                      </motion.div>
                    )}

                    {/* Broadband view */}
                    {activeTab === 'broadband' && (
                      <motion.div
                        key="broadband"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                      >
                        {broadbandPackages.map((pkg: any, index: number) => (
                          <RecommendationCard
                            key={index}
                            {...pkg}
                            isTopChoice={index === 0}
                          />
                        ))}
                      </motion.div>
                    )}

                    {/* TV view */}
                    {activeTab === 'tv' && (
                      <motion.div
                        key="tv"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                      >
                        {tvPackages.map((pkg: any, index: number) => (
                          <RecommendationCard
                            key={index}
                            {...pkg}
                            isTopChoice={index === 0}
                          />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* AI Recommendation - Card Layout - Moved to bottom */}
              <div className="px-6 py-12 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-6xl mx-auto">
                  <AnalysisCards aiRecommendation={aiRecommendation} />
                </div>
              </div>
            </div>

            {/* Chat Sidebar */}
            <AnimatePresence>
              {showChat && (
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  className="absolute inset-y-0 right-0 w-full md:w-96 bg-white shadow-2xl flex flex-col"
                >
                  <div className="flex items-center justify-between p-4 border-b">
                    <h3 className="font-semibold text-gray-900">Ställ en fråga</h3>
                    <button
                      onClick={() => setShowChat(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                  <div className="flex-1 flex flex-col">
                    {/* Chat messages */}
                    <div className="flex-1 p-4 overflow-y-auto max-h-96">
                      {chatMessages.length === 0 ? (
                        <div className="text-center py-8">
                          <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                          <p className="text-gray-500 mb-2">Ställ en fråga till Valle</p>
                          <p className="text-sm text-gray-400">Fråga om rekommendationerna, priser eller vad som helst!</p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {chatMessages.map((message) => (
                            <div
                              key={message.id}
                              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                              <div
                                className={`max-w-[80%] px-3 py-2 rounded-2xl ${
                                  message.sender === 'user'
                                    ? 'bg-[#101929] text-white rounded-br-sm'
                                    : 'bg-gray-100 text-gray-900 rounded-bl-sm'
                                }`}
                              >
                                <p className="text-sm">{message.content}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Chat input */}
                    <div className="p-4 border-t border-gray-200">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={chatInput}
                          onChange={(e) => setChatInput(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              handleSendChatMessage();
                            }
                          }}
                          placeholder="Ställ en fråga till Valle..."
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#101929] focus:border-transparent text-sm"
                        />
                        <button
                          onClick={handleSendChatMessage}
                          disabled={!chatInput.trim()}
                          className="px-3 py-2 bg-[#101929] text-white rounded-lg hover:bg-[#1a2332] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
