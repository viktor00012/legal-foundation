import Image from 'next/image';
import type { Lawyer } from '@/lib/cms';

interface LawyerCardProps {
  lawyer: Lawyer;
  priority?: boolean;
}

export default function LawyerCard({ lawyer, priority = false }: LawyerCardProps) {
  return (
    <div className="lawyer-card">
      <div className="lawyer-card-photo">
        <Image
          src={lawyer.photo}
          alt={lawyer.name}
          width={400}
          height={533}
          priority={priority}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="lawyer-card-body">
        <div className="lawyer-card-name">{lawyer.name}</div>
        <div className="lawyer-card-spec">{lawyer.specialization}</div>
      </div>
    </div>
  );
}
