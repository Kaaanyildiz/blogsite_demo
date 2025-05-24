import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/client-animations";
import { Metadata } from "next";
import Script from "next/script";
import { ProjectsClient } from "@/components/projects/projects-client";
import { OptimizedImage } from "@/components/ui/optimized-image";

// Metadata moved to layout.tsx

// Projeler sayfası için proje verileri
const projects = [
  {
    id: "gardenkeeper",
    title: "GardenKeeper Game - Mobil Oyun Uygulaması",
    description: "Bahçenize zarar vermeye çalışan köstebeklere karşı mücadele ettiğiniz, Flutter ile geliştirilmiş eğlenceli bir refleks oyunudur.",
    image: "/images/weatherapp.jpg",
    tags: ["Flutter", "Dart", "Mobile Game"],
    demoUrl: null,
    githubUrl: "https://github.com/Kaaanyildiz/GardenKeeper",
  },
  {
    id: "flagquiz",
    title: "Flag Quiz Game - Eğitici Mobil Uygulama",
    description: "Kullanıcıların ülkenin bayrağını resmine göre tahmin ettiği Flutter ile geliştirilmiş bir sınav oyunu.",
    image: "/images/fintrack.jpg",
    tags: ["Flutter", "Dart", "Educational App"],
    demoUrl: null,
    githubUrl: "https://github.com/Kaaanyildiz/FlagQuizGame",
  },
  {
    id: "vehiclemanagement",
    title: "Vehicle Management System - Web Uygulaması",
    description: "Araçları yönetmek için ASP.NET Core ile oluşturulmuş bir web uygulaması. Araç takibi, rezervasyon ve bakım planlaması özellikleri içerir.",
    image: "/images/stokyonet.jpg",
    tags: ["ASP.NET Core", "C#", "SQL Server"],
    demoUrl: null,
    githubUrl: "https://github.com/Kaaanyildiz/VehicleManagement",
  },
  {
    id: "medalarm",
    title: "MedAlarm App - Mobil Sağlık Uygulaması",
    description: "İlaç tedavinizi kusursuz bir şekilde yönetmenize yardımcı olan modern ve kullanıcı dostu, Flutter ile geliştirilmiş bir mobil uygulamadır.",
    image: "/images/todoapp.jpg",
    tags: ["Flutter", "Dart", "Health App"],
    demoUrl: null,
    githubUrl: "https://github.com/Kaaanyildiz/MedAlarm",
  },
  {
    id: "blogsitesi",
    title: "Blog Sitesi - Kişisel Web Sitesi",
    description: "Next.js, React ve Tailwind CSS kullanılarak geliştirilen kişisel blog ve portföy sitesi.",
    image: "/images/blogsite.jpg",
    tags: ["Next.js", "React", "Tailwind CSS"],
    demoUrl: null,
    githubUrl: "https://github.com/Kaaanyildiz/BlogSite",
  }
];

export default function ProjelerPage() {
  return (
    <>
      <ProjectsClient projects={projects} />
      
      {/* Projeler sayfası için JSON-LD yapılandırılmış verisi */}
      <Script
        id="projects-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Projeler - YazılımDev",
            "description": "Flutter, C# ve web teknolojileri ile geliştirdiğim yazılım projeleri ve uygulamalarım",
            "url": "https://yazilimdev.com/projeler",
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
