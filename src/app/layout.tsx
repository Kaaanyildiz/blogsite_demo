import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/layout/main-layout";
import { ThemeProvider } from "@/components/theme/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yazilimdev.com"),
  title: {
    default: "Kaan Yıldız - Yazılım & Mobil Uygulama Geliştirici",
    template: "%s | Kaan Yıldız"
  },
  description: "Yazılım geliştirme deneyimleri, Flutter, C#, SQL ve diğer teknolojiler hakkında içerikler ve projeler",
  keywords: ["yazılım geliştirme", "Flutter", "C#", "SQL", "web development", "mobil uygulama", "blog"],
  authors: [{ name: "Kaan Yıldız" }],
  creator: "Kaan Yıldız",
  publisher: "YazılımDev",
  applicationName: "YazılımDev Blog & Portföy",
  generator: "Next.js",
  referrer: "strict-origin-when-cross-origin",
  colorScheme: "dark light",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  category: "technology",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://yazilimdev.com",
    title: "YazılımDev - Kişisel Blog & Portföy",
    description: "Yazılım geliştirme deneyimleri, Flutter, C#, SQL ve diğer teknolojiler hakkında içerikler ve projeler",
    siteName: "YazılımDev",
    images: [
      {
        url: "https://yazilimdev.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YazılımDev Blog ve Portföy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "YazılımDev - Kişisel Blog & Portföy",
    description: "Yazılım geliştirme deneyimleri ve projeler",
    creator: "@KaanYildiz",
    images: ["https://yazilimdev.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://yazilimdev.com",
    languages: {
      'tr-TR': 'https://yazilimdev.com'
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Google Search Console doğrulama kodu eklenecek
    other: {
      me: ["https://github.com/Kaaanyildiz", "https://linkedin.com/in/kaanyildiz"]
    }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
