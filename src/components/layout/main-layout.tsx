'use client';

import { Header, Footer } from './header-footer';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ElegantBackground } from '../ui/elegant-background';

interface LayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: LayoutProps) {
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
  };  return (
    <div className="flex min-h-screen flex-col">
      {/* Zarif ve profesyonel arka plan */}
      <ElegantBackground />
      
      <Header />
      <AnimatePresence mode="wait">
        <motion.main 
          key={pathname}
          className="flex-1 relative z-0"
          initial={isFirstRender ? "enter" : "hidden"}
          animate="enter"
          exit="exit"
          variants={variants}
        >
          <motion.div
            variants={childVariants}
            className="h-full"
          >
            {children}
          </motion.div>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
