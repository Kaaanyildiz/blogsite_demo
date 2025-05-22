'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  cta?: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
}

export function Hero({ title, subtitle, description, cta, secondaryCta }: HeroProps) {
  return (    <div className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Animasyonlu arka plan elementleri */}
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
      
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-24 w-full max-w-2xl h-72 rounded-full bg-primary/10 blur-3xl"
        />        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-6 max-w-3xl text-2xl md:text-3xl font-semibold text-foreground/90 text-center"
        >
          {subtitle}
        </motion.p>
        
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-8 max-w-2xl text-lg text-foreground/70 text-center"
          >
            {description}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {cta && (
            <Link
              href={cta.link}
              className="btn btn-primary px-8 py-4 rounded-full text-white font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              {cta.text}
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.link}
              className="btn btn-outline px-8 py-4 rounded-full border-2 hover:bg-foreground/5 transition-all duration-300"
            >
              {secondaryCta.text}
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
}
