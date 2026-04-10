import { Link } from "react-router-dom";

interface FooterLink {
  label: string;
  href: string;
}

interface SiteFooterProps {
  firmName?: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  links?: FooterLink[];
}

const defaultLinks: FooterLink[] = [
  { label: "Services", href: "/services" },
  { label: "Lawyers", href: "/lawyers" },
  { label: "Articles", href: "/articles" },
  { label: "Contacts", href: "/contacts" },
];

const SiteFooter = ({
  firmName = "Lexington & Partners",
  description = "Professional legal services with over 20 years of experience protecting your rights and interests.",
  address = "123 Legal Avenue, Suite 400, New York, NY 10001",
  phone = "+1 (800) 555-0199",
  email = "info@lexingtonlaw.com",
  links = defaultLinks,
}: SiteFooterProps) => (
  <footer className="border-t bg-primary text-primary-foreground">
    <div className="container grid gap-8 py-12 md:grid-cols-3 md:py-16">
      <div>
        <h3 className="mb-4 text-lg font-semibold text-primary-foreground">{firmName}</h3>
        <p className="text-sm text-primary-foreground/70">{description}</p>
      </div>
      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">Navigation</h4>
        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <Link key={link.href} to={link.href} className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">Contact</h4>
        <address className="flex flex-col gap-2 not-italic text-sm text-primary-foreground/70">
          <span>{address}</span>
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-primary-foreground">{phone}</a>
          <a href={`mailto:${email}`} className="hover:text-primary-foreground">{email}</a>
        </address>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container py-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} {firmName}. All rights reserved.
      </div>
    </div>
  </footer>
);

export default SiteFooter;
