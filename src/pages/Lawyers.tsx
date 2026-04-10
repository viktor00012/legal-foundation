import PageLayout from "@/components/layout/PageLayout";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/layout/SectionHeading";
import LawyerCard from "@/components/cards/LawyerCard";
import { lawyers } from "@/data/lawyers";
import { Link } from "react-router-dom";

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
