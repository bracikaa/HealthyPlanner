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
    fats:{
      type: 'double',
      required: true
    },

    proteins:{
      type: 'double',
      required: true
    },

    fibers: {
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
      required: true,
      collection: 'vitamins',
      via: 'foods'
    },

    minerals: {
      required: true,
      collection: 'minerals',
      via: 'foods'
    }
  }
};

