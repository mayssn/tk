import {defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    // DUMMY TITLE FIELD (fixes the crash)
    {
      name: 'title',
      title: 'Title (internal)',
      type: 'string',
      initialValue: 'Site Settings',
    },

    {name: 'logo', title: 'Logo', type: 'image'},

    {
      name: 'navLinks',
      title: 'Header Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label_en', title: 'Label (EN)', type: 'string'},
            {name: 'label_ar', title: 'Label (AR)', type: 'string'},
            {name: 'href', title: 'Path (e.g. /trailers)', type: 'string'},
          ],
        },
      ],
    },
  ],
})
