import Link from 'next/link';
import type { Service } from '@/lib/cms';
import ServiceCard from '@/components/cards/ServiceCard';

interface ServicesSectionProps {
  services: Service[];
  heading?: string;
  subheading?: string;
}

export default function ServicesSection({
  services,
  heading = 'Наши практики',
  subheading = 'Мы предоставляем квалифицированную юридическую помощь в различных областях права.',
}: ServicesSectionProps) {
  return (
    <section className="section section--muted">
      <div className="container">
        <div className="section-heading">
          <h2>{heading}</h2>
          <p>{subheading}</p>
        </div>
        <div className="grid-3">
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.slug}`} className="service-card">
              <ServiceCard service={service} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
