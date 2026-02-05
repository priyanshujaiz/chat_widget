import { MessageCircle, X } from 'lucide-react';
import { useWidgetStore } from '../store/useWidgetStore';
import { motion } from 'framer-motion';

export const Launcher = () => {
  const { isOpen, toggleOpen } = useWidgetStore();

  return (
    <button
      onClick={toggleOpen}
      aria-label={isOpen ? "Close chat widget" : "Open chat widget"}
      className="fixed bottom-5 right-5 h-14 w-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-110 focus:outline-none z-50"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.2, type: "spring", stiffness: 260, damping: 20 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.div>
    </button>
  );
};