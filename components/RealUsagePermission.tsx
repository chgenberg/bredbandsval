'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Router, Smartphone, Lock, HelpCircle, X } from 'lucide-react';

interface RealUsagePermissionProps {
  onAccept: (method: 'router' | 'isp' | 'app') => void;
  onDecline: () => void;
}

export default function RealUsagePermission({ onAccept, onDecline }: RealUsagePermissionProps) {
  const [selectedMethod, setSelectedMethod] = useState<'router' | 'isp' | null>(null);
  const [openHelp, setOpenHelp] = useState<string | null>(null);

  const methods = [
    {
      id: 'router' as const,
      icon: Router,
      title: 'Via din router',
      shortDesc: 'Snabb analys på 2 minuter',
      accuracy: '99% exakt',
      helpText: 'Vi ansluter säkert till din router och läser trafikstatistik från de senaste 3 månaderna. Ingen personlig data eller innehåll analyseras - endast trafikvolym och hastigheter. Du behöver din routers IP-adress (oftast 192.168.1.1) och lösenord.'
    },
    {
      id: 'isp' as const,
      icon: Smartphone,
      title: 'Via din leverantör',
      shortDesc: 'Enkel inloggning med BankID',
      accuracy: '95% exakt',
      helpText: 'Logga in säkert med BankID hos din nuvarande leverantör (Telia, Comhem, Telenor etc). Vi hämtar din faktiska användningsdata från de senaste 3 månaderna direkt från leverantören. Helt säkert och officiell data.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/80 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-100"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-gray-700" />
          </div>
          <h2 className="text-2xl font-semibold text-black mb-2">
            Få exakta rekommendationer
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Analysera din faktiska användning för skräddarsydda förslag
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
          {methods.map((method) => (
            <motion.div
              key={method.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedMethod(method.id)}
              className={`relative p-6 border-2 rounded-2xl cursor-pointer transition-all ${
                selectedMethod === method.id
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-200 hover:border-gray-400 bg-white'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <method.icon className="w-8 h-8 text-gray-700" />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenHelp(openHelp === method.id ? null : method.id);
                  }}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <HelpCircle size={18} />
                </button>
              </div>
              
              <h3 className="font-semibold text-lg mb-1 text-black">{method.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{method.shortDesc}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Exakthet</span>
                <span className="text-sm font-semibold text-gray-900">{method.accuracy}</span>
              </div>

              <AnimatePresence>
                {openHelp === method.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute z-50 top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-xl p-4 border border-gray-200"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenHelp(null);
                      }}
                      className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                    >
                      <X size={16} />
                    </button>
                    <p className="text-sm text-gray-700 pr-6">{method.helpText}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="text-center text-xs text-gray-500 mb-6">
          <Lock className="w-4 h-4 inline-block mr-1" />
          Vi analyserar endast trafikvolym - aldrig innehåll eller personlig data
        </div>

        <div className="flex gap-4 max-w-lg mx-auto">
          <button
            onClick={onDecline}
            className="flex-1 py-3 px-6 text-gray-600 
                     rounded-xl hover:bg-gray-50
                     transition-colors font-medium"
          >
            Hoppa över
          </button>
          
          <button
            onClick={() => selectedMethod && onAccept(selectedMethod)}
            disabled={!selectedMethod}
            className="flex-1 py-3 px-6 bg-gray-900 text-white rounded-xl font-medium 
                     hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed 
                     transition-all shadow-sm"
          >
            {selectedMethod ? 'Fortsätt' : 'Välj en metod'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
