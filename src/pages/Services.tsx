import PageLayout from "@/components/layout/PageLayout";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/layout/SectionHeading";
import ServiceCard from "@/components/cards/ServiceCard";
import { Scale, Shield, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { id: "criminal", title: "Criminal Law", description: "Vigorous defense in criminal proceedings from investigation through trial and appeal.", icon: <Shield className="h-8 w-8" />, slug: "criminal-law" },
  { id: "civil", title: "Civil Law", description: "Comprehensive representation in civil disputes, contract negotiations, and litigation.", icon: <Scale className="h-8 w-8" />, slug: "civil-law" },
  { id: "arbitration", title: "Arbitration", description: "Effective dispute resolution through arbitration and mediation for businesses and individuals.", icon: <Handshake className="h-8 w-8" />, slug: "arbitration" },
];

const ServicesPage = () => (
  <PageLayout>
    <SectionWrapper>
      <SectionHeading title="Our Practice Areas" subtitle="Explore the full range of legal services we offer." />
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <Link key={s.id} to={`/services/${s.slug}`}>
            <ServiceCard title={s.title} description={s.description} icon={s.icon} />
          </Link>
        ))}
      </div>
    </SectionWrapper>
  </PageLayout>
);

export default ServicesPage;
