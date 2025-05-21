'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGit, FaDatabase } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';
import { SiSharp } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

interface TechShowcaseProps {
  title?: string;
  description?: string;
}

export function TechShowcase({ title = "Teknolojiler", description }: TechShowcaseProps) {
  const technologies = [
    { name: "Flutter", icon: <SiFlutter className="h-12 w-12" />, color: "text-blue-400" },
    { name: "SQL", icon: <FaDatabase className="h-12 w-12" />, color: "text-orange-400" },
    { name: "Git", icon: <FaGit className="h-12 w-12" />, color: "text-red-400" },
    { name: "C#", icon: <SiSharp className="h-12 w-12" />, color: "text-purple-400" },
    { name: "Next.js", icon: <TbBrandNextjs className="h-12 w-12" />, color: "text-gray-400" },
  ];

  return (    <section className="py-24 relative overflow-hidden">
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute inset-0 overflow-hidden opacity-70">
        <motion.div 
          className="absolute -right-20 top-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5] 
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute -left-20 bottom-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.7, 0.5] 
          }}
          transition={{ 
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut",
            delay: 3
          }}
        ></motion.div>
      </div>
      
      <div className="container relative z-10">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            {title}
          </motion.h2>
        )}        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mb-16 max-w-3xl text-center text-lg text-foreground/80"
          >
            {description}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5"
        >          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative flex flex-col items-center justify-center rounded-2xl border border-border/40 bg-card/80 backdrop-blur-sm p-8 text-center group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div 
                className={`mb-6 ${tech.color} relative z-10`}
                animate={{ y: [0, -5, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3 + index,
                  ease: "easeInOut"
                }}
              >
                {tech.icon}
              </motion.div>
              <h3 className="font-bold text-lg relative z-10 group-hover:text-primary transition-colors duration-300">{tech.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
