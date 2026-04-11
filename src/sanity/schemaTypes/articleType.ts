import { defineField, defineType } from 'sanity';

export const articleType = defineType({
  name: 'article',
  title: 'Статьи',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Заголовок', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: 'date', title: 'Дата публикации', type: 'date' }),
    defineField({ name: 'excerpt', title: 'Краткий анонс', type: 'text', rows: 3 }),
    defineField({
      name: 'content',
      title: 'Контент статьи',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt текст', type: 'string' }
          ]
        }
      ]
    }),
  ]
});
