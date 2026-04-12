import type { Contact } from '@/lib/cms';

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
            {contact.mapEmbedUrl ? (
              <iframe
                src={contact.mapEmbedUrl}
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: 'var(--radius-lg)', marginTop: '2rem', display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта офиса"
              />
            ) : (
              <iframe
                src={`https://yandex.ru/map-widget/v1/?text=${encodeURIComponent(contact.address)}&z=16`}
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: 'var(--radius-lg)', marginTop: '2rem', display: 'block' }}
                allowFullScreen
                loading="lazy"
                title="Карта офиса"
              />
            )}

          </div>

          {/* Messenger Buttons */}
          <div style={{ marginTop: '2rem' }}>
            <div className="contact-info-label" style={{ marginBottom: '1rem' }}>Написать нам</div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {contact.messengerUrl && (
                <a 
                  href={contact.messengerUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                  style={{ background: '#25d366', borderColor: '#25d366', color: '#fff' }}
                >
                  WhatsApp
                </a>
              )}
              {contact.telegramUrl && (
                <a 
                  href={contact.telegramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                  style={{ background: '#0088cc', borderColor: '#0088cc', color: '#fff' }}
                >
                  Telegram
                </a>
              )}
              {contact.maxUrl && (
                <a 
                  href={contact.maxUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                  style={{ background: '#1a365d', borderColor: '#1a365d', color: '#fff' }}
                >
                  MAX
                </a>
              )}
            </div>
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
