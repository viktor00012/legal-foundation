import Link from 'next/link';
import type { Contact } from '@/lib/cms';

interface SiteFooterProps {
  contact: Contact;
}

const navLinks = [
  { label: 'Услуги', href: '/services' },
  { label: 'Адвокаты', href: '/lawyers' },
  { label: 'Статьи', href: '/articles' },
  { label: 'Контакты', href: '/contacts' },
];

export default function SiteFooter({ contact }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-logo">
              {contact.firmName.split(' ')[0]}{' '}
              <span>{contact.firmName.split(' ').slice(1).join(' ')}</span>
            </div>
            <p className="footer-desc">{contact.description}</p>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4>Навигация</h4>
            <nav>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Контакты</h4>
            <address>
              <span>{contact.address}</span>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <span>{contact.hours}</span>
            </address>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} {contact.firmName}. Все права защищены.
      </div>
    </footer>
  );
}
