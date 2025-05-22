'use client';

import { motion } from 'framer-motion';

interface AnimatedCardWrapperProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Animasyonlu kart dış kabuğu için client component
 * Server Card bileşeninin etrafına sarılacak
 */
export default function AnimatedCardWrapper({ children, className }: AnimatedCardWrapperProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
