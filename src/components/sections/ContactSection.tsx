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

/* ─── Contact Detailed V2 ─────────────────────────────────── */
.contact-detailed {
  background-color: var(--color-bg);
}

.contact-info-grid-v2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.contact-card-v2 {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2rem;
  background: #fff;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.contact-card-v2:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.contact-icon-box {
  flex-shrink: 0;
  width: 54px;
  height: 54px;
  background: var(--color-bg-muted);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.contact-card-content p {
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--color-text);
  margin: 0;
}

.contact-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.social-connect-card {
  background: var(--color-primary);
  color: #fff;
  border-radius: var(--radius-lg);
  padding: 3.5rem;
  margin-bottom: 4rem;
  position: relative;
  overflow: hidden;
}

.social-connect-card::after {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
}

.social-connect-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  position: relative;
  z-index: 2;
}

.social-connect-text h3 {
  color: #fff;
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.social-connect-text p {
  color: rgba(255,255,255,0.8);
  font-size: 1.125rem;
}

.social-connect-btns {
  display: flex;
  gap: 1rem;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: var(--radius);
  font-weight: 600;
  transition: all 0.2s ease;
  text-decoration: none;
  font-size: 1rem;
}

.social-btn.whatsapp {
  background: #25d366;
  color: #fff;
}

.social-btn.telegram {
  background: #0088cc;
  color: #fff;
}

.social-btn.max-chat {
  background: #fff;
  color: var(--color-primary);
}

.social-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.map-section-v2 {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 4px solid #fff;
}

/* Response: mobile fixes */
@media (max-width: 900px) {
  .social-connect-inner {
    flex-direction: column;
    text-align: center;
  }
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
