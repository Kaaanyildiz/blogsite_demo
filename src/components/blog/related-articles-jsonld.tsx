'use client';

import { useEffect, useState } from "react";
import Script from "next/script";

interface Post {
  id: string;
  title: string;
  excerpt?: string;
  image?: string;
}

interface RelatedArticlesJsonLdProps {
  posts: Post[];
  currentPostSlug: string;
}

export default function RelatedArticlesJsonLd({ posts, currentPostSlug }: RelatedArticlesJsonLdProps) {
  const [pageUrl, setPageUrl] = useState("");
  
  useEffect(() => {
    setPageUrl(window.location.origin);
  }, []);

  // İlgili yazılar için kalıcı URL'ler oluştur
  const getPostUrl = (slug: string): string => {
    return `${pageUrl}/blog/${slug}`;
  };

  return pageUrl ? (
    <Script
      id="related-articles-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": posts            .filter((post: Post) => post.id !== currentPostSlug)
            .slice(0, 3) // Sadece ilk 3 ilgili yazıyı göster
            .map((post: Post, index: number) => ({
              "@type": "ListItem",
              "position": index + 1,
              "url": getPostUrl(post.id),
              "name": post.title,
              "description": post.excerpt,
              "image": post.image || `${pageUrl}/api/og?title=${encodeURIComponent(post.title)}`
            }))
        })
      }}
    />
  ) : null;
}
