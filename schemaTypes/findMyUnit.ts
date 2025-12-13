import { defineType } from 'sanity'

export default defineType({
    name: 'findMyUnitLabels',
    title: 'Find My Unit – Labels',
    type: 'document',
    fields: [
        // Question 1
        { name: 'q_need_en', title: 'Q1: What do you need? (EN)', type: 'string' },
        { name: 'q_need_ar', title: 'Q1: What do you need? (AR)', type: 'string' },

        { name: 'opt_cooling_en', title: 'Cooling (EN)', type: 'string' },
        { name: 'opt_cooling_ar', title: 'Cooling (AR)', type: 'string' },

        { name: 'opt_coolingHeating_en', title: 'Cooling + Heating (EN)', type: 'string' },
        { name: 'opt_coolingHeating_ar', title: 'Cooling + Heating (AR)', type: 'string' },

        // Question 2
        { name: 'q_vehicle_en', title: 'Q2: Vehicle type (EN)', type: 'string' },
        { name: 'q_vehicle_ar', title: 'Q2: Vehicle type (AR)', type: 'string' },

        { name: 'opt_trailer_en', title: 'Trailer (EN)', type: 'string' },
        { name: 'opt_trailer_ar', title: 'Trailer (AR)', type: 'string' },

        { name: 'opt_truck_en', title: 'Truck / Van (EN)', type: 'string' },
        { name: 'opt_truck_ar', title: 'Truck / Van (AR)', type: 'string' },

        { name: 'opt_noVehicle_en', title: 'No vehicle yet (EN)', type: 'string' },
        { name: 'opt_noVehicle_ar', title: 'No vehicle yet (AR)', type: 'string' },

        // Result text
        { name: 'contactText_en', title: 'Contact Us Result Text (EN)', type: 'text' },
        { name: 'contactText_ar', title: 'Contact Us Result Text (AR)', type: 'text' },
    ],
})
