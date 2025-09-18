'use client';

import { useState, KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function ChatInput({ onSendMessage, placeholder = "Skriv din adress...", disabled = false }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim() && !disabled) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="border-t border-gray-100 p-4 bg-white">
      <div className="flex items-center gap-3 max-w-3xl mx-auto">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          disabled={disabled}
          className="flex-1 px-5 py-3 rounded-2xl border border-gray-200 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     disabled:opacity-50 bg-gray-50 text-gray-900 placeholder-gray-400
                     transition-all duration-200"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          disabled={disabled || !input.trim()}
          className="p-3 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 
                     disabled:opacity-50 disabled:cursor-not-allowed transition-all
                     shadow-md hover:shadow-lg"
        >
          <Send size={20} />
        </motion.button>
      </div>
    </div>
  );
}
