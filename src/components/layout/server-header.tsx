"use client";

// Server Header Component
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import dynamic from 'next/dynamic';

// Client componentlerini dinamik import ile yükleme
const MobileMenuButton = dynamic(() => 
  import('./mobile-menu-button').then(mod => mod.MobileMenuButton), 
  { ssr: false }
);

// Theme Toggle'ı client tarafında yükle
const ThemeToggle = dynamic(
  () => import('../theme/theme-toggle').then((mod) => mod.ThemeToggle),
  { ssr: false }
);

export function ServerHeader() {
  // Navigasyon menü ögeleri
  const navItems = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/blog', label: 'Blog' },
    { href: '/projeler', label: 'Projeler' },
    { href: '/hakkimda', label: 'Hakkımda' },
  ];
  
  return (
    <header className="sticky top-0 z-40 border-b border-border/30 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-8">
          <div>
            <Link 
              href="/" 
              className="relative px-4 py-2 overflow-hidden group"
            >
              <span className="relative z-10 text-xl md:text-2xl font-bold text-foreground duration-300 group-hover:text-primary">
                Kaan Yıldız
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-primary to-secondary translate-y-[2px] group-hover:translate-y-0 transition-transform duration-300"></span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Menü */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="block px-4 py-2 relative font-medium"
                  >
                    <span className="block text-foreground/70 hover:text-foreground transition-colors duration-300">
                      {item.label}
                    </span>
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {/* Sosyal Medya İkonları (Sadece desktop'ta görünür) */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/Kaaanyildiz"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-2 text-foreground/70 hover:text-foreground transition-all duration-300 group"
              aria-label="GitHub"
            >
              <span className="absolute inset-0 rounded-full bg-foreground/5 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"></span>
              <FaGithub className="h-5 w-5 transform group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
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
          <div className="md:hidden">
            <MobileMenuButton navItems={navItems} />
          </div>
        </div>
      </div>
    </header>
  );
}
