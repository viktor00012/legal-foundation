import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';

export default function NotFound() {
  return (
    <PageLayout>
      <div className="container">
        <section className="not-found-section">
          <div className="not-found-code">404</div>
          <h1 className="section-title">Страница не найдена</h1>
          <p className="section-subheading" style={{ maxWidth: '500px', margin: '0 auto 2rem' }}>
            Извините, запрашиваемая вами страница не существует или была перенесена. 
            Попробуйте вернуться на главную страницу или свяжитесь с нами.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/" className="btn btn--primary btn--lg">
              На главную
            </Link>
            <Link href="/contacts" className="btn btn--outline btn--lg">
              Контакты
            </Link>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
