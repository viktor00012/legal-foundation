import { Link } from "react-router-dom";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/layout/SectionHeading";
import LawyerCard from "@/components/cards/LawyerCard";
import { lawyers } from "@/data/lawyers";

interface LawyersSectionProps {
  title?: string;
  subtitle?: string;
}

const LawyersSection = ({
  title = "Our Attorneys",
  subtitle = "Meet the dedicated professionals behind every successful case.",
}: LawyersSectionProps) => (
  <SectionWrapper>
    <SectionHeading title={title} subtitle={subtitle} />
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {lawyers.map((lawyer) => (
        <Link key={lawyer.id} to={`/lawyers/${lawyer.slug}`}>
          <LawyerCard name={lawyer.name} specialization={lawyer.specialization} image={lawyer.image} />
        </Link>
      ))}
    </div>
  </SectionWrapper>
);

export default LawyersSection;
