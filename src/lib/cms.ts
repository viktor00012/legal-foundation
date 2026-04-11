import path from 'path';
import fs from 'fs';

export interface Lawyer {
  id: string;
  name: string;
  photo: string;
  specialization: string;
  description: string;
  education: string;
  experience: string;
  slug: string;
}

export interface Service {
  id: string;
  title: string;
  category: string;
  slug: string;
  description: string;
  content: string;
  details: string[];
  icon: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  content: string;
}

export interface Contact {
  firmName: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  messengerUrl: string;
  description: string;
  mapEmbedUrl: string;
}

export interface HomeData {
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    stats: { num: string; lbl: string }[];
  };
  advantages: {
    heading: string;
    subheading: string;
    items: { id: string; icon: string; title: string; desc: string }[];
  };
  lawyers: {
    heading: string;
    subheading: string;
  };
  cta: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
  };
  contact: {
    heading: string;
    subheading: string;
  };
}

function readJson<T>(filename: string): T {
  const filePath = path.join(process.cwd(), 'cms', filename);
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content) as T;
}

export function getLawyers(): Lawyer[] {
  return readJson<Lawyer[]>('lawyers.json');
}

export function getLawyerBySlug(slug: string): Lawyer | undefined {
  return getLawyers().find((l) => l.slug === slug);
}

export function getServices(): Service[] {
  return readJson<Service[]>('services.json');
}

export function getServiceBySlug(slug: string): Service | undefined {
  return getServices().find((s) => s.slug === slug);
}

export function getArticles(): Article[] {
  return readJson<Article[]>('articles.json');
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getArticles().find((a) => a.slug === slug);
}

export function getContact(): Contact {
  return readJson<Contact>('contact.json');
}

export function getHome(): HomeData {
  return readJson<HomeData>('home.json');
}
