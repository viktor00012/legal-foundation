import type { Service } from '@/lib/cms';
import { getServiceIcon } from '@/lib/icons';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="card">
      <div className="card-icon">{getServiceIcon(service.icon)}</div>
      <div className="card-category">{service.category}</div>
      <div className="card-title">{service.title}</div>
      <p className="card-desc">{service.description}</p>
    </div>
  );
}
