// components/AnalyticsProvider.tsx
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import Analytics from './Analytics';
import Hotjar from './Hotjar';
import MicrosoftClarity from './MicrosoftClarity';
import AdvancedConversions from './AdvancedConversions';
import ConversionTracking from './ConversionTracking-CORRIGIDO';
import { HotjarEventTracker } from './Hotjar';
import { ClarityEventTracker } from './MicrosoftClarity';

interface AnalyticsConfig {
  // Google Analytics & GTM
  gtmId?: string;
  ga4Id?: string;
  
  // Heatmaps
  hotjarId?: string;
  clarityId?: string;
  useHotjar?: boolean; // true para Hotjar, false para Clarity
  
  // Conversions
  googleAdsId?: string;
  facebookPixelId?: string;
  linkedInPartnerId?: string;
  
  // Features
  enableConversions?: boolean;
  enableHeatmaps?: boolean;
  enableAutoTracking?: boolean;
  
  // LGPD/GDPR
  requireConsent?: boolean;
}

interface AnalyticsContextType {
  config: AnalyticsConfig;
  hasConsent: boolean;
  giveConsent: () => void;
  revokeConsent: () => void;
  isLoaded: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

// Configuração padrão
const DEFAULT_CONFIG: AnalyticsConfig = {
  // Substitua pelos seus IDs reais
  gtmId: 'GTM-XXXXXXX',
  ga4Id: 'G-XXXXXXXXXX',
  hotjarId: 'XXXXXXX',
  clarityId: 'XXXXXXXXX',
  googleAdsId: 'AW-XXXXXXXXX',
  facebookPixelId: 'XXXXXXXXXXXXXXX',
  linkedInPartnerId: 'XXXXXXX',
  
  // Features
  useHotjar: false, // Usar Clarity por padrão (gratuito)
  enableConversions: true,
  enableHeatmaps: true,
  enableAutoTracking: true,
  requireConsent: true, // LGPD compliance
};

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
    // Verificar se já tem consentimento salvo
    const savedConsent = localStorage.getItem('analytics-consent');
    if (savedConsent === 'true') {
      setHasConsent(true);
    } else if (!finalConfig.requireConsent) {
      // Se não requer consentimento, ativar automaticamente
      setHasConsent(true);
    }
    
    setIsLoaded(true);
  }, [finalConfig.requireConsent]);

  const giveConsent = () => {
    setHasConsent(true);
    localStorage.setItem('analytics-consent', 'true');
    
    // Notificar ferramentas sobre o consentimento
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          analytics_storage: 'granted',
          ad_storage: 'granted',
        });
      }
      
      // Facebook Pixel
      if ((window as any).fbq) {
        (window as any).fbq('consent', 'grant');
      }
      
      // Microsoft Clarity
      if ((window as any).clarity) {
        (window as any).clarity('consent');
      }
    }
  };

  const revokeConsent = () => {
    setHasConsent(false);
    localStorage.setItem('analytics-consent', 'false');
    
    // Notificar ferramentas sobre a revogação
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
        });
      }
      
      // Facebook Pixel
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
      {/* Renderizar componentes de analytics apenas com consentimento */}
      {isLoaded && hasConsent && (
        <>
          {/* Google Analytics 4 & GTM */}
          <Analytics 
            gtmId={finalConfig.gtmId} 
            ga4Id={finalConfig.ga4Id} 
          />
          
          {/* Heatmaps */}
          {finalConfig.enableHeatmaps && (
            finalConfig.useHotjar ? (
              <Hotjar hjid={finalConfig.hotjarId} />
            ) : (
              <MicrosoftClarity projectId={finalConfig.clarityId} />
            )
          )}
          
          {/* Conversions */}
          {finalConfig.enableConversions && (
            <AdvancedConversions
              googleAdsId={finalConfig.googleAdsId}
              facebookPixelId={finalConfig.facebookPixelId}
              linkedInPartnerId={finalConfig.linkedInPartnerId}
            />
          )}
          
          {/* Auto Tracking */}
          {finalConfig.enableAutoTracking && (
            <ConversionTracking>
              {finalConfig.enableHeatmaps && (
                finalConfig.useHotjar ? (
                  <HotjarEventTracker>
                    {children}
                  </HotjarEventTracker>
                ) : (
                  <ClarityEventTracker>
                    {children}
                  </ClarityEventTracker>
                )
              )}
              {!finalConfig.enableHeatmaps && children}
            </ConversionTracking>
          )}
          
          {!finalConfig.enableAutoTracking && children}
        </>
      )}
      
      {/* Renderizar children sem tracking se não houver consentimento */}
      {(!hasConsent || !isLoaded) && children}
    </AnalyticsContext.Provider>
  );
}

// Hook para usar o contexto de analytics
export function useAnalyticsContext() {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalyticsContext deve ser usado dentro de AnalyticsProvider');
  }
  return context;
}

// Componente de banner de consentimento LGPD
export function ConsentBanner() {
  const { hasConsent, giveConsent, revokeConsent, config } = useAnalyticsContext();
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

// Componente para configurações de privacidade
export function PrivacySettings() {
  const { hasConsent, giveConsent, revokeConsent, config } = useAnalyticsContext();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h3 className="text-lg font-bold mb-4">Configurações de Privacidade</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Analytics e Cookies</p>
            <p className="text-sm text-gray-600">
              Permite coleta de dados para melhorar o site
            </p>
          </div>
          <button
            onClick={hasConsent ? revokeConsent : giveConsent}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              hasConsent 
                ? 'bg-green-600 text-white hover:bg-green-700' 
                : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
            }`}
          >
            {hasConsent ? 'Ativado' : 'Desativado'}
          </button>
        </div>
        
        <div className="text-xs text-gray-500">
          <p>Ferramentas ativas:</p>
          <ul className="list-disc list-inside mt-1">
            <li>Google Analytics 4</li>
            <li>Google Tag Manager</li>
            {config.enableHeatmaps && (
              <li>{config.useHotjar ? 'Hotjar' : 'Microsoft Clarity'}</li>
            )}
            {config.enableConversions && (
              <>
                <li>Google Ads</li>
                <li>Facebook Pixel</li>
                <li>LinkedIn Insight</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

