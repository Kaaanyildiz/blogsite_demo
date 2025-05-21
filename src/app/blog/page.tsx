'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogPage() {
  const posts = [
    {
      id: "flutter-state-management",
      title: "Flutter'da State Management",
      date: "15 Mayıs 2025",
      excerpt: "Flutter uygulamalarında durum yönetimi için farklı yaklaşımların karşılaştırılması.",
      tags: ["Flutter", "State Management", "Provider"],
    },
    {
      id: "sql-optimizasyon",
      title: "SQL Veritabanı Optimizasyonu",
      date: "10 Mayıs 2025",
      excerpt: "Veritabanı sorgularını optimize etmek için temel ipuçları ve stratejiler.",
      tags: ["SQL", "Veritabanı", "Optimizasyon"],
    },
    {
      id: "git-versiyon-kontrolu",
      title: "Git ile Etkili Versiyon Kontrolü",
      date: "5 Mayıs 2025",
      excerpt: "Projelerinizde Git'i daha etkili kullanmak için ipuçları ve stratejiler.",
      tags: ["Git", "Version Control", "GitHub"],
    },
    {
      id: "nextjs-blog-sitesi",
      title: "Next.js ile Blog Sitesi Oluşturma",
      date: "1 Mayıs 2025",
      excerpt: "Modern bir blog sitesi oluşturmak için Next.js kullanım adımları.",
      tags: ["Next.js", "React", "Blog"],
    },
    {
      id: "flutter-animasyonlar",
      title: "Flutter'da Animasyonlar",
      date: "25 Nisan 2025",
      excerpt: "Flutter'da kullanıcı deneyimini geliştiren animasyon teknikleri.",
      tags: ["Flutter", "Animasyon", "UX"],
    },
    {
      id: "csharp-tips",
      title: "C# Geliştirici İpuçları",
      date: "20 Nisan 2025",
      excerpt: "C# ile daha verimli kod yazmanızı sağlayacak ipuçları ve yöntemler.",
      tags: ["C#", ".NET", "Tips"],
    },
  ];
  return (
    <>
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-32 relative overflow-hidden">
        {/* Dekoratif arka plan elementleri */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-10 -left-24 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mb-8 max-w-2xl text-center text-lg text-foreground/80"
          >
            Yazılım geliştirme, teknoloji ve deneyimlerim hakkında düşüncelerimi paylaştığım blog yazılarım
          </motion.p>
        </div>
      </section>      <section className="container my-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article 
              key={post.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="card overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border/40 bg-card h-full"
            >
              <div className="p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <time className="text-sm text-foreground/60">{post.date}</time>
                <h2 className="mt-3 mb-4 text-2xl font-bold">{post.title}</h2>
                <p className="mb-6 text-foreground/80">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  Yazıyı Oku
                  <svg
                    className="ml-2 h-4 w-4"
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
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
