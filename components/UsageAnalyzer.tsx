'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Monitor, Smartphone, Tv, Gamepad2, Video, Download, Upload, AlertCircle, CheckCircle } from 'lucide-react';

interface UsageAnalyzerProps {
  onComplete: (analysisResult: UsageAnalysisResult) => void;
  onSkip: () => void;
}

export interface UsageAnalysisResult {
  estimatedSpeed: number;
  currentUsage: {
    streaming: number; // hours per day
    gaming: number;    // hours per day
    videoMeetings: number;
    devices: number;
    heavyDownloads: boolean;
  };
  recommendations: {
    minimumSpeed: number;
    recommendedSpeed: number;
    reasoning: string[];
  };
  insights: string[];
}

export default function UsageAnalyzer({ onComplete, onSkip }: UsageAnalyzerProps) {
  const [step, setStep] = useState<'intro' | 'devices' | 'streaming' | 'gaming' | 'work' | 'analysis' | 'results'>('intro');
  const [analysis, setAnalysis] = useState({
    devices: 0,
    streamingHours: 0,
    gamingHours: 0,
    videoMeetingHours: 0,
    heavyDownloads: false,
    simultaneousUsers: 0,
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<UsageAnalysisResult | null>(null);

  const analyzeUsage = () => {
    setIsAnalyzing(true);
    setStep('analysis');

    // Simulate analysis time
    setTimeout(() => {
      const result = calculateUsageRecommendations(analysis);
      setResults(result);
      setStep('results');
      setIsAnalyzing(false);
    }, 3000);
  };

  const calculateUsageRecommendations = (data: typeof analysis): UsageAnalysisResult => {
    let baseSpeed = 25; // Minimum för basic användning
    const insights: string[] = [];
    const reasoning: string[] = [];

    // Device impact
    if (data.devices > 10) {
      baseSpeed += 50;
      insights.push(`Med ${data.devices} enheter behöver ni extra kapacitet`);
      reasoning.push('Många enheter kräver mer bandbredd');
    } else if (data.devices > 5) {
      baseSpeed += 25;
      insights.push(`${data.devices} enheter är normalt för ett modernt hem`);
    }

    // Streaming impact
    if (data.streamingHours > 6) {
      baseSpeed += 75;
      insights.push('Mycket streaming kräver hög hastighet för 4K-kvalitet');
      reasoning.push('4K-streaming behöver 25+ Mbit/s per stream');
    } else if (data.streamingHours > 3) {
      baseSpeed += 40;
      insights.push('Normal streaming-användning identifierad');
      reasoning.push('HD-streaming fungerar bra med 10+ Mbit/s per stream');
    }

    // Gaming impact
    if (data.gamingHours > 4) {
      baseSpeed += 50;
      insights.push('Intensiv gaming kräver låg latens och hög hastighet');
      reasoning.push('Online gaming behöver stabil uppkoppling och låg ping');
    } else if (data.gamingHours > 1) {
      baseSpeed += 25;
      insights.push('Casual gaming-användning');
    }

    // Work from home
    if (data.videoMeetingHours > 4) {
      baseSpeed += 40;
      insights.push('Mycket videomöten kräver stabil uppkoppling');
      reasoning.push('HD-videomöten behöver 3-5 Mbit/s upload');
    } else if (data.videoMeetingHours > 1) {
      baseSpeed += 20;
      insights.push('Normala videomöten för jobb/skola');
    }

    // Heavy downloads
    if (data.heavyDownloads) {
      baseSpeed += 100;
      insights.push('Stora nedladdningar gynnas av mycket hög hastighet');
      reasoning.push('Spel, filmer och uppdateringar kan vara flera GB');
    }

    // Simultaneous usage
    const multiplier = Math.max(1, data.simultaneousUsers * 0.7);
    baseSpeed *= multiplier;

    if (data.simultaneousUsers > 3) {
      insights.push(`${data.simultaneousUsers} personer som använder samtidigt`);
      reasoning.push('Flera användare delar bandbredden');
    }

    const recommendedSpeed = Math.ceil(baseSpeed / 50) * 50; // Round to nearest 50
    const minimumSpeed = Math.ceil((baseSpeed * 0.6) / 25) * 25; // 60% of recommended, round to 25

    return {
      estimatedSpeed: recommendedSpeed,
      currentUsage: {
        streaming: data.streamingHours,
        gaming: data.gamingHours,
        videoMeetings: data.videoMeetingHours,
        devices: data.devices,
        heavyDownloads: data.heavyDownloads,
      },
      recommendations: {
        minimumSpeed: minimumSpeed,
        recommendedSpeed: recommendedSpeed,
        reasoning,
      },
      insights,
    };
  };

  const renderStep = () => {
    switch (step) {
      case 'intro':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="mb-6">
              <Wifi className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Analysera din internetanvändning
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                Låt oss undersöka hur ni använder internet idag för att rekommendera perfekt hastighet
              </p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={() => setStep('devices')}
                className="w-full py-4 px-6 bg-blue-500 text-white rounded-2xl font-medium 
                         hover:bg-blue-600 transition-colors flex items-center justify-center gap-3"
              >
                <CheckCircle size={20} />
                Ja, analysera min användning
              </button>
              
              <button
                onClick={onSkip}
                className="w-full py-3 px-6 bg-gray-200 dark:bg-gray-700 text-gray-700 
                         dark:text-gray-300 rounded-2xl hover:bg-gray-300 dark:hover:bg-gray-600 
                         transition-colors"
              >
                Hoppa över, ställ vanliga frågor
              </button>
            </div>
          </motion.div>
        );

      case 'devices':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-xl font-bold mb-4">Hur många enheter har ni hemma?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Räkna mobiler, laptops, tablets, smart-TV, spelkonsoler, IoT-enheter
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { icon: Smartphone, label: 'Mobiler/Tablets', count: 4 },
                { icon: Monitor, label: 'Datorer/Laptops', count: 2 },
                { icon: Tv, label: 'Smart-TVs', count: 2 },
                { icon: Gamepad2, label: 'Spelkonsoler', count: 1 },
              ].map((device, i) => (
                <div key={i} className="p-4 border border-gray-200 dark:border-gray-700 rounded-2xl">
                  <device.icon className="w-8 h-8 text-blue-500 mb-2" />
                  <p className="font-medium text-sm">{device.label}</p>
                  <input
                    type="number"
                    min="0"
                    max="20"
                    className="w-full mt-2 px-3 py-2 border border-gray-300 dark:border-gray-600 
                             rounded-lg text-center"
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 0;
                      setAnalysis(prev => ({ ...prev, devices: prev.devices - device.count + value }));
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="mb-6">
              <label className="block font-medium mb-2">
                Totalt antal enheter: <span className="text-blue-500">{analysis.devices}</span>
              </label>
              <input
                type="range"
                min="1"
                max="30"
                value={analysis.devices}
                onChange={(e) => setAnalysis(prev => ({ ...prev, devices: parseInt(e.target.value) }))}
                className="w-full"
              />
            </div>

            <button
              onClick={() => setStep('streaming')}
              className="w-full py-3 bg-blue-500 text-white rounded-2xl font-medium hover:bg-blue-600"
            >
              Nästa: Streaming
            </button>
          </motion.div>
        );

      case 'streaming':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Video className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-bold">Hur mycket streamar ni?</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block font-medium mb-2">
                  Streaming per dag: <span className="text-blue-500">{analysis.streamingHours}h</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="12"
                  value={analysis.streamingHours}
                  onChange={(e) => setAnalysis(prev => ({ ...prev, streamingHours: parseInt(e.target.value) }))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>Aldrig</span>
                  <span>Hela dagen</span>
                </div>
              </div>

              <div>
                <label className="block font-medium mb-2">
                  Samtidiga användare: <span className="text-blue-500">{analysis.simultaneousUsers}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="8"
                  value={analysis.simultaneousUsers}
                  onChange={(e) => setAnalysis(prev => ({ ...prev, simultaneousUsers: parseInt(e.target.value) }))}
                  className="w-full"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Hur många streamar/använder internet samtidigt?
                </p>
              </div>
            </div>

            <button
              onClick={() => setStep('gaming')}
              className="w-full py-3 bg-blue-500 text-white rounded-2xl font-medium hover:bg-blue-600"
            >
              Nästa: Gaming
            </button>
          </motion.div>
        );

      case 'gaming':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Gamepad2 className="w-6 h-6 text-purple-500" />
              <h3 className="text-xl font-bold">Gaming & nedladdningar</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block font-medium mb-2">
                  Online gaming per dag: <span className="text-blue-500">{analysis.gamingHours}h</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="12"
                  value={analysis.gamingHours}
                  onChange={(e) => setAnalysis(prev => ({ ...prev, gamingHours: parseInt(e.target.value) }))}
                  className="w-full"
                />
              </div>

              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-2xl">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={analysis.heavyDownloads}
                    onChange={(e) => setAnalysis(prev => ({ ...prev, heavyDownloads: e.target.checked }))}
                    className="w-5 h-5"
                  />
                  <div>
                    <p className="font-medium">Stora nedladdningar</p>
                    <p className="text-sm text-gray-500">
                      Spel, filmer, programvara (flera GB)
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <button
              onClick={() => setStep('work')}
              className="w-full py-3 bg-blue-500 text-white rounded-2xl font-medium hover:bg-blue-600"
            >
              Nästa: Jobb/Skola
            </button>
          </motion.div>
        );

      case 'work':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="w-6 h-6 text-green-500" />
              <h3 className="text-xl font-bold">Jobb & skola hemifrån</h3>
            </div>
            
            <div className="mb-6">
              <label className="block font-medium mb-2">
                Videomöten per dag: <span className="text-blue-500">{analysis.videoMeetingHours}h</span>
              </label>
              <input
                type="range"
                min="0"
                max="10"
                value={analysis.videoMeetingHours}
                onChange={(e) => setAnalysis(prev => ({ ...prev, videoMeetingHours: parseInt(e.target.value) }))}
                className="w-full"
              />
              <p className="text-sm text-gray-500 mt-1">
                Teams, Zoom, Google Meet, etc.
              </p>
            </div>

            <button
              onClick={analyzeUsage}
              className="w-full py-4 bg-green-500 text-white rounded-2xl font-medium hover:bg-green-600 
                       flex items-center justify-center gap-3"
            >
              <CheckCircle size={20} />
              Analysera min användning
            </button>
          </motion.div>
        );

      case 'analysis':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8"
          >
            <div className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent 
                           rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold mb-2">Analyserar din användning...</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Beräknar optimal hastighet baserat på dina behov
            </p>
          </motion.div>
        );

      case 'results':
        return results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-center mb-6">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Analys klar!</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Baserat på din användning rekommenderar vi:
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 mb-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {results.estimatedSpeed} Mbit/s
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Rekommenderad hastighet
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-blue-200 dark:border-blue-800">
                <div className="text-center">
                  <p className="font-medium text-green-600 dark:text-green-400">
                    {results.recommendations.minimumSpeed} Mbit/s
                  </p>
                  <p className="text-sm text-gray-500">Minimum</p>
                </div>
                <div className="text-center">
                  <p className="font-medium text-blue-600 dark:text-blue-400">
                    {results.recommendations.recommendedSpeed} Mbit/s
                  </p>
                  <p className="text-sm text-gray-500">Rekommenderat</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {results.insights.map((insight, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                  <p className="text-sm">{insight}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => onComplete(results)}
              className="w-full py-4 bg-green-500 text-white rounded-2xl font-medium hover:bg-green-600"
            >
              Använd denna analys för rekommendationer
            </button>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Progress bar */}
        {step !== 'intro' && step !== 'analysis' && step !== 'results' && (
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Steg {['devices', 'streaming', 'gaming', 'work'].indexOf(step) + 1} av 4</span>
              <span>{Math.round(((['devices', 'streaming', 'gaming', 'work'].indexOf(step) + 1) / 4) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((['devices', 'streaming', 'gaming', 'work'].indexOf(step) + 1) / 4) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {renderStep()}
      </motion.div>
    </motion.div>
  );
}
