import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import LawyersSection from "@/components/sections/LawyersSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => (
  <PageLayout>
    <HeroSection />
    <ServicesSection />
    <AdvantagesSection />
    <LawyersSection />
    <CTASection />
    <ContactSection />
  </PageLayout>
);

export default Index;
