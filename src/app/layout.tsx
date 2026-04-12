import type { Metadata } from 'next';
export const revalidate = 300;

import './globals.css';
import { Analytics } from "@vercel/analytics/next"


import { getContact } from '@/lib/cms';

export async function generateMetadata(): Promise<Metadata> {
  const contact = await getContact();
  
  const seoTitle = contact.seo?.title || `${contact.firmName} — Профессиональная юридическая помощь в Москве`;
  const seoDescription = contact.seo?.description || contact.description || 'Юридическая компания с многолетним практическим опытом.';

  return {
    title: {
      default: seoTitle,
      template: `%s | ${contact.firmName}`,
    },
    description: seoDescription,
    keywords: ['юридические услуги', 'адвокат', 'юрист', contact.firmName, 'правовая помощь', 'Москва'],
    openGraph: {
      type: 'website',
      locale: 'ru_RU',
      siteName: contact.firmName,
      title: seoTitle,
      description: seoDescription,
    },
    icons: {
      icon: [
        { url: '/logo.png', type: 'image/png' },
      ],
    },

  };
}

import CookieConsent from '@/components/layout/CookieConsent';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const contact = await getContact();
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    'name': contact.firmName,
    'description': contact.description,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': contact.address,
      'addressLocality': 'Москва', // Consider making this dynamic if needed, but usually it's Moscow
      'addressRegion': 'RU',
    },
    'telephone': contact.phone,
    'email': contact.email,
    'url': process.env.NEXT_PUBLIC_BASE_URL || 'https://urlavina.ru/',
    'priceRange': '$$',
  };

  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
             __html: JSON.stringify(jsonLd),
          }}
        />
        <CookieConsent />
        <Analytics />

      </body>
    </html>
  );
}


