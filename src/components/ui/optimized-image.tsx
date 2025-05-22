'use client';

import Image from 'next/image';
import { CSSProperties } from 'react';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
  blurDataURL?: string;
}

// SEO için optimize edilmiş görüntü bileşeni
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes = "100vw",
  quality = 85,
  className = "",
  priority = false,
  style,
  blurDataURL
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Eğer görsel yerel değilse ve tam yol belirtilmemişse, domain ekle
  const imageSrc = src.startsWith('http') || src.startsWith('/') 
    ? src 
    : `/${src}`;

  // Hata durumunda placeholder göster
  if (error) {
    return (
      <div 
        className={`
          ${className}
          flex items-center justify-center
          bg-gray-100 dark:bg-gray-800
          text-gray-400 dark:text-gray-500
        `}
        style={{
          width: width || '100%',
          height: height || '100%',
          ...style
        }}
      >
        Görsel yüklenemedi
      </div>
    );
  }

  return (
    <div 
      className={`
        ${className}
        ${fill ? 'relative' : ''}
        ${isLoading ? 'animate-pulse bg-gray-200 dark:bg-gray-700' : ''}
      `}
      style={{ 
        height: fill ? '100%' : 'auto',
        width: fill ? '100%' : 'auto'
      }}
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        sizes={sizes}
        quality={quality}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => setError(true)}
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={blurDataURL}
        style={style || {
          objectFit: fill ? 'cover' : 'contain',
        }}
      />
    </div>
  );
}
