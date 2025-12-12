import {defineType} from 'sanity'

export default defineType({
  name: 'contactSettings',
  title: 'Contact Settings',
  type: 'document',
  fields: [
    // Titles
    {name: 'footerTitle_en', title: 'Footer Title (EN)', type: 'string'},
    {name: 'footerTitle_ar', title: 'Footer Title (AR)', type: 'string'},
    {name: 'pageTitle_en', title: 'Contact Page Title (EN)', type: 'string'},
    {name: 'pageTitle_ar', title: 'Contact Page Title (AR)', type: 'string'},
    {name: 'pageIntro_en', title: 'Contact Page Intro (EN)', type: 'text'},
    {name: 'pageIntro_ar', title: 'Contact Page Intro (AR)', type: 'text'},

    // Email
    {name: 'emailLabel_en', title: 'Email Label (EN)', type: 'string'},
    {name: 'emailLabel_ar', title: 'Email Label (AR)', type: 'string'},
    {name: 'emailAddress', title: 'Email Address', type: 'string'},

    // Phone
    {name: 'phoneLabel_en', title: 'Phone Label (EN)', type: 'string'},
    {name: 'phoneLabel_ar', title: 'Phone Label (AR)', type: 'string'},
    {name: 'phoneNumber', title: 'Phone Number', type: 'string'},

    // WhatsApp
    {name: 'whatsappLabel_en', title: 'WhatsApp Label (EN)', type: 'string'},
    {name: 'whatsappLabel_ar', title: 'WhatsApp Label (AR)', type: 'string'},
    {name: 'whatsappNumber', title: 'WhatsApp Number', type: 'string'},

    // Address
    {name: 'addressLabel_en', title: 'Address Label (EN)', type: 'string'},
    {name: 'addressLabel_ar', title: 'Address Label (AR)', type: 'string'},
    {name: 'address_en', title: 'Address Text (EN)', type: 'string'},
    {name: 'address_ar', title: 'Address Text (AR)', type: 'string'},
    {name: 'mapLinkLabel_en', title: 'Map Link Label (EN)', type: 'string'},
    {name: 'mapLinkLabel_ar', title: 'Map Link Label (AR)', type: 'string'},
    {name: 'mapUrl', title: 'Google Maps URL', type: 'url'},
  ],
})
