// components/ConversionTracking.tsx
'use client';

import { useEffect } from 'react';

interface ConversionTrackingProps {
  children: React.ReactNode;
}

// Hook interno para analytics (evita dependência circular)
function useInternalAnalytics() {
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
    trackConversion,
  };
}

export default function ConversionTracking({ children }: ConversionTrackingProps) {
  const { trackEvent, trackConversion } = useInternalAnalytics();

  useEffect(() => {
    // Configurar tracking automático de eventos importantes
    setupAutomaticTracking();
  }, []);

  const setupAutomaticTracking = () => {
    if (typeof window === 'undefined') return;

    // Tracking de cliques em botões importantes
    const trackButtonClicks = () => {
      // Botões de inscrição
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

      // Botões de contato
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

      // Links de email e telefone
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

    // Tracking de scroll depth
    const trackScrollDepth = () => {
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
    const trackTimeOnPage = () => {
      const startTime = Date.now();
      const intervals = [30, 60, 120, 300]; // 30s, 1min, 2min, 5min
      const tracked = new Set();

      const checkTimeSpent = () => {
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

      setInterval(checkTimeSpent, 10000); // Verificar a cada 10 segundos
    };

    // Tracking de cliques em artigos do blog
    const trackBlogClicks = () => {
      const blogLinks = document.querySelectorAll('a[href*="/blog/"]');
      blogLinks.forEach(link => {
        link.addEventListener('click', () => {
          const articleTitle = link.textContent?.trim() || 'unknown';
          trackEvent('click_artigo', {
            event_category: 'content',
            event_label: articleTitle,
            value: 1
          });
        });
      });
    };

    // Tracking de formulários
    const trackFormSubmissions = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        form.addEventListener('submit', (e) => {
          const formId = form.id || form.className || 'unknown_form';
          trackEvent('form_submit', {
            event_category: 'conversion',
            event_label: formId,
            value: 1
          });
          
          // Se for formulário de inscrição, marcar como conversão
          if (formId.includes('inscricao') || form.action.includes('inscricao')) {
            trackConversion('AW-XXXXXXXXX/XXXXXXX', 1, 'BRL'); // Substitua pelo seu ID de conversão
          }
        });
      });
    };

    // Executar todos os trackings
    setTimeout(() => {
      trackButtonClicks();
      trackScrollDepth();
      trackTimeOnPage();
      trackBlogClicks();
      trackFormSubmissions();
    }, 1000); // Aguardar 1 segundo para garantir que o DOM esteja carregado
  };

  return <>{children}</>;
}

// Componente para tracking manual de conversões específicas
export function ConversionButton({ 
  children, 
  conversionId, 
  value, 
  eventName = 'conversion',
  ...props 
}: {
  children: React.ReactNode;
  conversionId?: string;
  value?: number;
  eventName?: string;
  [key: string]: any;
}) {
  const { trackEvent, trackConversion } = useInternalAnalytics();

  const handleClick = (e: React.MouseEvent) => {
    // Executar tracking
    trackEvent(eventName, {
      event_category: 'conversion',
      event_label: eventName,
      value: value || 1
    });

    if (conversionId) {
      trackConversion(conversionId, value);
    }

    // Executar onClick original se existir
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
}

// Hook para tracking manual
export function useConversionTracking() {
  const { trackEvent, trackConversion } = useInternalAnalytics();

  const trackInscricao = (source: string = 'unknown') => {
    trackEvent('inscricao_iniciada', {
      event_category: 'conversion',
      event_label: source,
      value: 1
    });
  };

  const trackInscricaoCompleta = (value: number = 1) => {
    trackEvent('inscricao_completa', {
      event_category: 'conversion',
      event_label: 'inscricao_finalizada',
      value: value
    });
    
    // Marcar conversão no Google Ads (substitua pelo seu ID)
    trackConversion('AW-XXXXXXXXX/XXXXXXX', value, 'BRL');
  };

  const trackDownload = (fileName: string) => {
    trackEvent('download', {
      event_category: 'engagement',
      event_label: fileName,
      value: 1
    });
  };

  const trackVideoPlay = (videoTitle: string) => {
    trackEvent('video_play', {
      event_category: 'engagement',
      event_label: videoTitle,
      value: 1
    });
  };

  return {
    trackInscricao,
    trackInscricaoCompleta,
    trackDownload,
    trackVideoPlay,
  };
}

// Tipos para TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}



