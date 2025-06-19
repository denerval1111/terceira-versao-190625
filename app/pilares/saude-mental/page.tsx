// app/pilares/saude-mental/page.tsx
import React from 'react';
import ActionButton from '@/components/ActionButton';

export default function SaudeMentalPage() {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 1rem'
    }}>
      {/* Hero Section */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/sessao-terapia-saude-mental.png)',
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
          Saúde Mental
        </h1>
        <p style={{
          fontSize: '1.25rem',
          maxWidth: '800px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Técnicas de motivação e enfrentamento da ansiedade, procrastinação e sintomas depressivos relacionados ao estresse moderno.
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
            color: '#2E8B57',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Abordagem Integrada
          </h2>
          <p style={{
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Nossa abordagem para saúde mental integra técnicas baseadas em evidências da psicologia positiva, terapia cognitivo-comportamental e práticas de mindfulness. Desenvolvemos estratégias personalizadas para ajudar você a gerenciar o estresse e construir resiliência emocional.
          </p>
          <p style={{
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Reconhecemos que a saúde mental está intrinsecamente ligada à saúde física, e nossos protocolos abordam essa conexão mente-corpo de forma holística e científica.
          </p>
        </div>

        <div>
          <h2 style={{
            fontSize: '1.75rem',
            color: '#2E8B57',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Ferramentas Práticas
          </h2>
          <p style={{
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Fornecemos ferramentas práticas e aplicáveis que você pode incorporar em sua rotina diária para melhorar sua saúde mental. Desde técnicas de respiração e meditação guiada até estratégias de produtividade e gerenciamento de tempo.
          </p>
          <p style={{
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Nosso objetivo é capacitá-lo com habilidades que continuarão beneficiando sua saúde mental muito além dos 30 dias do programa.
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
              color: '#2E8B57',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              🧘‍♀️ Mindfulness e Meditação
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.5'
            }}>
              Técnicas de atenção plena para reduzir ansiedade e melhorar o foco no presente.
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
              color: '#2E8B57',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              💭 Reestruturação Cognitiva
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.5'
            }}>
              Identificação e transformação de padrões de pensamento negativos.
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
              color: '#2E8B57',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              😴 Higiene do Sono
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.5'
            }}>
              Estratégias para melhorar a qualidade do sono e regular o ritmo circadiano.
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
              color: '#2E8B57',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              ⚡ Gestão do Estresse
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.5'
            }}>
              Técnicas de respiração e relaxamento para momentos de alta pressão.
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
            borderLeft: '4px solid #2E8B57'
          }}>
            <p style={{
              fontSize: '1rem',
              color: '#555',
              lineHeight: '1.6',
              marginBottom: '1rem',
              fontStyle: 'italic'
            }}>
              "As técnicas de mindfulness me ajudaram a controlar minha ansiedade de forma natural. Agora consigo lidar com o estresse do trabalho sem me sentir sobrecarregada."
            </p>
            <p style={{
              fontSize: '0.9rem',
              color: '#2E8B57',
              fontWeight: '600'
            }}>
              - Carla M., 34 anos
            </p>
          </div>

          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '2rem',
            borderRadius: '8px',
            borderLeft: '4px solid #2E8B57'
          }}>
            <p style={{
              fontSize: '1rem',
              color: '#555',
              lineHeight: '1.6',
              marginBottom: '1rem',
              fontStyle: 'italic'
            }}>
              "Aprendi a identificar meus padrões de pensamento negativos e transformá-los. Minha qualidade de vida melhorou drasticamente."
            </p>
            <p style={{
              fontSize: '0.9rem',
              color: '#2E8B57',
              fontWeight: '600'
            }}>
              - Roberto S., 41 anos
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{
        backgroundColor: '#2E8B57',
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
          Transforme sua Saúde Mental
        </h2>
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Desenvolva resiliência emocional e aprenda ferramentas práticas para uma vida mais equilibrada e plena.
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



