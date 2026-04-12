import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import { getContact } from '@/lib/cms';

export const metadata = {
  title: 'Политика конфиденциальности',
  description: 'Политика конфиденциальности компании.',
};

export default async function PrivacyPolicyPage() {
  const contact = await getContact();

  return (
    <PageLayout>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Главная</Link>
            <span>›</span>
            <span>Политика конфиденциальности</span>
          </nav>
          <h1>Политика конфиденциальности</h1>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div className="article-body">
            <p>Настоящая Политика конфиденциальности описывает, как <strong>{contact.firmName}</strong> («мы», «нас» или «наш») собирает, использует и защищает вашу информацию при использовании нашего веб-сайта.</p>
            
            <h3>1. Сбор информации</h3>
            <p>Мы собираем информацию, которую вы предоставляете непосредственно нам, например, когда вы заполняете форму обратной связи или записываетесь на консультацию.</p>
            
            <h3>2. Использование информации</h3>
            <p>Мы используем собранную информацию для:</p>
            <ul>
              <li>Предоставления и поддержки наших услуг;</li>
              <li>Связи с вами по вашему запросу;</li>
              <li>Улучшения работы нашего сайта.</li>
            </ul>
            
            <h3>3. Защита информации</h3>
            <p>Мы принимаем соответствующие меры безопасности для защиты вашей личной информации от несанкционированного доступа или изменения.</p>
            
            <h3>4. Файлы cookie</h3>
            <p>Мы используем файлы cookie для улучшения пользовательского опыта. Вы можете настроить свой браузер так, чтобы он отказывался от всех файлов cookie или указывал, когда файлы cookie отправляются.</p>
            
            <h3>5. Контакты</h3>
            <p>Если у вас есть вопросы по поводу этой Политики конфиденциальности, пожалуйста, свяжитесь с нами по телефону: {contact.phone} или по адресу: {contact.address}.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
