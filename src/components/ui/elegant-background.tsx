'use client';

import React from 'react';

/**
 * Zarif ve minimalist bir arka plan bileşeni
 */
export function ElegantBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Ana gradyan arka plan */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 25% 25%, rgba(var(--primary-rgb), 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(var(--secondary-rgb), 0.08) 0%, transparent 50%)'
        }}
      ></div>
        {/* İnce detay desenleri */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(var(--foreground-rgb), 0.008) 1px, transparent 1px), linear-gradient(to right, rgba(var(--foreground-rgb), 0.008) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Üst kısım için renk vurgusu */}
      <div
        className="absolute top-0 left-0 right-0 h-[30vh]"
        style={{
          background: 'linear-gradient(180deg, rgba(var(--primary-rgb), 0.05) 0%, transparent 100%)'
        }}
      ></div>
      
      {/* Alt kısım için renk vurgusu */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[25vh]"
        style={{
          background: 'linear-gradient(0deg, rgba(var(--secondary-rgb), 0.05) 0%, transparent 100%)'
        }}
      ></div>
    </div>
  );
}
