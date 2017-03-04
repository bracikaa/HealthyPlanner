/**
 * Food.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        name: {
            type: 'string',
            required: true
        },

        calories: {
            type: 'int',
            required: true
        },
        fats: {
            type: 'float',
            required: true
        },

        proteins: {
            type: 'float',
            required: true
        },

        fibers: {
            type: 'float',
            required: true
        },

        carbohydrates: {
            type: 'float',
            required: true
        },

        sugars: {
            type: 'float',
            required: true
        },

        vitamins: {
            required: true,
            collection: 'vitamin',
            via: 'foods'
        },

        minerals: {
            required: true,
            collection: 'mineral',
            via: 'foods'
        }
    }
};

