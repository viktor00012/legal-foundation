import type { Contact } from '@/lib/cms';

interface FloatingButtonsProps {
  contact: Contact;
}

export default function FloatingButtons({ contact }: FloatingButtonsProps) {
  return (
    <>
      {/* Desktop floating buttons */}
      <div className="floating-buttons">
        <a
          href={`tel:${contact.phone.replace(/\s/g, '')}`}
          className="float-btn float-btn--call"
          title="Позвонить"
          aria-label="Позвонить нам"
        >
          <PhoneIcon />
        </a>
        <a
          href={contact.messengerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="float-btn float-btn--msg"
          title="Написать в WhatsApp"
          aria-label="Написать в WhatsApp"
        >
          <MsgIcon />
        </a>
      </div>

      {/* Mobile sticky bar */}
      <div className="mobile-sticky-bar">
        <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>
          <PhoneIcon />
          Позвонить
        </a>
        <div className="divider" />
        <a href={contact.messengerUrl} target="_blank" rel="noopener noreferrer">
          <MsgIcon />
          Написать
        </a>
      </div>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.09a16 16 0 006.91 6.91l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MsgIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}
