'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface DecoratifArkaplanProps {
  variant?: 'default' | 'subtle' | 'dots' | 'grid' | 'mesh';
  className?: string;
  animate?: boolean;
  children?: React.ReactNode;
}

export function DecoratifArkaplan({
  variant = 'default',
  className = '',
  animate = true,
  children
}: DecoratifArkaplanProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Farklı varyantlar için arka plan sınıflarını belirle
  const getBackgroundClass = () => {
    switch(variant) {
      case 'subtle': return 'bg-gradient-subtle';
      case 'dots': return 'bg-dots';
      case 'grid': return 'bg-grid';
      case 'mesh': return 'bg-mesh';
      default: return 'bg-gradient-subtle';
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Ana arka plan */}
      <div className={`absolute inset-0 ${getBackgroundClass()}`}></div>
      
      {/* Animasyonlu dekoratif elemanlar - sadece animate prop'u true ise */}
      {animate && (
        <>
          {/* Hareketli gradyan blob'lar */}
          <motion.div 
            className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl"
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -50, 50, 0],
              opacity: [0.5, 0.7, 0.6, 0.5],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              top: '10%',
              left: '10%',
            }}
          />
          
          <motion.div 
            className="absolute w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl"
            animate={{
              x: [0, -30, 30, 0],
              y: [0, 40, -40, 0],
              opacity: [0.3, 0.5, 0.4, 0.3],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            style={{
              bottom: '10%',
              right: '10%',
            }}
          />
          
          <motion.div 
            className="absolute w-[300px] h-[300px] rounded-full bg-accent/10 blur-3xl"
            animate={{
              x: [0, 20, -20, 0],
              y: [0, -30, 30, 0],
              opacity: [0.2, 0.4, 0.3, 0.2],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            style={{
              top: '30%',
              right: '20%',
            }}
          />
          
          {/* Fare ile etkileşimli nokta */}
          <motion.div 
            className="absolute w-32 h-32 rounded-full bg-primary/20 blur-xl"
            animate={{
              x: mousePosition.x - 64,
              y: mousePosition.y - 64,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              mass: 0.5,
            }}
          />
        </>
      )}
      
      {/* İçerik */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
