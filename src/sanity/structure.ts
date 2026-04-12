import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Контент')
    .items([
      S.listItem()
        .title('Главная страница')
        .id('home')
        .child(
          S.document()
            .schemaType('home')
            .documentId('home')
        ),
      S.listItem()
        .title('Контакты и Настройки')
        .id('contact')
        .child(
          S.document()
            .schemaType('contact')
            .documentId('contact')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !['home', 'contact'].includes(listItem.getId() || '')
      ),
    ]);
