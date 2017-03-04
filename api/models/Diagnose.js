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
            collection: 'mineral',
            embed: true
        },

        needsMoreVitamins: {
            collection: 'vitamin',
            embed: true
        },

        tooMuchMinerals:{
            collection: 'mineral',
            embed: true
        },

        tooMuchVitamins:{
            collection: 'vitamin',
            embed: true
        }
    }
};

