/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var bcrypt = require('bcrypt');
var uuid = require('node-uuid');


module.exports = {
  beforeCreate: function (values, next) {
    bcrypt.hash(values.password, SALT_WORK_FACTOR, function (err, hash) {
      values.password = hash;
    });
  },

  create: function (req, res, next) {
    var userObj = {
      name: req.param('name'),
      surname: req.param('surname'),
      birthdate: req.param('birthdate'),
      email: req.param('email'),
      password: req.param('password')
    }

    User.create(userObj, function userCreated(err, user) {
        if (err) {
          console.log(err);
          req.session.fash = {
            err: err
          }
        }

        User.publishCreate(user);

        return res.toJSON();
      });
  }
};

