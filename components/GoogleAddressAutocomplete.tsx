'use client';

import { useState, useRef, useEffect } from 'react';
import { MapPin, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { googleMapsLoader } from '@/lib/google-maps-loader';

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
  const placesService = useRef<any>(null);
  const sessionToken = useRef<any>(null);

  useEffect(() => {
    console.log('GoogleAddressAutocomplete: Starting to load Google Maps...');
    // Use singleton loader to ensure Google Maps is only loaded once
    googleMapsLoader.load().then(() => {
      console.log('GoogleAddressAutocomplete: Google Maps loaded successfully');
      initializeAutocomplete();
    }).catch((error) => {
      console.error('GoogleAddressAutocomplete: Failed to load Google Maps:', error);
    });
  }, []);

  const initializeAutocomplete = () => {
    console.log('GoogleAddressAutocomplete: Initializing autocomplete...');
    console.log('window.google exists:', !!window.google);
    console.log('window.google.maps exists:', !!(window.google?.maps));
    console.log('window.google.maps.places exists:', !!(window.google?.maps?.places));
    
    if (window.google && window.google.maps && window.google.maps.places) {
      console.log('GoogleAddressAutocomplete: All Google Maps APIs available');
      // Prefer new AutocompleteSuggestion API if available, fallback otherwise
      const placesNS = window.google.maps.places as any;
      if (typeof placesNS.AutocompleteSuggestion === 'function') {
        console.log('GoogleAddressAutocomplete: Using AutocompleteSuggestion API');
        autocompleteService.current = new placesNS.AutocompleteSuggestion();
      } else {
        console.log('GoogleAddressAutocomplete: Using AutocompleteService API');
        autocompleteService.current = new placesNS.AutocompleteService();
      }
      sessionToken.current = new window.google.maps.places.AutocompleteSessionToken();
      if (!placesService.current) {
        // PlacesService requires a DOM node or map; we can pass a dummy div
        placesService.current = new window.google.maps.places.PlacesService(document.createElement('div'));
      }
      console.log('GoogleAddressAutocomplete: Services initialized successfully');
    } else {
      console.error('GoogleAddressAutocomplete: Google Maps Places API not available');
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
    console.log('GoogleAddressAutocomplete: fetchPredictions called with input:', input);
    if (!autocompleteService.current) {
      console.log('GoogleAddressAutocomplete: autocompleteService not initialized yet, waiting for Google Maps...');
      // Try to initialize if Google Maps is now available
      if (window.google?.maps?.places) {
        console.log('GoogleAddressAutocomplete: Google Maps now available, initializing...');
        initializeAutocomplete();
        // Retry after initialization
        if (!autocompleteService.current) {
          console.error('GoogleAddressAutocomplete: Still failed to initialize after retry');
          return;
        }
      } else {
        console.error('GoogleAddressAutocomplete: Google Maps not available yet');
        return;
      }
    }

    setIsLoading(true);

    const request: any = {
      input: input,
      componentRestrictions: { country: 'se' },
      types: ['address'],
      sessionToken: sessionToken.current,
    };

    console.log('GoogleAddressAutocomplete: Making request with:', request);

    // New API: AutocompleteSuggestion#suggest, fallback: AutocompleteService#getPlacePredictions
    if (typeof autocompleteService.current.suggest === 'function') {
      console.log('GoogleAddressAutocomplete: Using suggest method');
      autocompleteService.current.suggest(request, (response: any) => {
        console.log('GoogleAddressAutocomplete: suggest response:', response);
        setIsLoading(false);
        const items = Array.isArray(response?.suggestions) ? response.suggestions : [];
        console.log('GoogleAddressAutocomplete: Setting predictions:', items);
        setPredictions(items.slice(0, 5));
      });
    } else {
      console.log('GoogleAddressAutocomplete: Using getPlacePredictions method');
      autocompleteService.current.getPlacePredictions(request, (predictions: any, status: any) => {
        console.log('GoogleAddressAutocomplete: getPlacePredictions response:', { predictions, status });
        setIsLoading(false);
        if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
          console.log('GoogleAddressAutocomplete: Setting predictions:', predictions);
          setPredictions(predictions.slice(0, 5));
        } else {
          console.log('GoogleAddressAutocomplete: No predictions or error status');
          setPredictions([]);
        }
      });
    }
  };

  const selectAddress = (prediction: any) => {
    // Fetch place details to validate street number
    const placeId = prediction.place_id;
    if (placesService.current && placeId) {
      placesService.current.getDetails({ placeId, fields: ['address_components','formatted_address'] }, (place: any, status: any) => {
        const ok = status === window.google.maps.places.PlacesServiceStatus.OK;
        const components = ok ? (place?.address_components || []) : [];
        const hasStreetNumber = components.some((c: any) => c.types.includes('street_number'));
        const formatted = ok ? (place?.formatted_address || prediction.description) : prediction.description;

        if (!hasStreetNumber) {
          // Require street number
          setInput(formatted);
          setShowSuggestions(false);
          alert('Ange en fullständig adress med gatunummer.');
          return;
        }

        setInput(formatted);
        onAddressSelect(formatted);
        setPredictions([]);
        setShowSuggestions(false);
        sessionToken.current = new window.google.maps.places.AutocompleteSessionToken();
      });
    } else {
      // Fallback: simple check for a number in the address text
      const address = prediction.description;
      const hasNumber = /\d/.test(address);
      if (!hasNumber) {
        setInput(address);
        setShowSuggestions(false);
        alert('Ange en fullständig adress med gatunummer.');
        return;
      }
      setInput(address);
      onAddressSelect(address);
      setPredictions([]);
      setShowSuggestions(false);
      sessionToken.current = new window.google.maps.places.AutocompleteSessionToken();
    }
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
