"use client";

// Client component versiyonu - TechShowcase
import { FaGit, FaDatabase } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';
import { SiSharp } from 'react-icons/si';
import dynamic from 'next/dynamic';

// Client componentlerini dinamik import ile yükleme
const TechShowcaseBackground = dynamic(() => 
  import('./tech-showcase-background')
);

const TechCard = dynamic(() => 
  import('./tech-card')
);

interface TechShowcaseProps {
  title?: string;
  description?: string;
}

export function ServerTechShowcase({ title = "Teknolojiler", description }: TechShowcaseProps) {
  // Teknoloji verilerini static olarak tanımla
  const technologies = [
    { name: "Flutter", icon: <SiFlutter className="h-12 w-12" />, color: "text-blue-400" },
    { name: "Dart", icon: <SiFlutter className="h-12 w-12 rotate-45" />, color: "text-cyan-400" },
    { name: "C#", icon: <SiSharp className="h-12 w-12" />, color: "text-purple-400" },
    { name: "ASP.NET Core", icon: <SiSharp className="h-12 w-12" />, color: "text-blue-600" },
    { name: "SQL", icon: <FaDatabase className="h-12 w-12" />, color: "text-yellow-400" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dekoratif arka plan elementleri - client component */}
      <TechShowcaseBackground />
      
      <div className="container relative z-10">
        {title && (
          <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {title}
          </h2>
        )}
        
        {description && (
          <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-foreground/80">
            {description}
          </p>
        )}
        
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
          {technologies.map((tech, index) => (
            <TechCard 
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              color={tech.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
