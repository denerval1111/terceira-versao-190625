"use client";

import React from 'react';
import ActionButton from '@/components/ActionButton';

export default function SobreProgramaPage() {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 1rem'
    }}>
      {/* Hero Section - Similar à página principal */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/images/aquarela-jovem-correndo-parque.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#f4a261', // Cor de fundo que combina com a aquarela
        color: 'white',
        padding: '6rem 2rem',
        borderRadius: '8px',
        marginBottom: '3rem',
        textAlign: 'center',
        minHeight: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
        }}>
          Desafio Vitalidade: Transforme sua Saúde em 30 Dias
        </h1>
        <p style={{
          fontSize: '1.25rem',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6',
          textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
        }}>
          Um programa multidisciplinar baseado em ciência que já transformou a vida de milhares de pessoas. Chegou a sua vez!
        </p>
      </div>

      {/* Introdução com Gatilho de Escassez e Urgência */}
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        marginBottom: '3rem'
      }}>
        <h2 style={{
          fontSize: '1.75rem',
          color: '#343A40',
          marginBottom: '1.5rem',
          fontWeight: '600',
          textAlign: 'center'
        }}>
          Uma Oportunidade Única para Transformar sua Saúde
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#555',
          lineHeight: '1.6',
          marginBottom: '1.5rem'
        }}>
          O Desafio Vitalidade não é apenas mais um programa de saúde. É uma <strong>jornada transformadora de 30 dias</strong> cuidadosamente estruturada por especialistas, que integra os mais recentes avanços científicos em medicina regenerativa, nutrologia, saúde mental e gerenciamento de peso.
        </p>
        <p style={{
          fontSize: '1.1rem',
          color: '#555',
          lineHeight: '1.6',
          marginBottom: '1.5rem'
        }}>
          Com turmas limitadas a apenas <strong>20 participantes</strong>, garantimos atenção personalizada e resultados excepcionais. Nossa próxima turma está com vagas se esgotando rapidamente, e centenas de pessoas já experimentaram uma transformação profunda em sua saúde e qualidade de vida.
        </p>
        
        {/* Depoimento em destaque */}
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '1.5rem',
          borderLeft: '4px solid #10b981',
          marginTop: '2rem',
          fontStyle: 'italic'
        }}>
          <p style={{
            fontSize: '1rem',
            color: '#555',
            marginBottom: '0.5rem'
          }}>
            "Após 30 dias no Desafio Vitalidade, não apenas perdi 7kg, mas minha energia diária aumentou drasticamente e meus exames de sangue melhoraram significativamente. Foi uma transformação completa que vai muito além da estética."
          </p>
          <p style={{
            fontSize: '0.9rem',
            color: '#10b981',
            fontWeight: '600',
            marginBottom: '0'
          }}>
            — Maria C., 52 anos
          </p>
        </div>
      </div>

      {/* Os 4 Pilares */}
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
          Os 4 Pilares da Transformação
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
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
              color: '#10b981',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              🧬 Medicina Regenerativa
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.5'
            }}>
              Protocolos avançados de autofagia, jejum intermitente e otimização celular para renovação e longevidade.
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
              color: '#10b981',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              🥗 Nutrologia Avançada
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.5'
            }}>
              Estratégias nutricionais personalizadas baseadas em evidências científicas para otimização metabólica.
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
              color: '#10b981',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              🧠 Saúde Mental
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.5'
            }}>
              Técnicas de mindfulness, gestão do estresse e otimização do sono para equilíbrio mental completo.
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
              color: '#10b981',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              ⚖️ Gerenciamento de Peso
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.5'
            }}>
              Abordagem científica para composição corporal ideal, sem dietas restritivas ou métodos extremos.
            </p>
          </div>
        </div>
      </div>

      {/* O que você vai receber */}
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
          O que Você Vai Receber
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div>
            <h3 style={{
              fontSize: '1.25rem',
              color: '#10b981',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              📚 Conteúdo Exclusivo
            </h3>
            <ul style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.6',
              paddingLeft: '1.5rem'
            }}>
              <li>30 aulas em vídeo com especialistas</li>
              <li>E-books com protocolos detalhados</li>
              <li>Planilhas de acompanhamento</li>
              <li>Receitas funcionais exclusivas</li>
            </ul>
          </div>

          <div>
            <h3 style={{
              fontSize: '1.25rem',
              color: '#10b981',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              👥 Suporte Personalizado
            </h3>
            <ul style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.6',
              paddingLeft: '1.5rem'
            }}>
              <li>Grupo VIP no Telegram</li>
              <li>Lives semanais com especialistas</li>
              <li>Suporte direto da equipe</li>
              <li>Comunidade de participantes</li>
            </ul>
          </div>

          <div>
            <h3 style={{
              fontSize: '1.25rem',
              color: '#10b981',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              🎯 Resultados Garantidos
            </h3>
            <ul style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.6',
              paddingLeft: '1.5rem'
            }}>
              <li>Protocolo testado e aprovado</li>
              <li>Acompanhamento diário</li>
              <li>Ajustes personalizados</li>
              <li>Garantia de satisfação</li>
            </ul>
          </div>

          <div>
            <h3 style={{
              fontSize: '1.25rem',
              color: '#10b981',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              🎁 Bônus Exclusivos
            </h3>
            <ul style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.6',
              paddingLeft: '1.5rem'
            }}>
              <li>Masterclass de Longevidade</li>
              <li>Kit de Suplementação</li>
              <li>Acesso vitalício ao conteúdo</li>
              <li>Certificado de conclusão</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Depoimentos */}
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
          Transformações Reais
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '1rem',
              fontStyle: 'italic'
            }}>
              "Em 30 dias perdi 8kg, melhorei minha disposição e finalmente consegui controlar minha ansiedade. O programa mudou minha vida!"
            </p>
            <p style={{
              fontSize: '0.9rem',
              color: '#10b981',
              fontWeight: '600'
            }}>
              - Maria Silva, 42 anos
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '1rem',
              fontStyle: 'italic'
            }}>
              "Nunca imaginei que poderia me sentir tão bem aos 55 anos. O programa me deu energia e vitalidade que não tinha há anos."
            </p>
            <p style={{
              fontSize: '0.9rem',
              color: '#10b981',
              fontWeight: '600'
            }}>
              - João Santos, 55 anos
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '1rem',
              fontStyle: 'italic'
            }}>
              "O conhecimento que adquiri no programa me transformou não só fisicamente, mas mentalmente. Recomendo para todos!"
            </p>
            <p style={{
              fontSize: '0.9rem',
              color: '#10b981',
              fontWeight: '600'
            }}>
              - Ana Costa, 38 anos
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Final */}
      <div style={{
        backgroundColor: '#10b981',
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
          Sua Transformação Começa Agora
        </h2>
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Não deixe para amanhã a decisão que pode transformar sua vida hoje. Junte-se a milhares de pessoas que já descobriram o segredo da vitalidade.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <ActionButton 
            href="/inscricao"
            text="Quero Me Inscrever Agora"
            primary={false}
          />
        </div>
        <p style={{
          fontSize: '0.9rem',
          marginTop: '1rem',
          opacity: '0.9'
        }}>
          ⚡ Vagas limitadas • 🎯 Garantia de 30 dias • 🔒 Pagamento seguro
        </p>
      </div>
    </div>
  );
}











