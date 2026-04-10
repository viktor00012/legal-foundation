import { Link } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface SiteHeaderProps {
  firmName?: string;
  phone?: string;
  navigation?: NavItem[];
}

const defaultNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Lawyers", href: "/lawyers" },
  { label: "Articles", href: "/articles" },
  { label: "Contacts", href: "/contacts" },
];

const SiteHeader = ({
  firmName = "Lexington & Partners",
  phone = "+1 (800) 555-0199",
  navigation = defaultNavigation,
}: SiteHeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="text-xl font-semibold tracking-tight text-foreground">
          {firmName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Phone className="h-4 w-4" />
            {phone}
          </a>
          <Button asChild>
            <Link to="/contacts">Free Consultation</Link>
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t bg-background md:hidden">
          <nav className="container flex flex-col gap-4 py-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-muted-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Phone className="h-4 w-4" />
              {phone}
            </a>
            <Button asChild className="w-full">
              <Link to="/contacts">Free Consultation</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
