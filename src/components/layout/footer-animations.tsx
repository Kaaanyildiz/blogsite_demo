'use client';

import { motion } from 'framer-motion';

export default function FooterAnimations() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none">
      <motion.div 
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 5, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -top-64 right-1/3 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -5, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
          delay: 5
        }}
      />
      <motion.div 
        className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.3, 0.1],
          y: [0, -20, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
}
