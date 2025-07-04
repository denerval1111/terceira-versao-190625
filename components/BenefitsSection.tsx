import React, { useEffect, useState } from 'react';

const BenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      {/* Container com padding lateral generoso */}
      <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16">
        
        {/* Título centralizado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Benefícios do Desafio Vitalidade
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transforme sua saúde e bem-estar com nosso programa de 30 dias cientificamente desenvolvido.
          </p>
        </div>

        {/* Grid de cards - mais compacto horizontalmente */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1 - Abordagem Multidisciplinar */}
          <div 
            className={`
              bg-white rounded-2xl shadow-lg hover:shadow-xl 
              transition-all duration-500 ease-out
              border border-gray-100 hover:border-green-200
              p-6 sm:p-8
              max-w-sm mx-auto lg:mx-0
              min-h-[320px] flex flex-col
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Ícone */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">
                Abordagem Multidisciplinar
              </h3>
              
              <div className="space-y-4 flex-1">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Combinamos medicina regenerativa, nutrologia, saúde mental e gerenciamento inteligente do peso para uma transformação completa.
                </p>
                
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Nossa abordagem integra diferentes especialidades médicas para tratar o corpo como um todo.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Baseado em Ciência */}
          <div 
            className={`
              bg-white rounded-2xl shadow-lg hover:shadow-xl 
              transition-all duration-500 ease-out
              border border-gray-100 hover:border-blue-200
              p-6 sm:p-8
              max-w-sm mx-auto lg:mx-0
              min-h-[320px] flex flex-col
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: '400ms' }}
          >
            {/* Ícone */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">
                Baseado em Ciência
              </h3>
              
              <div className="space-y-4 flex-1">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Protocolos fundamentados em pesquisas científicas recentes sobre longevidade e bem-estar.
                </p>
                
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Todos os nossos protocolos são baseados em estudos científicos publicados em revistas de alto impacto.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;









