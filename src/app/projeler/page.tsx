'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjelerPage() {
  const projects = [
    {
      id: "fintrack",
      title: "FinTrack - Kişisel Finans Takip Uygulaması",
      description: "Flutter ile geliştirilen, gelirleri ve giderleri takip etmeye yarayan mobil uygulama.",
      image: "/images/fintrack.jpg",
      tags: ["Flutter", "Firebase", "Mobile"],
      demoUrl: "https://demo.fintrack.com",
      githubUrl: "https://github.com/yourusername/fintrack",
    },
    {
      id: "stokyonet",
      title: "StokYönet - Stok Takip Sistemi",
      description: "C# ve SQL Server kullanılarak geliştirilen masaüstü stok yönetim yazılımı.",
      image: "/images/stokyonet.jpg",
      tags: ["C#", "SQL Server", "Windows Forms"],
      demoUrl: null,
      githubUrl: "https://github.com/yourusername/stokyonet",
    },
    {
      id: "blogsitesi",
      title: "Blog Sitesi",
      description: "Next.js, React ve Tailwind CSS kullanılarak geliştirilen kişisel blog ve portföy sitesi.",
      image: "/images/blogsite.jpg",
      tags: ["Next.js", "React", "Tailwind CSS"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/yourusername/blogsite",
    },
    {
      id: "weatherapp",
      title: "Hava Durumu Uygulaması",
      description: "Flutter ile geliştirilen, güncel hava durumu bilgilerini gösteren mobil uygulama.",
      image: "/images/weatherapp.jpg",
      tags: ["Flutter", "API", "Mobile"],
      demoUrl: null,
      githubUrl: "https://github.com/yourusername/weatherapp",
    },
    {
      id: "todoapp",
      title: "Görev Takip Uygulaması",
      description: "C# ile geliştirilen, kullanıcıların görevlerini organize etmelerini sağlayan masaüstü uygulama.",
      image: "/images/todoapp.jpg",
      tags: ["C#", "SQLite", "Desktop"],
      demoUrl: null,
      githubUrl: "https://github.com/yourusername/todoapp",
    },
    {
      id: "portfoliosite",
      title: "Portföy Sitesi",
      description: "HTML, CSS ve JavaScript kullanılarak geliştirilen statik portföy sitesi.",
      image: "/images/portfoliosite.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://portfolio.example.com",
      githubUrl: "https://github.com/yourusername/portfolio",
    },
  ];
  return (
    <>
      <section className="bg-gradient-to-b from-secondary/10 to-transparent py-32 relative overflow-hidden">
        {/* Dekoratif arka plan elementleri */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 right-20 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"></div>
          <div className="absolute bottom-10 -left-24 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent"
          >
            Projelerim
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mb-8 max-w-2xl text-center text-lg text-foreground/80"
          >
            Geliştirdiğim projeler ve çalışmalarımdan örnekler
          </motion.p>
        </div>
      </section>      <section className="container my-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article 
              key={project.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border/40 bg-card/90 h-full"
            >
              <div className="relative h-64 w-full bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 overflow-hidden">
                {/* Görsel yer tutucusu - gerçek görsellerle değiştirilecek */}
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-7xl font-bold text-primary/30">{project.title.charAt(0).toUpperCase()}</span>
                </div>
                {/* Farklı bir görsel efekti için üst katman */}
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-70"></div>
              </div>              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <p className="mb-6 text-foreground/80 text-lg">{project.description}</p>
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/projeler/${project.id}`}
                    className="px-6 py-3 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  >
                    Detayları Gör
                  </Link>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full border-2 border-border hover:border-primary/30 font-medium transition-all duration-300"
                    >
                      Canlı Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full border-2 border-border hover:border-secondary/30 font-medium transition-all duration-300"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
