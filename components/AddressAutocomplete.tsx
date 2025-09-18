'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Search, Loader2 } from 'lucide-react';

interface AddressAutocompleteProps {
  onAddressSelect: (address: string) => void;
  placeholder?: string;
}

interface AddressSuggestion {
  address: string;
  description: string;
  placeId?: string;
}

// Mock Swedish addresses for demo
const MOCK_ADDRESSES: AddressSuggestion[] = [
  { address: 'Drottninggatan 1, 111 51 Stockholm', description: 'Stockholm' },
  { address: 'Kungsgatan 10, 111 43 Stockholm', description: 'Stockholm' },
  { address: 'Storgatan 23, 211 41 Malmö', description: 'Malmö' },
  { address: 'Avenyn 15, 411 36 Göteborg', description: 'Göteborg' },
  { address: 'Sveavägen 44, 111 34 Stockholm', description: 'Stockholm' },
  { address: 'Hamngatan 8, 211 22 Malmö', description: 'Malmö' },
  { address: 'Vasagatan 16, 111 20 Stockholm', description: 'Stockholm' },
  { address: 'Östergatan 25, 211 25 Malmö', description: 'Malmö' },
];

export default function AddressAutocomplete({ onAddressSelect, placeholder = "Skriv din adress..." }: AddressAutocompleteProps) {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // In production, this would use Google Places Autocomplete API
  const searchAddresses = async (query: string) => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Filter mock addresses
    const filtered = MOCK_ADDRESSES.filter(addr => 
      addr.address.toLowerCase().includes(query.toLowerCase())
    );
    
    setSuggestions(filtered);
    setLoading(false);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (input) {
        searchAddresses(input);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [input]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node) &&
          inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && suggestions[selectedIndex]) {
          selectAddress(suggestions[selectedIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        break;
    }
  };

  const selectAddress = (suggestion: AddressSuggestion) => {
    setInput(suggestion.address);
    setShowSuggestions(false);
    onAddressSelect(suggestion.address);
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MapPin className="h-5 w-5 text-gray-400" />
        </div>
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
          {loading ? (
            <Loader2 className="h-5 w-5 text-gray-400 animate-spin" />
          ) : (
            <Search className="h-5 w-5 text-gray-400" />
          )}
        </div>
      </div>

      <AnimatePresence>
        {showSuggestions && suggestions.length > 0 && (
          <motion.div
            ref={suggestionsRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-white 
                       rounded-2xl shadow-lg border border-gray-100 
                       max-h-60 overflow-auto"
          >
            {suggestions.map((suggestion, index) => (
              <motion.button
                key={index}
                onClick={() => selectAddress(suggestion)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 
                           transition-colors flex items-center gap-3 ${
                  selectedIndex === index ? 'bg-gray-50 dark:bg-gray-700' : ''
                }`}
              >
                <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                    {suggestion.address}
                  </p>
                  {suggestion.description && (
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {suggestion.description}
                    </p>
                  )}
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {showSuggestions && input.length >= 3 && suggestions.length === 0 && !loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute z-50 w-full mt-2 p-4 bg-gray-50 dark:bg-gray-800 
                     rounded-2xl text-center text-sm text-gray-500 dark:text-gray-400"
        >
          Inga adresser hittades. Försök med en annan sökning.
        </motion.div>
      )}
    </div>
  );
}
