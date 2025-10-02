'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Router, Activity, Clock, CheckCircle, AlertCircle, Smartphone, Laptop, Tv, Gamepad2 } from 'lucide-react';
import { routerAnalyzer, RouterAnalysisResult, NetworkDevice } from '@/lib/network-analysis/router-analyzer';

interface RealRouterAnalysisProps {
  onComplete: (result: RouterAnalysisResult) => void;
  onSkip: () => void;
}

export default function RealRouterAnalysis({ onComplete, onSkip }: RealRouterAnalysisProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('');
  const [result, setResult] = useState<RouterAnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  const analysisSteps = [
    { id: 'speed', label: 'Mäter internethastighe', duration: 8000 },
    { id: 'devices', label: 'Skannar nätverksenheter', duration: 3000 },
    { id: 'patterns', label: 'Analyserar användningsmönster', duration: 2000 },
    { id: 'recommendations', label: 'Genererar rekommendationer', duration: 2000 }
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAnalyzing) {
      timer = setInterval(() => {
        setElapsedTime(prev => prev + 0.1);
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isAnalyzing]);

  const startAnalysis = async () => {
    setIsAnalyzing(true);
    setProgress(0);
    setError(null);
    setElapsedTime(0);

    try {
      // Simulera progress genom stegen
      let totalProgress = 0;
      for (const step of analysisSteps) {
        setCurrentStep(step.label);
        
        // Gradvis progress för detta steg
        const stepProgress = 100 / analysisSteps.length;
        const startProgress = totalProgress;
        
        for (let i = 0; i <= 100; i += 2) {
          setProgress(startProgress + (stepProgress * i / 100));
          await new Promise(resolve => setTimeout(resolve, step.duration / 50));
        }
        
        totalProgress += stepProgress;
      }

      // Kör faktisk analys
      const analysisResult = await routerAnalyzer.analyzeNetwork();
      
      setResult(analysisResult);
      setProgress(100);
      setCurrentStep('Analys slutförd');
      
      // Vänta lite innan vi anropar onComplete
      setTimeout(() => {
        onComplete(analysisResult);
      }, 1500);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Något gick fel under analysen');
      setIsAnalyzing(false);
    }
  };

  const getDeviceIcon = (type: NetworkDevice['type']) => {
    switch (type) {
      case 'phone': return <Smartphone className="w-4 h-4" />;
      case 'laptop': return <Laptop className="w-4 h-4" />;
      case 'tv': return <Tv className="w-4 h-4" />;
      case 'gaming': return <Gamepad2 className="w-4 h-4" />;
      default: return <Router className="w-4 h-4" />;
    }
  };

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      >
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Analys misslyckades</h3>
          <p className="text-gray-600 mb-6">{error}</p>
          <div className="flex gap-3">
            <button
              onClick={() => setError(null)}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Försök igen
            </button>
            <button
              onClick={onSkip}
              className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Hoppa över
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full">
        {!isAnalyzing && !result ? (
          // Startskärm
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Router className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Analysera ditt nätverk</h3>
            <p className="text-gray-600 mb-6">
              Vi kommer att mäta din faktiska internethasighet, skanna för anslutna enheter och analysera ditt användningsmönster för att ge dig exakta rekommendationer.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 text-blue-700 text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Säker analys - ingen data lagras</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={startAnalysis}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Starta analys
              </button>
              <button
                onClick={onSkip}
                className="px-4 py-3 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Hoppa över
              </button>
            </div>
          </div>
        ) : isAnalyzing ? (
          // Analysskärm
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Activity className="w-8 h-8 text-blue-600 animate-pulse" />
            </div>
            
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Analyserar ditt nätverk</h3>
            <p className="text-gray-600 mb-6">{currentStep}...</p>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <motion.div
                className="bg-blue-600 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{elapsedTime.toFixed(1)}s</span>
              </div>
              <div>{Math.round(progress)}%</div>
            </div>
          </div>
        ) : (
          // Resultatskärm
          <div>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Analys slutförd!</h3>
              <p className="text-gray-600">
                {result.accuracy}% exakthet • {result.analysisTime.toFixed(1)} sekunder
              </p>
            </div>

            {/* Hastighetsmätning */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Wifi className="w-4 h-4" />
                Uppmätt hastighet
              </h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-green-600">{result.currentSpeed.download}</div>
                  <div className="text-xs text-gray-500">Mbit/s ned</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-600">{result.currentSpeed.upload}</div>
                  <div className="text-xs text-gray-500">Mbit/s upp</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-purple-600">{result.currentSpeed.ping}</div>
                  <div className="text-xs text-gray-500">ms ping</div>
                </div>
              </div>
            </div>

            {/* Enheter */}
            {result.devices.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-3">Hittade enheter ({result.devices.length})</h4>
                <div className="flex flex-wrap gap-2">
                  {result.devices.slice(0, 6).map((device, index) => (
                    <div key={index} className="flex items-center gap-1 bg-white px-2 py-1 rounded text-xs">
                      {getDeviceIcon(device.type)}
                      <span className="capitalize">{device.type}</span>
                    </div>
                  ))}
                  {result.devices.length > 6 && (
                    <div className="bg-white px-2 py-1 rounded text-xs text-gray-500">
                      +{result.devices.length - 6} till
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Rekommendation */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Rekommendation</h4>
              <div className="text-2xl font-bold text-blue-900 mb-1">
                {result.recommendations.recommendedSpeed} Mbit/s
              </div>
              <p className="text-sm text-blue-700">
                {result.recommendations.reason}
              </p>
            </div>
            
            <button
              onClick={() => onComplete(result)}
              className="w-full mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Fortsätt
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
