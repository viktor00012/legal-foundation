'use client';

import { useState } from 'react';

interface FormFields {
  name: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [fields, setFields] = useState<FormFields>({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const err: FormErrors = {};
    if (!fields.name.trim()) err.name = 'Введите ваше имя';
    if (!fields.phone.trim()) {
      err.phone = 'Введите номер телефона';
    } else if (!/^\d+$/.test(fields.phone.replace(/[\s\-\+()\+]/g, ''))) {
      err.phone = 'Телефон должен содержать только цифры';
    } else if (fields.phone.replace(/\D/g, '').length < 10) {
      err.phone = 'Номер телефона должен содержать не менее 10 цифр';
    }
    if (!fields.message.trim()) err.message = 'Введите сообщение';
    return err;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  if (submitted) {
    return (
      <div className="form-card" style={{ textAlign: 'center', padding: '3rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
        <h3>Заявка отправлена!</h3>
        <p style={{ marginTop: '0.75rem', color: 'var(--color-text-muted)' }}>
          Мы свяжемся с вами в ближайшее время.
        </p>
        <button
          onClick={() => { setSubmitted(false); setFields({ name: '', phone: '', message: '' }); }}
          className="btn btn--outline-dark"
          style={{ marginTop: '1.5rem' }}
        >
          Отправить ещё одно сообщение
        </button>
      </div>
    );
  }

  return (
    <div className="form-card">
      <h3>Оставьте заявку</h3>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Ваше имя *</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Иван Иванов"
            value={fields.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <div className="form-error">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Номер телефона *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+7 (999) 000-00-00"
            value={fields.phone}
            onChange={handleChange}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <div className="form-error">{errors.phone}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Сообщение *</label>
          <textarea
            id="message"
            name="message"
            placeholder="Кратко опишите вашу правовую ситуацию..."
            rows={5}
            value={fields.message}
            onChange={handleChange}
            className={errors.message ? 'error' : ''}
          />
          {errors.message && <div className="form-error">{errors.message}</div>}
        </div>

        <button type="submit" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
          Отправить заявку
        </button>

        <p className="form-privacy">
          Отправляя заявку, вы соглашаетесь с политикой конфиденциальности. Ваши данные защищены.
        </p>
      </form>
    </div>
  );
}
