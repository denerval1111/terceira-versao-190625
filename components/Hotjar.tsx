// components/Hotjar.tsx
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

interface HotjarProps {
  hjid?: string;
  hjsv?: string;
}

// Configuração padrão - substitua pelo seu Hotjar ID
const DEFAULT_HJID = 'XXXXXXX'; // Substitua pelo seu Hotjar Site ID
const DEFAULT_HJSV = '6'; // Versão do script (geralmente 6)

export default function Hotjar({ 
  hjid = DEFAULT_HJID, 
  hjsv = DEFAULT_HJSV 
}: HotjarProps) {
  
  useEffect(() => {
    // Configurar Hotjar quando o componente montar
    if (typeof window !== 'undefined') {
      // Inicializar array do Hotjar se não existir
      (window as any).hj = (window as any).hj || function(...args: any[]) {
        ((window as any).hj.q = (window as any).hj.q || []).push(args);
      };
      (window as any)._hjSettings = { hjid: parseInt(hjid), hjsv: parseInt(hjsv) };
    }
  }, [hjid, hjsv]);

  return (
    <>
      {/* Hotjar Tracking Script */}
      <Script
        id="hotjar-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${hjid},hjsv:${hjsv}};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />
    </>
  );
}

// Hook personalizado para interações com Hotjar
export function useHotjar() {
  const identify = (userId: string, attributes?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).hj) {
      (window as any).hj('identify', userId, attributes);
    }
  };

  const tagRecording = (tags: string[]) => {
    if (typeof window !== 'undefined' && (window as any).hj) {
      tags.forEach(tag => {
        (window as any).hj('tagRecording', [tag]);
      });
    }
  };

  const trigger = (triggerName: string) => {
    if (typeof window !== 'undefined' && (window as any).hj) {
      (window as any).hj('trigger', triggerName);
    }
  };

  const event = (eventName: string) => {
    if (typeof window !== 'undefined' && (window as any).hj) {
      (window as any).hj('event', eventName);
    }
  };

  const stateChange = (relativePath: string) => {
    if (typeof window !== 'undefined' && (window as any).hj) {
      (window as any).hj('stateChange', relativePath);
    }
  };

  return {
    identify,
    tagRecording,
    trigger,
    event,
    stateChange,
  };
}

// Componente para tracking automático de eventos Hotjar
export function HotjarEventTracker({ children }: { children: React.ReactNode }) {
  const { event, tagRecording, trigger } = useHotjar();

  useEffect(() => {
    // Configurar tracking automático de eventos importantes
    setupHotjarTracking();
  }, []);

  const setupHotjarTracking = () => {
    if (typeof window === 'undefined') return;

    // Tracking de cliques em elementos importantes
    const trackImportantClicks = () => {
      // Botões de inscrição
      const inscricaoButtons = document.querySelectorAll('[data-track="inscricao"], .btn-inscricao');
      inscricaoButtons.forEach(button => {
        button.addEventListener('click', () => {
          event('inscricao_click');
          tagRecording(['inscricao', 'conversion']);
        });
      });

      // Botões de contato
      const contatoButtons = document.querySelectorAll('[data-track="contato"], .btn-contato');
      contatoButtons.forEach(button => {
        button.addEventListener('click', () => {
          event('contato_click');
          tagRecording(['contato', 'engagement']);
        });
      });

      // Links do blog
      const blogLinks = document.querySelectorAll('a[href*="/blog/"]');
      blogLinks.forEach(link => {
        link.addEventListener('click', () => {
          event('blog_click');
          tagRecording(['blog', 'content']);
        });
      });

      // Links de email e telefone
      const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
      emailLinks.forEach(link => {
        link.addEventListener('click', () => {
          event('email_click');
          tagRecording(['email', 'contact']);
        });
      });

      const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
      phoneLinks.forEach(link => {
        link.addEventListener('click', () => {
          event('phone_click');
          tagRecording(['phone', 'contact']);
        });
      });
    };

    // Tracking de formulários
    const trackFormInteractions = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach((form, index) => {
        const formId = form.id || `form_${index}`;
        
        // Início do preenchimento
        form.addEventListener('focusin', () => {
          event(`${formId}_start`);
          tagRecording([formId, 'form_start']);
        }, { once: true });

        // Submissão do formulário
        form.addEventListener('submit', () => {
          event(`${formId}_submit`);
          tagRecording([formId, 'form_submit', 'conversion']);
        });
      });
    };

    // Tracking de scroll profundo
    const trackDeepScroll = () => {
      let deepScrollTracked = false;
      
      const handleScroll = () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        
        if (scrollPercent > 75 && !deepScrollTracked) {
          deepScrollTracked = true;
          event('deep_scroll');
          tagRecording(['deep_scroll', 'engagement']);
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
    };

    // Tracking de tempo na página
    const trackTimeOnPage = () => {
      let timeTracked = false;
      
      setTimeout(() => {
        if (!timeTracked) {
          timeTracked = true;
          event('time_2min');
          tagRecording(['time_2min', 'engagement']);
        }
      }, 120000); // 2 minutos
    };

    // Tracking de saída da página
    const trackPageExit = () => {
      window.addEventListener('beforeunload', () => {
        event('page_exit');
      });
    };

    // Executar todos os trackings
    setTimeout(() => {
      trackImportantClicks();
      trackFormInteractions();
      trackDeepScroll();
      trackTimeOnPage();
      trackPageExit();
    }, 1000);
  };

  return <>{children}</>;
}

// Componente para triggers específicos do Hotjar
export function HotjarTrigger({ 
  triggerName, 
  children, 
  onClick 
}: { 
  triggerName: string; 
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const { trigger } = useHotjar();

  const handleClick = () => {
    trigger(triggerName);
    if (onClick) onClick();
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
}

// Tipos para TypeScript
declare global {
  interface Window {
    hj: (...args: any[]) => void;
    _hjSettings: {
      hjid: number;
      hjsv: number;
    };
  }
}

