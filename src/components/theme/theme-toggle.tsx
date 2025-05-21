'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <div className="w-12 h-12"></div>; // Placeholder to prevent layout shift
  }
  
  const isDark = theme === 'dark';
  
  return (
    <motion.button
      aria-label="Tema değiştir"
      type="button"
      className="group rounded-full bg-card/80 backdrop-blur-sm p-2.5 shadow-md border border-border/40 hover:border-primary/30 relative overflow-hidden z-10"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Arka plan efekti */}
      <span className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
      
      <div className="relative h-6 w-6">
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 180, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <FaSun className="h-full w-full text-yellow-400" />
              <span className="absolute inset-0 rounded-full bg-yellow-400/20 animate-ping opacity-0 group-hover:opacity-70" style={{ animationDuration: '2s' }}></span>
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ scale: 0, rotate: 180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: -180, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <FaMoon className="h-full w-full text-primary" />
              <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-0 group-hover:opacity-70" style={{ animationDuration: '2s' }}></span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
}
