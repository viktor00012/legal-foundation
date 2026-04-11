import type { Contact } from '@/lib/cms';
import ContactForm from '@/components/forms/ContactForm';

interface ContactSectionProps {
  contact: Contact;
  data?: {
    heading: string;
    subheading: string;
  };
}

export default function ContactSection({ contact, data }: ContactSectionProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <h2>{data?.heading || 'Свяжитесь с нами'}</h2>
          <p>{data?.subheading || 'Обратитесь к нам для записи на консультацию или получения дополнительной информации об услугах.'}</p>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><MapPinIcon /></div>
              <div>
                <div className="contact-info-label">Адрес</div>
                <div className="contact-info-value">{contact.address}</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><PhoneIcon /></div>
              <div>
                <div className="contact-info-label">Телефон</div>
                <div className="contact-info-value">
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
                </div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><MailIcon /></div>
              <div>
                <div className="contact-info-label">E-mail</div>
                <div className="contact-info-value">
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><ClockIcon /></div>
              <div>
                <div className="contact-info-label">Часы работы</div>
                <div className="contact-info-value">{contact.hours}</div>
              </div>
            </div>
            <div className="map-placeholder">
              📍 {contact.address}
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.09a16 16 0 006.91 6.91l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
