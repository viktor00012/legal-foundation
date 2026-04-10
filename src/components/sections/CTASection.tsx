import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const CTASection = ({
  title = "Ready to Discuss Your Case?",
  subtitle = "Get a confidential consultation with one of our experienced attorneys today.",
  ctaText = "Contact Us Now",
  ctaLink = "/contacts",
}: CTASectionProps) => (
  <section className="bg-primary py-16 md:py-24">
    <div className="container text-center">
      <h2 className="text-3xl font-semibold text-primary-foreground md:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-xl text-primary-foreground/75 md:text-lg">{subtitle}</p>
      <Button variant="hero-outline" size="lg" className="mt-8" asChild>
        <Link to={ctaLink}>{ctaText}</Link>
      </Button>
    </div>
  </section>
);

export default CTASection;
