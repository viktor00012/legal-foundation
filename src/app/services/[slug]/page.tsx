import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import CTASection from '@/components/sections/CTASection';
import { getServiceBySlug, getServices } from '@/lib/cms';
import { getServiceIcon } from '@/lib/icons';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: 'Услуга не найдена' };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <PageLayout>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Главная</Link>
            <span>›</span>
            <Link href="/services">Услуги</Link>
            <span>›</span>
            <span>{service.title}</span>
          </nav>
          <h1>{service.title}</h1>
          <p>{service.category}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Link href="/services" className="back-link">
            <ArrowLeftIcon /> Все услуги
          </Link>

          <div style={{ maxWidth: '800px' }}>
            <div className="service-detail-header">
              <div className="service-detail-icon">{getServiceIcon(service.icon)}</div>
              <h2>{service.title}</h2>
            </div>

            <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: '1.75', marginBottom: '1.5rem' }}>
              {service.description}
            </p>

            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
              {service.content}
            </p>

            {service.details.length > 0 && (
              <>
                <h3 style={{ marginTop: '2.5rem', marginBottom: '0.75rem' }}>Что входит в услугу</h3>
                <ul className="service-detail-list">
                  {service.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </>
            )}
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
