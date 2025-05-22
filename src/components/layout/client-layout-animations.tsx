'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ElegantBackground } from '../ui/elegant-background';

interface ClientLayoutAnimationsProps {
  children: React.ReactNode;
}

export function ClientLayoutAnimations({ children }: ClientLayoutAnimationsProps) {
  const pathname = usePathname();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [prevPathname, setPrevPathname] = useState<string>("");
  
  useEffect(() => {
    setIsFirstRender(false);
    // Sayfa geçişini algıla
    if (prevPathname !== pathname && prevPathname !== "") {
      // Tema geçişini yumuşatmak için ek önlemler burada eklenebilir
      const root = document.documentElement;
      root.classList.add('page-transition');
      
      const timer = setTimeout(() => {
        root.classList.remove('page-transition');
      }, 400);
      
      return () => clearTimeout(timer);
    }
    
    setPrevPathname(pathname);
  }, [pathname, prevPathname]);
  
  // Sayfa geçiş varyantları - geliştirilmiş animasyonlar
  const variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    enter: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0], // cubic-bezier
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      filter: "blur(8px)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };
  
  // Alt öğeler için animasyon varyantları
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };
  
  return (
    <>
      {/* Zarif ve profesyonel arka plan */}
      <ElegantBackground />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          variants={variants}
          initial={isFirstRender ? "enter" : "hidden"}
          animate="enter"
          exit="exit"
          className="flex-1"
        >
          {/* Çocuk bileşenler için animasyon wrapper'ları */}
          <motion.div 
            variants={childVariants} 
            className="flex-1"
          >
            {children}
          </motion.div>
        </motion.main>
      </AnimatePresence>
    </>
  );
}
