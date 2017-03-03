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

    fat:{
      type: 'double',
      required: true
    },

    protein:{
      type: 'double',
      required: true
    },

    fiber: {
      type: 'double',
      required: true
    },

    carbohydrates: {
      type: 'double',
      required: true
    },

    sugars: {
      type: 'double',
      required: true
    },

    vitamins: {
      type: 'json',
      required: true
    },

    mineral: {
      type: 'json',
      required: true
    }



  }
};

