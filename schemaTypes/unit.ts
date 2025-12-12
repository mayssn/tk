import {defineType} from 'sanity'

export default defineType({
  name: 'unit',
  title: 'Refrigeration Unit',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name (e.g. SLXi)', type: 'string'},
    {
      name: 'spOrVp',
      title: 'Power Tag',
      type: 'string',
      options: {list: ['SP', 'VP']},
    },

    // TEXT & DISPLAY
    {name: 'title_en', title: 'Title (EN)', type: 'string'},
    {name: 'title_ar', title: 'Title (AR)', type: 'string'},
    {name: 'summary_en', title: 'Summary (EN)', type: 'text'},
    {name: 'summary_ar', title: 'Summary (AR)', type: 'text'},
    {name: 'description_en', title: 'Description (EN)', type: 'text'},
    {name: 'description_ar', title: 'Description (AR)', type: 'text'},
    {name: 'image', title: 'Image', type: 'image'},
    {
      name: 'features_en',
      title: 'Bullet Points (EN)',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'features_ar',
      title: 'Bullet Points (AR)',
      type: 'array',
      of: [{type: 'string'}],
    },
    {name: 'brochureUrl', title: 'Brochure URL', type: 'url'},

    // FILTERING FOR "FIND MY UNIT"
    {
      name: 'vehicleType',
      title: 'Vehicle Type',
      type: 'string',
      options: {
        list: [
          {title: 'Trailer', value: 'trailer'},
          {title: 'Trucks & Vans', value: 'truckVan'},
        ],
      },
    },
    {
      name: 'supportsCooling',
      title: 'Supports Cooling',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'supportsHeating',
      title: 'Supports Heating (Cooling + Heating)',
      type: 'boolean',
    },
    {
      name: 'forElectricVehicle',
      title: 'For Electric Vehicle Only',
      type: 'boolean',
    },
    {
      name: 'hasStandby',
      title: 'Has Standby Option',
      type: 'boolean',
    },
  ],
})
