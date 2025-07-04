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
      extendedDescription: "Reconhecemos que cada pessoa possui necessidades únicas.",
      icon: "/images/icon-personalizado.svg",
      bgImage: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop"
    },
    {
      title: "Baseado em Ciência",
      description: "Protocolos fundamentados em pesquisas científicas recentes sobre longevidade e bem-estar.",
      extendedDescription: "Todos os nossos protocolos são baseados em estudos científicos publicados.",
      icon: "/images/icon-ciencia.svg",
      bgImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop"
    },
    {
      title: "Resultados Duradouros",
      description: "Focamos em mudanças sustentáveis de estilo de vida, não apenas soluções temporárias.",
      extendedDescription: "Diferente de programas que prometem resultados rápidos mas temporários.",
      icon: "/images/icon-resultados.svg",
      bgImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className={`py-10 sm:py-16 bg-white ${animationsEnabled ? 'no-animations' : ''}`}>
      {/* Título e subtítulo com animações */}
      <div className="text-center mb-6 sm:mb-12 px-8 sm:px-6">
        <h2 className={`text-xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 ${animationsEnabled ? 'animate-fade-up animate-delay-0' : ''}`}>
          Benefícios do Desafio Vitalidade
        </h2>
        <p className={`text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed ${animationsEnabled ? 'animate-fade-up animate-delay-200' : ''}`}>
          Transforme sua saúde e bem-estar com nosso programa de 30 dias cientificamente desenvolvido.
        </p>
      </div>

      {/* Container com padding muito generoso para mobile */}
      <div className="w-full">
        <div className="max-w-5xl mx-auto px-8 sm:px-6 lg:px-8">
          {/* Grid responsivo - sempre coluna única em mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`
                  relative overflow-hidden rounded-lg sm:rounded-xl 
                  shadow-sm hover:shadow-md transition-all duration-300
                  bg-gradient-to-br from-white via-gray-50 to-gray-100
                  border border-gray-200 hover:border-green-300
                  p-3 sm:p-6 lg:p-8
                  w-full
                  ${animationsEnabled ? 'animate-fade-right' : ''}
                `}
                style={{
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.97), rgba(255, 255, 255, 0.97)), url(${benefit.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  animationDelay: animationsEnabled ? `${200 + (index * 200)}ms` : '0ms',
                  maxWidth: '100%',
                  boxSizing: 'border-box'
                }}
                role="article"
              >
                {/* Header do card ultra-compacto */}
                <div className="flex items-center mb-2 sm:mb-4">
                  <div 
                    className={`
                      flex-shrink-0 rounded-full flex items-center justify-center mr-2 sm:mr-3
                      w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14
                      bg-green-100 hover:bg-green-200 transition-colors duration-300
                      ${animationsEnabled ? 'animate-fade-right' : ''}
                    `}
                    style={{ 
                      animationDelay: animationsEnabled ? `${400 + (index * 200)}ms` : '0ms' 
                    }}
                  >
                    <div className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-green-500 rounded-full opacity-70"></div>
                  </div>
                  
                  {/* Título ultra-compacto */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-800 leading-tight">
                      {benefit.title}
                    </h3>
                  </div>
                </div>

                {/* Conteúdo do card ultra-compacto */}
                <div className="space-y-1 sm:space-y-3">
                  <p className="text-xs sm:text-base text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {benefit.extendedDescription}
                  </p>
                </div>

                {/* Indicador visual de hover */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>

          {/* Botão para ativar/desativar animações */}
          <div className="text-center mt-6 sm:mt-12">
            <button
              onClick={() => setAnimationsEnabled(!animationsEnabled)}
              className="
                px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm text-gray-600 hover:text-gray-800 
                border border-gray-300 hover:border-gray-400 rounded-md sm:rounded-lg
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
              "
              aria-label={animationsEnabled ? "Desativar animações" : "Ativar animações"}
            >
              {animationsEnabled ? "Desativar animações" : "Ativar animações"}
            </button>
          </div>
        </div>
      </div>

      {/* CSS adicional para garantir que não haja overflow */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Garantir que nada saia da tela */
        * {
          box-sizing: border-box;
        }
        
        /* Prevenir overflow horizontal */
        .grid > div {
          min-width: 0;
          max-width: 100%;
        }
      `}</style>
    </section>
  );
}






