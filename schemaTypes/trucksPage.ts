import {defineType} from 'sanity'

export default defineType({
  name: 'trucksPage',
  title: 'Trucks & Vans Page',
  type: 'document',
  fields: [
    {name: 'heroImage', title: 'Hero Image', type: 'image'},
    {name: 'heroTitle_en', title: 'Hero Title (EN)', type: 'string'},
    {name: 'heroTitle_ar', title: 'Hero Title (AR)', type: 'string'},

    {name: 'bodyTitle_en', title: 'Body Title (EN)', type: 'string'},
    {name: 'bodyTitle_ar', title: 'Body Title (AR)', type: 'string'},
    {name: 'bodyText_en', title: 'Body Text (EN)', type: 'text'},
    {name: 'bodyText_ar', title: 'Body Text (AR)', type: 'text'},

    // ⭐ Explore Units Title for Trucks & Vans
    {
      name: 'exploreTruckVanTitle_en',
      title: 'Explore Trucks & Vans (EN)',
      type: 'string',
    },
    {
      name: 'exploreTruckVanTitle_ar',
      title: 'Explore Trucks & Vans (AR)',
      type: 'string',
    },

    {
      name: 'note_en',
      title: 'Bottom Note (EN, optional)',
      type: 'string',
    },
    {
      name: 'note_ar',
      title: 'Bottom Note (AR, optional)',
      type: 'string',
    },
  ],
})
