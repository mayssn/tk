import {defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // HERO
    {name: 'heroTitle_en', title: 'Hero Title (EN)', type: 'string'},
    {name: 'heroTitle_ar', title: 'Hero Title (AR)', type: 'string'},
    {name: 'heroSubtitle_en', title: 'Hero Subtitle (EN)', type: 'text'},
    {name: 'heroSubtitle_ar', title: 'Hero Subtitle (AR)', type: 'text'},
    {name: 'heroImage', title: 'Hero Image', type: 'image'},

    // INDUSTRIES WE SERVE
    {
      name: 'industries',
      title: 'Industries We Serve',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name_en', title: 'Name (EN)', type: 'string'},
            {name: 'name_ar', title: 'Name (AR)', type: 'string'},
            {name: 'icon', title: 'Icon', type: 'image'},
          ],
        },
      ],
    },

    // OUR PRODUCTS & SERVICES
    {
      name: 'services',
      title: 'Our Products & Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title_en', title: 'Title (EN)', type: 'string'},
            {name: 'title_ar', title: 'Title (AR)', type: 'string'},
            {name: 'body_en', title: 'Body Text (EN)', type: 'text'},
            {name: 'body_ar', title: 'Body Text (AR)', type: 'text'},
            {name: 'image', title: 'Image', type: 'image'},
            {name: 'linkLabel_en', title: 'Link Label (EN)', type: 'string'},
            {name: 'linkLabel_ar', title: 'Link Label (AR)', type: 'string'},
            {name: 'linkUrl', title: 'Link URL', type: 'string'},
          ],
        },
      ],
    },

    // FIND MY COOLING UNIT SECTION (text + image only)
    {
      name: 'findTitle_en',
      title: 'Find Section Title (EN)',
      type: 'string',
    },
    {
      name: 'findTitle_ar',
      title: 'Find Section Title (AR)',
      type: 'string',
    },
    {
      name: 'findIntro_en',
      title: 'Find Section Intro (EN)',
      type: 'text',
    },
    {
      name: 'findIntro_ar',
      title: 'Find Section Intro (AR)',
      type: 'text',
    },
    {
      name: 'findImage',
      title: 'Find Section Illustration',
      type: 'image',
    },

    // ABOUT NABER & ALLAYAN (simple for now)
    {name: 'aboutTitle_en', title: 'About Title (EN)', type: 'string'},
    {name: 'aboutTitle_ar', title: 'About Title (AR)', type: 'string'},
    {name: 'aboutBody_en', title: 'About Text (EN)', type: 'text'},
    {name: 'aboutBody_ar', title: 'About Text (AR)', type: 'text'},
  ],
})
