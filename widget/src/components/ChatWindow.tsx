import { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { MessageList } from './MessageList';
import { QuickReplies } from './ui/QuickReplies';
import { useChatEngine } from '../hooks/useChatEngine';
import { chatConfig } from '../core/chatConfig';
import { useWidgetStore } from '../store/useWidgetStore'; // Import Store

export const ChatWindow = () => {
  const [inputValue, setInputValue] = useState('');

  const { currentStepId, handleUserResponse } = useChatEngine();
  // NEW: Get isTyping to disable input
  const isTyping = useWidgetStore((state) => state.isTyping);

  const currentStep = chatConfig[currentStepId];

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    handleUserResponse(inputValue);
    setInputValue('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-24 right-5 w-[380px] h-[600px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 z-50 font-sans"
    >
      {/* HEADER */}
      <div className="bg-blue-600 p-4 text-white shrink-0 flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg">Support Team</h3>
          <p className="text-xs opacity-90">We typically reply within minutes</p>
        </div>
        {/* Optional: Add a minimize or close button here later */}
      </div>

      {/* BODY */}
      <MessageList />

      {/* FOOTER */}
      <div className="bg-white border-t border-gray-100 shrink-0">

        {/* CASE A: OPTIONS */}
        {/* Hide options if bot is typing, so user waits */}
        {!isTyping && currentStep?.type === 'options' && currentStep.options && (
          <div className="p-2">
            <QuickReplies
              options={currentStep.options}
              onSelect={(option) => handleUserResponse(option.label, option)}
            />
          </div>
        )}

        {/* CASE B: TEXT INPUT */}
        {(currentStep?.type === 'text' || currentStep?.type === 'input-email') && (
          <div className="p-3">
            <form
              className="flex items-center gap-2"
              onSubmit={handleTextSubmit}
            >
              <input
                type="text"
                placeholder={currentStep.type === 'input-email' ? "Enter your email..." : "Type a message..."}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                // NEW: Disable input when bot is typing
                disabled={isTyping}
                className="flex-1 p-2 text-sm bg-gray-100 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping} // Disable logic
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        )}

        {/* CASE C: END */}
        {currentStep?.type === 'end' && (
          <div className="p-4 text-center text-sm text-gray-500">
            Conversation Ended
          </div>
        )}
      </div>
    </motion.div>
  );
};