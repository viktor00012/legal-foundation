import Link from 'next/link';
import type { Article } from '@/lib/cms';

interface ArticlesSectionProps {
  articles: Article[];
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function ArticlesSection({ articles }: ArticlesSectionProps) {
  const featured = articles.slice(0, 3);
  if (featured.length === 0) return null;

  return (
    <section className="section section--muted">
      <div className="container">
        <div className="section-heading">
          <h2>Статьи и публикации</h2>
          <p>Юридические материалы и аналитика от наших специалистов.</p>
        </div>
        <div className="grid-3">
          {featured.map((article) => (
            <article key={article.id} className="article-card">
              <time className="article-date">{formatDate(article.date)}</time>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-excerpt">{article.excerpt}</p>
              <Link href={`/articles/${article.slug}`} className="article-link">
                Читать далее →
              </Link>
            </article>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link href="/articles" className="btn btn--outline-dark">
            Все статьи
          </Link>
        </div>
      </div>
    </section>
  );
}
