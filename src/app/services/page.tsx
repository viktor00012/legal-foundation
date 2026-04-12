import type { Metadata } from 'next';
export const revalidate = 300;

import PageLayout from '@/components/layout/PageLayout';
import ServiceCard from '@/components/cards/ServiceCard';
import CTASection from '@/components/sections/CTASection';
import { getServices } from '@/lib/cms';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Юридические услуги',
  description: 'Полный спектр юридических услуг: уголовная защита, гражданские споры, арбитраж, корпоративное право.',
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <PageLayout>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Главная</Link>
            <span>›</span>
            <span>Услуги</span>
          </nav>
          <h1>Наши юридические услуги</h1>
          <p>Профессиональная правовая помощь в широком спектре отраслей права.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="service-card">
                <ServiceCard service={service} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
