import { Link } from "react-router-dom";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/layout/SectionHeading";
import LawyerCard from "@/components/cards/LawyerCard";

export interface LawyerItem {
  id: string;
  name: string;
  specialization: string;
  image: string;
  slug: string;
}

interface LawyersSectionProps {
  title?: string;
  subtitle?: string;
  lawyers?: LawyerItem[];
}

const defaultLawyers: LawyerItem[] = [
  { id: "1", name: "Victoria Hargrove", specialization: "Criminal Defense", image: "/placeholder.svg", slug: "victoria-hargrove" },
  { id: "2", name: "James Whitfield", specialization: "Civil Litigation", image: "/placeholder.svg", slug: "james-whitfield" },
  { id: "3", name: "Elena Marchetti", specialization: "Corporate & Arbitration", image: "/placeholder.svg", slug: "elena-marchetti" },
];

const LawyersSection = ({
  title = "Our Attorneys",
  subtitle = "Meet the dedicated professionals behind every successful case.",
  lawyers = defaultLawyers,
}: LawyersSectionProps) => (
  <SectionWrapper>
    <SectionHeading title={title} subtitle={subtitle} />
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {lawyers.map((lawyer) => (
        <Link key={lawyer.id} to={`/lawyers/${lawyer.slug}`}>
          <LawyerCard {...lawyer} />
        </Link>
      ))}
    </div>
  </SectionWrapper>
);

export default LawyersSection;
