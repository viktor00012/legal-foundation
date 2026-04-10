import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/layout/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactInfo {
  address?: string;
  phone?: string;
  email?: string;
  hours?: string;
}

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  info?: ContactInfo;
}

const ContactSection = ({
  title = "Get in Touch",
  subtitle = "Reach out to schedule a consultation or learn more about our services.",
  info = {
    address: "123 Legal Avenue, Suite 400, New York, NY 10001",
    phone: "+1 (800) 555-0199",
    email: "info@lexingtonlaw.com",
    hours: "Mon–Fri: 9:00 AM – 6:00 PM",
  },
}: ContactSectionProps) => (
  <SectionWrapper>
    <SectionHeading title={title} subtitle={subtitle} />
    <div className="grid gap-12 md:grid-cols-2">
      <div className="space-y-6">
        {info.address && (
          <div className="flex gap-4">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <div>
              <h4 className="font-medium">Address</h4>
              <p className="mt-1 text-sm text-muted-foreground">{info.address}</p>
            </div>
          </div>
        )}
        {info.phone && (
          <div className="flex gap-4">
            <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <div>
              <h4 className="font-medium">Phone</h4>
              <a href={`tel:${info.phone.replace(/\s/g, "")}`} className="mt-1 block text-sm text-muted-foreground hover:text-foreground">{info.phone}</a>
            </div>
          </div>
        )}
        {info.email && (
          <div className="flex gap-4">
            <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <div>
              <h4 className="font-medium">Email</h4>
              <a href={`mailto:${info.email}`} className="mt-1 block text-sm text-muted-foreground hover:text-foreground">{info.email}</a>
            </div>
          </div>
        )}
        {info.hours && (
          <div className="flex gap-4">
            <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <div>
              <h4 className="font-medium">Office Hours</h4>
              <p className="mt-1 text-sm text-muted-foreground">{info.hours}</p>
            </div>
          </div>
        )}
        {/* Map placeholder */}
        <div className="mt-6 aspect-video w-full rounded-lg bg-muted" aria-label="Map placeholder" />
      </div>
      <ContactForm />
    </div>
  </SectionWrapper>
);

export default ContactSection;
