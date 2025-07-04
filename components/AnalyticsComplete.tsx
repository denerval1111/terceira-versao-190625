// components/AnalyticsComplete.tsx
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import Script from 'next/script';

// ===== INTERFACES E TIPOS =====

interface AnalyticsConfig {
  // Google Analytics & GTM
  gtmId?: string;
  ga4Id?: string;
  
  // Heatmaps
  hotjarId?: string;
  clarityId?: string;
  useHotjar?: boolean;
  
  // Conversions
  googleAdsId?: string;
  facebookPixelId?: string;
  linkedInPartnerId?: string;
  
  // Features
  enableConversions?: boolean;
  enableHeatmaps?: boolean;
  enableAutoTracking?: boolean;
  requireConsent?: boolean;
}

interface AnalyticsContextType {
  config: AnalyticsConfig;
  hasConsent: boolean;
  giveConsent: () => void;
  revokeConsent: () => void;
  isLoaded: boolean;
}

// ===== CONFIGURAÇÃO PADRÃO =====

const DEFAULT_CONFIG: AnalyticsConfig = {
  gtmId: 'GTM-XXXXXXX',
  ga4Id: 'G-XXXXXXXXXX',
  hotjarId: 'XXXXXXX',
  clarityId: 'XXXXXXXXX',
  googleAdsId: 'AW-XXXXXXXXX',
  facebookPixelId: 'XXXXXXXXXXXXXXX',
  linkedInPartnerId: 'XXXXXXX',
  useHotjar: false,
  enableConversions: true,
  enableHeatmaps: true,
  enableAutoTracking: true,
  requireConsent: true,
};

// ===== CONTEXTO =====

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

// ===== COMPONENTE GOOGLE ANALYTICS =====

function GoogleAnalytics({ gtmId, ga4Id }: { gtmId?: string; ga4Id?: string }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      
      gtag('js', new Date());
      gtag('config', ga4Id, {
        page_title: document.title,
        page_location: window.location.href,
      });
      
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

// ===== COMPONENTE MICROSOFT CLARITY =====

function MicrosoftClarity({ projectId }: { projectId?: string }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).clarity = (window as any).clarity || function(...args: any[]) {
        ((window as any).clarity.q = (window as any).clarity.q || []).push(args);
      };
    }
  }, [projectId]);

  return (
    <Script
      id="clarity-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${projectId}");
        `,
      }}
    />
  );
}

// ===== COMPONENTE HOTJAR =====

function Hotjar({ hjid }: { hjid?: string }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).hj = (window as any).hj || function(...args: any[]) {
        ((window as any).hj.q = (window as any).hj.q || []).push(args);
      };
      (window as any)._hjSettings = { hjid: parseInt(hjid || '0'), hjsv: 6 };
    }
  }, [hjid]);

  return (
    <Script
      id="hotjar-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:${hjid},hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `,
      }}
    />
  );
}

// ===== COMPONENTE CONVERSÕES AVANÇADAS =====

