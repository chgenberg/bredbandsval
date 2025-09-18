'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Mail, Download, Copy, Check, X } from 'lucide-react';

interface ShareRecommendationsProps {
  recommendations: Array<any>;
  userProfile: {
    address?: string;
    householdSize?: number;
    estimatedBandwidthNeed?: number;
  };
}

export default function ShareRecommendations({ recommendations, userProfile }: ShareRecommendationsProps) {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState('');
  const [sendingEmail, setSendingEmail] = useState(false);

  const generateShareableLink = () => {
    // In production, this would create a unique URL with saved recommendations
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const recommendationId = Date.now().toString(36);
    return `${baseUrl}/recommendations/${recommendationId}`;
  };

  const generateTextSummary = () => {
    const summary = `Dina Bredbandsval-rekommendationer:

📍 Adress: ${userProfile.address || 'Ej angiven'}
👥 Hushållsstorlek: ${userProfile.householdSize || 1} personer
💻 Rekommenderad hastighet: ${userProfile.estimatedBandwidthNeed || 100} Mbit/s

Top 3 rekommendationer:
${recommendations.slice(0, 3).map((rec, i) => {
  // Support both single packages and smart pairs
  if (rec && rec.broadband && rec.tv) {
    const total = rec.totalPrice ?? 0;
    const speed = rec.broadband?.speed ?? 0;
    return `\n${i + 1}. ${rec.broadband?.provider || 'Bredband'} + ${rec.tv?.provider || 'TV'}\n   💰 ${total} kr/mån\n   ⚡ ${speed} Mbit/s`;
  }
  const pkg = rec?.package || {};
  const price = pkg?.pricing?.campaign?.monthlyPrice ?? pkg?.pricing?.monthly ?? 0;
  const speed = pkg?.speed?.download ?? 0;
  const savings = rec?.savings?.monthly;
  return `\n${i + 1}. ${pkg?.providerName || 'Okänd'} - ${pkg?.name || ''}\n   💰 ${price} kr/mån\n   ⚡ ${speed} Mbit/s\n   ${savings > 0 ? `💵 Sparar ${savings} kr/mån på streaming` : ''}`;
}).join('')}

Se alla detaljer: ${generateShareableLink()}`;

    return summary;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateTextSummary());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const downloadPDF = () => {
    // In production, this would generate a real PDF
    const content = generateTextSummary();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bredbandsval-rekommendationer-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const sendEmail = async () => {
    setSendingEmail(true);
    
    // In production, this would call an API endpoint
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Sending email to:', email);
    setSendingEmail(false);
    setShowModal(false);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 
                   text-gray-700 dark:text-gray-300 rounded-2xl hover:bg-gray-200 
                   dark:hover:bg-gray-700 transition-colors"
      >
        <Share2 size={18} />
        Dela rekommendationer
      </motion.button>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Dela dina rekommendationer</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-2xl transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4">
                {/* Copy to clipboard */}
                <button
                  onClick={copyToClipboard}
                  className="w-full flex items-center justify-between p-4 border border-gray-200 
                           dark:border-gray-700 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700/50 
                           transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Copy className="text-blue-500" size={20} />
                    <div className="text-left">
                      <p className="font-medium">Kopiera sammanfattning</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Kopiera text att dela
                      </p>
                    </div>
                  </div>
                  {copied && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center gap-1 text-green-500"
                    >
                      <Check size={16} />
                      <span className="text-sm">Kopierat!</span>
                    </motion.div>
                  )}
                </button>

                {/* Download PDF */}
                <button
                  onClick={downloadPDF}
                  className="w-full flex items-center gap-3 p-4 border border-gray-200 
                           dark:border-gray-700 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700/50 
                           transition-colors"
                >
                  <Download className="text-green-500" size={20} />
                  <div className="text-left">
                    <p className="font-medium">Ladda ner sammanfattning</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Spara som fil
                    </p>
                  </div>
                </button>

                {/* Email */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="text-sm font-medium mb-2">Skicka via e-post</p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="din@epost.se"
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 
                               rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent
                               bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                    />
                    <button
                      onClick={sendEmail}
                      disabled={!email || sendingEmail}
                      className="px-4 py-2 bg-blue-500 text-white rounded-2xl 
                               hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed
                               transition-colors flex items-center gap-2"
                    >
                      {sendingEmail ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      ) : (
                        <Mail size={18} />
                      )}
                      Skicka
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
