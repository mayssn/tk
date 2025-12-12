import {defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {name: 'companyName_en', title: 'Company Name (EN)', type: 'string'},
    {name: 'companyName_ar', title: 'Company Name (AR)', type: 'string'},
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
    {
      name: 'trustedBy',
      title: 'Trusted By Logos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', title: 'Internal Name', type: 'string'},
            {name: 'logo', title: 'Logo Image', type: 'image'},
          ],
        },
      ],
    },
  ],
})
