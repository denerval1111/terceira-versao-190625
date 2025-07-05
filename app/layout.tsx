// app/layout.tsx - SEU LAYOUT COM GA4 + GTM COMPLETO
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script'; // ← NECESSÁRIO PARA GTM E GA4
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
        {/* ========== GOOGLE TAG MANAGER - CÓDIGO 1 (HEAD) ========== */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KC3VWQJP');
          `}
        </Script>
        {/* ======================================================= */}

        {/* ========== GOOGLE ANALYTICS 4 - OPCIONAL ========== */}
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
        {/* ================================================== */}
      </head>
      <body className={inter.className}>
        {/* ========== GOOGLE TAG MANAGER - CÓDIGO 2 (BODY) ========== */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KC3VWQJP"
            height="0" 
            width="0" 
            style={{display:'none', visibility:'hidden'}}
          />
        </noscript>
        {/* ======================================================= */}

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}




















