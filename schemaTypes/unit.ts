import {defineType} from 'sanity'

export default defineType({
  name: 'unit',
  title: 'Refrigeration Unit',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name (e.g. SLXi)', type: 'string'},

    // POWER TYPE (FILTERABLE)
    {
      name: 'powerType',
      title: 'Power Type',
      type: 'string',
      options: {
        list: [
          {title: 'Self-Powered (SP)', value: 'SP'},
          {title: 'Vehicle-Powered (VP)', value: 'VP'},
        ],
      },
    },

    // TEXT & DISPLAY
    {name: 'summary_en', title: 'Summary (EN)', type: 'text'},
    {name: 'summary_ar', title: 'Summary (AR)', type: 'text'},
    {name: 'description_en', title: 'Description (EN)', type: 'text'},
    {name: 'description_ar', title: 'Description (AR)', type: 'text'},
    {name: 'image', title: 'Image', type: 'image'},
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
