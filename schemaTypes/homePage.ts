import {defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // HERO
    {name: 'heroTitle_en', title: 'Hero Title (EN)', type: 'string'},
    {name: 'heroTitle_ar', title: 'Hero Title (AR)', type: 'string'},
    {name: 'heroImage', title: 'Hero Image', type: 'image'},

    // INDUSTRIES WE SERVE — SECTION TITLES ADDED
    {
      name: 'industriesTitle_en',
      title: 'Industries Section Title (EN)',
      type: 'string',
    },
    {
      name: 'industriesTitle_ar',
      title: 'Industries Section Title (AR)',
      type: 'string',
    },

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

    // OUR PRODUCTS & SERVICES — SECTION TITLES
    {
      name: 'servicesTitle_en',
      title: 'Services Section Title (EN)',
      type: 'string',
    },
    {
      name: 'servicesTitle_ar',
      title: 'Services Section Title (AR)',
      type: 'string',
    },

    // GENERAL IMAGE (optional)
    {
      name: 'servicesGeneralImage',
      title: 'General Image (default before selecting a service)',
      type: 'image',
    },

    // SERVICES ARRAY
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

            // FIRST LINK (existing)
            {name: 'linkLabel_en', title: 'Link Label (EN)', type: 'string'},
            {name: 'linkLabel_ar', title: 'Link Label (AR)', type: 'string'},
            {name: 'linkUrl', title: 'Link URL', type: 'string'},

            // SECOND LINK (NEW + OPTIONAL)
            {name: 'linkLabel2_en', title: 'Second Link Label (EN)', type: 'string'},
            {name: 'linkLabel2_ar', title: 'Second Link Label (AR)', type: 'string'},
            {name: 'linkUrl2', title: 'Second Link URL', type: 'string'},
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
      name: 'findImage',
      title: 'Find Section Illustration',
      type: 'image',
    },

    // ABOUT NABER & ALLAYAN
    {name: 'aboutTitle_en', title: 'About Title (EN)', type: 'string'},
    {name: 'aboutTitle_ar', title: 'About Title (AR)', type: 'string'},
    {
      name: 'aboutBody_en',
      title: 'About Text (EN)',
      type: 'blockContent',
    },
    {
      name: 'aboutBody_ar',
      title: 'About Text (AR)',
      type: 'blockContent',
    },

    //Partners
    {
      name: 'partnersTitle_en',
      title: 'Our Partners Section Title (EN)',
      type: 'string',
    },
    {
      name: 'partnersTitle_ar',
      title: 'Our Partners Section Title (AR)',
      type: 'string',
    },
    {
      name: 'partners',
      title: 'Our Partners',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', title: 'Partner Name (internal only)', type: 'string'},
            {name: 'logo', title: 'Partner Logo', type: 'image'},
          ],
        },
      ],
    },
  ],
})
