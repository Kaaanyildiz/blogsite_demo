'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TechCardProps {
  name: string;
  icon: ReactNode;
  color: string;
  index: number;
}

/**
 * İnteraktif teknoloji kartı için client component
 */
export default function TechCard({ name, icon, color, index }: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.1 * index }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="relative flex flex-col items-center justify-center rounded-2xl border border-border/40 bg-card/80 backdrop-blur-sm p-8 text-center group"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <motion.div 
        className={`mb-6 ${color} relative z-10`}
        animate={{ y: [0, -5, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 3 + index,
          ease: "easeInOut"
        }}
      >
        {icon}
      </motion.div>
      <h3 className="font-bold text-lg relative z-10 group-hover:text-primary transition-colors duration-300">{name}</h3>
    </motion.div>
  );
}
