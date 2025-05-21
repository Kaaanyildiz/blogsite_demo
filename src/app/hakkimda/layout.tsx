import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hakkımda | YazılımDev",
  description: "Kim olduğum, neler yaptığım ve yazılım geliştirme yolculuğum hakkında bilgiler",
};

export default function HakkimdaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
