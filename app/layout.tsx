// app/layout.tsx - SEU LAYOUT COM GOOGLE ANALYTICS
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script'; // ← ADICIONAR ESTA LINHA
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Importações da estrutura CSS organizada (mantidas)
import '../style/globals.css';
import '../style/base/typography.css';
import '../style/base/utilities.css';
import '../style/components/cards.css';
import '../style/components/buttons.css';
import '../style/components/images.css';
import '../style/layout/responsive.css';
import '../style/animations/transitions.css';
import '../style/animations/keyframes.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Desafio Vitalidade',
  description: 'Transforme sua saúde e bem-estar.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* ========== GOOGLE ANALYTICS - ADICIONAR AQUI ========== */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZZ2Z1QZLL8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZZ2Z1QZLL8');
          `}
        </Script>
        {/* ======================================================= */}
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}


















