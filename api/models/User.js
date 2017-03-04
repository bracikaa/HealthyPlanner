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
            required: true

        },

        surname: {
            type: "string",
            minLength: 5,
            maxLength: 30,
            required: true
        },

        birthdate: {
            type: "int",
            required: true
        },

        email: {
            type: "string",
            email: true,
            required: true,
            unique: true
        },

        height: {
            type: "int",
            required: true,
            defaultsTo: 0
        },

        breakfast: {
            type: "string"
        },

        lunch: {
            type: "string"
        },

        dinner: {
            type: "string"
        },

        weight: {
            type: "int",
            required: true,
            defaultsTo: 0
        },

        allergies: {
            collection: "allergy",
            via: "users"
        },

        diagnoses: {
            collection: "diagnose",
            via: "users"
        },

        password: {
            minLength: 8,
            type: "string"
        }

    },

    beforeCreate: function (values, cb) {
        bcrypt.hash(values.password, 10, function (err, hash) {
            if (err) cb(err);
            values.password = hash;
            cb();
        });
    }
};

