'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Router, Smartphone, Eye, Lock, CheckCircle, AlertTriangle } from 'lucide-react';

interface RealUsagePermissionProps {
  onAccept: (method: 'router' | 'isp' | 'app') => void;
  onDecline: () => void;
}

export default function RealUsagePermission({ onAccept, onDecline }: RealUsagePermissionProps) {
  const [selectedMethod, setSelectedMethod] = useState<'router' | 'isp' | 'app' | null>(null);

  const methods = [
    {
      id: 'router' as const,
      icon: Router,
      title: 'Analysera min router',
      description: 'Vi ansluter säkert till din router för att se 3 månaders trafikdata',
      accuracy: '99% exakt',
      time: '2 minuter',
      privacy: 'Data stannar i din router',
      steps: [
        'Du anger router-IP (192.168.1.1)',
        'Vi läser trafikstatistik (ingen personlig data)',
        'Analys av hastigheter och användningsmönster'
      ],
      pros: ['Extremt exakt', 'Snabb analys', 'Ingen installation'],
      cons: ['Kräver router-lösenord', 'Fungerar ej med alla routrar']
    },
    {
      id: 'isp' as const,
      icon: Smartphone,
      title: 'Hämta från min leverantör',
      description: 'Logga in med BankID för att hämta data från Telia/Comhem/etc.',
      accuracy: '95% exakt', 
      time: '1 minut',
      privacy: 'Via BankID - säkert',
      steps: [
        'Välj din nuvarande leverantör',
        'Logga in med BankID',
        'Vi hämtar 3 månaders användningsdata'
      ],
      pros: ['Mycket enkelt', 'BankID-säkerhet', 'Officiell data'],
      cons: ['Kräver BankID', 'Begränsad till stora leverantörer']
    },
    {
      id: 'app' as const,
      icon: Eye,
      title: 'Installera analysapp',
      description: 'Liten app som analyserar din trafik i realtid i 1-7 dagar',
      accuracy: '99.9% exakt',
      time: '5-7 dagar',
      privacy: 'All data lokalt på din dator',
      steps: [
        'Ladda ner Bredbandsval Analyzer',
        'Kör i bakgrunden 1-7 dagar',
        'Få detaljerad analys av all användning'
      ],
      pros: ['Mest exakt', 'Ser verkligen ALLT', 'Fullständig privacy'],
      cons: ['Kräver installation', 'Tar längre tid']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="text-center mb-6">
          <Shield className="w-16 h-16 text-blue-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Analysera din RIKTIGA internetanvändning
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Med ditt godkännande kan vi analysera din faktiska användning från senaste 3 månaderna 
            för att ge dig 100% exakta rekommendationer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {methods.map((method) => (
            <motion.div
              key={method.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedMethod(method.id)}
              className={`p-6 border-2 rounded-2xl cursor-pointer transition-all ${
                selectedMethod === method.id
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
              }`}
            >
              <method.icon className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">{method.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {method.description}
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Exakthet:</span>
                  <span className="font-medium text-green-600">{method.accuracy}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Tid:</span>
                  <span className="font-medium">{method.time}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Integritet:</span>
                  <span className="font-medium text-blue-600">{method.privacy}</span>
                </div>
              </div>

              {selectedMethod === method.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4"
                >
                  <h4 className="font-medium mb-2">Så här fungerar det:</h4>
                  <ol className="text-sm space-y-1 mb-4">
                    {method.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-5 h-5 bg-blue-500 text-white rounded-full text-xs 
                                       flex items-center justify-center mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                  
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <h5 className="font-medium text-green-600 mb-1">Fördelar:</h5>
                      <ul className="space-y-1">
                        {method.pros.map((pro, i) => (
                          <li key={i} className="flex items-center gap-1">
                            <CheckCircle size={12} className="text-green-500" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-orange-600 mb-1">Begränsningar:</h5>
                      <ul className="space-y-1">
                        {method.cons.map((con, i) => (
                          <li key={i} className="flex items-center gap-1">
                            <AlertTriangle size={12} className="text-orange-500" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-blue-500 mt-1" />
            <div className="text-sm">
              <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-1">
                Din integritet är viktig
              </h4>
              <p className="text-blue-600 dark:text-blue-400">
                Vi analyserar endast trafikvolym och hastigheter - aldrig innehåll eller personlig data. 
                All analys sker säkert och du kan avbryta när som helst.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onDecline}
            className="flex-1 py-3 px-6 bg-gray-200 dark:bg-gray-700 text-gray-700 
                     dark:text-gray-300 rounded-2xl hover:bg-gray-300 dark:hover:bg-gray-600 
                     transition-colors"
          >
            Nej tack, använd uppskattningar
          </button>
          
          <button
            onClick={() => selectedMethod && onAccept(selectedMethod)}
            disabled={!selectedMethod}
            className="flex-1 py-3 px-6 bg-blue-500 text-white rounded-2xl font-medium 
                     hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed 
                     transition-colors"
          >
            {selectedMethod ? `Analysera med ${methods.find(m => m.id === selectedMethod)?.title}` : 'Välj metod först'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
