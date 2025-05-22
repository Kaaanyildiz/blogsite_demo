'use client';

import { motion } from 'framer-motion';

interface HeroContentAnimationsProps {
  title: string;
  subtitle: string;
  description?: string;
  hasButtons?: boolean;
}

export default function HeroContentAnimations({ title, subtitle, description, hasButtons }: HeroContentAnimationsProps) {
  return (
    <>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-24 w-full max-w-2xl h-72 rounded-full bg-primary/10 blur-3xl"
      />
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
      >
        {title}
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mb-6 max-w-3xl text-xl md:text-2xl font-medium text-foreground/80"
      >
        {subtitle}
      </motion.p>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-foreground/70"
        >
          {description}
        </motion.p>
      )}
      
      {hasButtons && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* Butonlar parent component tarafından render edilecek */}
        </motion.div>
      )}
    </>
  );
}
