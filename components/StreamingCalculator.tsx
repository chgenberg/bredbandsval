'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X, TrendingDown, Info } from 'lucide-react';
import { bredbandsvalAPI } from '@/lib/api/client';
import { StreamingService } from '@/lib/api/types';

interface StreamingCalculatorProps {
  onComplete?: (selectedServices: string[], totalCost: number) => void;
}

export default function StreamingCalculator({ onComplete }: StreamingCalculatorProps) {
  const [services, setServices] = useState<StreamingService[]>([]);
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStreamingServices();
  }, []);

  const loadStreamingServices = async () => {
    try {
      const data = await bredbandsvalAPI.getStreamingServices();
      setServices(data);
    } catch (error) {
      console.error('Failed to load streaming services:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleService = (serviceId: string) => {
    const newSelected = new Set(selectedServices);
    if (newSelected.has(serviceId)) {
      newSelected.delete(serviceId);
    } else {
      newSelected.add(serviceId);
    }
    setSelectedServices(newSelected);
  };

  const totalMonthlyCost = services
    .filter(s => selectedServices.has(s.id))
    .reduce((total, service) => total + service.monthlyPrice, 0);

  const totalYearlyCost = services
    .filter(s => selectedServices.has(s.id))
    .reduce((total, service) => {
      // Use yearly price if available and it's cheaper
      if (service.yearlyPrice) {
        return total + Math.min(service.yearlyPrice, service.monthlyPrice * 12);
      }
      return total + service.monthlyPrice * 12;
    }, 0);

  const potentialSavings = totalMonthlyCost * 12 - totalYearlyCost;

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-4">Vilka streamingtjänster använder du idag?</h3>
      
      <div className="grid gap-3 mb-6">
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => toggleService(service.id)}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              selectedServices.has(service.id)
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">{service.name}</h4>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {service.monthlyPrice} kr/mån
                  </span>
                  {service.yearlyPrice && (
                    <span className="text-sm text-green-600 dark:text-green-400">
                      {Math.floor(service.yearlyPrice / 12)} kr/mån vid årsbetalning
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {service.content.sports.length > 0 && (
                    <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 
                                   text-green-700 dark:text-green-400 rounded-full">
                      Sport: {service.content.sports.slice(0, 2).join(', ')}
                      {service.content.sports.length > 2 && ' +'}
                    </span>
                  )}
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 
                                 text-gray-600 dark:text-gray-300 rounded-full">
                    {service.devices} enheter • {service.quality}
                  </span>
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                selectedServices.has(service.id)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}>
                {selectedServices.has(service.id) && <Check size={16} />}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedServices.size > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="border-t border-gray-200 dark:border-gray-700 pt-4"
        >
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Total månadskostnad:</span>
              <span className="font-semibold text-lg">{totalMonthlyCost} kr</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Total årskostnad:</span>
              <span className="text-gray-900 dark:text-gray-100">{totalYearlyCost} kr</span>
            </div>
            {potentialSavings > 0 && (
              <div className="flex justify-between items-center text-green-600 dark:text-green-400">
                <span className="flex items-center gap-1">
                  <TrendingDown size={16} />
                  Möjlig besparing med årsbetalning:
                </span>
                <span className="font-medium">{potentialSavings} kr/år</span>
              </div>
            )}
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4">
            <div className="flex items-start gap-2">
              <Info size={16} className="text-blue-600 dark:text-blue-400 mt-0.5" />
              <div className="text-sm text-blue-700 dark:text-blue-300">
                <p className="font-medium mb-1">Visste du att:</p>
                <p>Många bredbandspaket inkluderar streamingtjänster till rabatterat pris eller helt gratis. 
                   Vi kommer visa dig paket som kan spara pengar på dina valda tjänster!</p>
              </div>
            </div>
          </div>

          {onComplete && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onComplete(Array.from(selectedServices), totalMonthlyCost)}
              className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium 
                       hover:bg-blue-600 transition-colors"
            >
              Fortsätt och se besparingar
            </motion.button>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
