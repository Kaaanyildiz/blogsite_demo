import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog - Yazılım Geliştirme ve Teknoloji",
  description: "Flutter, C#, SQL ve web teknolojileri hakkında detaylı blog yazıları, öğreticiler ve ipuçları",
  alternates: {
    canonical: "https://yazilimdev.com/blog"
  },
  openGraph: {
    title: "YazılımDev Blog",
    description: "Yazılım geliştirme, teknoloji ve kodlama deneyimleri hakkında blog yazıları",
    url: "https://yazilimdev.com/blog",
    type: "website",
    siteName: "YazılımDev"
  },
  twitter: {
    card: "summary_large_image",
    title: "YazılımDev Blog",
    description: "Yazılım geliştirme ve teknoloji blog yazıları"
  },
  keywords: ["blog", "yazılım", "programlama", "flutter", "c#", "web development", "teknoloji"]
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
