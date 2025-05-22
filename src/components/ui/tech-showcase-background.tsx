'use client';

import { motion } from 'framer-motion';

/**
 * TechShowcase arka plan animasyonları için client component
 */
export default function TechShowcaseBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-70">
      <motion.div 
        className="absolute -right-20 top-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5] 
        }}
        transition={{ 
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut" 
        }}
      ></motion.div>
      <motion.div 
        className="absolute -left-20 bottom-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.7, 0.5] 
        }}
        transition={{ 
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
          delay: 3
        }}
      ></motion.div>
    </div>
  );
}
