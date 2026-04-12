import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import CTASection from '@/components/sections/CTASection';
import { getLawyerBySlug, getLawyers } from '@/lib/cms';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const lawyers = await getLawyers();
  return lawyers.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lawyer = await getLawyerBySlug(slug);
  if (!lawyer) return { title: 'Адвокат не найден' };
  return {
    title: `${lawyer.name} — ${lawyer.specialization}`,
    description: lawyer.description,
  };
}

import { UserIcon } from '@/lib/icons';

export default async function LawyerDetailPage({ params }: Props) {
  const { slug } = await params;
  const lawyer = await getLawyerBySlug(slug);

  if (!lawyer) notFound();

  return (
    <PageLayout>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Главная</Link>
            <span>›</span>
            <Link href="/lawyers">Адвокаты</Link>
            <span>›</span>
            <span>{lawyer.name}</span>
          </nav>
          <h1>{lawyer.name}</h1>
          <p>{lawyer.specialization}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Link href="/lawyers" className="back-link">
            <ArrowLeftIcon /> Все адвокаты
          </Link>

          <div className="lawyer-detail-grid">
            {/* Photo */}
            <div>
              <div className="lawyer-detail-photo">
                {lawyer.photo ? (
                  <Image
                    src={lawyer.photo}
                    alt={lawyer.name}
                    width={320}
                    height={427}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    backgroundColor: 'var(--color-bg-alt, #f9fafb)',
                    color: 'var(--color-text-muted)'
                  }}>
                    <UserIcon />
                  </div>
                )}
              </div>
            </div>


            {/* Info */}
            <div>
              <div className="lawyer-spec-badge">{lawyer.specialization}</div>
              <h2 style={{ marginBottom: '1rem' }}>{lawyer.name}</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', fontSize: '1rem' }}>
                {lawyer.description}
              </p>

              <div className="lawyer-meta">
                <div className="lawyer-meta-item">
                  <span className="lawyer-meta-label">Образование:</span>
                  <span className="lawyer-meta-value">{lawyer.education}</span>
                </div>
                <div className="lawyer-meta-item">
                  <span className="lawyer-meta-label">Опыт работы:</span>
                  <span className="lawyer-meta-value">{lawyer.experience}</span>
                </div>
                <div className="lawyer-meta-item">
                  <span className="lawyer-meta-label">Специализация:</span>
                  <span className="lawyer-meta-value">{lawyer.specialization}</span>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Link href="/contacts" className="btn btn--primary btn--lg">
                  Записаться на консультацию
                </Link>
              </div>
            </div>
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
