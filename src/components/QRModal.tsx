'use client';

import { useState } from 'react';
import Image from 'next/image';

interface QRModalProps {
  triggerLabel?: string;
  qrSrc: string;
  isPrimary?: boolean;
}

export default function QRModal({ triggerLabel = 'Получить консультацию', qrSrc, isPrimary = false }: QRModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className={isPrimary ? "btn btn--primary btn--lg" : "social-btn max-chat"}
        style={{ cursor: 'pointer', border: 'none', appearance: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
      >
        {!isPrimary && (
          <Image 
            src="/max.svg" 
            alt="" 
            width={20} 
            height={20} 
            style={{ objectFit: 'contain' }}
          />
        )}
        {triggerLabel}
      </button>


      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content modal-content--large" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsOpen(false)}>&times;</button>
            <div className="modal-body">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '1rem' }}>
                <h3 className="modal-title" style={{ margin: 0 }}>Свяжитесь с нами в MAX</h3>
                <Image 
                  src="/max.svg" 
                  alt="MAX Logo" 
                  width={30} 
                  height={30} 
                  style={{ objectFit: 'contain' }}
                />
              </div>
              
              <p className="modal-subtitle">
                Отсканируйте этот QR-код камерой вашего смартфона, чтобы мгновенно начать чат.
              </p>
              
              <div className="qr-wrapper-v2">
                <Image 
                  src={qrSrc} 
                  alt="QR-код для связи" 
                  width={350} 
                  height={350} 
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }}
                  priority
                />
              </div>

              <div className="modal-footer-info">
                <span>Мгновенный ответ в рабочее время</span>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="btn btn--outline btn--sm" 
                  style={{ padding: '0.75rem 2.5rem', minWidth: '150px' }}
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
