"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import dynamic from 'next/dynamic';

// Client componentini dinamik import ile yükleme
const FooterAnimations = dynamic(() => 
  import('./footer-animations').then(mod => mod.default), 
  { ssr: false }
);

export function ServerFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto border-t border-border/30 bg-gradient-to-b from-transparent to-primary/5 py-12 relative overflow-hidden">
      <FooterAnimations />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 mb-10">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Kaan Yıldız</h3>
            <p className="text-foreground/70 max-w-xs">
              Flutter ile mobil uygulama geliştirme, C#, SQL ve web teknolojileri konusunda içerikler üreten kişisel blog ve portfolyo sitesi.
            </p>
          </div>
          
          <div>
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
          </div>
          
          <div>
            <h4 className="font-bold mb-4 relative">
              İletişim
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
            </h4>
            <div className="flex items-center gap-6 mb-6">
              <a
                href="https://github.com/Kaaanyildiz"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="GitHub"
              >
                <div className="absolute -inset-3 rounded-full bg-primary opacity-0 blur-lg group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-card/30 backdrop-blur-sm border border-border/30 p-3 rounded-full shadow-sm group-hover:shadow-primary/20 group-hover:shadow-lg transition-all duration-300">
                  <FaGithub className="h-6 w-6 text-foreground/70 group-hover:text-primary transform group-hover:scale-110 transition-all duration-300" />
                </div>
              </a>
              <a
                href="https://linkedin.com/in/kaanyıldız1"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="LinkedIn"
              >
                <div className="absolute -inset-3 rounded-full bg-[#0077B5] opacity-0 blur-lg group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-card/30 backdrop-blur-sm border border-border/30 p-3 rounded-full shadow-sm group-hover:shadow-[#0077B5]/20 group-hover:shadow-lg transition-all duration-300">
                  <FaLinkedin className="h-6 w-6 text-foreground/70 group-hover:text-[#0077B5] transform group-hover:scale-110 transition-all duration-300" />
                </div>
              </a>
              <a
                href="https://instagram.com/kaann_yildz"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Instagram"
              >
                <div className="absolute -inset-3 rounded-full bg-[#E4405F] opacity-0 blur-lg group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-card/30 backdrop-blur-sm border border-border/30 p-3 rounded-full shadow-sm group-hover:shadow-[#E4405F]/20 group-hover:shadow-lg transition-all duration-300">
                  <FaInstagram className="h-6 w-6 text-foreground/70 group-hover:text-[#E4405F] transform group-hover:scale-110 transition-all duration-300" />
                </div>
              </a>
            </div>
            
            <a 
              href="mailto:kaanyildz@gmail.com"
              className="group inline-flex items-center gap-2 bg-card/30 backdrop-blur-sm border border-border/30 px-4 py-2 rounded-lg hover:bg-card/60 transition-all duration-300"
            >
              <span className="text-foreground/70 group-hover:text-primary transition-colors duration-300">kaanyildz@gmail.com</span>
              <span className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">→</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60 relative">
            <span className="relative z-10">© {currentYear} Kaan Yıldız. Tüm hakları saklıdır.</span>
          </p>
          
          <div className="flex items-center gap-2">
            <span className="text-primary">❤</span>
            <p className="text-sm text-foreground/60">ile tasarlandı & kodlandı</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
