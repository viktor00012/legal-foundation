import PageLayout from "@/components/layout/PageLayout";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/layout/SectionHeading";
import LawyerCard from "@/components/cards/LawyerCard";
import { Link } from "react-router-dom";

const lawyers = [
  { id: "1", name: "Victoria Hargrove", specialization: "Criminal Defense", image: "/placeholder.svg", slug: "victoria-hargrove" },
  { id: "2", name: "James Whitfield", specialization: "Civil Litigation", image: "/placeholder.svg", slug: "james-whitfield" },
  { id: "3", name: "Elena Marchetti", specialization: "Corporate & Arbitration", image: "/placeholder.svg", slug: "elena-marchetti" },
];

const LawyersPage = () => (
  <PageLayout>
    <SectionWrapper>
      <SectionHeading title="Our Attorneys" subtitle="Experienced professionals committed to achieving the best outcomes for our clients." />
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {lawyers.map((l) => (
          <Link key={l.id} to={`/lawyers/${l.slug}`}>
            <LawyerCard name={l.name} specialization={l.specialization} image={l.image} />
          </Link>
        ))}
      </div>
    </SectionWrapper>
  </PageLayout>
);

export default LawyersPage;
