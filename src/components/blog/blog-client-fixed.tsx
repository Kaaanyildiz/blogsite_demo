'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { FaCalendar, FaTag, FaArrowLeft } from "react-icons/fa";

interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
  excerpt?: string;
}

interface BlogClientProps {
  post: Post;
}

export function BlogClient({ post }: BlogClientProps) {
  const [pageUrl, setPageUrl] = useState("");
  
  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  // HTML içeriğini render et
  const renderedContent = (
    <div dangerouslySetInnerHTML={{ __html: post.content }} />
  );

  return (
    <>
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-32 relative overflow-hidden">
        {/* Dekoratif arka plan elementleri */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-10 -left-24 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-card border border-border/40 px-4 py-2 font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              <FaArrowLeft className="h-4 w-4" /> Tüm Yazılar
            </Link>
          </motion.div>
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            {post.title}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center gap-4 mb-6 text-foreground/60"
          >
            <div className="flex items-center gap-2">
              <FaCalendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  <FaTag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
            
      <article className="container mx-auto -mt-10 mb-24 max-w-3xl bg-card rounded-2xl shadow-xl p-8 md:p-12 relative z-10 border border-border/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-p:text-foreground/80 prose-pre:bg-muted prose-pre:text-foreground max-w-none"
        >
          {renderedContent}
        </motion.div>

        <div className="mt-12 rounded-lg border border-border p-6">
          <h3 className="mb-4 text-xl font-bold">Bu yazı hakkında ne düşünüyorsunuz?</h3>
          <p className="mb-4 text-foreground/80">
            Sorularınız veya yorumlarınız varsa, aşağıdaki iletişim kanalları üzerinden benimle paylaşabilirsiniz.
          </p>
          <div className="flex flex-wrap gap-3">            
            <a
              href="mailto:kaanyildz@gmail.com"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
            >
              E-posta Gönder
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl || '')}&text=${encodeURIComponent(`"${post.title}" yazısını okudum. #YazılımDev`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-[#1DA1F2] px-4 py-2 text-sm font-medium text-white hover:bg-[#1DA1F2]/90"
            >
              Twitter&apos;da Paylaş
            </a>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-6 text-2xl font-bold">İlgili Yazılar</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="card p-5">
              <h4 className="mb-2 font-bold">Flutter&apos;da Animasyonlar</h4>
              <p className="mb-3 text-sm text-foreground/70">
                Flutter&apos;da kullanıcı deneyimini geliştiren animasyon teknikleri.
              </p>
              <Link
                href="/blog/flutter-animasyonlar"
                className="text-sm font-medium text-primary hover:underline"
              >
                Yazıyı Oku
              </Link>
            </div>
            <div className="card p-5">
              <h4 className="mb-2 font-bold">Next.js ile Blog Sitesi Oluşturma</h4>
              <p className="mb-3 text-sm text-foreground/70">
                Modern bir blog sitesi oluşturmak için Next.js kullanım adımları.
              </p>
              <Link
                href="/blog/nextjs-blog-sitesi"
                className="text-sm font-medium text-primary hover:underline"
              >
                Yazıyı Oku
              </Link>
            </div>
            <div className="card p-5">
              <h4 className="mb-2 font-bold">Git ile Etkili Versiyon Kontrolü</h4>
              <p className="mb-3 text-sm text-foreground/70">
                Projelerinizde Git&apos;i daha etkili kullanmak için ipuçları ve stratejiler.
              </p>
              <Link
                href="/blog/git-versiyon-kontrolu"
                className="text-sm font-medium text-primary hover:underline"
              >
                Yazıyı Oku
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
