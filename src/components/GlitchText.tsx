import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export const GlitchText: React.FC<GlitchTextProps> = ({ 
  children, 
  className = '',
  intensity = 'medium'
}) => {
  const getGlitchVariants = () => {
    switch (intensity) {
      case 'low':
        return {
          initial: { x: 0, textShadow: '0 0 0 transparent' },
          hover: {
            x: [0, -1, 1, 0],
            textShadow: [
              '0 0 0 transparent',
              '2px 0 #ff0080, -2px 0 #00ff80',
              '0 0 0 transparent'
            ],
            transition: { duration: 0.3, repeat: 1 }
          }
        };
      case 'high':
        return {
          initial: { x: 0, textShadow: '0 0 0 transparent' },
          hover: {
            x: [0, -3, 3, -1, 1, 0],
            textShadow: [
              '0 0 0 transparent',
              '3px 0 #ff0080, -3px 0 #00ff80, 1px 0 #0080ff',
              '-2px 0 #ff0080, 2px 0 #00ff80, -1px 0 #0080ff',
              '0 0 0 transparent'
            ],
            transition: { duration: 0.6, repeat: 2 }
          }
        };
      default:
        return {
          initial: { x: 0, textShadow: '0 0 0 transparent' },
          hover: {
            x: [0, -2, 2, 0],
            textShadow: [
              '0 0 0 transparent',
              '2px 0 #ff0080, -2px 0 #00ff80',
              '-1px 0 #ff0080, 1px 0 #00ff80',
              '0 0 0 transparent'
            ],
            transition: { duration: 0.4, repeat: 1 }
          }
        };
    }
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={getGlitchVariants()}
      initial="initial"
      whileHover="hover"
    >
      {children}
    </motion.span>
  );
};