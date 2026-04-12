'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="container cookie-banner__inner">
        <div className="cookie-banner__text">
          Этот сайт использует файлы cookie. Мы используем их для улучшения работы сайта и вашего взаимодействия с ним. 
          Продолжая просмотр, вы соглашаетесь с нашей <Link href="/privacy-policy">политикой конфиденциальности</Link>.
        </div>
        <button onClick={acceptCookies} className="btn btn--primary btn--sm">
          Принять
        </button>
      </div>
    </div>
  );
}
