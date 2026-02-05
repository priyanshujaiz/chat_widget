import { motion } from 'framer-motion';

export const TypingBubble = () => {
    return (
        <div className="flex justify-start mb-4">
            <div className="flex items-end gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-[10px] text-blue-600">...</span>
                </div>
                <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-none border border-gray-200 flex items-center gap-1 h-10">
                    <motion.div
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    />
                </div>
            </div>
        </div>
    );
};
