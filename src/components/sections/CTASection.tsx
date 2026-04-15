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
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
          {contact.maxUrl ? (
            <a href={contact.maxUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
              {ctaData.ctaText}
            </a>
          ) : (
            <Link href={ctaData.ctaLink} className="btn btn--primary btn--lg">
              {ctaData.ctaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
