import type { Option } from '../../types/conversation';
import { motion } from 'framer-motion';

interface QuickRepliesProps {
  options: Option[];
  onSelect: (option: Option) => void;
}

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1 // Delay between each button appearing
    }
  }
};

// Animation variants for each button
const itemVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export const QuickReplies = ({ options, onSelect }: QuickRepliesProps) => {
  return (
    <motion.div
      className="flex flex-wrap gap-2 p-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {options.map((option) => (
        <motion.button
          key={option.label}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }} // Slight grow on hover
          whileTap={{ scale: 0.95 }}   // Slight shrink on click (Tactile feel)
          onClick={() => onSelect(option)}
          className="border border-blue-600 text-blue-600 bg-white rounded-full px-4 py-2 text-sm font-medium hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
        >
          {option.label}
        </motion.button>
      ))}
    </motion.div>
  );
};