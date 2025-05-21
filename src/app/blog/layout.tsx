import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog | YazılımDev",
  description: "Yazılım geliştirme, Flutter, C#, SQL ve diğer teknolojiler hakkında blog yazıları",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
