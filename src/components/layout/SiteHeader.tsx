'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Contact } from '@/lib/cms';

interface SiteHeaderProps {
  contact: Contact;
}

const navItems = [
  { label: 'Главная', href: '/' },
  { label: 'Услуги', href: '/services' },
  { label: 'Адвокаты', href: '/lawyers' },
  { label: 'Статьи', href: '/articles' },
  { label: 'Контакты', href: '/contacts' },
];

export default function SiteHeader({ contact }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <Link href="/" className="header-logo" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '1.75rem' }}>
            <img 
              src="/logo.png" 
              alt={contact.firmName} 
              width={64} 
              height={64} 
              style={{ objectFit: 'contain' }}
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
            <span>
              {contact.firmName.includes('-') && !contact.firmName.includes(' ') ? (
                <>
                  {contact.firmName.split('-')[0]}
                  <span style={{ color: 'var(--color-primary)' }}>-{contact.firmName.split('-')[1]}</span>
                </>
              ) : (
                <>
                  {contact.firmName.split(' ')[0]}{' '}
                  <span style={{ color: 'var(--color-primary)' }}>{contact.firmName.split(' ').slice(1).join(' ')}</span>
                </>
              )}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="header-nav" aria-label="Основная навигация">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="header-right">
            <a
              href={`tel:${contact.phone.replace(/\s/g, '')}`}
              className="header-phone"
              aria-label="Позвонить нам"
            >
              <PhoneIcon />
              {contact.phone}
            </a>
            <Link href="/contacts" className="btn btn--primary">
              Бесплатная консультация
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Открыть меню"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="container">
            <nav className="mobile-menu-inner">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="header-phone">
                <PhoneIcon />
                {contact.phone}
              </a>
              <Link href="/contacts" className="btn btn--primary" onClick={() => setMenuOpen(false)}>
                Бесплатная консультация
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.09a16 16 0 006.91 6.91l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
