import { notFound } from 'next/navigation';
import PostClient from './PostClient';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
  content: string;
}

// Função para ler todos os posts da pasta content/blog
function getAllPosts(): PostData[] {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  
  try {
    const filenames = fs.readdirSync(postsDirectory);
    const posts = filenames
      .filter(name => name.endsWith('.md'))
      .map(name => {
        const fullPath = path.join(postsDirectory, name);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        return {
          slug: name.replace(/\.md$/, ''),
          title: data.title || '',
          excerpt: data.excerpt || '',
          date: data.date || '',
          author: data.author || '',
          category: data.category || '',
          image: data.image || '',
          readTime: data.readTime || '',
          tags: data.tags || [],
          content: content
        };
      });
    
    return posts;
  } catch (error) {
    console.error('Erro ao ler posts:', error);
    return [];
  }
}

// COMPATÍVEL COM NEXT.JS 15+ (params assíncrono)
export default async function BlogPostPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const allPosts = getAllPosts();
  const post = allPosts.find(p => p.slug === id);

  if (!post) {
    notFound();
  }

  return <PostClient post={post} />;
}

export async function generateStaticParams() {
  const allPosts = getAllPosts();
  return allPosts.map((post) => ({
    id: post.slug,
  }));
}














