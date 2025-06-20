// app/pilares/gerenciamento-peso/page.tsx
import React from 'react';
import ActionButton from '@/components/ActionButton';

export default function GerenciamentoPesoPage() {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 1rem'
    }}>
      {/* Hero Section - FORÇANDO NOVA IMAGEM */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/hero-background.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '4rem 2rem',
        borderRadius: '8px',
        marginBottom: '3rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>
          Gerenciamento de Peso
        </h1>
        <p style={{
          fontSize: '1.25rem',
          maxWidth: '800px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Estratégias científicas para controle de peso saudável, focando em composição corporal, metabolismo e sustentabilidade a longo prazo.
        </p>
      </div>

      {/* Conteúdo Principal */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        <div>
          <h2 style={{
            fontSize: '1.75rem',
            color: '#8b5cf6',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Abordagem Científica
          </h2>
          <p style={{
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Nossa abordagem para gerenciamento de peso integra as mais recentes descobertas em metabolismo, composição corporal e sustentabilidade. Desenvolvemos estratégias personalizadas que vão muito além das dietas tradicionais.
          </p>
          <p style={{
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Reconhecemos que cada pessoa tem uma individualidade biológica única, e nossos protocolos respeitam suas preferências alimentares e estilo de vida para garantir resultados duradouros.
          </p>
        </div>

        <div>
          <h2 style={{
            fontSize: '1.75rem',
            color: '#8b5cf6',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Composição Corporal
          </h2>
          <p style={{
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Priorizamos a otimização da composição corporal - aumentando massa muscular magra e reduzindo gordura visceral - em vez de focar apenas no número da balança. Isso resulta em melhor saúde metabólica e aparência física.
          </p>
          <p style={{
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Nosso objetivo é capacitá-lo com estratégias que continuarão beneficiando sua saúde e forma física muito além dos 30 dias do programa.
          </p>
        </div>
      </div>

      {/* Seção de Benefícios */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '3rem 2rem',
        borderRadius: '8px',
        marginBottom: '3rem'
      }}>
        <h2 style={{
          fontSize: '2rem',
          color: '#343A40',
          marginBottom: '2rem',
          fontWeight: '600',
          textAlign: 'center'
        }}>
          O que Você Vai Aprender
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              color: '#8b5cf6',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              🔥 Aceleração Metabólica
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.5'
            }}>
              Estratégias para aumentar o metabolismo basal e otimizar a queima de calorias naturalmente.
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              color: '#8b5cf6',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              💪 Preservação Muscular
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.5'
            }}>
              Protocolos para manter e aumentar massa muscular durante o processo de transformação corporal.
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              color: '#8b5cf6',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              🎯 Flexibilidade Metabólica
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.5'
            }}>
              Técnicas para otimizar o uso de gordura e carboidratos como fonte de energia.
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              color: '#8b5cf6',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              🔄 Sustentabilidade
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.5'
            }}>
              Criação de hábitos alimentares e de exercícios que se mantêm a longo prazo.
            </p>
          </div>
        </div>
      </div>

      {/* Depoimentos */}
      <div style={{
        backgroundColor: 'white',
        padding: '3rem 2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        marginBottom: '3rem'
      }}>
        <h2 style={{
          fontSize: '2rem',
          color: '#343A40',
          marginBottom: '2rem',
          fontWeight: '600',
          textAlign: 'center'
        }}>
          Transformações Reais
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '2rem',
            borderRadius: '8px',
            borderLeft: '4px solid #8b5cf6'
          }}>
            <p style={{
              fontSize: '1rem',
              color: '#555',
              lineHeight: '1.6',
              marginBottom: '1rem',
              fontStyle: 'italic'
            }}>
              "Perdi 12kg em 30 dias, mas o mais importante foi aprender a manter o peso. Já se passaram 6 meses e continuo no meu peso ideal sem fazer dietas restritivas."
            </p>
            <p style={{
              fontSize: '0.9rem',
              color: '#8b5cf6',
              fontWeight: '600'
            }}>
              - Ana Paula, 38 anos
            </p>
          </div>

          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '2rem',
            borderRadius: '8px',
            borderLeft: '4px solid #8b5cf6'
          }}>
            <p style={{
              fontSize: '1rem',
              color: '#555',
              lineHeight: '1.6',
              marginBottom: '1rem',
              fontStyle: 'italic'
            }}>
              "Não foi só o peso que mudou, mas toda minha relação com a comida. Agora tenho controle e energia para treinar todos os dias."
            </p>
            <p style={{
              fontSize: '0.9rem',
              color: '#8b5cf6',
              fontWeight: '600'
            }}>
              - Carlos Eduardo, 45 anos
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{
        backgroundColor: '#8b5cf6',
        color: 'white',
        padding: '3rem 2rem',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          fontWeight: '600'
        }}>
          Transforme seu Corpo de Forma Sustentável
        </h2>
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Aprenda estratégias científicas para alcançar e manter seu peso ideal sem dietas restritivas ou métodos extremos.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <ActionButton 
            href="/inscricao"
            text="Quero Participar"
            primary={false}
          />
        </div>
      </div>
    </div>
  );
}















