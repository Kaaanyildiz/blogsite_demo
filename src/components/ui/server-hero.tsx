"use client";

// Hero bileşeni için component
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Client componentleri dynamic import ile yüklüyoruz
const HeroAnimations = dynamic(() => import('./hero-animations'));

const HeroContentAnimations = dynamic(() => import('./hero-content-animations'));

// Animasyonsuz içerik için pure server component
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
  animation?: boolean; // Animasyonu etkinleştirme seçeneği
}

export function ServerHero({ title, subtitle, description, cta, secondaryCta, animation = true }: HeroProps) {
  return (
    <div className="relative py-32 overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background">
      {/* Animasyonlu arka plan elementleri - client component olarak ayrıldı */}
      <HeroAnimations />
      
      <div className="container relative z-10 text-center">
        {animation ? (
          // Animasyonlu içerik (client component)
          <HeroContentAnimations 
            title={title} 
            subtitle={subtitle} 
            description={description} 
            hasButtons={!!(cta || secondaryCta)}
          />
        ) : (
          // Animasyonsuz içerik (server component)
          <>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-24 w-full max-w-2xl h-72 rounded-full bg-primary/10 blur-3xl" />
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {title}
            </h1>
            
            <p className="mx-auto mb-6 max-w-3xl text-xl md:text-2xl font-medium text-foreground/80">
              {subtitle}
            </p>
            
            {description && (
              <p className="mx-auto mb-10 max-w-2xl text-foreground/70">
                {description}
              </p>
            )}
          </>
        )}
        
        <div className="flex flex-wrap items-center justify-center gap-4">
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
        </div>
      </div>
    </div>
  );
}
