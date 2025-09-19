'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, MessageCircle, Wifi, Tv, Package, Star, Check, ChevronRight, Send, Mail } from 'lucide-react';
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
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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
      const aiAnswer = await generateFollowUpAnswer({
        question: chatInput,
        recommendations: Object.values(recommendations).flat(),
        userProfile,
        conversationContext: aiRecommendation
      });
      
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

  const handleSendEmail = async () => {
    // Simulera email-skickande
    console.log('Skickar email till kundtjänst:', emailForm);
    
    // Här skulle du integrera med er email-service
    // await fetch('/api/customer-support-email', { method: 'POST', body: JSON.stringify(emailForm) });
    
    // Visa bekräftelse
    const confirmationMessage = {
      id: `msg-${Date.now()}`,
      content: '<p><strong>Tack!</strong> Ditt meddelande har skickats till vår kundtjänst. Vi återkommer inom 24 timmar.</p>',
      sender: 'agent' as const,
      timestamp: new Date()
    };
    setChatMessages(prev => [...prev, confirmationMessage]);
    
    // Rensa formulär och stäng
    setEmailForm({ name: '', email: '', subject: '', message: '' });
    setShowEmailForm(false);
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
            className="fixed inset-2 sm:inset-4 md:inset-8 lg:inset-16 bg-white rounded-2xl sm:rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[calc(100vh-1rem)] sm:max-h-[calc(100vh-2rem)]"
          >
            {/* Header */}
            <div className="relative bg-[#101929] px-4 sm:px-6 py-6 sm:py-8 text-white flex-shrink-0">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center text-center mb-4 sm:mb-6">
                <Image
                  src="/val2.png"
                  alt="Valle AI Banner"
                  width={160}
                  height={64}
                  className="object-contain mb-3 sm:mb-4 w-32 sm:w-40 md:w-48"
                />
                <p className="text-white/80 text-sm sm:text-base md:text-lg px-4">Personligt anpassad för {userProfile.address}</p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6">
                <button
                  onClick={onPrint}
                  className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span className="text-sm font-medium">Skriv ut</span>
                </button>
                <button
                  onClick={() => setShowChat(true)}
                  className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-white text-[#101929] hover:bg-gray-50 rounded-xl transition-colors"
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
                <div className="px-4 sm:px-6 py-4 sm:py-8">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-2 sm:p-3 flex gap-1 sm:gap-3 overflow-x-auto">
                      {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`
                              flex-1 flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all whitespace-nowrap text-xs sm:text-sm
                              ${activeTab === tab.id 
                                ? 'bg-[#101929] text-white shadow-sm' 
                                : 'text-gray-600 hover:bg-gray-50'
                              }
                            `}
                          >
                            <Icon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span className="hidden sm:inline">{tab.label}</span>
                            <span className="sm:hidden">
                              {tab.id === 'combined' ? 'Kombo' : tab.id === 'broadband' ? 'Bredband' : 'TV'}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Recommendations */}
              <div className="px-4 sm:px-6 py-6 sm:py-12">
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
                          reasoning=""
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
              <div className="px-4 sm:px-6 py-6 sm:py-12 bg-gradient-to-b from-gray-50 to-white">
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
                  className="absolute inset-0 sm:inset-y-0 sm:right-0 sm:left-auto w-full sm:w-96 bg-white shadow-2xl flex flex-col z-10"
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
                                <div 
                                  className="text-sm"
                                  dangerouslySetInnerHTML={{ __html: message.content }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Chat input */}
                    <div className="p-4 border-t border-gray-200">
                      {!showEmailForm ? (
                        <>
                          <div className="flex gap-2 mb-3">
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
                          
                          {/* Email customer service button */}
                          <button
                            onClick={() => setShowEmailForm(true)}
                            className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200"
                          >
                            <Mail className="w-4 h-4" />
                            Mejla kundtjänst
                          </button>
                        </>
                      ) : (
                        /* Email form */
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-gray-900">Kontakta kundtjänst</h4>
                            <button
                              onClick={() => setShowEmailForm(false)}
                              className="text-gray-400 hover:text-gray-600"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2">
                            <input
                              type="text"
                              placeholder="Ditt namn"
                              value={emailForm.name}
                              onChange={(e) => setEmailForm(prev => ({ ...prev, name: e.target.value }))}
                              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#101929]"
                            />
                            <input
                              type="email"
                              placeholder="Din email"
                              value={emailForm.email}
                              onChange={(e) => setEmailForm(prev => ({ ...prev, email: e.target.value }))}
                              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#101929]"
                            />
                          </div>
                          
                          <input
                            type="text"
                            placeholder="Ämne"
                            value={emailForm.subject}
                            onChange={(e) => setEmailForm(prev => ({ ...prev, subject: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#101929]"
                          />
                          
                          <textarea
                            placeholder="Ditt meddelande..."
                            value={emailForm.message}
                            onChange={(e) => setEmailForm(prev => ({ ...prev, message: e.target.value }))}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#101929] resize-none"
                          />
                          
                          <button
                            onClick={handleSendEmail}
                            disabled={!emailForm.name || !emailForm.email || !emailForm.message}
                            className="w-full px-3 py-2 bg-[#101929] text-white rounded-lg hover:bg-[#1a2332] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
                          >
                            Skicka meddelande
                          </button>
                        </div>
                      )}
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
