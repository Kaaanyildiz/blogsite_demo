import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Blog yazılarını projemizdeki sabit veriden alıyoruz
  // Gerçek bir uygulamada bu veriler bir veritabanından veya CMS'ten gelebilir
  const posts = [
    {
      id: "flutter-state-management",
      title: "Flutter'da State Management",
      date: "15 Mayıs 2025",
      lastModified: "2025-05-15"
    },
    {
      id: "sql-optimizasyon", 
      title: "SQL Veritabanı Optimizasyonu",
      date: "10 Mayıs 2025",
      lastModified: "2025-05-10"
    },
    {
      id: "git-versiyon-kontrolu",
      title: "Git ile Etkili Versiyon Kontrolü",
      date: "5 Mayıs 2025",
      lastModified: "2025-05-05" 
    },
    {
      id: "nextjs-blog-sitesi",
      title: "Next.js ile Blog Sitesi Oluşturma",
      date: "1 Mayıs 2025",
      lastModified: "2025-05-01"
    },
    {
      id: "flutter-animasyonlar",
      title: "Flutter'da Animasyonlar",
      date: "25 Nisan 2025",
      lastModified: "2025-04-25"
    },
    {
      id: "csharp-tips",
      title: "C# Geliştirici İpuçları",
      date: "20 Nisan 2025",
      lastModified: "2025-04-20"
    }
  ];

  // Projeler listesi ve son güncelleme tarihleri
  const projects = [
    { id: "gardenkeeper", lastModified: "2025-05-01" },
    { id: "flagquiz", lastModified: "2025-04-15" },
    { id: "vehiclemanagement", lastModified: "2025-04-01" },
    { id: "medalarm", lastModified: "2025-03-15" },
    { id: "blogsitesi", lastModified: "2025-03-01" },
    { id: "portfoliosite", lastModified: "2025-02-15" }
  ];

  const baseUrl = 'https://yazilimdev.com';

  // Ana sayfalar için sitemap girişleri
  const mainRoutes = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: 1.0
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/projeler`,
      lastModified: new Date().toISOString(), 
      changeFrequency: 'weekly' as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/hakkimda`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7
    }
  ];

  // Blog yazıları için sitemap girişleri
  const blogPages = posts.map(post => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.lastModified).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  // Proje sayfaları için sitemap girişleri
  const projectPages = projects.map(project => ({
    url: `${baseUrl}/projeler/${project.id}`,
    lastModified: new Date(project.lastModified).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  return [...mainRoutes, ...blogPages, ...projectPages];
}
