import BlogClient from './BlogClient';

export default function BlogPage() {
  // Dados dos posts (podem vir de uma API ou arquivo)
  const allPostsData = [
    // Posts serão carregados pelo BlogClient via fallback
  ];

  return (
    <BlogClient 
      initialPosts={allPostsData as any} 
    />
  );
}

export async function generateStaticParams() {
  return [];
}








