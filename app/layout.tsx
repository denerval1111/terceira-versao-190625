// app/layout.tsx - VERSÃO ADAPTADA COM ANALYTICS
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// ✅ NOVA LINHA ADICIONADA - Analytics
import { AnalyticsProvider, ConsentBanner } from '@/components/AnalyticsComplete';

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
      <body className={inter.className}>
        {/* ✅ ANALYTICS PROVIDER ADICIONADO - Envolve todo o conteúdo */}
        <AnalyticsProvider
          config={{
            gtmId: 'GTM-XXXXXXX',        // ← SUBSTITUA pelo seu ID
            ga4Id: 'G-XXXXXXXXXX',      // ← SUBSTITUA pelo seu ID
            clarityId: 'XXXXXXXXX',     // ← SUBSTITUA pelo seu ID
            enableConversions: true,
            enableHeatmaps: true,
            enableAutoTracking: true,
            requireConsent: true,
          }}
        >
          {/* ✅ ESTRUTURA ORIGINAL MANTIDA */}
          <Header />
          {children}
          <Footer />
          
          {/* ✅ BANNER LGPD ADICIONADO */}
          <ConsentBanner />
        </AnalyticsProvider>
      </body>
    </html>
  );
}

















