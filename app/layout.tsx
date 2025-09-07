import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/ui/ScrollToTop';
import CookieBanner from '../components/ui/CookieBanner';

// Загружаем шрифт Inter как основной шрифт из дизайн-системы
const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production'
    ? 'https://narpromservice.ru'
    : 'http://localhost:3000'),
  title: 'НарПромСервис - Промышленные услуги и решения',
  description: 'Полный комплекс услуг по проектированию, производству, монтажу оборудования и металлоконструкций.',
  keywords: 'промышленность, металлоконструкции, монтаж, оборудование, проектирование',
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className={`${inter.className} font-primary antialiased`}>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
