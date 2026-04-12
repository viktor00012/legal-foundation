import Link from 'next/link';
import { getHome, getContact } from '@/lib/cms';


interface CTASectionProps {
  data?: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
  };
}

export default async function CTASection({ data }: CTASectionProps) {
  const ctaData = data || (await getHome()).cta;
  const contact = await getContact();

  return (
    <section className="cta-section">
      <div className="container">
        <h2>{ctaData.title}</h2>
        <p>{ctaData.subtitle}</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
          <Link href={ctaData.ctaLink} className="btn btn--primary btn--lg">
            {ctaData.ctaText}
          </Link>
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="btn btn--outline btn--lg">
             Позвонить
          </a>
          {contact.messengerUrl && (
            <a href={contact.messengerUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--lg">
               WhatsApp
            </a>
          )}
          {contact.telegramUrl && (
            <a href={contact.telegramUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--lg">
               Telegram
            </a>
          )}
          {contact.maxUrl && (
            <a href={contact.maxUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--lg">
               MAX
            </a>
          )}
        </div>

      </div>
    </section>
  );
}

