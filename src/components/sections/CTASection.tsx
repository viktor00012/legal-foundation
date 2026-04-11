import Link from 'next/link';
import { getHome } from '@/lib/cms';

interface CTASectionProps {
  data?: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
  };
}

export default function CTASection({ data }: CTASectionProps) {
  const ctaData = data || getHome().cta;

  return (
    <section className="cta-section">
      <div className="container">
        <h2>{ctaData.title}</h2>
        <p>{ctaData.subtitle}</p>
        <Link href={ctaData.ctaLink} className="btn btn--primary btn--lg">
          {ctaData.ctaText}
        </Link>
      </div>
    </section>
  );
}
