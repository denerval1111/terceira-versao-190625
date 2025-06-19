'use client';

import React from 'react';

interface PostClientProps {
  post: {
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    category: string;
    image: string;
    readTime: string;
    tags?: string[];
  };
}

const PostClient = ({ post }: PostClientProps) => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#f8f9fa',
      padding: '2rem 0'
    }}>
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '0 1rem' 
      }}>
        
        {/* Header Simples */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '3rem',
          marginBottom: '2rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          border: '1px solid #e5e7eb',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            borderRadius: '25px',
            fontSize: '0.875rem',
            fontWeight: '600',
            marginBottom: '1rem',
            background: '#10b981',
            color: 'white'
          }}>
            {post.category}
          </div>

          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '1rem', 
            color: '#374151',
            lineHeight: '1.2'
          }}>
            {post.title}
          </h1>
          
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#6b7280',
            maxWidth: '600px', 
            margin: '0 auto 2rem', 
            lineHeight: '1.6'
          }}>
            {post.excerpt}
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            fontSize: '0.875rem',
            color: '#9ca3af',
            flexWrap: 'wrap'
          }}>
            <span>📅 {new Date(post.date).toLocaleDateString('pt-BR')}</span>
            <span>👤 {post.author}</span>
            <span>⏱️ {post.readTime}</span>
          </div>
        </div>

        {/* Conteúdo */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '3rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          border: '1px solid #e5e7eb',
          marginBottom: '2rem'
        }}>
          <div style={{
            fontSize: '1.125rem',
            lineHeight: '1.8',
            color: '#374151'
          }}>
            {post.content}
          </div>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e5e7eb',
            marginBottom: '2rem'
          }}>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#374151'
            }}>
              🏷️ Tags
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  style={{
                    padding: '0.5rem 1rem',
                    background: '#f3f4f6',
                    color: '#6b7280',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div style={{
          background: 'linear-gradient(135deg, #10b981, #059669)',
          borderRadius: '12px',
          padding: '2rem',
          textAlign: 'center',
          color: 'white'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            Transforme sua Saúde com o Desafio Vitalidade
          </h3>
          <p style={{
            marginBottom: '1.5rem',
            opacity: 0.9
          }}>
            Descubra como nosso programa de 30 dias pode revolucionar sua longevidade e bem-estar.
          </p>
          <a
            href="/inscricao"
            style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              background: 'white',
              color: '#10b981',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.2s ease'
            }}
          >
            Saiba Mais sobre o Programa
          </a>
        </div>

        {/* Voltar */}
        <div style={{ 
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          <a
            href="/blog"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: 'white',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              color: '#374151',
              fontSize: '0.875rem',
              fontWeight: '500',
              textDecoration: 'none'
            }}
          >
            ← Voltar ao Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostClient;






