'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram, FaPhone } from "react-icons/fa";

export function AboutHeroClient({ profileImage }: { profileImage: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative mb-6 md:mb-0"
      >
        <motion.div
          className="relative overflow-hidden rounded-full border-4 border-primary/20 h-44 w-44 md:h-56 md:w-56 shadow-xl shadow-primary/10"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src={profileImage}
            alt="Profil Fotoğrafı"
            fill
            sizes="(max-width: 768px) 176px, 224px"
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>

      <div className="text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Kaan Yıldız
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl mb-2 text-foreground/80"
        >
          Full Stack Developer
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-4 text-foreground/70"
        >
          C# | ASP.NET | Flutter | SQL | HTML, CSS, JS | React & Next.js öğrenme sürecindeyim
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-6 max-w-lg text-foreground/70"
        >
          Hobi olarak öğrendiğim yazılımı profesyonel kariyere dönüştürmek için eğitimler alıyorum ve projeler geliştiriyorum.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center md:justify-start gap-4"
        >
          <a
            href="https://github.com/Kaaanyildiz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-card hover:bg-card/80 border border-border rounded-lg transition-all duration-300 shadow-sm"
          >
            <FaGithub className="text-foreground" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/kaanyıldız1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-card hover:bg-card/80 border border-border rounded-lg transition-all duration-300 shadow-sm"
          >
            <FaLinkedin className="text-[#0A66C2]" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:kaanyildz@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-card hover:bg-card/80 border border-border rounded-lg transition-all duration-300 shadow-sm"
          >
            <FaEnvelope className="text-primary" />
            <span>E-posta</span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
