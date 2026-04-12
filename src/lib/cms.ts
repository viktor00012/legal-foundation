import path from 'path';
import fs from 'fs';
import { client } from '@/sanity/lib/client';
import type { PortableTextBlock } from '@portabletext/types';

import { 
  LAWYERS_QUERY, 
  LAWYER_BY_SLUG_QUERY, 
  SERVICES_QUERY, 
  SERVICE_BY_SLUG_QUERY, 
  ARTICLES_QUERY, 
  ARTICLE_BY_SLUG_QUERY, 
  CONTACT_QUERY, 
  HOME_QUERY 
} from '@/sanity/lib/queries';

export interface Lawyer {
  id: string;
  name: string;
  photo: string | null;
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
  content: PortableTextBlock[] | string;
  details: string[];


  icon: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  content: PortableTextBlock[] | string;
}



export interface Contact {
  firmName: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  messengerUrl: string;
  telegramUrl?: string;
  maxUrl?: string;
  description: string;

  mapEmbedUrl: string;
  seo?: {
    title?: string;
    description?: string;
  };
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
    items: { icon: string; title: string; desc: string }[];
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

export async function getLawyers(): Promise<Lawyer[]> {
  try {
    const lawyers = await client.fetch(LAWYERS_QUERY);
    if (lawyers && lawyers.length > 0) return lawyers;
  } catch (e) {
    console.error('Sanity fetch error (lawyers):', e);
  }
  return readJson<Lawyer[]>('lawyers.json');
}

export async function getLawyerBySlug(slug: string): Promise<Lawyer | undefined> {
  try {
    const lawyer = await client.fetch(LAWYER_BY_SLUG_QUERY, { slug });
    if (lawyer) return lawyer;
  } catch (e) {
    console.error('Sanity fetch error (lawyer):', e);
  }
  return (await getLawyers()).find((l) => l.slug === slug);
}

export async function getServices(): Promise<Service[]> {
  try {
    const services = await client.fetch(SERVICES_QUERY);
    if (services && services.length > 0) return services;
  } catch (e) {
    console.error('Sanity fetch error (services):', e);
  }
  return readJson<Service[]>('services.json');
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  try {
    const service = await client.fetch(SERVICE_BY_SLUG_QUERY, { slug });
    if (service) return service;
  } catch (e) {
    console.error('Sanity fetch error (service):', e);
  }
  return (await getServices()).find((s) => s.slug === slug);
}

export async function getArticles(): Promise<Article[]> {
  try {
    const articles = await client.fetch(ARTICLES_QUERY);
    if (articles && articles.length > 0) return articles;
  } catch (e) {
    console.error('Sanity fetch error (articles):', e);
  }
  return readJson<Article[]>('articles.json');
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  try {
    const article = await client.fetch(ARTICLE_BY_SLUG_QUERY, { slug });
    if (article) return article;
  } catch (e) {
    console.error('Sanity fetch error (article):', e);
  }
  return (await getArticles()).find((a) => a.slug === slug);
}

export async function getContact(): Promise<Contact> {
  try {
    const contact = await client.fetch(CONTACT_QUERY);
    if (contact && contact.firmName) return contact;
  } catch (e) {
    console.error('Sanity fetch error (contact):', e);
  }
  return readJson<Contact>('contact.json');
}

export async function getHome(): Promise<HomeData> {
  try {
    const home = await client.fetch(HOME_QUERY);
    if (home && home.hero) return home;
  } catch (e) {
    console.error('Sanity fetch error (home):', e);
  }
  return readJson<HomeData>('home.json');
}
