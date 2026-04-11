import { defineField, defineType } from 'sanity';

export const homeType = defineType({
  name: 'home',
  title: 'Главная страница',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Герой секция',
      type: 'object',
      fields: [
        defineField({ name: 'badge', title: 'Бейдж (над заголовком)', type: 'string' }),
        defineField({ name: 'titleStart', title: 'Заголовок (начало)', type: 'string' }),
        defineField({ name: 'titleHighlight', title: 'Заголовок (выделение золотом)', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Подзаголовок / описание', type: 'text' }),
        defineField({
          name: 'stats',
          title: 'Статистика (цифры)',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'num', title: 'Цифра (напр. «20+»)', type: 'string' },
              { name: 'lbl', title: 'Подпись (напр. «лет опыта»)', type: 'string' }
            ]
          }]
        }),
      ]
    }),
    defineField({
      name: 'advantages',
      title: 'Преимущества',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Заголовок раздела', type: 'string' }),
        defineField({ name: 'subheading', title: 'Подзаголовок раздела', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Пункты преимуществ',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'title', title: 'Заголовок', type: 'string' },
              { name: 'desc', title: 'Описание', type: 'text' },
              {
                name: 'icon',
                title: 'Иконка',
                type: 'string',
                options: {
                  list: [
                    { title: 'Награда', value: 'AwardIcon' },
                    { title: 'Команда', value: 'UsersIcon' },
                    { title: 'Время', value: 'ClockIcon' },
                    { title: 'Щит', value: 'ShieldIcon' },
                  ]
                }
              }
            ]
          }]
        })
      ]
    }),
    defineField({
      name: 'lawyers',
      title: 'Раздел «Наши адвокаты»',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Заголовок раздела', type: 'string' }),
        defineField({ name: 'subheading', title: 'Подзаголовок раздела', type: 'string' }),
      ]
    }),
    defineField({
      name: 'cta',
      title: 'CTA (Призыв к действию)',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Заголовок', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Подзаголовок', type: 'text' }),
        defineField({ name: 'ctaText', title: 'Текст кнопки', type: 'string' }),
        defineField({ name: 'ctaLink', title: 'Ссылка кнопки', type: 'string' }),
      ]
    }),
    defineField({
      name: 'contact',
      title: 'Раздел «Контакты» (заголовки)',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Заголовок раздела', type: 'string' }),
        defineField({ name: 'subheading', title: 'Подзаголовок раздела', type: 'string' }),
      ]
    }),
  ]
});
