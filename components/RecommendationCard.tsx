'use client';

import { motion } from 'framer-motion';
import { Check, Zap, Tv, Gamepad2, Router, Calendar, Star, Shield, Award, TrendingUp } from 'lucide-react';

interface RecommendationProps {
  provider: string;
  packageName: string;
  speed?: number; // Optional for TV-only packages
  price: number;
  bindingTime?: number;
  features: string[];
  savings?: number;
  matchScore: number;
  reasoning: string;
  index: number;
  badges?: string[];
  trustScore?: number;
  isCombo?: boolean;
  comboDetails?: {
    broadbandProvider: string;
    tvProvider: string;
    savings: number;
  };
}

export default function RecommendationCard({
  provider,
  packageName,
  speed,
  price,
  bindingTime,
  features,
  savings,
  reasoning,
  index,
  badges = [],
  trustScore = 70,
  isCombo = false,
  comboDetails,
}: RecommendationProps) {
  const isTopChoice = index === 0;

  const getIcon = (feature: string) => {
    const lower = feature.toLowerCase();
    if (lower.includes('router')) return <Router size={16} />;
    if (lower.includes('tv')) return <Tv size={16} />;
    if (lower.includes('gaming')) return <Gamepad2 size={16} />;
    if (lower.includes('streaming')) return <Tv size={16} />;
    return <Check size={16} />;
  };

  const getBadgeIcon = (badge: string) => {
    const lower = badge.toLowerCase();
    if (lower.includes('värde') || lower.includes('pris')) return <TrendingUp size={12} />;
    if (lower.includes('support') || lower.includes('bra')) return <Star size={12} />;
    if (lower.includes('gaming') || lower.includes('4k')) return <Award size={12} />;
    if (lower.includes('router') || lower.includes('mesh')) return <Router size={12} />;
    return <Shield size={12} />;
  };

  const getTrustColor = (score: number, isTopChoice: boolean) => {
    if (isTopChoice) {
      // White/light colors for blue background
      if (score >= 80) return 'text-green-200';
      if (score >= 70) return 'text-yellow-200';
      return 'text-orange-200';
    } else {
      // Darker colors for white background
      if (score >= 80) return 'text-green-600';
      if (score >= 70) return 'text-yellow-600';
      return 'text-orange-600';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl p-4 h-full flex flex-col ${
        isTopChoice
          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-xl'
          : 'bg-white border border-gray-200 shadow-sm'
      }`}
    >
      {isTopChoice && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
            Bästa valet
          </span>
        </div>
      )}

      {/* Header - Provider and Trust Score */}
      <div className="text-center mb-3">
        <h3 className={`text-lg font-bold ${isTopChoice ? 'text-white' : 'text-gray-900'}`}>
          {provider}
        </h3>
        <div className="flex items-center justify-center gap-1 mt-1">
          <Star size={14} className={getTrustColor(trustScore, isTopChoice)} fill="currentColor" />
          <span className={`text-sm font-medium ${getTrustColor(trustScore, isTopChoice)}`}>
            {Math.round(trustScore / 20 * 10) / 10}
          </span>
        </div>
      </div>

      {/* Package Name */}
      <div className="text-center mb-3">
        <p className={`text-sm ${isTopChoice ? 'text-blue-100' : 'text-gray-600'}`}>
          {packageName}
        </p>
        {isCombo && (
          <span className={`inline-block mt-1 text-xs px-2 py-1 rounded-full ${
            isTopChoice ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-700'
          }`}>
            KOMBO
          </span>
        )}
      </div>

      {/* Price - Prominent */}
      <div className="text-center mb-4">
        <p className={`text-3xl font-bold ${isTopChoice ? 'text-white' : 'text-gray-900'}`}>
          {price} kr
        </p>
        <p className={`text-sm ${isTopChoice ? 'text-blue-100' : 'text-gray-600'}`}>
          /månad
        </p>
      </div>

      {/* Speed and Binding - Vertical */}
      <div className="text-center space-y-2 mb-4">
        {speed && speed > 0 && (
          <div className="flex items-center justify-center gap-1">
            <Zap size={16} className={isTopChoice ? 'text-yellow-300' : 'text-blue-500'} />
            <span className="text-sm font-medium">{speed} Mbit/s</span>
          </div>
        )}
        {!speed || speed === 0 && (
          <div className="flex items-center justify-center gap-1">
            <Tv size={16} className={isTopChoice ? 'text-blue-200' : 'text-purple-500'} />
            <span className="text-sm font-medium">Streaming TV</span>
          </div>
        )}
        {bindingTime !== undefined && (
          <div className="flex items-center justify-center gap-1">
            <Calendar size={16} className={isTopChoice ? 'text-blue-200' : 'text-gray-500'} />
            <span className="text-sm">
              {bindingTime === 0 ? 'Ingen bindning' : `${bindingTime} mån`}
            </span>
          </div>
        )}
      </div>

      {/* Badges - Stacked */}
      {badges.length > 0 && (
        <div className="mb-4 space-y-1">
          {badges.slice(0, 2).map((badge, i) => (
            <div
              key={i}
              className={`flex items-center justify-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                isTopChoice 
                  ? 'bg-white/20 text-white' 
                  : badge.toLowerCase().includes('bäst') || badge.toLowerCase().includes('perfekt')
                  ? 'bg-green-100 text-green-700'
                  : badge.toLowerCase().includes('dyrt') || badge.toLowerCase().includes('långsamt')
                  ? 'bg-red-100 text-red-700'
                  : 'bg-blue-100 text-blue-700'
              }`}
            >
              {getBadgeIcon(badge)}
              {badge}
            </div>
          ))}
        </div>
      )}

      {isCombo && comboDetails && (
        <div className={`mb-4 p-3 rounded-2xl ${
          isTopChoice ? 'bg-white/20' : 'bg-blue-50'
        }`}>
          <p className={`text-sm font-medium ${
            isTopChoice ? 'text-white' : 'text-blue-700'
          }`}>
            🔗 Bredband: {comboDetails.broadbandProvider} • TV: {comboDetails.tvProvider}
          </p>
          <p className={`text-xs mt-1 ${
            isTopChoice ? 'text-white/80' : 'text-blue-600'
          }`}>
            Sparar {comboDetails.savings} kr/mån jämfört med separata avtal
          </p>
        </div>
      )}

      {savings && savings > 0 && !isCombo && (
        <div className={`mb-4 p-3 rounded-2xl ${
          isTopChoice ? 'bg-white/20' : 'bg-green-50'
        }`}>
          <p className={`text-sm font-medium ${
            isTopChoice ? 'text-white' : 'text-green-700'
          }`}>
            Du sparar {savings} kr/mån på streaming! 💰
          </p>
        </div>
      )}

      {/* Features - Compact */}
      <div className="space-y-1 mb-4 flex-1">
        {features.slice(0, 2).map((feature, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <span className={isTopChoice ? 'text-blue-200' : 'text-gray-400'}>
              {getIcon(feature)}
            </span>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Reasoning - Shorter */}
      <div className={`text-xs italic text-center mb-4 ${
        isTopChoice ? 'text-blue-100' : 'text-gray-600'
      }`}>
        &ldquo;{reasoning}&rdquo;
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full mt-auto py-2.5 px-4 rounded-xl font-medium transition-colors text-sm ${
          isTopChoice
            ? 'bg-white text-blue-600 hover:bg-blue-50'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        Välj detta paket
      </motion.button>
    </motion.div>
  );
}
