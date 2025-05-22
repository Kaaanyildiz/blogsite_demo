'use client';

import { Hero } from "@/components/ui/hero";
import { TechShowcase } from "@/components/ui/tech-showcase";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Hero
        title="Mehmet Kaan Yıldız"
        subtitle="Bilgisayar Programcısı / Mobil Geliştirici"
        description="Yazılım geliştirme yolculuğumu, öğrendiklerimi ve projelerimi paylaştığım kişisel blog ve portföy sitem."
        cta={{ text: "Projelerimi Gör", link: "/projeler" }}
        secondaryCta={{ text: "Blog Yazıları", link: "/blog" }}
      />

      <section className="container my-24 relative">
        {/* Gelişmiş dekoratif arka plan */}
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
        
        <motion.div 
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 -right-1/3 w-96 h-96 rounded-full bg-secondary/5 blur-3xl -z-10"
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative glass-card py-8 px-4 rounded-xl glow-primary"
        >
          <motion.div
            className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-50 z-0"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent relative z-10">
            Neler Yapıyorum?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/80 relative z-10">
            Mobil uygulama geliştirme, C# projeleri ve web tasarımı konularında çalışmalarımı ve deneyimlerimi paylaşıyorum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card
              title="Mobil Uygulama Geliştirme"
              description="Flutter ve Dart kullanarak iOS ve Android platformları için hızlı, performanslı ve kullanıcı dostu mobil uygulamalar geliştiriyorum."
              image="/images/mobile-dev.jpg"
              tags={["Flutter", "Dart", "Mobil", "Cross-platform"]}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card
              title="Backend Geliştirme"
              description="C# ve ASP.NET Core teknolojilerini kullanarak web uygulamaları ve kurumsal çözümler geliştiriyorum."
              image="/images/desktop-dev.jpg"
              tags={["C#", "ASP.NET Core", "SQL", "Backend"]}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card
              title="Web Geliştirme"
              description="HTML, CSS ve JavaScript ile modern ve duyarlı web siteleri tasarlıyor ve geliştiriyorum."
              image="/images/web-dev.jpg"
              tags={["HTML/CSS", "JavaScript", "Responsive", "Web"]}
            />
          </motion.div>
        </div>
      </section>

      <TechShowcase 
        title="Kullandığım Teknolojiler" 
        description="Projelerimde deneyimli olduğum ve aktif olarak kullandığım teknolojiler" 
      />

      <section className="bg-gradient-to-b from-transparent via-primary/5 to-transparent py-24 relative overflow-hidden">
        <motion.div 
          className="absolute -right-64 top-20 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
          animate={{ 
            x: [0, -20, 0], 
            opacity: [0.4, 0.6, 0.4] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut" 
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute -left-64 bottom-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ 
            x: [0, 20, 0], 
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            ease: "easeInOut",
            delay: 2 
          }}
        ></motion.div>
        
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 relative"
          >
            <div className="absolute inset-0 flex justify-center">
              <motion.div 
                className="w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-50"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent relative z-10">Son Yazılarım</h2>
            <p className="mx-auto max-w-2xl text-lg text-foreground/80 relative z-10">
              Yazılım geliştirme deneyimlerimden ve öğrendiklerimden bahsettiğim blog yazılarım
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card
                title="Flutter ile Mobil Uygulama Geliştirme"
                description="Flutter kullanarak iOS ve Android için çapraz platform mobil uygulamaların geliştirilme süreci ve avantajları."
                link="/blog/flutter-mobile-development"
                tags={["Flutter", "Dart", "Mobil", "Cross-platform"]}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card
                title="ASP.NET Core ile Web Uygulamaları"
                description="C# ve ASP.NET Core kullanarak modern web uygulamaları geliştirme süreçleri ve best practices."
                link="/blog/aspnet-core-web-development"
                tags={["C#", "ASP.NET Core", "Web", "Backend"]}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card
                title="Flutter ile Oyun Geliştirme"
                description="Flutter kullanarak eğlenceli ve etkileşimli mobil oyunların oluşturulması ve optimizasyonu."
                link="/blog/flutter-game-development"
                tags={["Flutter", "Dart", "Oyun Geliştirme", "Mobil"]}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link 
              href="/blog" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium border-2 border-primary/30 hover:border-primary/60 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Tüm Yazıları Gör
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="container my-32 relative">
        <div className="absolute top-1/3 -right-1/2 w-full h-96 rounded-full bg-secondary/5 blur-3xl -z-10"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">İletişime Geçin</h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/80">
            Proje teklifleri, iş birliği önerileri veya sadece merhaba demek için benimle iletişime geçebilirsiniz
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto rounded-2xl border border-border/20 bg-card/90 backdrop-blur-sm p-8 md:p-12 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Bana Ulaşın</h3>
              <p className="text-foreground/70 mb-6">
                Sorularınız veya projeleriniz için benimle iletişime geçebilirsiniz. En kısa sürede yanıt vermeye çalışacağım.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:kaanyildz@gmail.com" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span>kaanyildz@gmail.com</span>
                </a>
                
                <a href="https://github.com/Kaaanyildiz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <span>github.com/Kaaanyildiz</span>
                </a>
                
                <a href="https://linkedin.com/in/kaanyıldız1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <span>linkedin.com/in/kaanyıldız1</span>
                </a>
              </div>
            </div>
            
            <div className="border-t md:border-t-0 md:border-l border-border/20 pt-8 md:pt-0 md:pl-8">
              <h3 className="text-2xl font-bold mb-4">Hızlı İletişim</h3>
              <Link 
                href="/hakkimda" 
                className="block w-full px-6 py-4 mb-4 rounded-xl text-center font-medium bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
              >
                Hakkımda Sayfasına Git
              </Link>
              <Link 
                href="/blog" 
                className="block w-full px-6 py-4 mb-4 rounded-xl text-center font-medium bg-card border border-border/40 shadow-lg hover:shadow-xl hover:bg-card/80 transition-all duration-300"
              >
                Blog Yazılarım
              </Link>
              <Link 
                href="/projeler" 
                className="block w-full px-6 py-4 rounded-xl text-center font-medium bg-card border border-border/40 shadow-lg hover:shadow-xl hover:bg-card/80 transition-all duration-300"
              >
                Projelerimi Gör
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
