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
    <section className={`py-16 bg-white ${animationsEnabled ? 'no-animations' : ''}`}>
      {/* Título e subtítulo com animações */}
      <h2 className={`titulo-principal ${animationsEnabled ? 'animate-fade-up animate-delay-0' : ''}`}>
        Benefícios do Desafio Vitalidade
      </h2>
      <p className={`subtitulo-principal ${animationsEnabled ? 'animate-fade-up animate-delay-200' : ''}`}>
        Transforme sua saúde e bem-estar com nosso programa de 30 dias cientificamente desenvolvido.
      </p>

      {/* Container responsivo para os cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid responsivo de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
                bg-gradient-to-br from-white via-gray-50 to-gray-100
                border border-gray-200 hover:border-green-300
                p-6 sm:p-8
                ${animationsEnabled ? 'animate-fade-right' : ''}
              `}
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${benefit.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animationDelay: animationsEnabled ? `${200 + (index * 200)}ms` : '0ms'
              }}
              role="article"
            >
              {/* Header do card com ícone responsivo */}
              <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                <div 
                  className={`
                    flex-shrink-0 rounded-full flex items-center justify-center mr-3 sm:mr-4
                    w-12 h-12 sm:w-16 sm:h-16
                    bg-green-100 hover:bg-green-200 transition-colors duration-300
                    ${animationsEnabled ? 'animate-fade-right' : ''}
                  `}
                  style={{ 
                    animationDelay: animationsEnabled ? `${400 + (index * 200)}ms` : '0ms' 
                  }}
                >
                  <div className="w-6 h-6 sm:w-10 sm:h-10 bg-green-500 rounded-full opacity-60"></div>
                </div>
                
                {/* Título responsivo */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 leading-tight">
                    {benefit.title}
                  </h3>
                </div>
              </div>

              {/* Conteúdo do card */}
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
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
              px-4 py-2 text-sm text-gray-600 hover:text-gray-800 
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
    </section>
  );
}


