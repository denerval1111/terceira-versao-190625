import { notFound } from 'next/navigation';
import PostClient from './PostClient';

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

// Dados dos posts - MESMOS SLUGS DO BLOGCLIENT
const allPosts: PostData[] = [
  {
    slug: 'ansiedade-estresse-moderno',
    title: 'Ansiedade e Estresse Moderno: Estratégias Baseadas em Ciência para o Bem-Estar Mental',
    excerpt: 'Aprenda técnicas comprovadas cientificamente para gerenciar ansiedade, combater o estresse do mundo moderno e cultivar uma mente mais equilibrada e resiliente.',
    date: '2024-06-10',
    author: 'Dr. Denerval',
    category: 'Saúde Mental',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '7 min de leitura',
    tags: ['controle de peso', 'metabolismo', 'nutrologia', 'longevidade', 'composição corporal', 'saúde metabólica']
  },
  {
    slug: 'pilares-longevidade-saudavel',
    title: 'Os 4 Pilares da Longevidade Saudável: Guia Completo do Desafio Vitalidade',
    excerpt: 'Conheça os quatro pilares fundamentais que sustentam uma vida longa e saudável: medicina regenerativa, nutrologia avançada, saúde mental e gerenciamento de peso inteligente.',
    date: '2024-06-16',
    author: 'Dr. Denerval',
    category: 'Medicina Regenerativa',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '12 min de leitura',
    tags: ['longevidade', 'medicina regenerativa', 'nutrologia', 'saúde mental', 'gerenciamento de peso']
  }
];

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = allPosts.find(p => p.slug === params.id);
  
  if (!post) {
    notFound();
  }

  return <PostClient post={post} />;
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    id: post.slug,
  }));
}












