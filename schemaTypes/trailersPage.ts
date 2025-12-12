import {defineType} from 'sanity'

export default defineType({
  name: 'trailersPage',
  title: 'Trailers Page',
  type: 'document',
  fields: [
    {name: 'heroImage', title: 'Hero Image', type: 'image'},
    {name: 'heroTitle_en', title: 'Hero Title (EN)', type: 'string'},
    {name: 'heroTitle_ar', title: 'Hero Title (AR)', type: 'string'},

    {name: 'bodyTitle_en', title: 'Body Title (EN)', type: 'string'},
    {name: 'bodyTitle_ar', title: 'Body Title (AR)', type: 'string'},
    {name: 'bodyText_en', title: 'Body Text (EN)', type: 'text'},
    {name: 'bodyText_ar', title: 'Body Text (AR)', type: 'text'},

    {
      name: 'note_en',
      title: 'Bottom Note (EN)',
      type: 'string',
      description: 'e.g. "Note: All trailer units are Self Powered..."',
    },
    {
      name: 'note_ar',
      title: 'Bottom Note (AR)',
      type: 'string',
    },
  ],
})
