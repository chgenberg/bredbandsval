'use client';

import { motion } from 'framer-motion';
import { Message } from '@/types';

interface ChatMessageProps {
  message: Message;
  onQuickReply?: (value: string) => void;
}

export default function ChatMessage({ message, onQuickReply }: ChatMessageProps) {
  const isUser = message.sender === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div className={`message-bubble ${isUser ? 'user-message' : 'agent-message'}`}>
        <p className="whitespace-pre-wrap">{message.content}</p>
        
        {message.quickReplies && message.quickReplies.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {message.quickReplies.map((reply) => (
              <motion.button
                key={reply.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onQuickReply?.(reply.value)}
                className="px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-full text-sm transition-colors"
              >
                {reply.text}
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
