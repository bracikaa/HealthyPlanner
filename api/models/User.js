/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');
var uuid = require('node-uuid');

module.exports = {

  attributes: {
    name: {
      type: "string",
      minLength: 4,
      maxLength: 30,
      require: true

    },

    surname: {
      type: "string",
      minLength: 5,
      MaxLength: 30,
      require: true
    },

    birthdate: {
      type: "long",
      require: true
    },

    email: {
      type: "string",
      email: true,
      requre: true,
      unique: true
    },

    height:  {
      type: "int",
      required: true,
      defaultsTo: 0
    },

    weight: {
      type: "int",
      required: true,
      defaultsTo: 0
    },

    password: {
      minLength: 8,
      type: "string",

    },
    toJSON: function(){
      var obj = this.toObject();
      delete obj.password;
      delete obj.confirmation;
      delete obj.encryptedPassword;
      delete obj._csrf;
      return obj;
    }
  }
};

