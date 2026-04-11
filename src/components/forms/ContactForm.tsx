'use client';

import { useState } from 'react';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

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
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }
    setErrors({});
    setSubmitError('');
    setSubmitting(true);

    if (!FORMSPREE_ID) {
      // Formspree not configured — fail visibly so the issue is not silently hidden
      setSubmitError('Форма не настроена. Укажите NEXT_PUBLIC_FORMSPREE_FORM_ID в .env.local');
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: fields.name,
          phone: fields.phone,
          message: fields.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        const msg = (data as { error?: string }).error || 'Ошибка отправки. Попробуйте позвонить нам напрямую.';
        setSubmitError(msg);
      }
    } catch {
      setSubmitError('Нет соединения. Проверьте интернет и попробуйте ещё раз.');
    } finally {
      setSubmitting(false);
    }
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
            disabled={submitting}
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
            disabled={submitting}
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
            disabled={submitting}
          />
          {errors.message && <div className="form-error">{errors.message}</div>}
        </div>

        {submitError && (
          <div className="form-error" style={{ marginBottom: '1rem' }}>
            {submitError}
          </div>
        )}

        <button
          type="submit"
          className="btn btn--primary"
          style={{ width: '100%', justifyContent: 'center', opacity: submitting ? 0.7 : 1 }}
          disabled={submitting}
        >
          {submitting ? 'Отправка...' : 'Отправить заявку'}
        </button>

        <p className="form-privacy">
          Отправляя заявку, вы соглашаетесь с политикой конфиденциальности. Ваши данные защищены.
        </p>
      </form>
    </div>
  );
}
