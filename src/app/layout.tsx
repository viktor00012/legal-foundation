import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Правовой Фонд — Профессиональная юридическая помощь',
    template: '%s | Правовой Фонд',
  },
  description: 'Профессиональные юридические услуги с более чем 20-летним опытом. Уголовная защита, гражданские споры, корпоративное право, арбитраж.',
  keywords: ['юридические услуги', 'адвокат', 'юрист', 'правовая помощь', 'Москва'],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
  },
};

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
      <body>
        {children}
      </body>
    </html>
  );
}
