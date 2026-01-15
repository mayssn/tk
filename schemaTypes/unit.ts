import {defineType} from 'sanity'

export default defineType({
  name: 'unit',
  title: 'Refrigeration Unit',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name (e.g. SLXi)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'vehicleType',
      title: 'Vehicle Type',
      type: 'string',
      options: {
        list: [
          {title: 'Trailer', value: 'trailer'},
          {title: 'Truck / Van', value: 'truck'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'coolingAndHeating',
      title: 'Cooling + Heating (has heat)',
      type: 'boolean',
      initialValue: false,
    },

    // TRUCKS ONLY: Energy
    {
      name: 'vehicleEnergy',
      title: 'Vehicle Energy',
      type: 'string',
      options: {
        list: [
          {title: 'Fuel', value: 'fuel'},
          {title: 'Electric', value: 'electric'},
        ],
        layout: 'radio',
      },
      initialValue: 'fuel',
      hidden: ({parent}) => parent?.vehicleType !== 'truck',
      validation: (Rule) =>
        Rule.custom((val, ctx) => {
          if (ctx.parent?.vehicleType !== 'truck') return true
          return val ? true : 'Vehicle energy is required for trucks'
        }),
    },

    // TRUCKS ONLY: Power type
    {
      name: 'powerType',
      title: 'Power Type',
      type: 'string',
      options: {
        list: [
          {title: 'Self-Powered (SP)', value: 'SP'},
          {title: 'Vehicle-Powered (VP)', value: 'VP'},
        ],
        layout: 'radio',
      },
      initialValue: 'SP',
      hidden: ({parent}) => parent?.vehicleType !== 'truck',
      validation: (Rule) =>
        Rule.custom((val, ctx) => {
          if (ctx.parent?.vehicleType !== 'truck') return true
          if (!val) return 'Power type is required for trucks'
          // Optional business rule: EV trucks should not be VP (since your flow doesn’t allow it)
          if (ctx.parent?.vehicleEnergy === 'electric' && val !== 'SP') {
            return 'Electric vehicles must be Self-Powered (SP)'
          }
          return true
        }),
    },

    // TRUCKS ONLY: Standby (only if VP)
    {
      name: 'hasStandby',
      title: 'Standby (only for VP trucks)',
      type: 'boolean',
      initialValue: false,
      hidden: ({parent}) =>
        parent?.vehicleType !== 'truck' ||
        parent?.powerType !== 'VP' ||
        parent?.vehicleEnergy === 'electric',
      validation: (Rule) =>
        Rule.custom((val, ctx) => {
          if (ctx.parent?.vehicleType !== 'truck') return true
          if (ctx.parent?.vehicleEnergy === 'electric') return true
          if (ctx.parent?.powerType !== 'VP') return true
          // If VP, must explicitly be true/false (Sanity booleans can be undefined)
          return typeof val === 'boolean' ? true : 'Standby must be set for VP units'
        }),
    },

    // DISPLAY
    {name: 'summary_en', title: 'Summary (EN)', type: 'text'},
    {name: 'summary_ar', title: 'Summary (AR)', type: 'text'},
    {name: 'description_en', title: 'Description (EN)', type: 'text'},
    {name: 'description_ar', title: 'Description (AR)', type: 'text'},
    {name: 'image', title: 'Image', type: 'image'},
    {name: 'brochureUrl', title: 'Brochure URL', type: 'url'},

    {name: 'sortOrder', title: 'Sort Order', type: 'number'},
  ],
})
