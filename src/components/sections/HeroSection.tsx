import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  phone?: string;
}

const HeroSection = ({
  title = "Protecting Your Rights with Confidence",
  subtitle = "Experienced attorneys dedicated to delivering exceptional legal representation in criminal, civil, and corporate matters.",
  ctaText = "Schedule Consultation",
  ctaLink = "/contacts",
  phone = "+1 (800) 555-0199",
}: HeroSectionProps) => (
  <section className="relative bg-primary py-24 md:py-36">
    <div className="container relative z-10">
      <div className="max-w-2xl animate-fade-in">
        <h1 className="text-4xl font-semibold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-primary-foreground/75 md:text-xl">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button variant="hero-outline" size="lg" asChild>
            <Link to={ctaLink}>{ctaText}</Link>
          </Button>
          <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <a href={`tel:${phone.replace(/\s/g, "")}`}>
              <Phone className="mr-2 h-4 w-4" />
              {phone}
            </a>
          </Button>
        </div>
      </div>
    </div>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--hero-overlay)/0.4),transparent_70%)]" />
  </section>
);

export default HeroSection;
