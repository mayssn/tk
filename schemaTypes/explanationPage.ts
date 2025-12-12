import {defineType} from 'sanity'

export default defineType({
  name: 'explanationPage',
  title: 'Types of Units Explained',
  type: 'document',
  fields: [
    // Page Title EN/AR
    {name: 'pageTitle_en', title: 'Page Title (EN)', type: 'string'},
    {name: 'pageTitle_ar', title: 'Page Title (AR)', type: 'string'},

    // LEFT COLUMN
    {
      name: 'leftTitle_en',
      title: 'Left Section Title (EN)',
      type: 'string',
    },
    {
      name: 'leftTitle_ar',
      title: 'Left Section Title (AR)',
      type: 'string',
    },
    {
      name: 'leftBody_en',
      title: 'Left Section Body (EN)',
      type: 'blockContent',
    },
    {
      name: 'leftBody_ar',
      title: 'Left Section Body (AR)',
      type: 'blockContent',
    },

    // RIGHT COLUMN
    {
      name: 'rightTitle_en',
      title: 'Right Section Title (EN)',
      type: 'string',
    },
    {
      name: 'rightTitle_ar',
      title: 'Right Section Title (AR)',
      type: 'string',
    },
    {
      name: 'rightBody_en',
      title: 'Right Section Body (EN)',
      type: 'blockContent',
    },
    {
      name: 'rightBody_ar',
      title: 'Right Section Body (AR)',
      type: 'blockContent',
    },
  ],
})
