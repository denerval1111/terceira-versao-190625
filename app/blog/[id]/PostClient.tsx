'use client';

import React from 'react';

interface PostData {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  tags: string[];
  content?: string;
}

interface PostClientProps {
  post: PostData;
}

const PostClient: React.FC<PostClientProps> = ({ post }) => {
  
  // Função para processar o conteúdo Markdown para HTML
  const processMarkdownContent = (content: string): string => {
    if (!content) return '';
    
    // Conversão básica de Markdown para HTML
    let html = content
      // Headers
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      // Bold e Italic
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Listas ordenadas
      .replace(/^\d+\.\s+(.*$)/gim, '<li>$1</li>')
      // Listas não ordenadas
      .replace(/^[-*]\s+(.*$)/gim, '<li>$1</li>')
      // Parágrafos (dividir por linha dupla)
      .split('\n\n')
      .map(paragraph => {
        if (paragraph.trim()) {
          // Se contém <li>, envolver em <ul>
          if (paragraph.includes('<li>')) {
            return '<ul>' + paragraph + '</ul>';
          }
          // Se já é uma tag HTML, manter como está
          if (paragraph.trim().startsWith('<')) {
            return paragraph;
          }
          // Senão, envolver em <p>
          return '<p>' + paragraph.replace(/\n/g, '<br>') + '</p>';
        }
        return '';
      })
      .join('');
    
    return html;
  };

  // Usar o conteúdo do Markdown ou fallback
  const getFullContent = (): string => {
    if (post.content) {
      return processMarkdownContent(post.content);
    }
    
    // Fallback para artigos em desenvolvimento
    return `
      <div style="text-align: center; padding: 2rem; background: #f8f9fa; border-radius: 8px; margin: 2rem 0;">
        <h2>Artigo em Desenvolvimento</h2>
        <p>Este artigo está sendo preparado com conteúdo científico de alta qualidade. Em breve estará disponível com informações detalhadas sobre ${post.title}.</p>
        <p>Enquanto isso, explore nossos outros artigos disponíveis ou inscreva-se no Desafio Vitalidade para ter acesso ao conteúdo completo.</p>
      </div>
    `;
  };

  const handleProgramClick = () => {
    window.location.href = '/inscricao';
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Hero Section */}
      <section 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '6rem 0',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <span style={{
              backgroundColor: '#10b981',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: '600'
            }}>
              {post.category}
            </span>
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            {post.title}
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            marginBottom: '2rem',
            opacity: '0.9',
            maxWidth: '800px',
            margin: '0 auto 2rem auto'
          }}>
            {post.excerpt}
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            fontSize: '0.875rem',
            opacity: '0.8'
          }}>
            <span>📅 {post.date}</span>
            <span>👨‍⚕️ {post.author}</span>
            <span>⏱️ {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem 0 1rem' }}>
        <button
          onClick={() => window.history.back()}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: 'transparent',
            border: '1px solid #d1d5db',
            borderRadius: '0.375rem',
            color: '#6b7280',
            cursor: 'pointer',
            fontSize: '0.875rem',
            transition: 'all 0.2s ease'
          }}
        >
          ← Voltar
        </button>
      </div>

      {/* Article Content */}
      <article style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          padding: '3rem',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          lineHeight: '1.7',
          fontSize: '1.1rem'
        }}>
          <div 
            dangerouslySetInnerHTML={{ __html: getFullContent() }}
            style={{
              color: '#374151'
            }}
          />
        </div>

        {/* Tags */}
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{
            fontSize: '1rem',
            fontWeight: '600',
            marginBottom: '1rem',
            color: '#374151'
          }}>
            Tags:
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            {post.tags.map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                style={{
                  padding: '0.25rem 0.75rem',
                  background: '#f3f4f6',
                  color: '#6b7280',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          background: 'linear-gradient(135deg, #10b981, #059669)',
          borderRadius: '12px',
          textAlign: 'center',
          color: 'white'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            Transforme sua saúde com o Desafio Vitalidade
          </h3>
          <p style={{
            marginBottom: '1.5rem',
            opacity: '0.9'
          }}>
            Aplique estes conhecimentos em um programa estruturado de 30 dias
          </p>
          <button
            onClick={handleProgramClick}
            style={{
              padding: '0.75rem 2rem',
              background: 'white',
              color: '#10b981',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Inscreva-se no Programa
          </button>
        </div>
      </article>
    </div>
  );
};

export default PostClient;











