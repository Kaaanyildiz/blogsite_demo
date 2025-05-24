import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { notFound } from "next/navigation";
import Script from "next/script";

// Proje veri türü
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string | null;
  githubUrl: string | null;
  detailedContent?: string;
}

// Tüm projeleri getir (gerçek uygulamada DB veya CMS'den çekilir)
function getAllProjects(): Project[] {
  return [
    {
      id: "gardenkeeper",
      title: "GardenKeeper Game - Mobil Oyun Uygulaması",
      description: "Bahçenize zarar vermeye çalışan köstebeklere karşı mücadele ettiğiniz, Flutter ile geliştirilmiş eğlenceli bir refleks oyunudur.",
      image: "/images/weatherapp.jpg",
      tags: ["Flutter", "Dart", "Mobile Game"],
      demoUrl: null,
      githubUrl: "https://github.com/Kaaanyildiz/GardenKeeper",
      detailedContent: `
        <h2>Proje Hakkında</h2>
        <p>GardenKeeper Game, Flutter kullanılarak geliştirdiğim eğlenceli bir mobil oyun uygulamasıdır. Bu oyunda, kullanıcılar bahçelerini köstebeklere karşı korumaya çalışırlar.</p>
        
        <h2>Özellikler</h2>
        <ul>
          <li>Hızlı refleks oyun mekanikleri</li>
          <li>Artan zorluk seviyeleri</li>
          <li>En yüksek skorları kaydetme</li>
          <li>Eğlenceli ses efektleri ve animasyonlar</li>
        </ul>
        
        <h2>Kullanılan Teknolojiler</h2>
        <ul>
          <li>Flutter</li>
          <li>Dart</li>
          <li>Animasyonlar için Flutter Animation Controller</li>
          <li>Yerel veri depolama için SharedPreferences</li>
        </ul>
      `
    },
    {
      id: "flagquiz",
      title: "Flag Quiz Game - Eğitici Mobil Uygulama",
      description: "Kullanıcıların ülkenin bayrağını resmine göre tahmin ettiği Flutter ile geliştirilmiş bir sınav oyunu.",
      image: "/images/fintrack.jpg",
      tags: ["Flutter", "Dart", "Educational App"],
      demoUrl: null,
      githubUrl: "https://github.com/Kaaanyildiz/FlagQuizGame",
      detailedContent: `
        <h2>Proje Hakkında</h2>
        <p>Flag Quiz Game, kullanıcıların dünya ülkelerinin bayraklarını öğrenmesine yardımcı olan eğitici bir mobil uygulamadır. Uygulama, çeşitli zorluk seviyelerinde bayrak tahmin oyunları sunarak, öğrenmeyi eğlenceli hale getirir.</p>
        
        <h2>Özellikler</h2>
        <ul>
          <li>200'den fazla ülke bayrağı</li>
          <li>Farklı zorluk seviyeleri</li>
          <li>İlerleme takibi ve istatistikler</li>
          <li>Eğitim modları ve bilgi kartları</li>
        </ul>
        
        <h2>Kullanılan Teknolojiler</h2>
        <ul>
          <li>Flutter</li>
          <li>Dart</li>
          <li>SQLite veritabanı</li>
          <li>REST API ile güncel bayrak verileri</li>
        </ul>
      `
    },
    {
      id: "vehiclemanagement",
      title: "Vehicle Management System - Web Uygulaması",
      description: "Araçları yönetmek için ASP.NET Core ile oluşturulmuş bir web uygulaması. Araç takibi, rezervasyon ve bakım planlaması özellikleri içerir.",
      image: "/images/stokyonet.jpg",
      tags: ["ASP.NET Core", "C#", "SQL Server"],
      demoUrl: null,
      githubUrl: "https://github.com/Kaaanyildiz/VehicleManagement",
      detailedContent: `
        <h2>Proje Hakkında</h2>
        <p>Vehicle Management System, şirketler için araç filosu yönetimini kolaylaştıran kapsamlı bir web uygulamasıdır. Sistem, araç kayıtları, bakım takibi, rezervasyon yönetimi ve raporlama özellikleriyle filo yöneticilerinin işini kolaylaştırır.</p>
        
        <h2>Özellikler</h2>
        <ul>
          <li>Araç kayıt ve envanter yönetimi</li>
          <li>Bakım planlaması ve hatırlatmaları</li>
          <li>Araç rezervasyon sistemi</li>
          <li>Kilometre ve yakıt takibi</li>
          <li>Detaylı raporlama ve analitik</li>
          <li>Çok kullanıcılı yetkilendirme sistemi</li>
        </ul>
        
        <h2>Kullanılan Teknolojiler</h2>
        <ul>
          <li>ASP.NET Core MVC</li>
          <li>Entity Framework Core</li>
          <li>SQL Server</li>
          <li>Bootstrap & jQuery</li>
          <li>Identity Server for Authentication</li>
        </ul>
      `
    },
    {
      id: "medalarm",
      title: "MedAlarm App - Mobil Sağlık Uygulaması",
      description: "İlaç tedavinizi kusursuz bir şekilde yönetmenize yardımcı olan modern ve kullanıcı dostu, Flutter ile geliştirilmiş bir mobil uygulamadır.",
      image: "/images/todoapp.jpg",
      tags: ["Flutter", "Dart", "Health App"],
      demoUrl: null,
      githubUrl: "https://github.com/Kaaanyildiz/MedAlarm",
      detailedContent: `
        <h2>Proje Hakkında</h2>
        <p>MedAlarm App, kullanıcıların ilaç tedavilerini düzenli bir şekilde takip etmelerine yardımcı olan, kullanıcı dostu bir mobil sağlık uygulamasıdır. Uygulama, ilaç hatırlatmaları, dozaj takibi ve tedavi programlarının yönetimi için tasarlanmıştır.</p>
        
        <h2>Özellikler</h2>
        <ul>
          <li>İlaç hatırlatma bildirimleri</li>
          <li>Çoklu ilaç programları</li>
          <li>Dozaj takibi ve geçmiş kayıtlar</li>
          <li>İlaç stok yönetimi ve uyarıları</li>
          <li>Sağlık verileri raporlama</li>
          <li>Sezgisel ve erişilebilir kullanıcı arayüzü</li>
        </ul>
        
        <h2>Kullanılan Teknolojiler</h2>
        <ul>
          <li>Flutter</li>
          <li>Dart</li>
          <li>Hive veritabanı</li>
          <li>Flutter Local Notifications</li>
          <li>Provider for State Management</li>
        </ul>
      `
    },
    {
      id: "blogsitesi",
      title: "Blog Sitesi - Kişisel Web Sitesi",
      description: "Next.js, React ve Tailwind CSS kullanılarak geliştirilen kişisel blog ve portföy sitesi.",
      image: "/images/blogsite.jpg",
      tags: ["Next.js", "React", "Tailwind CSS"],
      demoUrl: null,
      githubUrl: "https://github.com/Kaaanyildiz/BlogSite",
      detailedContent: `
        <h2>Proje Hakkında</h2>
        <p>Blog Sitesi, Next.js, React ve Tailwind CSS kullanılarak geliştirdiğim kişisel web sitemdir. Bu platform, yazılım geliştirme deneyimlerimi, projelerimi ve öğrendiklerimi paylaşmak için tasarlanmış modern bir blog ve portfolyo sitesidir.</p>
        
        <h2>Özellikler</h2>
        <ul>
          <li>Responsive tasarım ile tüm cihazlarda optimal görüntüleme</li>
          <li>Modern içerik yönetim sistemi</li>
          <li>SEO optimizasyonu ile yüksek görünürlük</li>
          <li>Kategori ve etiket tabanlı içerik organizasyonu</li>
          <li>Projeler portfolyosu</li>
          <li>Karanlık/Aydınlık tema desteği</li>
        </ul>
        
        <h2>Kullanılan Teknolojiler</h2>
        <ul>
          <li>Next.js</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Framer Motion animasyonları</li>
          <li>SEO optimizasyonu için meta bileşenleri</li>
        </ul>
      `
    },
  ];
}

