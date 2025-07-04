// components/Analytics.tsx
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

interface AnalyticsProps {
  gtmId?: string;
  ga4Id?: string;
}

// Configurações padrão - substitua pelos seus IDs reais
const DEFAULT_GTM_ID = 'GTM-XXXXXXX'; // Substitua pelo seu GTM ID
const DEFAULT_GA4_ID = 'G-XXXXXXXXXX'; // Substitua pelo seu GA4 ID

export default function Analytics({ 
  gtmId = DEFAULT_GTM_ID, 
  ga4Id = DEFAULT_GA4_ID 
}: AnalyticsProps) {
  
  useEffect(() => {
    // Configurar dataLayer para GTM
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      
      // Função gtag para GA4
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      
      // Configuração inicial do GA4
      gtag('js', new Date());
      gtag('config', ga4Id, {
        page_title: document.title,
        page_location: window.location.href,
      });
      
      // Disponibilizar gtag globalmente
      (window as any).gtag = gtag;
    }
  }, [ga4Id]);

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />

      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
        strategy="afterInteractive"
      />

      {/* GTM NoScript (para casos sem JavaScript) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}

// Hook personalizado para tracking de eventos
export function useAnalytics() {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        event_category: 'engagement',
        event_label: parameters?.label || '',
        value: parameters?.value || 0,
        ...parameters,
      });
    }
    
    // Também enviar para dataLayer (GTM)
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...parameters,
      });
    }
  };

  const trackPageView = (pagePath: string, pageTitle?: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', DEFAULT_GA4_ID, {
        page_path: pagePath,
        page_title: pageTitle || document.title,
      });
    }
  };

  const trackConversion = (conversionId: string, value?: number, currency = 'BRL') => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: conversionId,
        value: value,
        currency: currency,
      });
    }
    
    // Enviar para dataLayer também
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'conversion',
        conversion_id: conversionId,
        conversion_value: value,
        currency: currency,
      });
    }
  };

  return {
    trackEvent,
    trackPageView,
    trackConversion,
  };
}

// Tipos para TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

