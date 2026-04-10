import { useParams, Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SectionWrapper from "@/components/layout/SectionWrapper";
import CTASection from "@/components/sections/CTASection";
import { ArrowLeft } from "lucide-react";

const serviceData: Record<string, { title: string; description: string; details: string[] }> = {
  "criminal-law": {
    title: "Criminal Law",
    description: "Our criminal defense team provides experienced representation at every stage of criminal proceedings.",
    details: [
      "Pre-trial investigation and defense strategy",
      "Court representation and litigation",
      "Appeals and post-conviction relief",
      "White-collar crime defense",
    ],
  },
  "civil-law": {
    title: "Civil Law",
    description: "We handle complex civil matters with precision, from contract disputes to property litigation.",
    details: [
      "Contract disputes and enforcement",
      "Property and real estate litigation",
      "Insurance claims",
      "Personal injury representation",
    ],
  },
  arbitration: {
    title: "Arbitration",
    description: "Our arbitration practice resolves disputes efficiently outside the traditional court system.",
    details: [
      "Commercial arbitration",
      "International dispute resolution",
      "Mediation services",
      "Arbitration clause drafting",
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <PageLayout>
        <SectionWrapper>
          <p className="text-center text-muted-foreground">Service not found.</p>
          <Link to="/services" className="mt-4 block text-center text-primary hover:underline">← Back to Services</Link>
        </SectionWrapper>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <SectionWrapper>
        <Link to="/services" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All Services
        </Link>
        <h1 className="text-3xl font-semibold md:text-4xl">{service.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{service.description}</p>
        <ul className="mt-8 space-y-3">
          {service.details.map((d, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              {d}
            </li>
          ))}
        </ul>
      </SectionWrapper>
      <CTASection />
    </PageLayout>
  );
};

export default ServiceDetail;
