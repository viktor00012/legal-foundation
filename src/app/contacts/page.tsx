import type { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import ContactSection from '@/components/sections/ContactSection';
import { getContact } from '@/lib/cms';

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Свяжитесь с нами для записи на юридическую консультацию.',
};

export default async function ContactsPage() {
  const contact = await getContact();

  return (
    <PageLayout>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Главная</Link>
            <span>›</span>
            <span>Контакты</span>
          </nav>
          <h1>Контакты</h1>
          <p>Запишитесь на консультацию или задайте вопрос удобным для вас способом.</p>
        </div>
      </section>
      <ContactSection contact={contact} />
    </PageLayout>
  );
}
