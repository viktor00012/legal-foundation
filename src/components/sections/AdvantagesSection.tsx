import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/layout/SectionHeading";
import { Award, Clock, Users, ShieldCheck } from "lucide-react";

interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface AdvantagesSectionProps {
  title?: string;
  subtitle?: string;
  items?: AdvantageItem[];
}

const defaultItems: AdvantageItem[] = [
  { id: "1", title: "20+ Years Experience", description: "Decades of proven results across complex legal matters.", icon: <Award className="h-6 w-6" /> },
  { id: "2", title: "Client-First Approach", description: "Personalized strategies tailored to your unique situation.", icon: <Users className="h-6 w-6" /> },
  { id: "3", title: "Responsive Service", description: "Available when you need us — prompt communication guaranteed.", icon: <Clock className="h-6 w-6" /> },
  { id: "4", title: "Confidential & Secure", description: "Your privacy and trust are our highest priorities.", icon: <ShieldCheck className="h-6 w-6" /> },
];

const AdvantagesSection = ({
  title = "Why Choose Us",
  subtitle = "What sets our firm apart in delivering outstanding legal outcomes.",
  items = defaultItems,
}: AdvantagesSectionProps) => (
  <SectionWrapper variant="muted">
    <SectionHeading title={title} subtitle={subtitle} />
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
      {items.map((item) => (
        <div key={item.id} className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
            {item.icon}
          </div>
          <h3 className="mb-2 font-semibold">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default AdvantagesSection;
