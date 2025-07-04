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
      {/* Título e subtítulo alinhados à esquerda */}
      <div className="text-left mb-6 sm:mb-12 pl-4 sm:pl-8 pr-4">
        <h2 className={`text-xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 ${animationsEnabled ? 'animate-fade-up animate-delay-0' : ''}`}>
          Benefícios do Desafio Vitalidade
        </h2>
        <p className={`text-sm sm:text-lg text-gray-600 max-w-2xl leading-relaxed ${animationsEnabled ? 'animate-fade-up animate-delay-200' : ''}`}>
          Transforme sua saúde e bem-estar com nosso programa de 30 dias cientificamente desenvolvido.
        </p>
      </div>

      {/* Container deslocado para a esquerda */}
      <div className="w-full">
        {/* Cards posicionados mais à esquerda */}
        <div className="ml-2 sm:ml-4 mr-8 sm:mr-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`
                  relative overflow-hidden rounded-lg sm:rounded-xl 
                  shadow-sm hover:shadow-md transition-all duration-300
                  bg-gradient-to-br from-white via-gray-50 to-gray-100
                  border border-gray-200 hover:border-green-300
                  w-full max-w-sm sm:max-w-md lg:max-w-lg
                  ${animationsEnabled ? 'animate-fade-right' : ''}
                `}
                style={{
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.97), rgba(255, 255, 255, 0.97)), url(${benefit.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  animationDelay: animationsEnabled ? `${200 + (index * 200)}ms` : '0ms',
                  marginLeft: '0',
                  marginRight: 'auto'
                }}
                role="article"
              >
                {/* Conteúdo do card alinhado à esquerda */}
                <div className="p-3 sm:p-5 text-left">
                  {/* Header do card */}
                  <div className="flex items-start justify-start mb-2 sm:mb-3">
                    <div 
                      className={`
                        flex-shrink-0 rounded-full flex items-center justify-center mr-2 sm:mr-3
                        w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12
                        bg-green-100 hover:bg-green-200 transition-colors duration-300
                        ${animationsEnabled ? 'animate-fade-right' : ''}
                      `}
                      style={{ 
                        animationDelay: animationsEnabled ? `${400 + (index * 200)}ms` : '0ms' 
                      }}
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-green-500 rounded-full opacity-70"></div>
                    </div>
                    
                    {/* Título alinhado à esquerda */}
                    <div className="flex-1 text-left">
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 leading-tight text-left">
                        {benefit.title}
                      </h3>
                    </div>
                  </div>

                  {/* Conteúdo textual alinhado à esquerda */}
                  <div className="space-y-1 sm:space-y-2 text-left">
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-left">
                      {benefit.description}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-left">
                      {benefit.extendedDescription}
                    </p>
                  </div>
                </div>

                {/* Indicador visual de hover */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Botão alinhado à esquerda */}
        <div className="text-left mt-6 sm:mt-12 ml-4 sm:ml-8">
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

      {/* CSS adicional para forçar alinhamento à esquerda */}
      <style jsx>{`
        /* Forçar alinhamento à esquerda em todos os elementos */
        .text-left * {
          text-align: left !important;
        }
        
        /* Garantir que cards fiquem à esquerda */
        .grid > div {
          justify-self: start;
          align-self: start;
        }
        
        /* Prevenir overflow e garantir box-sizing */
        * {
          box-sizing: border-box;
        }
        
        /* Limitar largura máxima dos cards */
        .grid > div {
          max-width: calc(100vw - 80px);
        }
        
        /* Responsividade específica para mobile */
        @media (max-width: 640px) {
          .grid > div {
            max-width: calc(100vw - 40px);
            margin-right: 16px;
          }
        }
      `}</style>
    </section>
  );
}







