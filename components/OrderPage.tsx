'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Circle, ChevronRight, Shield, Wifi, Router, Calendar, User, Mail, Phone, Home, CreditCard, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface OrderFormData {
  // Router val
  routerOption: 'own' | 'rent';
  
  // Personuppgifter
  firstName: string;
  lastName: string;
  personalNumber: string;
  email: string;
  mobileNumber: string;
  startDate: string;
  
  // Leveransadress
  address: string;
  postalCode: string;
  city: string;
  apartmentNumber: string;
  
  // Villkor
  acceptTerms: boolean;
  acceptPrivacy: boolean;
  wantNewsletter: boolean;
}

const steps = [
  { id: 1, title: 'Tillval', icon: Router },
  { id: 2, title: 'Dina uppgifter', icon: User },
  { id: 3, title: 'Leveransadress', icon: Home },
  { id: 4, title: 'Bekräfta & betala', icon: CreditCard }
];

export default function OrderPage({ prefilledAddress }: { prefilledAddress?: { address: string, postalCode: string, city: string } }) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showBankID, setShowBankID] = useState(false);

  const handleBackToResults = () => {
    router.back(); // Går tillbaka till föregående sida (resultatsidan)
  };
  
  const [formData, setFormData] = useState<OrderFormData>({
    routerOption: 'own',
    firstName: '',
    lastName: '',
    personalNumber: '',
    email: '',
    mobileNumber: '',
    startDate: '',
    address: prefilledAddress?.address || '',
    postalCode: prefilledAddress?.postalCode || '',
    city: prefilledAddress?.city || '',
    apartmentNumber: '',
    acceptTerms: false,
    acceptPrivacy: false,
    wantNewsletter: false
  });

  // Auto-fill router preference from user profile
  useEffect(() => {
    const storedProfile = sessionStorage.getItem('userProfile');
    if (storedProfile) {
      try {
        const profile = JSON.parse(storedProfile);
        if (profile.includeRouter === true) {
          setFormData(prev => ({ ...prev, routerOption: 'rent' }));
        } else if (profile.includeRouter === false) {
          setFormData(prev => ({ ...prev, routerOption: 'own' }));
        }
      } catch (e) {
        console.error('Could not parse stored user profile:', e);
      }
    }
  }, []);

  const updateFormData = (field: keyof OrderFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return true; // Router val är alltid giltigt
      case 2:
        return formData.firstName !== '' && 
               formData.lastName !== '' && 
               formData.personalNumber !== '' && 
               formData.email !== '' && 
               formData.mobileNumber !== '' && 
               formData.startDate !== '';
      case 3:
        return formData.address !== '' && 
               formData.postalCode !== '' && 
               formData.city !== '';
      case 4:
        return formData.acceptTerms && formData.acceptPrivacy;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (isStepValid(currentStep) && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!isStepValid(4)) return;
    
    setShowBankID(true);
    setIsProcessing(true);
    
    // Simulera BankID-autentisering
    setTimeout(() => {
      setIsProcessing(false);
      // Här skulle vi normalt skicka beställningen
      console.log('Order submitted:', formData);
    }, 3000);
  };

  // Få dagens datum i rätt format för date input
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Logo */}
              <Image
                src="/bredbandsval-logo-with-text.svg"
                alt="Bredbandsval"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
              {/* Diskret tillbaka-knapp */}
              <button
                onClick={handleBackToResults}
                className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Tillbaka</span>
              </button>
            </div>
            
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-semibold text-gray-900">Slutför din beställning</h1>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4" />
                <span>Säker beställning</span>
              </div>
            </div>
          </div>
          
          {/* Progress indicator */}
          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-0.5 bg-gray-200" />
            </div>
            <div className="relative flex justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id;
                
                return (
                  <div key={step.id} className="flex flex-col items-center">
                    <button
                      onClick={() => isCompleted && setCurrentStep(step.id)}
                      disabled={!isCompleted}
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center
                        transition-all duration-200 relative z-10
                        ${isActive ? 'bg-[#101929] text-white shadow-lg scale-110' : 
                          isCompleted ? 'bg-[#101929] text-white cursor-pointer hover:scale-105' : 
                          'bg-white border-2 border-gray-300 text-gray-400'}
                      `}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <Icon className="w-5 h-5" />
                      )}
                    </button>
                    <span className={`mt-2 text-xs font-medium ${
                      isActive ? 'text-[#101929]' : isCompleted ? 'text-[#101929]' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          {/* Step 1: Router val */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-xl font-semibold mb-6">Välj router</h2>
              
              <div className="space-y-4">
                <label className={`
                  block p-6 rounded-xl border-2 cursor-pointer transition-all
                  ${formData.routerOption === 'own' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}
                `}>
                  <input
                    type="radio"
                    name="router"
                    value="own"
                    checked={formData.routerOption === 'own'}
                    onChange={() => updateFormData('routerOption', 'own')}
                    className="sr-only"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Nej tack, jag har egen router</div>
                      <div className="text-sm text-gray-600 mt-1">Använd din befintliga utrustning</div>
                    </div>
                    <Circle className={`w-6 h-6 ${formData.routerOption === 'own' ? 'text-blue-600 fill-blue-600' : 'text-gray-400'}`} />
                  </div>
                </label>

                <label className={`
                  block p-6 rounded-xl border-2 cursor-pointer transition-all
                  ${formData.routerOption === 'rent' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}
                `}>
                  <input
                    type="radio"
                    name="router"
                    value="rent"
                    checked={formData.routerOption === 'rent'}
                    onChange={() => updateFormData('routerOption', 'rent')}
                    className="sr-only"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Wifi className="w-5 h-5 text-blue-600" />
                        <span className="font-medium text-gray-900">WiFi Router</span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">Högpresterande router för hela hemmet</div>
                      <div className="text-lg font-semibold text-blue-600 mt-2">69 kr/mån</div>
                    </div>
                    <Circle className={`w-6 h-6 ${formData.routerOption === 'rent' ? 'text-blue-600 fill-blue-600' : 'text-gray-400'}`} />
                  </div>
                </label>
              </div>
            </motion.div>
          )}

          {/* Step 2: Personuppgifter */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-xl font-semibold mb-6">Dina uppgifter</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Förnamn *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => updateFormData('firstName', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Anna"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Efternamn *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => updateFormData('lastName', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Andersson"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Personnummer *
                  </label>
                  <input
                    type="text"
                    value={formData.personalNumber}
                    onChange={(e) => updateFormData('personalNumber', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="ÅÅÅÅMMDD-XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-post *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="anna@exempel.se"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobilnummer *
                  </label>
                  <input
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={(e) => updateFormData('mobileNumber', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="070-123 45 67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Önskat startdatum *
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => updateFormData('startDate', e.target.value)}
                    min={today}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Leveransadress */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-xl font-semibold mb-6">Leveransadress</h2>
              
              {prefilledAddress && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800">
                    Vi har fyllt i adressen du angav tidigare. Kontrollera att uppgifterna stämmer.
                  </p>
                </div>
              )}
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adress *
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => updateFormData('address', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Gatuadress 123"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Postnummer *
                    </label>
                    <input
                      type="text"
                      value={formData.postalCode}
                      onChange={(e) => updateFormData('postalCode', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="123 45"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Postort *
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => updateFormData('city', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="Stockholm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lägenhetsnummer
                    </label>
                    <input
                      type="text"
                      value={formData.apartmentNumber}
                      onChange={(e) => updateFormData('apartmentNumber', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="1201"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Bekräfta & betala */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Sammanfattning */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-xl font-semibold mb-6">Sammanfattning</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Bredbandsabonnemang</span>
                    <span className="font-medium">100/100 Mbit/s</span>
                  </div>
                  
                  {formData.routerOption === 'rent' && (
                    <div className="flex justify-between py-3 border-b">
                      <span className="text-gray-600">WiFi Router</span>
                      <span className="font-medium">69 kr/mån</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Leveransadress</span>
                    <span className="font-medium text-right">
                      {formData.address}<br />
                      {formData.postalCode} {formData.city}
                    </span>
                  </div>
                  
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Startdatum</span>
                    <span className="font-medium">{formData.startDate || 'Så snart som möjligt'}</span>
                  </div>
                </div>
              </div>

              {/* Villkor */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-xl font-semibold mb-6">Godkänn villkor</h2>
                
                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.acceptTerms}
                      onChange={(e) => updateFormData('acceptTerms', e.target.checked)}
                      className="mt-1 w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">
                      Jag godkänner de <a href="#" className="text-blue-600 underline">allmänna villkoren</a> för Bredbandsval.se och Bredband2.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.acceptPrivacy}
                      onChange={(e) => updateFormData('acceptPrivacy', e.target.checked)}
                      className="mt-1 w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">
                      Jag godkänner <a href="#" className="text-blue-600 underline">integritetspolicy</a> för Bredbandsval.se och Bredband2.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.wantNewsletter}
                      onChange={(e) => updateFormData('wantNewsletter', e.target.checked)}
                      className="mt-1 w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">
                      Ja tack, jag vill ha nyhetsbrev från Bredbandsval.se
                    </span>
                  </label>
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span>Beställningen skickas direkt till Bredband2. Alltid 14 dagars ångerrätt.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action buttons */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`
              px-6 py-3 rounded-lg font-medium transition-all
              ${currentStep === 1 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-gray-700 hover:bg-gray-100'}
            `}
          >
            Tillbaka
          </button>

          {currentStep < 4 ? (
            <button
              onClick={handleNext}
              disabled={!isStepValid(currentStep)}
              className={`
                px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2
                ${isStepValid(currentStep)
                  ? 'bg-[#101929] text-white hover:bg-[#1a2332] shadow-lg hover:shadow-xl'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
              `}
            >
              Nästa
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isStepValid(4) || isProcessing}
              className={`
                px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2
                ${isStepValid(4) && !isProcessing
                  ? 'bg-[#101929] text-white hover:bg-[#1a2332] shadow-lg hover:shadow-xl'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
              `}
            >
              {isProcessing ? 'Bearbetar...' : 'Godkänn och beställ med BankID'}
            </button>
          )}
        </div>
      </div>

      {/* BankID Modal */}
      <AnimatePresence>
        {showBankID && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => !isProcessing && setShowBankID(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                {/* BankID Logo */}
                <div className="w-24 h-24 mx-auto mb-6">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" rx="20" fill="#00843D"/>
                    <path d="M30 70V30h20c8 0 14 6 14 14s-6 14-14 14H40v12H30zm10-22h8c3 0 5-2 5-5s-2-5-5-5h-8v10z" fill="white"/>
                    <circle cx="70" cy="60" r="8" fill="white"/>
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">Öppna BankID</h3>
                <p className="text-gray-600 mb-6">
                  Öppna BankID-appen på din telefon eller dator för att slutföra beställningen.
                </p>
                
                {isProcessing && (
                  <div className="mb-6">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
                  </div>
                )}
                
                <button
                  onClick={() => setShowBankID(false)}
                  disabled={isProcessing}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Avbryt
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
