import { Link } from "react-router-dom";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/layout/SectionHeading";
import ServiceCard from "@/components/cards/ServiceCard";
import { Scale, Shield, Handshake } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
}

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: ServiceItem[];
}

const defaultServices: ServiceItem[] = [
  {
    id: "criminal",
    title: "Criminal Law",
    description: "Vigorous defense in criminal proceedings from investigation through trial and appeal.",
    icon: <Shield className="h-8 w-8" />,
    slug: "criminal-law",
  },
  {
    id: "civil",
    title: "Civil Law",
    description: "Comprehensive representation in civil disputes, contract negotiations, and litigation.",
    icon: <Scale className="h-8 w-8" />,
    slug: "civil-law",
  },
  {
    id: "arbitration",
    title: "Arbitration",
    description: "Effective dispute resolution through arbitration and mediation for businesses and individuals.",
    icon: <Handshake className="h-8 w-8" />,
    slug: "arbitration",
  },
];

const ServicesSection = ({
  title = "Our Practice Areas",
  subtitle = "We provide expert legal counsel across multiple areas of law.",
  services = defaultServices,
}: ServicesSectionProps) => (
  <SectionWrapper variant="muted">
    <SectionHeading title={title} subtitle={subtitle} />
    <div className="grid gap-6 md:grid-cols-3">
      {services.map((service) => (
        <Link key={service.id} to={`/services/${service.slug}`}>
          <ServiceCard {...service} />
        </Link>
      ))}
    </div>
  </SectionWrapper>
);

export default ServicesSection;
