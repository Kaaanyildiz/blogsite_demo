'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
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
  
  // Navigasyon menü ögeleri
  const navItems = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/blog', label: 'Blog' },
    { href: '/projeler', label: 'Projeler' },
    { href: '/hakkimda', label: 'Hakkımda' },
  ];
  
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
    <header className="sticky top-0 z-40 border-b border-border/30 bg-background/70 backdrop-blur-xl">
      <motion.div 
        className="container flex h-20 items-center justify-between"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent relative group">
              <span className="relative z-10">Kaan Yıldız</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              <motion.span 
                className="absolute -inset-x-2 -inset-y-1 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </Link>
          </motion.div>
          
          {/* Desktop Menü */}
          <nav className="hidden md:flex">
            <motion.ul 
              className="flex items-center gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {navItems.map((item) => (
                <motion.li 
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Link 
                    href={item.href} 
                    className="relative text-foreground/80 hover:text-foreground group font-medium transition-colors duration-200 px-2 py-1"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                    <motion.span 
                      className="absolute inset-0 rounded-md bg-foreground/5 opacity-0 group-hover:opacity-100" 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    ></motion.span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {/* Sosyal Medya İkonları (Sadece desktop'ta görünür) */}          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/Kaaanyildiz"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-2 text-foreground/70 hover:text-foreground transition-all duration-300 group"
              aria-label="GitHub"
            >
              <span className="absolute inset-0 rounded-full bg-foreground/5 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"></span>
              <FaGithub className="h-5 w-5 transform group-hover:scale-110 transition-transform duration-300" />
            </a>            <a
              href="https://linkedin.com/in/kaanyıldız1"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-2 text-foreground/70 hover:text-foreground transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <span className="absolute inset-0 rounded-full bg-foreground/5 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"></span>
              <FaLinkedin className="h-5 w-5 transform group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="mailto:kaanyildz@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-2 text-foreground/70 hover:text-foreground transition-all duration-300 group"
              aria-label="Email"
            >
              <span className="absolute inset-0 rounded-full bg-foreground/5 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"></span>
              <FaEnvelope className="h-5 w-5 transform group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
          
          {/* Mobil Menü Butonu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-2 text-foreground/70 hover:text-foreground transition-all duration-300 group"
            aria-label={isMobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
          >
            <span className="absolute inset-0 rounded-full bg-foreground/5 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"></span>
            {isMobileMenuOpen ? (
              <FaTimes className="h-5 w-5" />
            ) : (
              <FaBars className="h-5 w-5" />
            )}
          </button>
        </div>
      </motion.div>
      
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
                >                  <a
                    href="https://github.com/Kaaanyildiz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <FaGithub className="h-7 w-7" />
                  </a>                  <a
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
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/30 bg-gradient-to-b from-transparent to-primary/5 py-12 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none">
        <motion.div 
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 5, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -top-64 right-1/3 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -5, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
            delay: 5
          }}
        />
        <motion.div 
          className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.3, 0.1],
            y: [0, -20, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 mb-10">          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Kaan Yıldız</h3>
            <p className="text-foreground/70 max-w-xs">
              Flutter ile mobil uygulama geliştirme, C#, SQL ve web teknolojileri konusunda içerikler üreten kişisel blog ve portfolyo sitesi.
            </p>
          </div>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold mb-4 relative">
              Linkler
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="group flex items-center text-foreground/70 hover:text-primary transition-colors duration-300">
                  <span className="relative overflow-hidden pr-2">
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  </span>
                  Ana Sayfa
                  <span className="opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">→</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="group flex items-center text-foreground/70 hover:text-primary transition-colors duration-300">
                  <span className="relative overflow-hidden pr-2">
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  </span>
                  Blog
                  <span className="opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">→</span>
                </Link>
              </li>
              <li>
                <Link href="/projeler" className="group flex items-center text-foreground/70 hover:text-primary transition-colors duration-300">
                  <span className="relative overflow-hidden pr-2">
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  </span>
                  Projeler
                  <span className="opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">→</span>
                </Link>
              </li>
              <li>
                <Link href="/hakkimda" className="group flex items-center text-foreground/70 hover:text-primary transition-colors duration-300">
                  <span className="relative overflow-hidden pr-2">
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  </span>
                  Hakkımda
                  <span className="opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">→</span>
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold mb-4 relative">
              İletişim
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
            </h4>            <div className="flex items-center gap-6 mb-6">
              <motion.a
                href="https://github.com/Kaaanyildiz"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="GitHub"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute -inset-3 rounded-full bg-primary opacity-0 blur-lg group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-card/30 backdrop-blur-sm border border-border/30 p-3 rounded-full shadow-sm group-hover:shadow-primary/20 group-hover:shadow-lg transition-all duration-300">
                  <FaGithub className="h-6 w-6 text-foreground/70 group-hover:text-primary transform group-hover:scale-110 transition-all duration-300" />
                </div>
              </motion.a>
                <motion.a
                href="https://linkedin.com/in/kaanyıldız1"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="LinkedIn"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute -inset-3 rounded-full bg-[#0077B5] opacity-0 blur-lg group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-card/30 backdrop-blur-sm border border-border/30 p-3 rounded-full shadow-sm group-hover:shadow-[#0077B5]/20 group-hover:shadow-lg transition-all duration-300">
                  <FaLinkedin className="h-6 w-6 text-foreground/70 group-hover:text-[#0077B5] transform group-hover:scale-110 transition-all duration-300" />
                </div>
              </motion.a>
                <motion.a
                href="https://instagram.com/kaann_yildz"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Instagram"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute -inset-3 rounded-full bg-[#E4405F] opacity-0 blur-lg group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-card/30 backdrop-blur-sm border border-border/30 p-3 rounded-full shadow-sm group-hover:shadow-[#E4405F]/20 group-hover:shadow-lg transition-all duration-300">
                  <FaInstagram className="h-6 w-6 text-foreground/70 group-hover:text-[#E4405F] transform group-hover:scale-110 transition-all duration-300" />
                </div>
              </motion.a>
            </div>
            
            <motion.a 
              href="mailto:kaanyildz@gmail.com"
              className="group inline-flex items-center gap-2 bg-card/30 backdrop-blur-sm border border-border/30 px-4 py-2 rounded-lg hover:bg-card/60 transition-all duration-300"
              whileHover={{ x: 5 }}
            >
              <span className="text-foreground/70 group-hover:text-primary transition-colors duration-300">kaanyildz@gmail.com</span>
              <span className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">→</span>
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-border/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >          <p className="text-sm text-foreground/60 relative">
            <span className="relative z-10">© {new Date().getFullYear()} Kaan Yıldız. Tüm hakları saklıdır.</span>
            <motion.span 
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary/20"
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 1 }}
            />
          </p>
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
              className="text-primary"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 1.5 
              }}
            >
              ❤
            </motion.span>
            <p className="text-sm text-foreground/60">ile tasarlandı & kodlandı</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
