import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Eventos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Evento',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Imagem de Capa',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'link',
      title: 'Link para Inscrição',
      type: 'url',
    }),
  ],
})
