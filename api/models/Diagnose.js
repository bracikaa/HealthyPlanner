/**
 * Diagnose.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        name: {
            type: "string"
        },

        users: {
            collection: 'user',
            via: 'diagnoses'
        },

        needsMoreMinerals: {
            collection: 'mineral'
        },

        needsMoreVitamins: {
            collection: 'vitamin'
        },

        tooMuchMinerals:{
            collection: 'mineral'
        },

        tooMuchVitamins:{
            collection: 'vitamin'
        },

        fats:{
            type: "int"
        },

        fibers:{
            type: 'int'
        },

        carbohydrates:{
            type: 'int'
        },

        sugars:{
            type: 'int'
        }
    }
};

