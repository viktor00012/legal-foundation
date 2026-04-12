import { defineField, defineType } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  title: 'Услуги',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Название услуги', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: 'category', title: 'Категория (напр. «Уголовное право»)', type: 'string' }),
    defineField({
      name: 'icon',
      title: 'Иконка',
      type: 'string',
      options: {
        list: [
          { title: 'Щит (уголовная защита)', value: 'shield' },
          { title: 'Весы (гражданское право)', value: 'scale' },
          { title: 'Рукопожатие (корпоративное)', value: 'handshake' },
          { title: 'Портфель (бизнес-право)', value: 'briefcase' },
          { title: 'Машина (автоюрист)', value: 'truck' },
          { title: 'Здание (жилищные вопросы)', value: 'home' },
          { title: 'Сердце (семейные дела)', value: 'users' },
          { title: 'Банк (банкротство)', value: 'landmark' },
        ]
      }
    }),
    defineField({ name: 'description', title: 'Краткое описание (для карточки)', type: 'text', rows: 3 }),
    defineField({
      name: 'content',
      title: 'Полный контент страницы',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'details',
      title: 'Что входит в услугу (список)',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({ name: 'order', title: 'Порядок отображения (меньше = выше)', type: 'number' }),
  ],
  orderings: [
    {
      title: 'Порядок отображения',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ]
});
