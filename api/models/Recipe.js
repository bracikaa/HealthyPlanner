/**
 * Recipe.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        ingredients: {
            collection: 'recipefood',
            embed: true
        },

        name: {
            type: 'string',
            require: true
        },

        imgUri: {
            type: 'string',
            require: true
        }
    }
};

