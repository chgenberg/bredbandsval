'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, BarChart3, Check, User, Users, Play, Gamepad2, 
  X, Briefcase, GraduationCap, Video, Router, HelpCircle,
  Zap, Calendar, PiggyBank, Tv, Film, Trophy, Baby
} from 'lucide-react';
import { Message } from '@/types';

interface ChatMessageProps {
  message: Message;
  onQuickReply?: (value: string) => void;
}

export default function ChatMessage({ message, onQuickReply }: ChatMessageProps) {
  const isUser = message.sender === 'user';
  const isShortMessage = message.content.length < 50; // Messages under 50 chars stay on one line

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div className={`message-bubble ${isUser ? 'user-message' : 'agent-message'}`}>
        <p className={isShortMessage ? '' : 'wrap'}>{message.content}</p>
        
        {message.quickReplies && message.quickReplies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {message.quickReplies.map((reply) => {
              const Icon = reply.icon === 'location' ? MapPin : 
                         reply.icon === 'chart' ? BarChart3 :
                         reply.icon === 'user' ? User :
                         reply.icon === 'users' ? Users :
                         reply.icon === 'play' ? Play :
                         reply.icon === 'gamepad' ? Gamepad2 :
                         reply.icon === 'x' ? X :
                         reply.icon === 'briefcase' ? Briefcase :
                         reply.icon === 'graduation' ? GraduationCap :
                         reply.icon === 'video' ? Video :
                         reply.icon === 'router' ? Router :
                         reply.icon === 'help' ? HelpCircle :
                         reply.icon === 'zap' ? Zap :
                         reply.icon === 'calendar' ? Calendar :
                         reply.icon === 'piggy' ? PiggyBank :
                         reply.icon === 'tv' ? Tv :
                         reply.icon === 'film' ? Film :
                         reply.icon === 'trophy' ? Trophy :
                         reply.icon === 'baby' ? Baby :
                         Check;
              
              return (
                <motion.button
                  key={reply.value}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onQuickReply?.(reply.value)}
                  className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 
                           rounded-xl text-sm text-gray-700 font-medium transition-all
                           border border-gray-200 hover:border-gray-300"
                >
                  <Icon size={16} className="text-gray-500" />
                  {reply.text}
                </motion.button>
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
}
