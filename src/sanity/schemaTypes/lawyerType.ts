import { defineField, defineType } from 'sanity';

export const lawyerType = defineType({
  name: 'lawyer',
  title: 'Адвокаты',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Полное имя', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'photo',
      title: 'Фото',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alt текст', type: 'string' }
      ]
    }),
    defineField({ name: 'specialization', title: 'Специализация', type: 'string' }),
    defineField({ name: 'description', title: 'Описание / биография', type: 'text', rows: 5 }),
    defineField({ name: 'education', title: 'Образование', type: 'string' }),
    defineField({ name: 'experience', title: 'Опыт работы', type: 'string' }),
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
