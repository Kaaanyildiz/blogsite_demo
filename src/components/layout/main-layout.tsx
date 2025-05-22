// Server-optimized ana düzen bileşeni
import { ServerHeader } from './server-header';
import { ServerFooter } from './server-footer';
import { ClientLayoutAnimations } from './client-layout-animations';

interface LayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: LayoutProps) {  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <ServerHeader />
      <ClientLayoutAnimations>
        {children}
      </ClientLayoutAnimations>
      <ServerFooter />
    </div>
  );
}
