import type { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import LawyersSection from '@/components/sections/LawyersSection';
import ArticlesSection from '@/components/sections/ArticlesSection';
import CTASection from '@/components/sections/CTASection';
import ContactSection from '@/components/sections/ContactSection';
import { getContact, getLawyers, getServices, getHome, getArticles } from '@/lib/cms';

export async function generateMetadata(): Promise<Metadata> {
  const contact = await getContact();
  return {
    title: `${contact.firmName} — Опытные адвокаты и юристы в Москве`,
    description: contact.description || 'Квалифицированная юридическая помощь. Уголовное право, гражданские споры, арбитраж и банкротство.',
  };
}

export default async function HomePage() {
  const contact = await getContact();
  const lawyers = await getLawyers();
  const services = await getServices();
  const articles = await getArticles();
  const homeData = await getHome();

  return (
    <PageLayout>
      <HeroSection contact={contact} data={homeData.hero} />
      <ServicesSection services={services} />
      <AdvantagesSection data={homeData.advantages} />
      <LawyersSection lawyers={lawyers} data={homeData.lawyers} />
      <ArticlesSection articles={articles} />
      <CTASection data={homeData.cta} />
      <ContactSection contact={contact} data={homeData.contact} />
    </PageLayout>
  );
}
