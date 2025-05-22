import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Proje Detayları | YazılımDev",
  description: "Projelerim hakkında detaylı bilgi",
};

export default function ProjectDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
