import Link from 'next/link';
import type { Contact } from '@/lib/cms';

interface HeroSectionProps {
  contact: Contact;
  data: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    stats: { num: string; lbl: string }[];
  };
}

export default function HeroSection({ contact, data }: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">{data.badge}</div>

            <h1>
              {data.titleStart}
              <span>{data.titleHighlight}</span>
            </h1>

            <p className="hero-subtitle">
              {data.subtitle}
            </p>

            <div className="hero-actions">
              <Link href="/contacts" className="btn btn--primary btn--lg">
                Записаться на консультацию
              </Link>
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="btn btn--outline btn--lg"
              >
                <PhoneIcon />
                {contact.phone}
              </a>
            </div>
          </div>

          <div className="hero-stats">
            {data.stats.map((stat) => (
              <div key={stat.lbl}>
                <div className="hero-stat-num">{stat.num}</div>
                <div className="hero-stat-lbl">{stat.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.09a16 16 0 006.91 6.91l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
