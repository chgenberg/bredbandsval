'use client';

import { useState, useRef, useEffect } from 'react';
import { MapPin, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GoogleAddressAutocompleteProps {
  onAddressSelect: (address: string) => void;
  placeholder?: string;
}

declare global {
  interface Window {
    google: any;
  }
}

export default function GoogleAddressAutocomplete({ 
  onAddressSelect, 
  placeholder = "Ange din adress" 
}: GoogleAddressAutocompleteProps) {
  const [input, setInput] = useState('');
  const [predictions, setPredictions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteService = useRef<any>(null);
  const sessionToken = useRef<any>(null);

  useEffect(() => {
    // Load Google Maps Script
    if (!window.google && process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.onload = () => {
        initializeAutocomplete();
      };
      document.head.appendChild(script);
    } else if (window.google) {
      initializeAutocomplete();
    }
  }, []);

  const initializeAutocomplete = () => {
    if (window.google && window.google.maps && window.google.maps.places) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
      sessionToken.current = new window.google.maps.places.AutocompleteSessionToken();
    }
  };

  useEffect(() => {
    if (!input || input.length < 2) {
      setPredictions([]);
      return;
    }

    const timer = setTimeout(() => {
      fetchPredictions();
    }, 300);

    return () => clearTimeout(timer);
  }, [input]);

  const fetchPredictions = () => {
    if (!autocompleteService.current) return;

    setIsLoading(true);

    const request = {
      input: input,
      componentRestrictions: { country: 'se' }, // Restrict to Sweden
      types: ['address'], // Focus on addresses
      sessionToken: sessionToken.current,
    };

    autocompleteService.current.getPlacePredictions(request, (predictions: any, status: any) => {
      setIsLoading(false);
      
      if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
        setPredictions(predictions.slice(0, 5)); // Max 5 suggestions
      } else {
        setPredictions([]);
      }
    });
  };

  const selectAddress = (prediction: any) => {
    // Format the address nicely
    const address = prediction.description;
    setInput(address);
    onAddressSelect(address);
    setPredictions([]);
    setShowSuggestions(false);
    
    // Create new session token for next search
    sessionToken.current = new window.google.maps.places.AutocompleteSessionToken();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || predictions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < predictions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : predictions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && predictions[selectedIndex]) {
          selectAddress(predictions[selectedIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        break;
    }
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setShowSuggestions(true);
            setSelectedIndex(-1);
          }}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 border border-gray-200 
                     rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     bg-gray-50 text-gray-900 placeholder-gray-400"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          {isLoading && (
            <Loader2 className="h-5 w-5 text-gray-400 animate-spin" />
          )}
        </div>
      </div>

      <AnimatePresence>
        {showSuggestions && predictions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-white 
                       rounded-2xl shadow-lg border border-gray-100 
                       max-h-60 overflow-auto"
          >
            {predictions.map((prediction, index) => (
              <motion.button
                key={prediction.place_id}
                onClick={() => selectAddress(prediction)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`w-full text-left px-4 py-3 flex items-center gap-3
                           transition-colors ${
                  index === selectedIndex
                    ? 'bg-blue-50 text-blue-700'
                    : 'hover:bg-gray-50 text-gray-700'
                } ${index !== predictions.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <div className="flex-1 text-sm">
                  <div className="font-medium">
                    {prediction.structured_formatting.main_text}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {prediction.structured_formatting.secondary_text}
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Powered by Google - Required for Places API */}
      {showSuggestions && predictions.length > 0 && (
        <div className="absolute right-0 mt-1 text-xs text-gray-400">
          Powered by Google
        </div>
      )}
    </div>
  );
}
