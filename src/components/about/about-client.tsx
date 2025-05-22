'use client';

import { motion } from 'framer-motion';
import { AboutHeroClient } from './about-hero-client';
import { AboutContentClient } from './about-content-client';

interface Skill {
  category: string;
  items: string[];
}

interface Experience {
  company: string;
  position: string; 
  period: string;
  description: string;
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

interface AboutClientProps {
  skills: Skill[];
  experiences: Experience[];
  education: Education[];
  profileImage: string;
}

export function AboutClient({ skills, experiences, education, profileImage }: AboutClientProps) {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-32 relative overflow-hidden">
        {/* Dekoratif arka plan elementleri */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-24 right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-10 -left-24 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>
        
        <div className="container relative z-10">
          <AboutHeroClient profileImage={profileImage} />
        </div>
      </section>
      
      <div className="container my-16">
        <AboutContentClient 
          skills={skills}
          experiences={experiences} 
          education={education} 
        />
      </div>
    </>
  );
}
