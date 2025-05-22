'use client';

import { motion } from 'framer-motion';

export default function HeroAnimations() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0.5, scale: 0.8 }}
        animate={{ 
          opacity: 0.7, 
          scale: 1.2,
          transition: { 
            repeat: Infinity,
            repeatType: "reverse", 
            duration: 20,
            ease: "easeInOut" 
          } 
        }}
        className="absolute -top-64 -left-64 w-[40rem] h-[40rem] rounded-full bg-primary/5 blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0.5, scale: 0.8 }}
        animate={{ 
          opacity: 0.7, 
          scale: 1.2,
          transition: { 
            repeat: Infinity, 
            repeatType: "reverse", 
            duration: 15,
            ease: "easeInOut",
            delay: 1
          } 
        }}
        className="absolute top-32 -right-64 w-[40rem] h-[40rem] rounded-full bg-secondary/5 blur-3xl"
      />
      
      <motion.div
        initial={{ opacity: 0.3, y: 0 }}
        animate={{ 
          opacity: 0.6, 
          y: -20,
          transition: { 
            repeat: Infinity, 
            repeatType: "reverse", 
            duration: 8,
            ease: "easeInOut" 
          } 
        }}
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
      />
    </div>
  );
}
