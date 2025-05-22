import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaan Yıldız - Yazılım & Mobil Uygulama Geliştirici",
  description: "Yazılım geliştirme deneyimleri ve projeleri içeren kişisel web sitesi. Flutter, C#, SQL ve diğer teknolojiler hakkında içerikler",
  alternates: {
    canonical: "https://kaanyildiz.dev",
  },
  openGraph: {
    title: "Kaan Yıldız - Yazılım & Mobil Uygulama Geliştirici",
    description: "Flutter, C# ve web teknolojileri ile ilgili yazılar ve projeler",
    url: "https://kaanyildiz.dev",
    siteName: "Kaan Yıldız",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://kaanyildiz.dev/api/og?title=Kaan%20Y%C4%B1ld%C4%B1z%20-%20Yaz%C4%B1l%C4%B1m%20%26%20Mobil%20Uygulama%20Geli%C5%9Ftirici",
        width: 1200,
        height: 630,
        alt: "Kaan Yıldız - Yazılım & Mobil Uygulama Geliştirici"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaan Yıldız - Yazılım & Mobil Uygulama Geliştirici",
    description: "Flutter, C# ve web teknolojileri ile ilgili yazılar ve projeler",
    images: ["https://kaanyildiz.dev/api/og?title=Kaan%20Y%C4%B1ld%C4%B1z%20-%20Yaz%C4%B1l%C4%B1m%20%26%20Mobil%20Uygulama%20Geli%C5%9Ftirici"]
  }
};
