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

export const metadata: Metadata = {
  title: 'Правовой Фонд — Профессиональная юридическая помощь в Москве',
  description: 'Опытные адвокаты для защиты ваших прав. Уголовная защита, гражданские споры, корпоративное право, арбитраж. Более 20 лет на рынке юридических услуг.',
};

export default function HomePage() {
  const contact = getContact();
  const lawyers = getLawyers();
  const services = getServices();
  const articles = getArticles();
  const homeData = getHome();

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
