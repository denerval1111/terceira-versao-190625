import React, { useEffect, useState } from 'react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Envelheça com Vitalidade: Transforme sua Saúde em 30 Dias",
  subtitle = "Um programa multidisciplinar baseado em ciência para longevidade saudável",
  ctaText = "Inscreva-se Agora",
  ctaLink = "/inscricao",
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage = "/images/mulher-aquarela-blog.png", // CAMINHO CORRETO DA IMAGEM
}) => {
  // Estado para controlar se as animações devem ser exibidas
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  // Verificar preferência do usuário por movimento reduzido
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setAnimationsEnabled(false);
    }
  }, []);

  // Garantir que sempre temos uma imagem de fundo, mesmo se não for passada
  const bgImage = backgroundImage || "/images/mulher-aquarela-blog.png";

  return (
    <div
      className={`hero-section w-full relative ${!animationsEnabled ? 'no-animations' : ''}`}
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: '#f4a261' /* Cor que combina com a aquarela */
      }}
    >
      {/* Container externo com altura fixa */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          minHeight: '600px',
          margin: 0,
          padding: 0,
          overflow: 'hidden'
        }}
      >
        {/* Imagem de fundo com posição absoluta para cobrir todo o container */}
        <div
          className={animationsEnabled ? "hero-bg-animate" : ""}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0
          }}
        ></div>

        {/* Conteúdo centralizado */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div style={{ maxWidth: '800px', textAlign: 'center', color: 'white' }}>
            <h1
              className={animationsEnabled ? "hero-animate hero-animate-title" : ""}
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)' /* Melhor legibilidade */
              }}
            >
              {title}
            </h1>
            <p
              className={animationsEnabled ? "hero-animate hero-animate-subtitle" : ""}
              style={{
                fontSize: '1.25rem',
                marginBottom: '2rem',
                textShadow: '1px 1px 2px rgba(0,0,0,0.7)' /* Melhor legibilidade */
              }}
            >
              {subtitle}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <a
                href={ctaLink}
                className={animationsEnabled ? "btn-animate hero-animate hero-animate-cta" : ""}
                style={{
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.375rem',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  display: 'inline-block',
                  textAlign: 'center',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.3)' /* Sombra para destaque */
                }}
              >
                {ctaText}
              </a>
              {secondaryCtaText && secondaryCtaLink && (
                <a
                  href={secondaryCtaLink}
                  className={animationsEnabled ? "btn-animate hero-animate hero-animate-secondary-cta" : ""}
                  style={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.375rem',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    border: '2px solid white',
                    display: 'inline-block',
                    textAlign: 'center',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.3)' /* Sombra para destaque */
                  }}
                >
                  {secondaryCtaText}
                </a>
              )}
              {/* Botão para ativar/desativar animações (acessibilidade) */}
              <button
                onClick={() => setAnimationsEnabled(!animationsEnabled)}
                className="accessibility-button"
                style={{
                  backgroundColor: 'transparent',
                  color: 'rgba(255, 255, 255, 0.7)',
                  border: 'none',
                  padding: '0.5rem',
                  marginTop: '2rem',
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                {animationsEnabled ? "Desativar animações" : "Ativar animações"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FORÇA CACHE BUST - COMENTÁRIO PARA FORÇAR REBUILD */}
    </div>
  );
};

export default HeroSection;







