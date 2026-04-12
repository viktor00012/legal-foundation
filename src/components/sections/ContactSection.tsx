import type { Contact } from '@/lib/cms';

interface ContactSectionProps {
  contact: Contact;
  data?: {
    heading: string;
    subheading: string;
  };
}

export default function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section className="section contact-detailed">
      <div className="container container--narrow">
        <div className="contact-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">Где мы находимся</h2>
          <p className="section-subheading">Вы можете связаться с нами по телефону или посетить наш офис в Москве для очной консультации.</p>
        </div>

        <div className="contact-content">
          {/* Info Items */}
          <div className="contact-details-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            <div className="contact-item-v">
              <div className="contact-info-label">АДРЕС</div>
              <p>{contact.address}</p>
            </div>
            <div className="contact-item-v">
              <div className="contact-info-label">ТЕЛЕФОН</div>
              <p>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
              </p>
            </div>
            <div className="contact-item-v">
              <div className="contact-info-label">E-MAIL</div>
              <p>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
            </div>
            <div className="contact-item-v">
              <div className="contact-info-label">ЧАСЫ РАБОТЫ</div>
              <p>{contact.hours}</p>
            </div>
          </div>

          {/* Messenger Buttons */}
          <div className="contact-action-block" style={{ textAlign: 'center', padding: '3rem', background: 'var(--color-bg-muted)', borderRadius: 'var(--radius-lg)', marginBottom: '4rem' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Написать нам в мессенджеры</h3>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {contact.messengerUrl && (
                <a 
                  href={contact.messengerUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--lg"
                  style={{ background: '#25d366', borderColor: '#25d366' }}
                >
                  WhatsApp
                </a>
              )}
              {contact.telegramUrl && (
                <a 
                  href={contact.telegramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--lg"
                  style={{ background: '#0088cc', borderColor: '#0088cc' }}
                >
                  Telegram
                </a>
              )}
              {contact.maxUrl && (
                <a 
                  href={contact.maxUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--lg"
                  style={{ background: 'var(--color-primary)' }}
                >
                  Чат MAX
                </a>
              )}
            </div>
          </div>

          {/* Map - Full Width */}
          <div className="contact-map-wrapper">
            {contact.mapEmbedUrl ? (
              <iframe
                src={contact.mapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: 'var(--radius-lg)', display: 'block' }}
                allowFullScreen
                loading="lazy"
                title="Карта офиса"
              />
            ) : (
              <iframe
                src={`https://yandex.ru/map-widget/v1/?text=${encodeURIComponent(contact.address)}&z=16`}
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: 'var(--radius-lg)', display: 'block' }}
                allowFullScreen
                loading="lazy"
                title="Карта офиса"
              />
            )}
          </div>
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
