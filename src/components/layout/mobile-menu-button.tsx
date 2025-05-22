'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

interface NavItem {
  href: string;
  label: string;
}

interface MobileMenuButtonProps {
  navItems: NavItem[];
}

export function MobileMenuButton({ navItems }: MobileMenuButtonProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Sayfa yüklendiğinde client-side rendering için
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Mobil menü açıkken kaydırmayı engelle
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);
  
  // Mobil menü animasyon varyantları
  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: '0%',
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };
  
  // Mobil menü öğe animasyon varyantları
  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    }),
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="relative p-2 text-foreground/70 hover:text-foreground transition-all duration-300 group"
        aria-label={isMobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
      >
        <span className="absolute inset-0 rounded-full bg-foreground/5 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"></span>
        {isMobileMenuOpen ? (
          <FaTimes className="h-5 w-5" />
        ) : (
          <FaBars className="h-5 w-5" />
        )}
      </button>
      
      {/* Mobil Navigasyon Menüsü */}
      <AnimatePresence>
        {isMobileMenuOpen && isMounted && (
          <motion.div 
            className="md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-md pt-20 overflow-y-auto"
            initial="closed"
            animate="open"
            exit="exit"
            variants={menuVariants}
          >
            <div className="container py-10">
              <nav className="flex flex-col gap-10">
                <ul className="flex flex-col gap-6">
                  {navItems.map((item, i) => (
                    <motion.li 
                      key={item.href}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={menuItemVariants}
                    >
                      <Link 
                        href={item.href}
                        className="relative text-2xl font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent transition-all duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={5}
                  variants={menuItemVariants}
                  className="flex gap-6"
                >
                  <a
                    href="https://github.com/Kaaanyildiz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <FaGithub className="h-7 w-7" />
                  </a>
                  <a
                    href="https://linkedin.com/in/kaanyıldız1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="h-7 w-7" />
                  </a>
                  <a
                    href="mailto:kaanyildz@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors duration-200"
                    aria-label="Email"
                  >
                    <FaEnvelope className="h-7 w-7" />
                  </a>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
