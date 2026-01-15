import {defineType} from 'sanity'

export default defineType({
  name: 'contactSettings',
  title: 'Contact Settings',
  type: 'document',
  fields: [
    {
      name: 'contactPageImage',
      title: 'Contact Page Image',
      type: 'image',
    }, // Titles
    {name: 'ContactFooterTitle_en', title: 'Contact Footer Title (EN)', type: 'string'},
    {name: 'ContactFooterTitle_ar', title: 'Contact Footer Title (AR)', type: 'string'},
    {name: 'ConactPageTitle_en', title: 'Contact Page Title (EN)', type: 'string'},
    {name: 'ContactPageTitle_ar', title: 'Contact Page Title (AR)', type: 'string'},
    {name: 'ContactPageIntro_en', title: 'Contact Page Intro (EN)', type: 'text'},
    {name: 'ContactPageIntro_ar', title: 'Contact Page Intro (AR)', type: 'text'},

    // Email
    {name: 'emailAddress', title: 'Email Address', type: 'string'},

    // Phone
    {name: 'phoneNumber_en', title: 'Phone Number (EN)', type: 'string'},
    {name: 'phoneNumber_ar', title: 'Phone Number (AR)', type: 'string'},

    // WhatsApp
    {name: 'whatsappLabel_en', title: 'WhatsApp Label (EN)', type: 'string'},
    {name: 'whatsappLabel_ar', title: 'WhatsApp Label (AR)', type: 'string'},
    {name: 'whatsappNumber', title: 'WhatsApp Number', type: 'string'},

    // Address
    {name: 'address_en', title: 'Address Text (EN)', type: 'string'},
    {name: 'address_ar', title: 'Address Text (AR)', type: 'string'},
    {name: 'mapLinkLabel_en', title: 'Map Link Label (EN)', type: 'string'},
    {name: 'mapLinkLabel_ar', title: 'Map Link Label (AR)', type: 'string'},
    {name: 'mapUrl', title: 'Google Maps URL', type: 'url'},
  ],
})
