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
      {/* Hero Section - TESTE COM IMAGEM QUE FUNCIONA */}
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
          Gerenciamento de Peso - TESTE
        </h1>
        <p style={{
          fontSize: '1.25rem',
          maxWidth: '800px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          TESTE: Se esta imagem aparecer, o problema é específico com o arquivo mulher-gerenciamento-peso.png
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
            Teste de Diagnóstico
          </h2>
          <p style={{
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Esta é uma versão de teste usando a imagem da sessão de terapia que sabemos que funciona. Se esta imagem aparecer, confirma que o problema é específico com o arquivo mulher-gerenciamento-peso.png.
          </p>
          <p style={{
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Neste caso, precisaremos fazer upload da imagem novamente com um nome diferente ou verificar se há algum problema com o arquivo original.
          </p>
        </div>

        <div>
          <h2 style={{
            fontSize: '1.75rem',
            color: '#8b5cf6',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Próximos Passos
          </h2>
          <p style={{
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Se a imagem da sessão de terapia aparecer aqui, vamos renomear o arquivo da mulher para algo como "mulher-correndo-peso.png" e fazer upload novamente.
          </p>
          <p style={{
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Às vezes arquivos específicos podem ter problemas de codificação ou caracteres especiais que impedem o carregamento.
          </p>
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
          Teste de Diagnóstico
        </h2>
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Verificando se o problema é específico com o arquivo da imagem da mulher.
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













