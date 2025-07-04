import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function BenefitsSection() {
  // Estado para controlar se as animações devem ser exibidas
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  // Verificar preferência do usuário por movimento reduzido
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setAnimationsEnabled(false);
    }
  }, []);

  const benefits = [
    {
      title: "Abordagem Multidisciplinar",
      description: "Combinamos medicina regenerativa, nutrologia e saúde mental para uma transformação completa.",
      extendedDescription: "Nossa abordagem integra diferentes especialidades médicas para tratar o corpo como um todo.",
      icon: "/images/icon-multidisciplinar.svg",
      bgImage: "https://images.unsplash.com/photo-1576091160399-2173dba889ef?w=800&auto=format&fit=crop"
    },
    {
      title: "Personalizado",
      description: "Adaptamos o programa às suas necessidades específicas e objetivos de saúde individuais.",
      extendedDescription: "Reconhecemos que cada pessoa possui necessidades únicas. Através de uma avaliação detalhada...",
      icon: "/images/icon-personalizado.svg",
      bgImage: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop"
    },
    {
      title: "Baseado em Ciência",
      description: "Protocolos fundamentados em pesquisas científicas recentes sobre longevidade e bem-estar.",
      extendedDescription: "Todos os nossos protocolos são baseados em estudos científicos publicados em revistas de alto impacto.",
      icon: "/images/icon-ciencia.svg",
      bgImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop"
    },
    {
      title: "Resultados Duradouros",
      description: "Focamos em mudanças sustentáveis de estilo de vida, não apenas soluções temporárias.",
      extendedDescription: "Diferente de programas que prometem resultados rápidos mas temporários, nosso foco está...",
      icon: "/images/icon-resultados.svg",
      bgImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className={`py-12 sm:py-16 bg-white ${animationsEnabled ? 'no-animations' : ''}`}>
      {/* Título e subtítulo com animações */}
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 ${animationsEnabled ? 'animate-fade-up animate-delay-0' : ''}`}>
          Benefícios do Desafio Vitalidade
        </h2>
        <p className={`text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed ${animationsEnabled ? 'animate-fade-up animate-delay-200' : ''}`}>
          Transforme sua saúde e bem-estar com nosso programa de 30 dias cientificamente desenvolvido.
        </p>
      </div>

      {/* Container com padding generoso para mobile */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Grid responsivo de cards - coluna única em mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden rounded-xl sm:rounded-2xl 
                shadow-md hover:shadow-lg transition-all duration-300
                bg-gradient-to-br from-white via-gray-50 to-gray-100
                border border-gray-200 hover:border-green-300
                p-4 sm:p-6 lg:p-8
                max-w-full
                ${animationsEnabled ? 'animate-fade-right' : ''}
              `}
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${benefit.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animationDelay: animationsEnabled ? `${200 + (index * 200)}ms` : '0ms'
              }}
              role="article"
            >
              {/* Header do card com ícone compacto */}
              <div className="flex items-center mb-3 sm:mb-4">
                <div 
                  className={`
                    flex-shrink-0 rounded-full flex items-center justify-center mr-3
                    w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14
                    bg-green-100 hover:bg-green-200 transition-colors duration-300
                    ${animationsEnabled ? 'animate-fade-right' : ''}
                  `}
                  style={{ 
                    animationDelay: animationsEnabled ? `${400 + (index * 200)}ms` : '0ms' 
                  }}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-green-500 rounded-full opacity-70"></div>
                </div>
                
                {/* Título compacto */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 leading-tight">
                    {benefit.title}
                  </h3>
                </div>
              </div>

              {/* Conteúdo do card compacto */}
              <div className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2">
                  {benefit.extendedDescription}
                </p>
              </div>

              {/* Indicador visual de hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Botão para ativar/desativar animações (acessibilidade) */}
        <div className="text-center mt-8 sm:mt-12">
          <button
            onClick={() => setAnimationsEnabled(!animationsEnabled)}
            className="
              px-3 py-2 text-xs sm:text-sm text-gray-600 hover:text-gray-800 
              border border-gray-300 hover:border-gray-400 rounded-lg
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
            "
            aria-label={animationsEnabled ? "Desativar animações" : "Ativar animações"}
          >
            {animationsEnabled ? "Desativar animações" : "Ativar animações"}
          </button>
        </div>
      </div>

      {/* CSS adicional para line-clamp */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}




