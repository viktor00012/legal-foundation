import type { Metadata } from 'next';
import './globals.css';

import { getContact } from '@/lib/cms';

export async function generateMetadata(): Promise<Metadata> {
  const contact = await getContact();
  return {
    title: {
      default: `${contact.firmName} — Профессиональная юридическая помощь в Москве`,
      template: `%s | ${contact.firmName}`,
    },
    description: contact.description || 'Юридическая компания с многолетним практическим опытом. Уголовная защита, арбитраж, гражданские дела, банкротство.',
    keywords: ['юридические услуги', 'адвокат', 'юрист', contact.firmName, 'правовая помощь', 'Москва'],
    openGraph: {
      type: 'website',
      locale: 'ru_RU',
      siteName: contact.firmName,
    },
    icons: {
      icon: [
        { url: '/logo.png', type: 'image/x-icon' },
      ],
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              'name': 'Кремль-юрист',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': 'Богородский вал, д.6 корп.1 подъезд 4 офис 1',
                'addressLocality': 'Москва',
                'addressRegion': 'RU',
              },
              'telephone': '+7 (495) 228-59-69',
              'email': 'kremlinyuristy@yandex.ru',
              'url': 'https://urlavina.ru/',
              'founder': 'Вожников С.В.',
              'foundingDate': '2017',
              'priceRange': '$$',
            }),
          }}
        />
      </body>
    </html>
  );
}
