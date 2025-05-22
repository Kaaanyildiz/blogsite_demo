import dynamic from 'next/dynamic';

// Client componentlerini dinamik olarak içe aktarma
const ThemeToggle = dynamic(() => import('../theme/theme-toggle').then(mod => mod.ThemeToggle), { ssr: false });

// Export kullanmak için yeni bir dosya oluşturuyoruz
export { ThemeToggle };
