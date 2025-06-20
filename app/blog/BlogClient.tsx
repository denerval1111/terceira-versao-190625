'use client';

import React, { useState, useEffect } from 'react';

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
}

interface BlogClientProps {
  initialPosts?: PostData[];
}

const BlogClient: React.FC<BlogClientProps> = ({ initialPosts = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  // Posts garantidos com SLUGS CORRIGIDOS
  const fallbackPosts: PostData[] = [
    {
      slug: 'ansiedade-estresse-moderno',
      title: 'Ansiedade e Estresse Moderno: Estratégias Baseadas em Ciência para o Bem-Estar Mental',
      excerpt: 'Aprenda técnicas comprovadas cientificamente para gerenciar ansiedade, combater o estresse do mundo moderno e cultivar uma mente mais equilibrada e resiliente.',
      date: '2024-06-10',
      author: 'Dr. Denerval',
      category: 'Saúde Mental',
      image: '/images/artigo-estresse.png',
      readTime: '9 min de leitura',
      tags: ['ansiedade', 'estresse', 'saúde mental', 'mindfulness', 'respiração']
    },
    {
      slug: 'autofagia-renovacao-celular',
      title: 'Autofagia: O Segredo da Renovação Celular para uma Vida Mais Longa',
      excerpt: 'Entenda como o processo natural de autofagia pode ser otimizado através de estratégias simples e baseadas em ciência para promover a regeneração celular e retardar o envelhecimento.',
      date: '2024-06-12',
      author: 'Dr. Denerval',
      category: 'Medicina Regenerativa',
      image: '/images/autofagiacelular.jpg',
      readTime: '6 min de leitura',
      tags: ['autofagia', 'regeneração celular', 'jejum intermitente', 'longevidade', 'anti-aging']
    },
    {
      slug: 'dieta-mediterranea-asiatica',
      title: 'Dieta Mediterrânea e Asiática: A Fusão Perfeita para Longevidade',
      excerpt: 'Descubra como combinar os melhores elementos das tradições culinárias mediterrânea e asiática para criar um padrão alimentar cientificamente otimizado para a saúde e longevidade.',
      date: '2024-06-08',
      author: 'Dr. Denerval',
      category: 'Nutrologia',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '8 min de leitura',
      tags: ['dieta mediterrânea', 'culinária asiática', 'longevidade', 'antioxidantes', 'ômega-3']
    },
    {
      slug: 'gerenciamento-peso-saudavel',
      title: 'Gerenciamento do Peso Saudável: Estratégias Científicas para Longevidade',
      excerpt: 'Descubra como o controle de peso baseado em evidências científicas pode transformar sua saúde e promover longevidade através de estratégias nutricionais e metabólicas inteligentes.',
      date: '2024-06-14',
      author: 'Dr. Denerval',
      category: 'Gerenciamento de Peso',
      image: '/images/gerenciamentopeso11.jpg',
      readTime: '7 min de leitura',
      tags: ['controle de peso', 'metabolismo', 'nutrologia', 'longevidade', 'composição corporal', 'saúde metabólica']
    },
    {
      slug: 'pilares-longevidade-saudavel', // SLUG CORRIGIDO
      title: 'Os 4 Pilares da Longevidade Saudável: Guia Completo do Desafio Vitalidade',
      excerpt: 'Conheça os quatro pilares fundamentais que sustentam uma vida longa e saudável: medicina regenerativa, nutrologia avançada, saúde mental e gerenciamento de peso inteligente.',
      date: '2024-06-16',
      author: 'Dr. Denerval',
      category: 'Medicina Regenerativa',
      image: '/images/quatropilareslongevidade.png',
      readTime: '12 min de leitura',
      tags: ['longevidade', 'medicina regenerativa', 'nutrologia', 'saúde mental', 'gerenciamento de peso']
    }
  ];

  const posts = initialPosts.length > 0 ? initialPosts : fallbackPosts;

  const categories = ['Todos', 'Medicina Regenerativa', 'Nutrologia', 'Saúde Mental', 'Gerenciamento de Peso'];

  const filteredPosts = selectedCategory === 'Todos' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const handleCardClick = (slug: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = `/blog/${slug}`;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        padding: '4rem 2rem 2rem',
        background: '#f8f9fa'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '700',
          color: '#1f2937',
          marginBottom: '1rem'
        }}>
          Blog Desafio Vitalidade
        </h1>
        <p style={{
          fontSize: '1.125rem',
          color: '#6b7280',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Transforme sua saúde com conteúdo científico sobre os 4 pilares da longevidade
        </p>
      </div>

      {/* Controles */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem 3rem'
      }}>
        {/* Filtros por Categoria */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontSize: '1rem',
            fontWeight: '600',
            marginBottom: '1rem',
            color: '#374151'
          }}>
            Filtrar por categoria:
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  border: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: selectedCategory === category ? '#10b981' : '#e5e7eb',
                  color: selectedCategory === category ? 'white' : '#6b7280'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Posts */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {filteredPosts.map((post) => (
            <div
              key={post.slug}
              onClick={() => handleCardClick(post.slug)}
              style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e5e7eb',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
              }}
            >
              {/* Imagem */}
              <div style={{
                height: '200px',
                backgroundImage: `url(${post.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />

              {/* Conteúdo */}
              <div style={{ padding: '1.5rem' }}>
                {/* Categoria Badge */}
                <div style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  background: '#10b981',
                  color: 'white',
                  marginBottom: '1rem'
                }}>
                  {post.category}
                </div>

                {/* Título */}
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.75rem',
                  lineHeight: '1.4'
                }}>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  {post.excerpt}
                </p>

                {/* Metadados */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  color: '#9ca3af',
                  marginBottom: '1rem'
                }}>
                  <span>📅 {new Date(post.date).toLocaleDateString('pt-BR')}</span>
                  <span>👤 {post.author}</span>
                  <span>⏱️ {post.readTime}</span>
                </div>

                {/* Saiba mais */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#10b981',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  <span>Saiba mais</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem se não houver posts */}
        {filteredPosts.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '3rem',
            color: '#6b7280'
          }}>
            <p>Nenhum artigo encontrado para esta categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogClient;







































