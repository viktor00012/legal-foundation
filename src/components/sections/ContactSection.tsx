import type { Contact } from '@/lib/cms';

interface ContactSectionProps {
  contact: Contact;
}

export default function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section className="section contact-detailed">
      <div className="container container--narrow">
        <div className="contact-header" style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="section-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Контакты</span>
          <h2 className="section-title">Свяжитесь с нами</h2>
          <p className="section-subheading" style={{ maxWidth: '600px', marginInline: 'auto' }}>
            Наши эксперты готовы предоставить профессиональную юридическую помощь. Выберите удобный способ связи или посетите наш офис.
          </p>
        </div>

        <div className="contact-content-v2">
          {/* Info Cards Grid */}
          <div className="contact-info-grid-v2">
            <div className="contact-card-v2">
              <div className="contact-icon-box"><MapPinIcon /></div>
              <div className="contact-card-content">
                <span className="contact-label">Адрес офиса</span>
                <p>{contact.address}</p>
              </div>
            </div>

            <div className="contact-card-v2">
              <div className="contact-icon-box"><PhoneIconDetail /></div>
              <div className="contact-card-content">
                <span className="contact-label">Телефон</span>
                <p>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover-link">{contact.phone}</a>
                </p>
              </div>
            </div>

            <div className="contact-card-v2">
              <div className="contact-icon-box"><MailIcon /></div>
              <div className="contact-card-content">
                <span className="contact-label">E-mail</span>
                <p>
                  <a href={`mailto:${contact.email}`} className="hover-link">{contact.email}</a>
                </p>
              </div>
            </div>

            <div className="contact-card-v2">
              <div className="contact-icon-box"><ClockIcon /></div>
              <div className="contact-card-content">
                <span className="contact-label">График работы</span>
                <p>{contact.hours}</p>
              </div>
            </div>
          </div>

          {/* Social Connect Block */}
          <div className="social-connect-card">
            <div className="social-connect-inner">
              <div className="social-connect-text">
                <h3>Задайте вопрос в мессенджере</h3>
                <p>Мы ответим в течение 15 минут в рабочее время</p>
              </div>
              <div className="social-connect-btns">
                {contact.messengerUrl && (
                  <a href={contact.messengerUrl} target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
                    <WhatsAppIcon />
                    WhatsApp
                  </a>
                )}
                {contact.telegramUrl && (
                  <a href={contact.telegramUrl} target="_blank" rel="noopener noreferrer" className="social-btn telegram">
                    <TelegramIcon />
                    Telegram
                  </a>
                )}
                {contact.maxUrl && (
                  <a href={contact.maxUrl} target="_blank" rel="noopener noreferrer" className="social-btn max-chat">
                    Чат MAX
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-section-v2">
            <div className="map-frame">
              {contact.mapEmbedUrl ? (
                <iframe
                  src={contact.mapEmbedUrl}
                  width="100%"
                  height="500"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  title="Офис на карте"
                />
              ) : (
                <iframe
                  src={`https://yandex.ru/map-widget/v1/?text=${encodeURIComponent(contact.address)}&z=16`}
                  width="100%"
                  height="500"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  title="Офис на карте"
                />
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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIconDetail() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.09a16 16 0 006.91 6.91l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.062c-3.414 0-6.141 2.734-6.141 6.141 0 1.094.281 2.156.828 3.094l-.875 3.203 3.266-.859c.906.484 1.922.75 2.922.75 3.414 0 6.141-2.734 6.141-6.141 0-3.407-2.727-6.141-6.141-6.141zm3.609 8.656c-.156.438-.906.844-1.25.891-.344.047-.781.078-1.219-.062-.266-.078-.594-.187-1-.359-1.734-.734-2.859-2.5-2.938-2.609-.078-.109-.641-.859-.641-1.641 0-.781.406-1.172.547-1.328.141-.156.313-.187.406-.187h.313c.094 0 .219.016.313.234.109.266.375.922.406 1.016.031.094.047.203-.016.313-.063.125-.125.203-.234.328-.109.125-.219.234-.313.344-.109.125-.234.25-.094.484.141.234.625 1.031 1.344 1.672.922.812 1.703 1.062 1.938 1.187.234.125.375.109.516-.047.141-.156.594-.687.75-.922.156-.234.313-.187.516-.109.203.078 1.281.609 1.5.719.219.109.359.172.406.25.047.078.047.453-.109.891z"/>
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.35-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.35-.49.96-.75 3.78-1.65 6.31-2.73 7.57-3.24 3.61-1.45 4.36-1.7 4.85-1.7.11 0 .35.03.5.15.13.12.18.28.19.45.02.07.02.18 0 .24z"/>
    </svg>
  );
}
