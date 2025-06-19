'use client';

import React from 'react';
import { FaCalendar, FaUser, FaClock, FaTag, FaArrowLeft } from 'react-icons/fa';

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
    tags: string[];
  };
}

const PostClient: React.FC<PostClientProps> = ({ post }) => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#f8f9fa'
    }}>
      {/* Hero Section com Imagem - Igual aos Pilares */}
      <div style={{ 
        position: 'relative',
        backgroundImage: `url(${post.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4rem 2rem', 
        color: 'white', 
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {/* Overlay escuro */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.6)'
        }} />
        
        {/* Conteúdo */}
        <div style={{ 
          position: 'relative', 
          zIndex: 2,
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {/* Categoria Badge */}
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
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            lineHeight: '1.2'
          }}>
            {post.title}
          </h1>
          
          <p style={{ 
            fontSize: '1.125rem', 
            opacity: 0.95, 
            maxWidth: '600px', 
            margin: '0 auto 2rem', 
            lineHeight: '1.6',
            textShadow: '0 1px 2px rgba(0,0,0,0.5)'
          }}>
            {post.excerpt}
          </p>

          {/* Metadados */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            fontSize: '0.875rem',
            opacity: 0.9
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaCalendar />
              <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaUser />
              <span>{post.author}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaClock />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo do Artigo */}
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '3rem 1rem' 
      }}>
        
        {/* Botão Voltar */}
        <div style={{ marginBottom: '2rem' }}>
          <button
            onClick={() => window.history.back()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: 'white',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              color: '#374151',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = '#f3f4f6';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = 'white';
            }}
          >
            <FaArrowLeft />
            <span>Voltar ao Blog</span>
          </button>
        </div>

        {/* Conteúdo Principal */}
        <article style={{
          background: 'white',
          borderRadius: '12px',
          padding: '3rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          border: '1px solid #e5e7eb'
        }}>
          
          {/* Conteúdo do Post */}
          <div 
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.8',
              color: '#374151'
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div style={{
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid #e5e7eb'
          }}>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#374151',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <FaTag />
              Tags
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              {post.tags.map(tag => (
                <span
                  key={tag}
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
            <button
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
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)';
                (e.target as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
                (e.target as HTMLButtonElement).style.boxShadow = 'none';
              }}
            >
              Saiba Mais sobre o Programa
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PostClient;



