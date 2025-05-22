import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hakkımda - Kaan Yıldız",
  description: "Yazılım geliştirici Kaan Yıldız'ın profesyonel deneyimleri, yetenekleri ve projeler hakkında detaylı bilgiler",
  alternates: {
    canonical: "https://yazilimdev.com/hakkimda"
  },
  openGraph: {
    title: "Kaan Yıldız - Yazılım Geliştirici",
    description: "Flutter, C# ve web teknolojileri konusunda uzmanlaşmış yazılım geliştirici",
    url: "https://yazilimdev.com/hakkimda",
    type: "profile",
    siteName: "YazılımDev",
    firstName: "Kaan",
    lastName: "Yıldız",
    username: "Kaaanyildiz",
    gender: "male"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaan Yıldız - Yazılım Geliştirici",
    description: "Flutter ve web teknolojileri uzmanı"
  },
  keywords: [
    "Kaan Yıldız",
    "yazılım geliştirici",
    "flutter developer",
    "web developer",
    "mobil uygulama geliştirici"
  ]
};

export default function HakkimdaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
