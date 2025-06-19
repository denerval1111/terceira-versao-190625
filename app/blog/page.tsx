import BlogClient from './BlogClient';

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

export default function BlogPage() {
  // Dados dos posts (podem vir de uma API ou arquivo)
  const allPostsData: PostData[] = [
    // Posts serão carregados pelo BlogClient via fallback
  ];

  return (
    <BlogClient 
      initialPosts={allPostsData} 
    />
  );
}

export async function generateStaticParams() {
  return [];
}










