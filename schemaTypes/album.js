import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'album',
  title: 'Álbuns',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Álbum',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
    }),
    defineField({
      name: 'cover',
      title: 'Capa do Álbum',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photos',
      title: 'Fotos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),
  ],
})
