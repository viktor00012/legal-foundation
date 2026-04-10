import { useParams, Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SectionWrapper from "@/components/layout/SectionWrapper";
import CTASection from "@/components/sections/CTASection";
import { ArrowLeft } from "lucide-react";

const lawyerData: Record<string, { name: string; specialization: string; bio: string; image: string; education: string; experience: string }> = {
  "victoria-hargrove": {
    name: "Victoria Hargrove",
    specialization: "Criminal Defense",
    bio: "Victoria has defended clients in over 500 criminal cases, earning a reputation for meticulous preparation and courtroom excellence.",
    image: "/placeholder.svg",
    education: "J.D., Harvard Law School",
    experience: "15+ years in criminal defense",
  },
  "james-whitfield": {
    name: "James Whitfield",
    specialization: "Civil Litigation",
    bio: "James specializes in complex civil disputes, bringing analytical rigor and strategic thinking to every case.",
    image: "/placeholder.svg",
    education: "J.D., Yale Law School",
    experience: "12+ years in civil litigation",
  },
  "elena-marchetti": {
    name: "Elena Marchetti",
    specialization: "Corporate & Arbitration",
    bio: "Elena advises multinational corporations on dispute resolution and has represented clients in international arbitration proceedings.",
    image: "/placeholder.svg",
    education: "LL.M., Columbia Law School",
    experience: "10+ years in corporate law",
  },
};

const LawyerDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const lawyer = slug ? lawyerData[slug] : null;

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
            <img src={lawyer.image} alt={lawyer.name} className="h-full w-full object-cover" />
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
