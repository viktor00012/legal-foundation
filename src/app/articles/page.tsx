import type { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import { getArticles } from '@/lib/cms';

export const metadata: Metadata = {
  title: 'Статьи и публикации',
  description: 'Юридические статьи и аналитика от экспертов нашей фирмы.',
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function ArticlesPage() {
  const articles = getArticles();

  return (
    <PageLayout>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Главная</Link>
            <span>›</span>
            <span>Статьи</span>
          </nav>
          <h1>Статьи и публикации</h1>
          <p>Юридические материалы и аналитика от наших специалистов.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {articles.map((article) => (
              <article key={article.slug} className="article-card">
                <time className="article-date">{formatDate(article.date)}</time>
                <h2 className="article-title">{article.title}</h2>
                <p className="article-excerpt">{article.excerpt}</p>
                <Link href={`/articles/${article.slug}`} className="article-link">
                  Читать далее →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
