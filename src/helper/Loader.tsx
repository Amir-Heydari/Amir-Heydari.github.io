import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <div className="flex flex-col items-center space-y-6">
        <motion.div
          className="w-16 h-16 border-2 border-l-transparent border-white rounded-full"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-white text-lg tracking-wider uppercase"
        >
          Loading
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;