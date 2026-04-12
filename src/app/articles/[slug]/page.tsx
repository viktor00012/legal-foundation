import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import CTASection from '@/components/sections/CTASection';
import PortableTextContent from '@/components/PortableTextContent';
import { getArticleBySlug, getArticles } from '@/lib/cms';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: 'Статья не найдена' };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  // article.content is a Portable Text array from Sanity.
  // If it's a plain string (legacy JSON fallback), split into paragraphs.
  const isPortableText = Array.isArray(article.content);

  return (
    <PageLayout>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Главная</Link>
            <span>›</span>
            <Link href="/articles">Статьи</Link>
            <span>›</span>
            <span>{article.title}</span>
          </nav>
          <h1>{article.title}</h1>
          {article.date && (
            <p><time>{formatDate(article.date)}</time></p>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Link href="/articles" className="back-link">
            <ArrowLeftIcon /> Все статьи
          </Link>

          <div className="article-body">
            {isPortableText ? (
              <PortableTextContent value={article.content} />
            ) : typeof article.content === 'string' && article.content.trim() ? (
              article.content.split('\n\n').filter(Boolean).map((para: string, i: number) => (
                <p key={i}>{para}</p>
              ))
            ) : article.excerpt ? (
              <p>{article.excerpt}</p>
            ) : null}
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}

function ArrowLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}
