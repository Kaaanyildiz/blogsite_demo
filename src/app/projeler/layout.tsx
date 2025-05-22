import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projeler - Yazılım Uygulamaları ve Geliştirmeler",
  description: "Flutter ile mobil uygulamalar, C# ile masaüstü yazılımlar ve modern web teknolojileri ile geliştirilmiş projeler",
  alternates: {
    canonical: "https://yazilimdev.com/projeler",
  },
  openGraph: {
    title: "YazılımDev Projeler",
    description: "Flutter, C# ve web teknolojileri ile geliştirilen yazılım projeleri ve uygulamalar",
    url: "https://yazilimdev.com/projeler",
    type: "website",
    siteName: "YazılımDev"
  },
  twitter: {
    card: "summary_large_image",
    title: "YazılımDev Projeler",
    description: "Mobil, masaüstü ve web projeleri"
  },
  keywords: [
    "flutter projeler",
    "c# uygulamalar",
    "web geliştirme",
    "mobil uygulama",
    "yazılım projeleri",
    "portfolio"
  ]
};

export default function ProjelerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
