'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import AIAgent from './AIAgent';

export default function LandingPage() {
  const [showAgent, setShowAgent] = useState(false);

  return (
    <>
      {/* Landing Page */}
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* Desktop background */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src="/val.png"
              alt="Background"
              fill
              className="object-cover"
              priority
              quality={100}
            />
          </div>
          {/* Mobile background */}
          <div className="md:hidden absolute inset-0">
            <Image
              src="/val-mobile.png"
              alt="Background"
              fill
              className="object-cover"
              priority
              quality={100}
            />
          </div>
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
        </div>

        {/* Logo - positioned over the background */}
        <div className="absolute top-8 left-8 z-20">
          <Image
            src="/bredbandsval-logo-with-text.svg"
            alt="Bredbandsval"
            width={180}
            height={50}
            className="drop-shadow-lg"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* CTA Card with soft corners */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Hitta ditt perfekta<br />
                bredband och TV-paket
              </h1>

              {/* Primary CTA - Pulsating button */}
              <motion.button
                onClick={() => setShowAgent(true)}
                className="relative group mb-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Pulsating background */}
                <motion.div
                  className="absolute inset-0 bg-blue-500 rounded-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.7, 0.5, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
                
                {/* Button content */}
                <div className="relative bg-blue-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg
                               hover:bg-blue-600 transition-colors shadow-lg">
                  Jämför och beställ direkt
                </div>
              </motion.button>

              {/* Secondary CTA */}
              <div className="mt-4">
                <button
                  onClick={() => setShowAgent(true)}
                  className="text-gray-600 hover:text-gray-900 underline text-sm transition-colors"
                >
                  Eller sök via din adress
                </button>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>21 leverantörer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Oberoende jämförelse</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>AI-driven rådgivning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle animation elements */}
            <motion.div
              className="absolute -top-20 -left-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
            <motion.div
              className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-400/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.4, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                delay: 1,
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* AI Agent Modal */}
      <AnimatePresence>
        {showAgent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="absolute inset-4 md:inset-8 bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setShowAgent(false)}
                className="absolute top-4 right-4 z-50 w-10 h-10 bg-gray-100 hover:bg-gray-200 
                         rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* AI Agent */}
              <div className="h-full">
                <AIAgent />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
