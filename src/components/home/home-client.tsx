'use client';

import { motion } from 'framer-motion';
import Link from "next/link";
import { FaArrowRight, FaCode, FaLaptopCode, FaMobile, FaDatabase } from 'react-icons/fa';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
};

export function HomeClient() {
  return (
    <>
      {/* Dekoratif Arka Plan Gradient */}
      <div className="absolute inset-0 -z-10 bg-dots opacity-30"></div>
      
      {/* Glass efektli bölüm başlığı */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card mb-12 px-8 py-6 mx-auto text-center max-w-3xl glow-primary"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
          En Son Teknolojilerle Modern Çözümler
        </h2>
        <p className="text-lg text-foreground/80">
          Flutter, C# ve web teknolojileri ile kullanıcı dostu, performanslı ve fonksiyonel uygulamalar geliştiriyorum.
        </p>
      </motion.div>

      {/* Özellikler Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <FeatureCard 
          icon={<FaMobile className="h-8 w-8 text-primary" />} 
          title="Mobil Geliştirme"
          description="Flutter ve Dart ile her iki platform için tek kod tabanıyla, hızlı ve duyarlı mobil uygulamalar oluşturuyorum."
          delay={0.1}
        />
        <FeatureCard 
          icon={<FaLaptopCode className="h-8 w-8 text-primary" />} 
          title="Web Geliştirme"
          description="Modern JavaScript/TypeScript, React ve Next.js ile SEO dostu, performanslı ve etkileşimli web siteleri tasarlıyorum."
          delay={0.2}
        />
        <FeatureCard 
          icon={<FaCode className="h-8 w-8 text-primary" />} 
          title="Backend Geliştirme"
          description="C# ve ASP.NET Core kullanarak güçlü, ölçeklenebilir ve güvenli API'ler ve web servisleri geliştiriyorum."
          delay={0.3}
        />
        <FeatureCard 
          icon={<FaDatabase className="h-8 w-8 text-primary" />} 
          title="Veritabanı Yönetimi"
          description="SQL veritabanlarında tasarım, sorgulama ve optimizasyon ile verimli veri altyapıları oluşturuyorum."
          delay={0.4}
        />
      </div>
      
      {/* CTA Bölümü */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center"
      >
        <Link href="/projeler" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-full transition-transform hover:scale-105 shadow-lg shadow-primary/20">
          Tüm Projeleri İncele
          <FaArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </>
  );
}

function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card overflow-hidden"
    >
      <div className="flex items-start gap-4 p-6">
        <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-foreground/70">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