// Belirli bir projeyi ID'ye göre getir
function getProjectById(id: string): Project | undefined {
  const allProjects = getAllProjects();
  return allProjects.find(project => project.id === id);
}

// Dinamik meta verileri üret
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = getProjectById(params.id);
  
  if (!project) {
    return {
      title: "Proje Bulunamadı - YazılımDev",
      description: "Üzgünüz, aradığınız proje bulunamadı."
    };
  }
  
  return {
    title: `${project.title} - YazılımDev Proje Detayları`,
    description: project.description,
    alternates: {
      canonical: `https://yazilimdev.com/projeler/${params.id}`,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      type: "website",
      url: `https://yazilimdev.com/projeler/${params.id}`,
      images: [
        {
          url: `https://yazilimdev.com/api/og?title=${encodeURIComponent(project.title)}`,
          width: 1200,
          height: 630,
          alt: project.title
        }
      ]
    }
  };
}

// Detay sayfası bileşeni
export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);
  
  // Proje bulunamadıysa 404 sayfasına yönlendir
  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-32 relative overflow-hidden">
        {/* Dekoratif arka plan elementleri */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-10 -left-24 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10 max-w-4xl">
          <div className="mb-6">
            <Link
              href="/projeler"
              className="inline-flex items-center gap-2 rounded-full bg-card border border-border/40 px-4 py-2 font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              <FaArrowLeft className="h-4 w-4" /> Tüm Projeler
            </Link>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 max-w-4xl">
        <div className="rounded-2xl overflow-hidden border border-border/40 mb-12">
          <div className="relative aspect-video">
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
        
        <div className="flex gap-4 mb-8">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <FaGithub className="h-5 w-5" /> GitHub Deposu
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white shadow-md shadow-primary/20 hover:bg-primary/90 transition-colors"
            >
              <FaExternalLinkAlt className="h-4 w-4" /> Canlı Demo
            </a>
          )}
        </div>
        
        <article 
          className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-p:text-foreground/80 prose-pre:bg-muted prose-pre:text-foreground max-w-none"
        >
          <div dangerouslySetInnerHTML={{ __html: project.detailedContent || project.description }} />
        </article>
      </section>
      
      {/* Proje için JSON-LD yapılandırılmış verisi */}
      <Script
        id="project-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            "name": project.title,
            "description": project.description,
            "codeRepository": project.githubUrl,
            "programmingLanguage": project.tags,
            "author": {
              "@type": "Person",
              "name": "Kaan Yıldız",
              "url": "https://yazilimdev.com/hakkimda"
            },
            "isPartOf": {
              "@type": "WebSite",
              "name": "YazılımDev",
              "url": "https://yazilimdev.com"
            }
          })
        }}
      />
    </>
  );
}
