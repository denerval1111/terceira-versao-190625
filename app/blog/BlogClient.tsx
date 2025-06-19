'use client';

import React, { useState, useMemo } from 'react';
import { FaSearch, FaCalendar, FaUser, FaClock, FaArrowRight } from 'react-icons/fa';

interface Post {
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
  posts: Post[];
}

const BlogClient: React.FC<BlogClientProps> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Posts fallback garantidos com as 4 categorias dos Pilares
  const fallbackPosts: Post[] = [
    {
      slug: 'ansiedade-estresse-moderno',
      title: 'Ansiedade e Estresse Moderno: Estratégias Científicas para o Bem-Estar Mental',
      excerpt: 'Descubra técnicas baseadas em evidências para gerenciar ansiedade e estresse no mundo moderno, promovendo saúde mental e longevidade.',
      date: '2024-06-13',
      author: 'Dr. Denerval',
      category: 'Saúde Mental',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '6 min de leitura',
      tags: ['ansiedade', 'estresse', 'saúde mental', 'bem-estar', 'mindfulness', 'respiração']
    },
    {
      slug: 'autofagia-renovacao-celular',
      title: 'Autofagia: O Segredo da Renovação Celular para uma Vida Mais Longa',
      excerpt: 'Entenda como o processo natural de autofagia pode ser otimizado através de estratégias simples e baseadas em ciência para promover a regeneração celular e retardar o envelhecimento.',
      date: '2024-06-13',
      author: 'Dr. Denerval',
      category: 'Medicina Regenerativa',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '6 min de leitura',
      tags: ['autofagia', 'regeneração celular', 'longevidade', 'jejum intermitente', 'anti-aging', 'saúde celular']
    },
    {
      slug: 'dieta-mediterranea-asiatica',
      title: 'Dieta Mediterrânea e Asiática: Fusão Nutricional para Longevidade',
      excerpt: 'Explore como a combinação das tradições culinárias mediterrânea e asiática pode revolucionar sua saúde, oferecendo benefícios únicos para longevidade e vitalidade.',
      date: '2024-06-14',
      author: 'Dr. Denerval',
      category: 'Nutrologia',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '8 min de leitura',
      tags: ['dieta mediterrânea', 'culinária asiática', 'longevidade', 'antioxidantes', 'ômega-3', 'anti-inflamatório']
    },
    {
      slug: 'gerenciamento-peso-saudavel',
      title: 'Gerenciamento do Peso Saudável: Estratégias Científicas para Longevidade',
      excerpt: 'Descubra como o controle de peso baseado em evidências científicas pode transformar sua saúde e promover longevidade através de estratégias nutricionais e metabólicas inteligentes.',
      date: '2024-06-15',
      author: 'Dr. Denerval',
      category: 'Gerenciamento de Peso',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '7 min de leitura',
      tags: ['controle de peso', 'metabolismo', 'nutrologia', 'longevidade', 'composição corporal', 'saúde metabólica']
    },
    {
      slug: 'pilares-longevidade-saudavel',
      title: 'Os 4 Pilares da Longevidade Saudável: Medicina Regenerativa, Nutrologia, Saúde Mental e Gerenciamento de Peso',
      excerpt: 'Descubra como os quatro pilares fundamentais do Desafio Vitalidade podem transformar sua jornada rumo à longevidade com vitalidade.',
      date: '2024-06-14',
      author: 'Dr. Denerval',
      category: 'Medicina Regenerativa',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '10 min de leitura',
      tags: ['longevidade', 'medicina regenerativa', 'nutrologia', 'saúde mental', 'gerenciamento de peso', 'autofagia', 'telômeros']
    }
  ];

  // Lógica inteligente para usar posts
  let activePosts = fallbackPosts; // Sempre começar com fallback

  // Se posts foram recebidos e são válidos, usar eles
  if (posts && Array.isArray(posts) && posts.length > 0) {
    // Verificar se os posts têm estrutura válida
    const validPosts = posts.filter(post => 
      post && typeof post === 'object' && post.title && post.category
    );
    
    if (validPosts.length > 0) {
      activePosts = validPosts;
    }
  }

  // Garantir que sempre temos as 4 categorias dos Pilares
  const pilarCategories = ['Medicina Regenerativa', 'Nutrologia', 'Saúde Mental', 'Gerenciamento de Peso'];
  const postCategories = Array.from(new Set(activePosts.map(post => post.category)));
  const allCategories = Array.from(new Set([...pilarCategories, ...postCategories]));
  const categories = ['Todos', ...allCategories];

  // Filtrar posts
  const filteredPosts = useMemo(() => {
    return activePosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [activePosts, searchTerm, selectedCategory]);

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#f8f9fa',
      padding: '2rem 0' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        
        {/* Header Section - Igual aos Pilares */}
        <div style={{ 
          textAlign: 'center',
          marginBottom: '3rem',
          padding: '2rem 0'
        }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '1rem', 
            color: '#374151'
          }}>
            Blog Desafio Vitalidade
          </h1>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#6b7280', 
            maxWidth: '600px', 
            margin: '0 auto', 
            lineHeight: '1.6'
          }}>
            Transforme sua saúde com conteúdo científico sobre os 4 pilares da longevidade
          </p>
        </div>

        {/* Controles de Busca e Filtro */}
        <div style={{ 
          background: 'white', 
          borderRadius: '12px', 
          padding: '2rem', 
          marginBottom: '3rem', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', 
          border: '1px solid #e5e7eb' 
        }}>
          
          {/* Busca */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ position: 'relative' }}>
              <FaSearch style={{ 
                position: 'absolute', 
                left: '1rem', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                color: '#9ca3af', 
                fontSize: '1rem' 
              }} />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 2.5rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'all 0.2s ease',
                  outline: 'none'
                }}
                onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#10b981'}
                onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = '#d1d5db'}
              />
            </div>
          </div>

          {/* Filtros de Categoria */}
          <div>
            <h3 style={{ 
              fontSize: '1rem', 
              fontWeight: '600', 
              marginBottom: '1rem', 
              color: '#374151' 
            }}>
              Filtrar por categoria:
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    border: '1px solid #d1d5db',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    background: selectedCategory === category 
                      ? '#10b981' 
                      : 'white',
                    color: selectedCategory === category 
                      ? 'white' 
                      : '#374151'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category) {
                      (e.target as HTMLButtonElement).style.backgroundColor = '#f3f4f6';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      (e.target as HTMLButtonElement).style.backgroundColor = 'white';
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de Posts - Layout dos Pilares */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {filteredPosts.map((post, index) => (
            <article
              key={post.slug}
              style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e5e7eb',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
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
              {/* Imagem do Post */}
              <div style={{
                height: '200px',
                backgroundImage: `url(${post.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                {/* Categoria Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  background: '#10b981',
                  color: 'white'
                }}>
                  {post.category}
                </div>
              </div>

              {/* Conteúdo */}
              <div style={{ padding: '1.5rem' }}>
                {/* Título */}
                <h2 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  color: '#374151',
                  lineHeight: '1.4'
                }}>
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p style={{
                  color: '#6b7280',
                  marginBottom: '1rem',
                  lineHeight: '1.6',
                  fontSize: '0.875rem'
                }}>
                  {post.excerpt}
                </p>

                {/* Metadados */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  fontSize: '0.75rem',
                  color: '#9ca3af',
                  marginBottom: '1rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <FaCalendar />
                    <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <FaUser />
                    <span>{post.author}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <FaClock />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Link para ler mais - Estilo dos Pilares */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#10b981',
                  fontWeight: '600',
                  fontSize: '0.875rem',
                  textDecoration: 'none'
                }}>
                  <span>Saiba mais</span>
                  <FaArrowRight style={{ fontSize: '0.75rem' }} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mensagem quando não há posts */}
        {filteredPosts.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '3rem',
            color: '#6b7280',
            background: 'white',
            borderRadius: '12px',
            border: '1px solid #e5e7eb'
          }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              Nenhum artigo encontrado
            </p>
            <p style={{ fontSize: '0.9rem' }}>
              Tente ajustar os filtros ou termo de busca
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogClient;































