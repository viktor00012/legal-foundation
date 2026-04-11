import Link from 'next/link';
import type { Lawyer } from '@/lib/cms';
import LawyerCard from '@/components/cards/LawyerCard';

interface LawyersSectionProps {
  lawyers: Lawyer[];
  data: {
    heading: string;
    subheading: string;
  };
}

export default function LawyersSection({ lawyers, data }: LawyersSectionProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <h2>{data.heading}</h2>
          <p>{data.subheading}</p>
        </div>
        <div className="grid-3">
          {lawyers.map((lawyer, index) => (
            <Link key={lawyer.id} href={`/lawyers/${lawyer.slug}`}>
              <LawyerCard lawyer={lawyer} priority={index === 0} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