function AdvancedConversions({
  googleAdsId,
  facebookPixelId,
  linkedInPartnerId
}: {
  googleAdsId?: string;
  facebookPixelId?: string;
  linkedInPartnerId?: string;
}) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Facebook Pixel
      (window as any).fbq = (window as any).fbq || function(...args: any[]) {
        ((window as any).fbq.q = (window as any).fbq.q || []).push(args);
      };
      (window as any)._fbq = (window as any).fbq;
      (window as any).fbq.version = '2.0';
      (window as any).fbq.queue = [];

      // LinkedIn
      (window as any)._linkedin_partner_id = linkedInPartnerId;
      (window as any)._linkedin_data_partner_ids = (window as any)._linkedin_data_partner_ids || [];
      (window as any)._linkedin_data_partner_ids.push((window as any)._linkedin_partner_id);
    }
  }, [facebookPixelId, linkedInPartnerId]);

  return (
    <>
      {/* Google Ads */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
        strategy="afterInteractive"
      />
      
      <Script
        id="google-ads-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAdsId}');
          `,
        }}
      />

      {/* Facebook Pixel */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${facebookPixelId}');
            fbq('track', 'PageView');
          `,
        }}
      />

      {/* LinkedIn */}
      <Script
        id="linkedin-insight"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
            lintrk('init', ${linkedInPartnerId});
            lintrk('track', { conversion_id: ${linkedInPartnerId} });
          `,
        }}
      />

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${facebookPixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}

// ===== COMPONENTE TRACKING AUTOMÁTICO =====

function AutoTracking({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const setupTracking = () => {
      if (typeof window === 'undefined') return;

      const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
        if ((window as any).gtag) {
          (window as any).gtag('event', eventName, {
            event_category: 'engagement',
            event_label: parameters?.label || '',
            value: parameters?.value || 0,
            ...parameters,
          });
        }
        
        if (window.dataLayer) {
          window.dataLayer.push({
            event: eventName,
            ...parameters,
          });
        }
      };

      // Tracking de botões importantes
      const trackButtons = () => {
        const inscricaoButtons = document.querySelectorAll('[data-track="inscricao"], .btn-inscricao, [href*="inscricao"]');
        inscricaoButtons.forEach(button => {
          button.addEventListener('click', () => {
            trackEvent('click_inscricao', {
              event_category: 'conversion',
              event_label: 'botao_inscricao',
              value: 1
            });
          });
        });

        const contatoButtons = document.querySelectorAll('[data-track="contato"], .btn-contato, [href*="contato"]');
        contatoButtons.forEach(button => {
          button.addEventListener('click', () => {
            trackEvent('click_contato', {
              event_category: 'engagement',
              event_label: 'botao_contato',
              value: 1
            });
          });
        });

        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        emailLinks.forEach(link => {
          link.addEventListener('click', () => {
            trackEvent('click_email', {
              event_category: 'contact',
              event_label: 'email_footer',
              value: 1
            });
          });
        });

        const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
        phoneLinks.forEach(link => {
          link.addEventListener('click', () => {
            trackEvent('click_telefone', {
              event_category: 'contact',
              event_label: 'telefone_footer',
              value: 1
            });
          });
        });
      };

      // Tracking de scroll
      const trackScroll = () => {
        let maxScroll = 0;
        const milestones = [25, 50, 75, 90, 100];
        const tracked = new Set();

        const handleScroll = () => {
          const scrollPercent = Math.round(
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
          );
          
          if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            
            milestones.forEach(milestone => {
              if (scrollPercent >= milestone && !tracked.has(milestone)) {
                tracked.add(milestone);
                trackEvent('scroll_depth', {
                  event_category: 'engagement',
                  event_label: `${milestone}%`,
                  value: milestone
                });
              }
            });
          }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
      };

      // Tracking de tempo na página
      const trackTime = () => {
        const startTime = Date.now();
        const intervals = [30, 60, 120, 300];
        const tracked = new Set();

        const checkTime = () => {
          const timeSpent = Math.floor((Date.now() - startTime) / 1000);
          
          intervals.forEach(interval => {
            if (timeSpent >= interval && !tracked.has(interval)) {
              tracked.add(interval);
              trackEvent('time_on_page', {
                event_category: 'engagement',
                event_label: `${interval}s`,
                value: interval
              });
            }
          });
        };

        setInterval(checkTime, 10000);
      };

      // Tracking de formulários
      const trackForms = () => {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
          form.addEventListener('submit', () => {
            const formId = form.id || form.className || 'unknown_form';
            trackEvent('form_submit', {
              event_category: 'conversion',
              event_label: formId,
              value: 1
            });
          });
        });
      };

      setTimeout(() => {
        trackButtons();
        trackScroll();
        trackTime();
        trackForms();
      }, 1000);
    };

    setupTracking();
  }, []);

  return <>{children}</>;
}

// ===== BANNER DE CONSENTIMENTO =====

export function ConsentBanner() {
  const { hasConsent, giveConsent, config } = useAnalyticsContext();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (config.requireConsent && !hasConsent) {
      setShowBanner(true);
    }
  }, [hasConsent, config.requireConsent]);

  if (!showBanner || hasConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm">
            Este site utiliza cookies e ferramentas de análise para melhorar sua experiência. 
            Ao continuar navegando, você concorda com nossa política de privacidade.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowBanner(false)}
            className="px-4 py-2 text-sm border border-gray-600 rounded hover:bg-gray-800 transition-colors"
          >
            Recusar
          </button>
          <button
            onClick={() => {
              giveConsent();
              setShowBanner(false);
            }}
            className="px-4 py-2 text-sm bg-green-600 rounded hover:bg-green-700 transition-colors"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}

// ===== PROVIDER PRINCIPAL =====

export function AnalyticsProvider({ 
  children, 
  config = DEFAULT_CONFIG 
}: { 
  children: React.ReactNode;
  config?: Partial<AnalyticsConfig>;
}) {
  const [hasConsent, setHasConsent] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const finalConfig = { ...DEFAULT_CONFIG, ...config };

  useEffect(() => {
    const savedConsent = localStorage.getItem('analytics-consent');
    if (savedConsent === 'true') {
      setHasConsent(true);
    } else if (!finalConfig.requireConsent) {
      setHasConsent(true);
    }
    
    setIsLoaded(true);
  }, [finalConfig.requireConsent]);

  const giveConsent = () => {
    setHasConsent(true);
    localStorage.setItem('analytics-consent', 'true');
    
    if (typeof window !== 'undefined') {
      if ((window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          analytics_storage: 'granted',
          ad_storage: 'granted',
        });
      }
      
      if ((window as any).fbq) {
        (window as any).fbq('consent', 'grant');
      }
      
      if ((window as any).clarity) {
        (window as any).clarity('consent');
      }
    }
  };

  const revokeConsent = () => {
    setHasConsent(false);
    localStorage.setItem('analytics-consent', 'false');
    
    if (typeof window !== 'undefined') {
      if ((window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
        });
      }
      
      if ((window as any).fbq) {
        (window as any).fbq('consent', 'revoke');
      }
    }
  };

  const contextValue: AnalyticsContextType = {
    config: finalConfig,
    hasConsent,
    giveConsent,
    revokeConsent,
    isLoaded,
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {isLoaded && hasConsent && (
        <>
          <GoogleAnalytics 
            gtmId={finalConfig.gtmId} 
            ga4Id={finalConfig.ga4Id} 
          />
          
          {finalConfig.enableHeatmaps && (
            finalConfig.useHotjar ? (
              <Hotjar hjid={finalConfig.hotjarId} />
            ) : (
              <MicrosoftClarity projectId={finalConfig.clarityId} />
            )
          )}
          
          {finalConfig.enableConversions && (
            <AdvancedConversions
              googleAdsId={finalConfig.googleAdsId}
              facebookPixelId={finalConfig.facebookPixelId}
              linkedInPartnerId={finalConfig.linkedInPartnerId}
            />
          )}
          
          {finalConfig.enableAutoTracking ? (
            <AutoTracking>{children}</AutoTracking>
          ) : (
            children
          )}
        </>
      )}
      
      {(!hasConsent || !isLoaded) && children}
    </AnalyticsContext.Provider>
  );
}

// ===== HOOK PARA USAR O CONTEXTO =====

export function useAnalyticsContext() {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalyticsContext deve ser usado dentro de AnalyticsProvider');
  }
  return context;
}

// ===== HOOK PARA TRACKING MANUAL =====

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
    
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...parameters,
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
  };

  return {
    trackEvent,
    trackConversion,
  };
}

// ===== TIPOS GLOBAIS =====

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    _fbq: (...args: any[]) => void;
    lintrk: (...args: any[]) => void;
    _linkedin_partner_id: string;
    _linkedin_data_partner_ids: string[];
    hj: (...args: any[]) => void;
    _hjSettings: { hjid: number; hjsv: number };
    clarity: (...args: any[]) => void;
  }
}

