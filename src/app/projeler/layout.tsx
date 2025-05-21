import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projeler | YazılımDev",
  description: "Flutter, C#, Web ve diğer teknolojilerle geliştirdiğim projeler",
};

export default function ProjelerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
