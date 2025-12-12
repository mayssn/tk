import {defineType} from 'sanity'

export default defineType({
  name: 'marinePage',
  title: 'Marine Page',
  type: 'document',
  fields: [
    {name: 'heroImage', title: 'Hero Image', type: 'image'},
    {name: 'heroTitle_en', title: 'Hero Title (EN)', type: 'string'},
    {name: 'heroTitle_ar', title: 'Hero Title (AR)', type: 'string'},

    {name: 'bodyTitle_en', title: 'Body Title (EN)', type: 'string'},
    {name: 'bodyTitle_ar', title: 'Body Title (AR)', type: 'string'},
    {name: 'intro_en', title: 'Intro Text (EN)', type: 'text'},
    {name: 'intro_ar', title: 'Intro Text (AR)', type: 'text'},

    {
      name: 'productTypes',
      title: 'Product Types (Reefer Units, Generator Sets, etc.)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title_en', title: 'Title (EN)', type: 'string'},
            {name: 'title_ar', title: 'Title (AR)', type: 'string'},
            {name: 'description_en', title: 'Description (EN)', type: 'text'},
            {name: 'description_ar', title: 'Description (AR)', type: 'text'},
            {
              name: 'brochureLabel_en',
              title: 'Brochure Link Label (EN)',
              type: 'string',
            },
            {
              name: 'brochureLabel_ar',
              title: 'Brochure Link Label (AR)',
              type: 'string',
            },
            {
              name: 'brochureUrl',
              title: 'Brochure URL',
              type: 'url',
            },
          ],
        },
      ],
    },
  ],
})
