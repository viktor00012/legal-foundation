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
    defineField({ name: 'messengerUrl', title: 'Справочный WhatsApp (ссылка)', type: 'string' }),
    defineField({ name: 'telegramUrl', title: 'Telegram (ссылка)', type: 'string' }),
    defineField({ name: 'maxUrl', title: 'Чат MAX (ссылка)', type: 'string' }),
    defineField({ name: 'mapEmbedUrl', title: 'Ссылка на Яндекс.Карты (iframe src)', type: 'string' }),

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
