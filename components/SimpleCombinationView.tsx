'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import RecommendationCard from './RecommendationCard';

interface SimpleCombinationViewProps {
  broadbandPackage: any;
  tvPackage: any;
  totalPrice: number;
  reasoning: string;
}

export function SimpleCombinationView({
  broadbandPackage,
  tvPackage,
  totalPrice,
  reasoning
}: SimpleCombinationViewProps) {
  const router = useRouter();

  const handleOrderClick = () => {
    // Spara kombination info i sessionStorage
    const orderData = {
      type: 'combination',
      broadband: {
        provider: broadbandPackage.provider,
        packageName: broadbandPackage.packageName,
        speed: broadbandPackage.speed,
        price: broadbandPackage.price,
        features: broadbandPackage.features
      },
      tv: {
        provider: tvPackage.provider,
        packageName: tvPackage.packageName,
        price: tvPackage.price,
        features: tvPackage.features
      },
      totalPrice
    };
    sessionStorage.setItem('selectedPackage', JSON.stringify(orderData));
    
    // Navigera till beställningssidan
    router.push('/order');
  };
  return (
    <div className="space-y-6">
      {/* Combination header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-[#101929] text-white px-4 py-2 rounded-full text-sm font-medium mb-3">
          <Star className="w-4 h-4" />
          Valle's rekommenderade kombination
        </div>
        <p className="text-sm sm:text-base text-gray-600 px-4 sm:px-0">{reasoning}</p>
      </div>

      {/* Cards side by side */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        {/* Broadband card */}
        <div className="flex-1 w-full">
          <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-2 sm:mb-3 text-center">📡 Bredband</h4>
          <RecommendationCard
            {...broadbandPackage}
            isTopChoice={true}
          />
        </div>

        {/* Plus icon */}
        <div className="flex-shrink-0 hidden sm:block">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
          </div>
        </div>

        {/* TV card */}
        <div className="flex-1 w-full">
          <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-2 sm:mb-3 text-center">📺 TV</h4>
          <RecommendationCard
            {...tvPackage}
            isTopChoice={true}
          />
        </div>
      </div>

      {/* Total price section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
          Totalt: {totalPrice} kr/mån
        </h3>
        <p className="text-sm sm:text-base text-green-700 font-medium">
          Bästa kombinationen för dina behov
        </p>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleOrderClick}
          className="mt-3 sm:mt-4 px-6 sm:px-8 py-2.5 sm:py-3 bg-[#101929] text-white rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:bg-[#1a2332] transition-colors shadow-lg"
        >
          Beställ denna kombination
        </motion.button>
      </motion.div>
    </div>
  );
}
