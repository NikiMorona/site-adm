import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'news',
  title: 'Notícias',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Notícia',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumo',
      type: 'text',
      description: 'Breve descrição da notícia',
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'image',
      title: 'Imagem da Notícia',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'link',
      title: 'Link da Notícia Completa',
      type: 'url',
      description: 'Link externo para a notícia completa',
    }),
  ],
})