'use client';

import { motion } from 'framer-motion';
import { Check, Zap, Tv, Gamepad2, Router, Calendar } from 'lucide-react';

interface RecommendationProps {
  provider: string;
  packageName: string;
  speed: number;
  price: number;
  bindingTime?: number;
  features: string[];
  savings?: number;
  matchScore: number;
  reasoning: string;
  index: number;
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl p-4 sm:p-6 ${
        isTopChoice
          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-xl'
          : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
      }`}
    >
      {isTopChoice && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Bästa valet för dig
          </span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-semibold">{provider}</h3>
          <p className={`text-sm ${isTopChoice ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
            {packageName}
          </p>
        </div>
        <div className="sm:text-right">
          <p className="text-xl sm:text-2xl font-bold">{price} kr</p>
          <p className={`text-sm ${isTopChoice ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
            /månad
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
        <div className="flex items-center gap-1">
          <Zap size={16} className={isTopChoice ? 'text-yellow-300' : 'text-blue-500'} />
          <span className="text-sm font-medium">{speed} Mbit/s</span>
        </div>
        {bindingTime !== undefined && (
          <div className="flex items-center gap-1">
            <Calendar size={16} className={isTopChoice ? 'text-blue-200' : 'text-gray-500'} />
            <span className="text-sm">
              {bindingTime === 0 ? 'Ingen bindning' : `${bindingTime} mån`}
            </span>
          </div>
        )}
      </div>

      {savings && savings > 0 && (
        <div className={`mb-4 p-3 rounded-2xl ${
          isTopChoice ? 'bg-white/20' : 'bg-green-50 dark:bg-green-900/20'
        }`}>
          <p className={`text-sm font-medium ${
            isTopChoice ? 'text-white' : 'text-green-700 dark:text-green-400'
          }`}>
            Du sparar {savings} kr/mån på streaming! 💰
          </p>
        </div>
      )}

      <div className="space-y-2 mb-4">
        {features.slice(0, 3).map((feature, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className={isTopChoice ? 'text-blue-200' : 'text-gray-400'}>
              {getIcon(feature)}
            </span>
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <div className={`text-sm italic ${
        isTopChoice ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'
      }`}>
        &ldquo;{reasoning}&rdquo;
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full mt-4 py-3 px-4 rounded-2xl font-medium transition-colors min-h-[48px] ${
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
