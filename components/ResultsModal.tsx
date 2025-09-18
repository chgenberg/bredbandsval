'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, MessageCircle, Wifi, Tv, Package, Star, Check, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { ServiceType, UserProfile } from '@/types';
import RecommendationCard from './RecommendationCard';
import SmartPairingCard from './SmartPairingCard';

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
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8 text-white">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Image
                    src="/valle.png"
                    alt="Valle AI"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Valle AI Rekommendation</h2>
                  <p className="text-blue-100">Personligt anpassad för {userProfile.address}</p>
                </div>
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
                  className="flex items-center gap-2 px-4 py-2 bg-white text-blue-700 hover:bg-blue-50 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Har du frågor?</span>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {/* AI Recommendation */}
              <div className="px-6 py-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Star className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Valle's analys</h3>
                        <div 
                          className="ai-content text-gray-700 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: aiRecommendation }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              {tabs.length > 1 && (
                <div className="px-6 -mt-4">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 flex gap-2">
                      {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`
                              flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all
                              ${activeTab === tab.id 
                                ? 'bg-blue-600 text-white shadow-sm' 
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
              <div className="px-6 py-8">
                <div className="max-w-4xl mx-auto">
                  <AnimatePresence mode="wait">
                    {/* Combined view for both services */}
                    {activeTab === 'combined' && smartPairs && (
                      <motion.div
                        key="combined"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-4"
                      >
                        {smartPairs.map((pair, index) => (
                          <SmartPairingCard
                            key={index}
                            {...pair}
                            isPrimary={index === 0}
                          />
                        ))}
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
                  <div className="flex-1 p-4">
                    <p className="text-gray-600 mb-4">
                      Har du frågor om rekommendationerna? Valle är här för att hjälpa!
                    </p>
                    <button
                      onClick={() => {
                        setShowChat(false);
                        onClose();
                        onChatOpen();
                      }}
                      className="w-full flex items-center justify-between px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                    >
                      <span>Öppna chatten</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
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
