import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Страница не найдена',
};

export default function NotFound() {
  return (
    <main>
      <div className="container">
        <div className="not-found">
          <div className="not-found-code">404</div>
          <h2 style={{ marginTop: '1rem', marginBottom: '0.75rem' }}>Страница не найдена</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
            Запрашиваемая страница не существует или была перемещена.
          </p>
          <Link href="/" className="btn btn--primary btn--lg">
            Вернуться на главную
          </Link>
        </div>
      </div>
    </main>
  );
}
