'use client';

import { motion } from 'framer-motion';
import { Star, Zap, Tv, Calendar, TrendingUp, TrendingDown, Crown, DollarSign, Wifi } from 'lucide-react';

interface SmartPairingProps {
  title: string;
  subtitle: string;
  broadbandProvider: string;
  broadbandPackage: string;
  broadbandSpeed: number;
  broadbandPrice: number;
  tvProvider: string;
  tvPackage: string;
  tvPrice: number;
  totalPrice: number;
  savings?: number; // Positive = more expensive, negative = savings
  reasoning: string;
  index: number;
  isPrimary?: boolean;
}

export default function SmartPairingCard({
  title,
  subtitle,
  broadbandProvider,
  broadbandPackage,
  broadbandSpeed,
  broadbandPrice,
  tvProvider,
  tvPackage,
  tvPrice,
  totalPrice,
  savings = 0,
  reasoning,
  index,
  isPrimary = false,
}: SmartPairingProps) {
  const getCardStyle = () => {
    if (isPrimary) return 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-xl border-2 border-blue-400';
    if (savings < 0) return 'bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200'; // Budget option
    return 'bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200'; // Premium option
  };

  const getTitleIcon = () => {
    if (isPrimary) return <Crown size={20} className="text-yellow-300" />;
    if (savings < 0) return <DollarSign size={20} className="text-green-600" />;
    return <Star size={20} className="text-purple-600" />;
  };

  const getSavingsDisplay = () => {
    if (savings === 0) return null;
    const isExpensive = savings > 0;
    return (
      <div className={`flex items-center gap-1 ${
        isPrimary ? 'text-yellow-200' : isExpensive ? 'text-red-600' : 'text-green-600'
      }`}>
        {isExpensive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
        <span className="text-sm font-medium">
          {isExpensive ? `+${savings}` : `${savings}`} kr/mån
        </span>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative rounded-2xl p-6 ${getCardStyle()}`}
    >
      {/* Header with icon and title */}
      <div className="flex items-center gap-3 mb-4">
        {getTitleIcon()}
        <div>
          <h3 className={`text-lg font-bold ${isPrimary ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h3>
          <p className={`text-sm ${isPrimary ? 'text-blue-100' : 'text-gray-600'}`}>
            {subtitle}
          </p>
        </div>
      </div>

      {/* Broadband section */}
      <div className={`p-4 rounded-xl mb-4 ${
        isPrimary ? 'bg-white/10' : 'bg-white/80'
      }`}>
        <div className="flex items-center gap-2 mb-2">
          <Wifi size={16} className={isPrimary ? 'text-blue-200' : 'text-blue-500'} />
          <span className={`font-medium ${isPrimary ? 'text-white' : 'text-gray-900'}`}>
            Bredband
          </span>
        </div>
        <div className={`text-sm ${isPrimary ? 'text-blue-100' : 'text-gray-700'}`}>
          <p className="font-medium">{broadbandProvider} - {broadbandPackage}</p>
          <div className="flex items-center gap-4 mt-1">
            <span>{broadbandSpeed} Mbit/s</span>
            <span className="font-semibold">{broadbandPrice} kr/mån</span>
          </div>
        </div>
      </div>

      {/* TV section */}
      <div className={`p-4 rounded-xl mb-4 ${
        isPrimary ? 'bg-white/10' : 'bg-white/80'
      }`}>
        <div className="flex items-center gap-2 mb-2">
          <Tv size={16} className={isPrimary ? 'text-purple-200' : 'text-purple-500'} />
          <span className={`font-medium ${isPrimary ? 'text-white' : 'text-gray-900'}`}>
            TV-paket
          </span>
        </div>
        <div className={`text-sm ${isPrimary ? 'text-blue-100' : 'text-gray-700'}`}>
          <p className="font-medium">{tvProvider} - {tvPackage}</p>
          <div className="flex items-center gap-4 mt-1">
            <span className="font-semibold">{tvPrice} kr/mån</span>
          </div>
        </div>
      </div>

      {/* Total price and savings */}
      <div className={`text-center p-4 rounded-xl mb-4 ${
        isPrimary ? 'bg-white/15' : 'bg-gray-50'
      }`}>
        <p className={`text-2xl font-bold ${isPrimary ? 'text-white' : 'text-gray-900'}`}>
          {totalPrice} kr/mån
        </p>
        <div className="flex items-center justify-center gap-2 mt-1">
          <span className={`text-sm ${isPrimary ? 'text-blue-100' : 'text-gray-600'}`}>
            Totalkostnad
          </span>
          {getSavingsDisplay()}
        </div>
      </div>

      {/* GPT reasoning */}
      <div className={`text-center text-sm italic mb-4 ${
        isPrimary ? 'text-blue-100' : 'text-gray-600'
      }`}>
        &ldquo;{reasoning}&rdquo;
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-3 px-4 rounded-xl font-medium transition-colors ${
          isPrimary
            ? 'bg-white text-blue-600 hover:bg-blue-50'
            : savings < 0
            ? 'bg-green-500 text-white hover:bg-green-600'
            : 'bg-purple-500 text-white hover:bg-purple-600'
        }`}
      >
        {isPrimary ? 'Välj Valle AI:s rekommendation' : 'Välj denna kombination'}
      </motion.button>
    </motion.div>
  );
}
