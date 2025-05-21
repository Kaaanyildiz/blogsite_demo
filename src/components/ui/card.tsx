'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags?: string[];
  className?: string;
}

export function Card({ title, description, image, link, tags, className }: CardProps) {
  const cardContent = (
    <motion.div
      className={`card overflow-hidden rounded-xl border border-border/40 bg-card h-full group ${className || ''}`}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {image && (
        <div className="relative h-56 w-full overflow-hidden">
          {image.startsWith('/images/') ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-20 z-10 transition-opacity duration-300"></div>
              <Image 
                src={image} 
                alt={title} 
                className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 transition-all duration-300 group-hover:from-primary/30 group-hover:to-secondary/30">
              <span className="text-5xl font-bold text-primary/40 group-hover:text-primary/60 transition-all duration-300 group-hover:scale-110">{title.charAt(0).toUpperCase()}</span>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}      <div className="p-6 relative z-10">
        <h3 className="mb-3 text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="mb-4 text-foreground/80">{description}</p>
        
        {tags && tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary hover:bg-primary/20 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {link && (
          <div className="absolute bottom-4 right-6 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        )}
      </div>
    </motion.div>
  );

  if (link) {
    return link.startsWith('http') ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {cardContent}
      </a>
    ) : (
      <Link href={link} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
