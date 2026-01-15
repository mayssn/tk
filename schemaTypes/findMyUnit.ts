import {defineType} from 'sanity'

export default defineType({
  name: 'findMyUnitLabels',
  title: 'Find My Unit – Labels',
  type: 'document',
  fields: [
    // Section title
    {name: 'title_en', title: 'Section Title (EN)', type: 'string'},
    {name: 'title_ar', title: 'Section Title (AR)', type: 'string'},

    // Q1 — Need
    {name: 'q_need_en', title: 'Q1: What do you need? (EN)', type: 'string'},
    {name: 'q_need_ar', title: 'Q1: What do you need? (AR)', type: 'string'},

    {name: 'opt_cooling_en', title: 'Cooling (EN)', type: 'string'},
    {name: 'opt_cooling_ar', title: 'Cooling (AR)', type: 'string'},

    {name: 'opt_coolingHeating_en', title: 'Cooling + Heating (EN)', type: 'string'},
    {name: 'opt_coolingHeating_ar', title: 'Cooling + Heating (AR)', type: 'string'},

    // Q2 — Vehicle type
    {name: 'q_vehicle_en', title: 'Q2: Vehicle type (EN)', type: 'string'},
    {name: 'q_vehicle_ar', title: 'Q2: Vehicle type (AR)', type: 'string'},

    {name: 'opt_trailer_en', title: 'Trailer (EN)', type: 'string'},
    {name: 'opt_trailer_ar', title: 'Trailer (AR)', type: 'string'},

    {name: 'opt_truck_en', title: 'Truck / Van (EN)', type: 'string'},
    {name: 'opt_truck_ar', title: 'Truck / Van (AR)', type: 'string'},

    {name: 'opt_noVehicle_en', title: 'No vehicle yet (EN)', type: 'string'},
    {name: 'opt_noVehicle_ar', title: 'No vehicle yet (AR)', type: 'string'},

    // Q3 — Electric
    {name: 'q_electric_en', title: 'Q3: Is your vehicle electric? (EN)', type: 'string'},
    {name: 'q_electric_ar', title: 'Q3: Is your vehicle electric? (AR)', type: 'string'},

    {name: 'opt_yes_en', title: 'Yes (EN)', type: 'string'},
    {name: 'opt_yes_ar', title: 'Yes (AR)', type: 'string'},
    {name: 'opt_no_en', title: 'No (EN)', type: 'string'},
    {name: 'opt_no_ar', title: 'No (AR)', type: 'string'},

    // Q4 — Power source
    {name: 'q_powerSource_en', title: 'Q4: Power source question (EN)', type: 'string'},
    {name: 'q_powerSource_ar', title: 'Q4: Power source question (AR)', type: 'string'},

    // Self-powered
    {name: 'opt_selfPowered_en', title: 'Self-Powered label (EN)', type: 'string'},
    {name: 'opt_selfPowered_ar', title: 'Self-Powered label (AR)', type: 'string'},

    {
      name: 'opt_selfPowered_desc_en',
      title: 'Self-Powered description (EN)',
      type: 'string',
    },
    {
      name: 'opt_selfPowered_desc_ar',
      title: 'Self-Powered description (AR)',
      type: 'string',
    },

    // Vehicle-powered with standby
    {
      name: 'opt_vehiclePoweredWithStandby_en',
      title: 'Vehicle-Powered with Standby label (EN)',
      type: 'string',
    },
    {
      name: 'opt_vehiclePoweredWithStandby_ar',
      title: 'Vehicle-Powered with Standby label (AR)',
      type: 'string',
    },
    {
      name: 'opt_vehiclePoweredWithStandby_desc_en',
      title: 'Vehicle-Powered with Standby description (EN)',
      type: 'string',
    },
    {
      name: 'opt_vehiclePoweredWithStandby_desc_ar',
      title: 'Vehicle-Powered with Standby description (AR)',
      type: 'string',
    },

    // Vehicle-powered without standby
    {
      name: 'opt_vehiclePoweredNoStandby_en',
      title: 'Vehicle-Powered without Standby label (EN)',
      type: 'string',
    },
    {
      name: 'opt_vehiclePoweredNoStandby_ar',
      title: 'Vehicle-Powered without Standby label (AR)',
      type: 'string',
    },
    {
      name: 'opt_vehiclePoweredNoStandby_desc_en',
      title: 'Vehicle-Powered without Standby description (EN)',
      type: 'string',
    },
    {
      name: 'opt_vehiclePoweredNoStandby_desc_ar',
      title: 'Vehicle-Powered without Standby description (AR)',
      type: 'string',
    },

    // Result texts
    {name: 'contactText_en', title: 'No vehicle yet → Contact text (EN)', type: 'text'},
    {name: 'contactText_ar', title: 'No vehicle yet → Contact text (AR)', type: 'text'},

    {name: 'noResults_en', title: 'No results text (EN)', type: 'text'},
    {name: 'noResults_ar', title: 'No results text (AR)', type: 'text'},

    {
      name: 'powerDifferenceQuestion_en',
      title: 'Power: What’s the difference? (EN)',
      type: 'string',
    },
    {
      name: 'powerDifferenceQuestion_ar',
      title: 'Power: What’s the difference? (AR)',
      type: 'string',
    },
  ],
})
