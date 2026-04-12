import type { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import LawyerCard from '@/components/cards/LawyerCard';
import CTASection from '@/components/sections/CTASection';
import { getLawyers } from '@/lib/cms';

export const metadata: Metadata = {
  title: 'Наши адвокаты',
  description: 'Познакомьтесь с командой профессиональных юристов и адвокатов нашей фирмы.',
};

export default async function LawyersPage() {
  const lawyers = await getLawyers();

  return (
    <PageLayout>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Главная</Link>
            <span>›</span>
            <span>Адвокаты</span>
          </nav>
          <h1>Наша команда</h1>
          <p>Профессионалы, за которыми стоит каждое успешное дело.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {lawyers.map((lawyer, index) => (
              <Link key={lawyer.slug} href={`/lawyers/${lawyer.slug}`}>
                <LawyerCard lawyer={lawyer} priority={index === 0} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
