import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog Yazısı | YazılımDev",
  description: "Yazılım geliştirme dünyasından detaylı bilgiler ve deneyimler",
};

export default function BlogPostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
