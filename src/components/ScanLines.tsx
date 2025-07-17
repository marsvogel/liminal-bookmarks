import React from 'react';
import { motion } from 'framer-motion';

export const ScanLines: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Moving scan lines */}
      <motion.div
        className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20"
        animate={{
          y: ['-100vh', '100vh'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
          delay: 0,
        }}
      />
      <motion.div
        className="absolute w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-15"
        animate={{
          y: ['-100vh', '100vh'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
          delay: 4,
        }}
      />
      <motion.div
        className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-10"
        animate={{
          y: ['-100vh', '100vh'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
          delay: 8,
        }}
      />
      
      {/* Static scan lines overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.1) 2px, rgba(0, 255, 0, 0.1) 4px)',
          }}
        />
      </div>
    </div>
  );
};