import type { Message } from '../types';
import { Bot, User } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isBot = message.type === 'bot';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={clsx(
        "flex w-full mb-4",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      <div className={clsx(
        "flex max-w-[80%] items-end gap-2",
        isBot ? "flex-row" : "flex-row-reverse"
      )}>
        <div className={clsx(
          "w-6 h-6 rounded-full flex items-center justify-center shrink-0",
          isBot ? "bg-blue-100 text-blue-600" : "bg-gray-200 text-gray-600"
        )}>
          {isBot ? <Bot size={14} /> : <User size={14} />}
        </div>

        <div className={clsx(
          "p-3 text-sm shadow-sm",
          isBot 
            ? "bg-white text-slate-800 shadow-sm border border-slate-100 rounded-2xl rounded-bl-none" 
            : "bg-blue-600 text-white shadow-sm rounded-2xl rounded-br-none"
        )}>
          {message.content}
          <div className={clsx(
            "text-[10px] mt-1 opacity-70",
            isBot ? "text-gray-400" : "text-blue-100"
          )}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>

      </div>
    </motion.div>
  );
};
