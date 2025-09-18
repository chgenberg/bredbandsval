'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Download, Upload, Clock, X } from 'lucide-react';
import { quickSpeedTest, SpeedTestResult, SpeedTestProgress } from '@/lib/network-analysis/webrtc-speed-test';

interface SpeedTestModalProps {
  onComplete: (result: SpeedTestResult) => void;
  onSkip: () => void;
}

export default function SpeedTestModal({ onComplete, onSkip }: SpeedTestModalProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState<SpeedTestProgress>({
    phase: 'init',
    progress: 0
  });
  const [result, setResult] = useState<SpeedTestResult | null>(null);

  const runTest = async () => {
    setIsRunning(true);
    try {
      const testResult = await quickSpeedTest((progress) => {
        setProgress(progress);
      });
      setResult(testResult);
      setTimeout(() => {
        onComplete(testResult);
      }, 2000);
    } catch (error) {
      console.error('Speed test error:', error);
      onSkip();
    }
  };

  const getPhaseText = () => {
    switch (progress.phase) {
      case 'init': return 'Förbereder test...';
      case 'latency': return 'Mäter svarstid...';
      case 'download': return 'Testar nedladdning...';
      case 'upload': return 'Testar uppladdning...';
      case 'complete': return 'Test klart!';
    }
  };

  const getPhaseIcon = () => {
    switch (progress.phase) {
      case 'latency': return Clock;
      case 'download': return Download;
      case 'upload': return Upload;
      default: return Activity;
    }
  };

  const Icon = getPhaseIcon();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/90 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full border border-gray-100"
      >
        <div className="text-center">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <motion.div
              animate={{ rotate: isRunning ? 360 : 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Icon className="w-10 h-10 text-gray-700" />
            </motion.div>
          </div>

          <h2 className="text-2xl font-semibold text-black mb-2">
            Mäter din internetanslutning
          </h2>
          
          {!isRunning && !result && (
            <>
              <p className="text-gray-600 mb-8">
                Vi gör en snabb mätning för att ge dig perfekt matchade rekommendationer
              </p>
              
              <div className="space-y-3">
                <button
                  onClick={runTest}
                  className="w-full py-3 px-6 bg-gray-900 text-white rounded-xl font-medium
                           hover:bg-gray-800 transition-colors"
                >
                  Starta mätning
                </button>
                
                <button
                  onClick={onSkip}
                  className="w-full py-3 px-6 text-gray-600 hover:bg-gray-50
                           rounded-xl transition-colors"
                >
                  Hoppa över
                </button>
              </div>
            </>
          )}

          {isRunning && !result && (
            <>
              <p className="text-gray-600 mb-6">{getPhaseText()}</p>
              
              <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gray-900"
                  animate={{ width: `${progress.progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {progress.currentSpeed && (
                <p className="text-sm text-gray-500">
                  {Math.round(progress.currentSpeed)} Mbit/s
                </p>
              )}
            </>
          )}

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <p className="text-gray-600 mb-6">
                Perfekt! Nu kan vi ge dig skräddarsydda rekommendationer
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                    <Download size={16} />
                    Nedladdning
                  </div>
                  <p className="text-2xl font-semibold text-black">
                    {result.downloadMbps} <span className="text-sm text-gray-500">Mbit/s</span>
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                    <Upload size={16} />
                    Uppladdning
                  </div>
                  <p className="text-2xl font-semibold text-black">
                    {result.uploadMbps} <span className="text-sm text-gray-500">Mbit/s</span>
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4 text-left">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                  <Clock size={16} />
                  Svarstid
                </div>
                <p className="text-2xl font-semibold text-black">
                  {result.latencyMs} <span className="text-sm text-gray-500">ms</span>
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
