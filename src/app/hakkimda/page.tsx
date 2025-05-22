'use client';

import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram, FaPhone } from "react-icons/fa";
import { TechShowcase } from "@/components/ui/tech-showcase";
import { motion } from "framer-motion";

export default function HakkimdaPage() {  const skills = [
    { category: "Mobil Geliştirme", items: ["Flutter", "Dart"] },
    { category: "Backend Geliştirme", items: ["C#", "ASP.NET Core"] },
    { category: "Web Geliştirme", items: ["HTML", "CSS", "JavaScript"] },
    { category: "Veritabanı", items: ["SQL"] },
    { category: "Diğer", items: ["Git & GitHub", "VS Code", "English (B1-B2)"] },
  ];const experiences = [
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
  ];  const education = [
    {
      institution: "Kayseri Üniversitesi",
      degree: "Teknik Bilimler Meslek Yüksekokulu, Bilgisayar Programcılığı",
      period: "2023 - 2025",
    },
    {
      institution: "Sivas Halisgülle Anadolu Lisesi",
      degree: "Lise Eğitimi",
      period: "2017 - 2021",
    },
  ];  return (
    <div className="overflow-x-hidden"><section className="bg-gradient-to-b from-primary/10 to-transparent py-32 relative overflow-hidden">
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
          <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:items-start md:gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-70 blur-md transform group-hover:scale-110 transition-transform duration-500"></div>              <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-primary/20 text-6xl font-bold text-white shadow-xl backdrop-blur-sm transform transition-all duration-500 group-hover:scale-105">
                {/* Profil fotoğrafı veya yerine geçen avatar */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                  className="w-full h-full flex items-center justify-center"
                >                  <Image 
                    src="/images/profile.jpg" 
                    alt="Mehmet Kaan YILDIZ" 
                    className="object-cover w-full h-full"
                    width={256}
                    height={256}
                    onError={(e) => {
                      // Fotoğraf yüklenemezse fallback olarak isim baş harfi göster
                      e.currentTarget.style.display = 'none';
                      // Null check ekleyerek potansiyel hatayı önlüyoruz
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = 'YD';
                      }
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
            
            <div className="text-center md:text-left">              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-4 text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              >
                Merhaba, Ben Mehmet Kaan
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 text-xl text-foreground/80 font-medium"
              >
                Bilgisayar Programcısı & Mobil Geliştirici
              </motion.p>              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-6 max-w-2xl text-foreground/70 leading-relaxed"
              >
                Kayseri Üniversitesi Bilgisayar Programlama Bölümü son sınıf öğrencisiyim ve yazılım geliştirme alanında kendimi sürekli geliştirmeye çalışan biriyim. Mobil uygulama geliştirme, arka uç ve ön uç teknolojileri ve veritabanı yönetimi (SQL) konusunda uzmanlık kazandım. Güçlü iletişim becerilerine, çözüm odaklı bir zihniyete ve ekip odaklı bir yaklaşıma sahibim.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center justify-center gap-4 md:justify-start"
              >                <a
                  href="https://github.com/Kaaanyildiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border/40 shadow-md hover:shadow-lg transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-6 w-6 text-foreground/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                </a>                <a
                  href="https://linkedin.com/in/kaanyıldız1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border/40 shadow-md hover:shadow-lg transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-6 w-6 text-foreground/70 group-hover:text-[#0077B5] group-hover:scale-110 transition-all duration-300" />
                </a>                <a
                  href="tel:+905541927475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border/40 shadow-md hover:shadow-lg transition-all duration-300"
                  aria-label="Telefon"
                >
                  <FaPhone className="h-6 w-6 text-foreground/70 group-hover:text-green-600 group-hover:scale-110 transition-all duration-300" />
                </a>
                <a
                  href="mailto:kaanyildz@gmail.com"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border/40 shadow-md hover:shadow-lg transition-all duration-300"
                  aria-label="Email"
                ><FaEnvelope className="h-6 w-6 text-foreground/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-16">
        <h2 className="heading-2 mb-8 text-center">Hakkımda</h2>
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-foreground/80">
            Yazılım dünyasına olan tutkum lisans eğitimimle başladı ve o zamandan beri kendimi
            sürekli geliştirmeye devam ediyorum. Mobil uygulama geliştirme konusunda Flutter'a
            odaklanıyorum ve C#, SQL ile masaüstü uygulamalar geliştiriyorum.
          </p>
          <p className="mb-4 text-foreground/80">
            Kullanıcı deneyimine odaklanan, performanslı ve sürdürülebilir kodlamayı kendime
            prensip edindim. Teknoloji trendlerini yakından takip ediyor ve öğrendiklerimi bu
            blog üzerinden paylaşmaktan keyif alıyorum.
          </p>
          <p className="text-foreground/80">
            Yeni teknolojiler öğrenmeye açık, problem çözme yeteneğine sahip ve takım
            çalışmasına yatkın bir yazılımcıyım. Projelerimde kalite ve kullanıcı memnuniyetini
            her zaman ön planda tutuyorum.
          </p>
        </div>
      </section>

      <TechShowcase
        title="Uzmanlık Alanlarım"
        description="Projelerimde deneyimli olduğum ve aktif olarak kullandığım teknolojiler"
      />      <section className="container my-24 relative">
        <div className="absolute top-1/4 -right-1/2 w-full h-96 rounded-full bg-secondary/5 blur-3xl -z-10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Yeteneklerim</h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/80">
            Yıllar içinde edindiğim teknik beceriler ve kullandığım teknolojiler
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * groupIndex }}
              className="card overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border/40 bg-card hover:bg-card/80 p-6"
            >
              <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${85 - skillIndex * 5}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + 0.1 * skillIndex }}
                    className="h-8 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center px-4"
                  >
                    <span className="font-medium text-foreground/80 truncate">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>      <section className="bg-gradient-to-b from-secondary/5 to-transparent py-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-24 right-20 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-10 -left-24 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">İş Deneyimim</h2>
            <p className="mx-auto max-w-2xl text-lg text-foreground/80">
              Kariyerim boyunca çalıştığım şirketler ve edindiğim deneyimler
            </p>
          </motion.div>
          
          <div className="mx-auto max-w-4xl">
            <div className="relative border-l-4 border-gradient-to-b from-primary to-secondary pl-10 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-primary before:to-secondary">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="mb-16 relative"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white">
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  <div className="card rounded-xl border-border/40 p-6 shadow-md hover:shadow-lg transition-all duration-300 bg-card/90 backdrop-blur-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                      <p className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">{exp.period}</p>
                    </div>
                    <h4 className="mb-4 text-lg font-medium text-foreground/80">{exp.company}</h4>
                    <p className="text-foreground/70">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>      <section className="container my-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Eğitim</h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/80">
            Akademik geçmişim ve eğitim deneyimim
          </p>
        </motion.div>
        
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                className="card overflow-hidden rounded-xl border border-border/30 bg-card shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="h-16 bg-gradient-to-r from-primary to-secondary"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{edu.institution}</h3>
                  <p className="mb-2 text-foreground/80">{edu.degree}</p>
                  <p className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">{edu.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>        <section className="container my-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">İlgi Alanları</h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/80">
            Tutkuyla üzerinde çalıştığım ve kendimi geliştirdiğim alanlar
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: "Mobil Geliştirme", color: "from-blue-500 to-cyan-400" },
            { name: "Oyun Geliştirme", color: "from-purple-500 to-pink-400" },
            { name: "Veritabanı Yönetimi", color: "from-orange-500 to-amber-400" },
            { name: "Yazılım Mimarileri", color: "from-green-500 to-emerald-400" },
            { name: "Yapay Zeka", color: "from-red-500 to-rose-400" },
            { name: "Web Geliştirme", color: "from-indigo-500 to-violet-400" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-border/40 p-6 hover:shadow-lg transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold`}>
                {item.name[0]}
              </div>
              <h3 className="text-lg font-medium">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container my-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Kişisel Beceriler</h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/80">
            Yazılım geliştirmenin yanında sahip olduğum diğer beceriler
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            "Araştırma ve Analiz",
            "Hızlı Öğrenme",
            "Problem Çözme",
            "İletişim",
            "Takım Çalışması",
            "Liderlik",
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-border/40 p-4 hover:shadow-lg transition-all duration-300 text-center bg-card/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <p className="font-medium">{skill}</p>
            </motion.div>
          ))}
        </div>
      </section>

        <section className="container mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-black/10 blur-3xl"></div>
          </div>
          
          <div className="relative p-12 text-center text-white">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">İletişime Geçin</h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/90 text-lg">
              Proje teklifleri, iş birliği önerileri veya sadece merhaba demek için benimle
              iletişime geçebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:kaanyildz@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-primary shadow-lg hover:bg-white/90 transition-all duration-300 hover:shadow-xl"
              >
                <FaEnvelope className="h-5 w-5" />
                E-posta Gönder
                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <a                href="https://linkedin.com/in/kaanyıldız1"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-6 py-3 font-medium text-white hover:bg-white/30 transition-all duration-300"
              >
                <FaLinkedin className="h-5 w-5" />
                LinkedIn Profili
                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>          </div>
        </motion.div>
      </section>
    </div>
  );
}
