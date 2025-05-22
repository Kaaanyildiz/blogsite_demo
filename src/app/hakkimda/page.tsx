"use client";

import { AnimatedSection } from "@/components/ui/client-animations";
import Script from "next/script";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from "next/link";
import { AboutHeroClient } from "@/components/about/about-hero-client";
import { AboutContentClient } from "@/components/about/about-content-client";
import { OptimizedImage } from "@/components/ui/optimized-image";

export default function HakkimdaPage() {
  const skills = [
    { name: "Flutter", level: 90 },
    { name: "Dart", level: 85 },
    { name: "C#", level: 80 },
    { name: "ASP.NET Core", level: 75 },
    { name: "SQL", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 70 },
    { name: "Next.js", level: 75 },
  ];
  
  // AboutClient bileşenleri için gerekli veriler
  const aboutSkills = [
    { category: "Mobil Geliştirme", items: ["Flutter", "Dart"] },
    { category: "Backend Geliştirme", items: ["C#", "ASP.NET Core"] },
    { category: "Web Geliştirme", items: ["HTML", "CSS", "JavaScript"] },
    { category: "Veritabanı", items: ["SQL"] },
    { category: "Diğer", items: ["Git & GitHub", "VS Code", "English (B1-B2)"] },
  ];
  
  const experiences = [
    {
      company: "GardenKeeper Game",
      position: "Mobil Oyun Uygulaması",
      period: "Flutter Projesi",
      description: "Bahçenize zarar vermeye çalışan köstebeklere karşı mücadele ettiğiniz, Flutter ile geliştirilmiş eğlenceli bir refleks oyunudur.",
    },
    {
      company: "Flag Quiz Game",
      position: "Eğitici Mobil Uygulama",
      period: "Flutter Projesi",
      description: "Kullanıcıların ülkenin bayrağını resmine göre tahmin ettiği Flutter ile geliştirilmiş bir sınav oyunu.",
    },
    {
      company: "Vehicle Management System",
      position: "Web Uygulaması",
      period: "ASP.NET Core Projesi",
      description: "Araçları yönetmek için ASP.NET Core ile oluşturulmuş bir web uygulaması. Araç takibi, rezervasyon ve bakım planlaması özellikleri içerir.",
    },
    {
      company: "MedAlarm App",
      position: "Mobil Sağlık Uygulaması",
      period: "Flutter Projesi",
      description: "İlaç tedavinizi kusursuz bir şekilde yönetmenize yardımcı olan modern ve kullanıcı dostu, Flutter ile geliştirilmiş bir mobil uygulamadır.",
    },
  ];
  
  const education = [
    {
      institution: "Kayseri Üniversitesi",
      degree: "Teknik Bilimler Meslek Yüksekokulu, Bilgisayar Programcılığı",
      period: "2023 - 2025",
      description: "Bilgisayar programlama alanında önlisans eğitimi alıyorum. Eğitim süresince temel programlama becerileri, veri yapıları, algoritmaları, veritabanı yönetimi ve web geliştirme konularında kendimi geliştirdim."
    },
    {
      institution: "Sivas Halisgülle Anadolu Lisesi",
      degree: "Lise Eğitimi",
      period: "2017 - 2021",
      description: "Lise eğitimim boyunca problem çözme becerilerimi geliştirdim ve bilgisayar bilimleri alanında temel bilgiler edindim."
    },
  ];
  
  // Kullanıcı profil bilgisi
  const profileImage = "/images/profile.jpg";
  
  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mehmet Kaan Yıldız",
            "jobTitle": "Bilgisayar Programcısı & Mobil Geliştirici",
            "url": "https://yazilimdev.com/hakkimda",
            "sameAs": [
              "https://github.com/Kaaanyildiz",
              "https://linkedin.com/in/kaanyıldız1"
            ],
            "knowsAbout": [
              "Flutter", "Dart", "C#", "ASP.NET Core", "SQL", 
              "Mobile App Development", "Web Development"
            ]
          })
        }}
      />

      <section className="container py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/4 -right-1/2 w-full h-96 rounded-full bg-secondary/5 blur-3xl -z-10"></div>
        <div className="absolute -bottom-1/4 -left-1/2 w-full h-96 rounded-full bg-primary/5 blur-3xl -z-10"></div>
        
        <div className="max-w-5xl mx-auto">
          <AboutHeroClient profileImage={profileImage} />
        </div>
      </section>

      <section className="container my-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Hakkımda</h2>
          <div className="space-y-6 text-foreground/80">
            <p>
              Yazılım dünyasına olan tutkum lisans eğitimimle başladı ve o zamandan beri kendimi
              sürekli geliştirmeye devam ediyorum. Mobil uygulama geliştirme konusunda Flutter'a
              odaklanıyorum ve C#, SQL ile masaüstü uygulamalar geliştiriyorum.
            </p>
            <p>
              Kullanıcı deneyimine odaklanan, performanslı ve sürdürülebilir kodlamayı kendime
              prensip edindim. Teknoloji trendlerini yakından takip ediyor ve öğrendiklerimi paylaşmaktan
              keyif alıyorum.
            </p>
            <p>
              Yeni teknolojiler öğrenmeye açık, problem çözme yeteneğine sahip ve takım
              çalışmasına yatkın bir yazılımcıyım. Projelerimde kalite ve kullanıcı memnuniyetini
              her zaman ön planda tutuyorum.
            </p>
          </div>
        </div>
      </section>
      
      <AnimatedSection className="container my-24">
        <div className="max-w-5xl mx-auto">
          <AboutContentClient
            skills={aboutSkills}
            experiences={experiences}
            education={education}
          />
        </div>
      </AnimatedSection>      <AnimatedSection className="container my-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Teknik Becerilerim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-lg">{skill.name}</h3>
                  <span className="text-sm text-foreground/70">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-card/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container my-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">İletişim</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-border/30 bg-card/30 backdrop-blur-sm p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Benimle İletişime Geç</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-foreground/80 mb-6">
                  Proje teklifleri, iş birliği önerileri veya herhangi bir soru için aşağıdaki kanallardan bana ulaşabilirsiniz. En kısa sürede dönüş yapmaya çalışacağım.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <FaEnvelope className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">Email</p>
                      <a href="mailto:kaanyildz@gmail.com" className="hover:text-primary transition-colors duration-300">kaanyildz@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <FaGithub className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">Github</p>
                      <a 
                        href="https://github.com/Kaaanyildiz" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-primary transition-colors duration-300"
                      >
                        github.com/Kaaanyildiz
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <FaLinkedin className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/kaanyıldız1" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-primary transition-colors duration-300"
                      >
                        linkedin.com/in/kaanyıldız1
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t md:border-t-0 md:border-l border-border/30 pt-6 md:pt-0 md:pl-8">
                <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
                <div className="space-y-4">
                  <Link 
                    href="/projeler" 
                    className="block w-full px-6 py-3 rounded-lg text-center font-medium bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
                  >
                    Projelerimi Gör
                  </Link>
                  
                  <Link 
                    href="/blog" 
                    className="block w-full px-6 py-3 rounded-lg text-center font-medium bg-card/80 border border-border/40 hover:bg-card/60 transition-all duration-300"
                  >
                    Blog Yazılarım
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
}
