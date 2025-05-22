'use client';

import Script from "next/script";
import { useEffect, useState } from "react";

interface BlogJsonLdProps {
  post: {
    title: string;
    date: string;
    author: string;
    tags: string[];
  };
  slug: string;
}

export default function BlogJsonLd({ post, slug }: BlogJsonLdProps) {
  const [pageUrl, setPageUrl] = useState("");
  
  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  return pageUrl ? (
    <Script
      id="blog-article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "datePublished": post.date,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "keywords": post.tags.join(","),
          "url": pageUrl,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": pageUrl
          },
          "publisher": {
            "@type": "Organization",
            "name": "YazılımDev",
            "logo": {
              "@type": "ImageObject",
              "url": "https://yazilimdev.com/logo.png"
            }
          }
        })
      }}
    />
  ) : null;
}
