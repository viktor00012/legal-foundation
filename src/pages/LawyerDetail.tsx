import { useParams, Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SectionWrapper from "@/components/layout/SectionWrapper";
import CTASection from "@/components/sections/CTASection";
import { getLawyerBySlug } from "@/data/lawyers";
import { ArrowLeft } from "lucide-react";

const LawyerDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const lawyer = slug ? getLawyerBySlug(slug) : null;

  if (!lawyer) {
    return (
      <PageLayout>
        <SectionWrapper>
          <p className="text-center text-muted-foreground">Attorney not found.</p>
          <Link to="/lawyers" className="mt-4 block text-center text-primary hover:underline">← Back to Attorneys</Link>
        </SectionWrapper>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <SectionWrapper>
        <Link to="/lawyers" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All Attorneys
        </Link>
        <div className="grid gap-8 md:grid-cols-[300px_1fr]">
          <div className="aspect-[3/4] overflow-hidden rounded-lg bg-muted">
            <img src={lawyer.image} alt={lawyer.name} className="h-full w-full object-cover" loading="lazy" width={640} height={854} />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">{lawyer.name}</h1>
            <p className="mt-1 text-lg text-primary">{lawyer.specialization}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{lawyer.bio}</p>
            <div className="mt-6 space-y-2 text-sm">
              <p><span className="font-medium text-foreground">Education:</span> <span className="text-muted-foreground">{lawyer.education}</span></p>
              <p><span className="font-medium text-foreground">Experience:</span> <span className="text-muted-foreground">{lawyer.experience}</span></p>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <CTASection />
    </PageLayout>
  );
};

export default LawyerDetail;
