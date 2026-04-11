import { defineField, defineType } from 'sanity';

export const contactType = defineType({
  name: 'contact',
  title: 'Контакты и Настройки',
  type: 'document',
  fields: [
    defineField({ name: 'firmName', title: 'Название фирмы', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', title: 'Краткое описание (для футера)', type: 'text' }),
    defineField({ name: 'phone', title: 'Телефон (основной)', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'address', title: 'Адрес', type: 'string' }),
    defineField({ name: 'hours', title: 'Часы работы', type: 'string' }),
    defineField({ name: 'messengerUrl', title: 'Ссылка WhatsApp / Telegram (основная)', type: 'string' }),
    defineField({ name: 'mapEmbedUrl', title: 'Ссылка на карту (iframe src)', type: 'string' }),
    defineField({
      name: 'seo',
      title: 'SEO (глобальный)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Meta Title', type: 'string' },
        { name: 'description', title: 'Meta Description', type: 'text' },
      ]
    })
  ]
});
