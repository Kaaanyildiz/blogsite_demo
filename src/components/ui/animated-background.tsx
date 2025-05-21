'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'gradient' | 'bubbles' | 'wave' | 'mesh';
  intensity?: 'subtle' | 'medium' | 'high';
  interactive?: boolean;
}

export function AnimatedBackground({
  children,
  variant = 'gradient',
  intensity = 'medium',
  interactive = true
}: AnimatedBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse pozisyonunu takip et
  useEffect(() => {
    if (!interactive) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [interactive]);
  
  // Konteyner boyutlarını takip et
  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  
  // Renk yoğunluğunu ayarla
  const getOpacity = () => {
    switch (intensity) {
      case 'subtle': return { primary: 0.05, secondary: 0.03, accent: 0.02 };
      case 'medium': return { primary: 0.1, secondary: 0.08, accent: 0.05 };
      case 'high': return { primary: 0.15, secondary: 0.12, accent: 0.08 };
      default: return { primary: 0.1, secondary: 0.08, accent: 0.05 };
    }
  };
  
  const opacities = getOpacity();
  
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10" ref={containerRef}>
      {/* Gradient variant */}
      {variant === 'gradient' && (
        <>
          <motion.div
            className="absolute"
            animate={{
              background: [
                `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), ${opacities.primary}) 0%, transparent 60%)`,
                `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), ${opacities.primary}) 0%, transparent 65%)`,
                `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), ${opacities.primary}) 0%, transparent 60%)`
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundBlendMode: 'screen',
              zIndex: -10
            }}
          />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at bottom, rgba(var(--primary-rgb), 0.15) 0%, transparent 80%)',
            backgroundBlendMode: 'screen',
            zIndex: -9
          }} />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at top, rgba(var(--secondary-rgb), 0.1) 0%, transparent 70%)',
            backgroundBlendMode: 'multiply',
            zIndex: -8
          }} />
          
          {/* Animasyonlu gradyan arka plan */}
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" style={{ zIndex: -7 }} />
          
          {/* Sabit desenli arka plan */}
          <div className="absolute inset-0 bg-grid opacity-30" style={{ zIndex: -6 }} />
        </>
      )}
      
      {/* Bubbles variant */}
      {variant === 'bubbles' && (
        <div className="absolute inset-0" style={{ zIndex: -10 }}>
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              initial={{
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
                scale: Math.random() * 0.5 + 0.5,
                opacity: Math.random() * 0.3 + 0.1,
              }}
              animate={{
                x: [
                  Math.random() * dimensions.width,
                  Math.random() * dimensions.width,
                  Math.random() * dimensions.width
                ],
                y: [
                  Math.random() * dimensions.height,
                  Math.random() * dimensions.height,
                  Math.random() * dimensions.height
                ],
                opacity: [
                  Math.random() * 0.3 + 0.1,
                  Math.random() * 0.5 + 0.2,
                  Math.random() * 0.3 + 0.1
                ],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                background: i % 3 === 0
                  ? `radial-gradient(circle, rgba(var(--primary-rgb), ${opacities.primary}) 0%, transparent 70%)`
                  : i % 3 === 1
                    ? `radial-gradient(circle, rgba(var(--secondary-rgb), ${opacities.secondary}) 0%, transparent 70%)`
                    : `radial-gradient(circle, rgba(var(--accent-rgb), ${opacities.accent}) 0%, transparent 70%)`,
                filter: 'blur(60px)',
              }}
            />
          ))}
          <div className="absolute inset-0 bg-grid opacity-30" style={{ zIndex: 1 }} />
        </div>
      )}
      
      {/* Wave variant */}
      {variant === 'wave' && (
        <>
          <div className="absolute inset-0" style={{ 
            background: `linear-gradient(to bottom, 
              rgba(var(--background-rgb), 1) 0%, 
              rgba(var(--background-rgb), 0.99) 40%,
              rgba(var(--background-rgb), 0.95) 60%,
              rgba(var(--background-rgb), 0.9) 100%)`, 
            zIndex: -15
          }} />
          
          <motion.div
            className="absolute bottom-0 left-0 right-0"
            initial={{ backgroundPosition: '0% 0%' }}
            animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              height: '50%',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='rgba(0, 116, 255, ${opacities.primary * 2})' fill-opacity='1' d='M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,170.7C960,139,1056,85,1152,69.3C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundSize: '200% 100%',
              backgroundRepeat: 'repeat-x',
              zIndex: -14,
            }}
          />
          
          <motion.div
            className="absolute bottom-0 left-0 right-0"
            initial={{ backgroundPosition: '0% 0%' }}
            animate={{ backgroundPosition: ['0% 0%', '-100% 0%', '0% 0%'] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 0.5 }}
            style={{
              height: '40%',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='rgba(186, 5, 5, ${opacities.secondary * 2})' fill-opacity='1' d='M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,234.7C672,235,768,213,864,213.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundSize: '200% 100%',
              backgroundRepeat: 'repeat-x',
              zIndex: -13,
            }}
          />
          
          <motion.div
            className="absolute bottom-0 left-0 right-0"
            initial={{ backgroundPosition: '0% 0%' }}
            animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 1 }}
            style={{
              height: '30%',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='rgba(0, 59, 153, ${opacities.accent * 2})' fill-opacity='1' d='M0,64L48,69.3C96,75,192,85,288,112C384,139,480,181,576,192C672,203,768,181,864,154.7C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundSize: '200% 100%',
              backgroundRepeat: 'repeat-x',
              zIndex: -12,
            }}
          />
          
          {/* Desenli overlay */}
          <div className="absolute inset-0 bg-dots opacity-20" style={{ zIndex: -11 }} />
        </>
      )}
      
      {/* Mesh variant */}
      {variant === 'mesh' && (
        <>
          <div className="absolute inset-0 bg-mesh" style={{ zIndex: -10, opacity: 0.8 }} />
          
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), ${opacities.primary * 2}) 0%, transparent 25%)`,
                `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), ${opacities.primary}) 0%, transparent 20%)`,
                `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), ${opacities.primary * 2}) 0%, transparent 25%)`
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            style={{
              backgroundBlendMode: 'screen',
              zIndex: -9
            }}
          />
          
          {/* Hareketli bulutsu efektler */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute blur-[100px]"
              animate={{
                x: [
                  dimensions.width * Math.random() * 0.8,
                  dimensions.width * Math.random() * 0.8,
                  dimensions.width * Math.random() * 0.8
                ],
                y: [
                  dimensions.height * Math.random() * 0.8, 
                  dimensions.height * Math.random() * 0.8,
                  dimensions.height * Math.random() * 0.8
                ],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 25 + i * 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
              style={{
                width: 500 + i * 100,
                height: 500 + i * 100,
                borderRadius: '40%',
                background: i === 0 
                  ? `radial-gradient(circle, rgba(var(--primary-rgb), ${opacities.primary * 3}) 0%, transparent 70%)`
                  : i === 1
                    ? `radial-gradient(circle, rgba(var(--secondary-rgb), ${opacities.secondary * 3}) 0%, transparent 70%)`
                    : `radial-gradient(circle, rgba(var(--accent-rgb), ${opacities.accent * 3}) 0%, transparent 70%)`,
                zIndex: -8 + i
              }}
            />
          ))}
          
          {/* İnce detaylar için ızgara */}
          <div className="absolute inset-0 bg-grid opacity-10" style={{ zIndex: -5 }} />
        </>
      )}
      
      {children}
    </div>
  );
}
