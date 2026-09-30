import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cozinha Livre | Bolos Caseiros para Vender',
  description: '20 receitas fáceis, económicas e lucrativas para começar em casa.',
  openGraph: {
    title: 'Cozinha Livre | Bolos Caseiros para Vender',
    description: '20 receitas fáceis, económicas e lucrativas para começar em casa.',
    type: 'website',
    locale: 'pt_AO',
    images: [
      {
        url: '/images/hero_cakes.jpg',
        width: 1200,
        height: 630,
        alt: 'Bolos Caseiros para Vender - Cozinha Livre',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cozinha Livre | Bolos Caseiros para Vender',
    description: '20 receitas fáceis, económicas e lucrativas para começar em casa.',
    images: ['/images/hero_cakes.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#FAF7F2',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${poppins.variable} font-sans scroll-smooth`}>
      <body className="min-h-screen bg-[#FAF7F2] text-[#2D2421] font-sans antialiased selection:bg-[#E29D52]/20 selection:text-[#3E2117]">
        {children}
      </body>
    </html>
  );
}
