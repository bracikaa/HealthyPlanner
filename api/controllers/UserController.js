/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var bcrypt = require("bcrypt");

module.exports = {
    index: function (req, res) {
        User.find().populateAll().exec(function (err, data) {
            return res.json(data);
        });
    },

    create: function (req, res) {

        User.create(req.body).populateAll().exec(function userCreated(err, user) {
            if (err) {
                console.log(err);
                return res.send(err, 500);
            }

            return res.json(user);
        });
    },

    destroy: function (req, res) {
        User.destroy(req.query).populateAll().exec(function (err) {
            if (err) return res.send(err, 500);
            res.send("ok", 200);
        });
    },

    show: function (req, res) {
        User.find(req.query).populateAll().exec(function (err, user) {
            if (err) return res.send(err, 500);
            return res.json(user[0]);
        });
    },

    update: function (req, res) {
        User.update(req.query, req.body).populateAll().exec(function (err, user) {
            if (err) return res.send(err, 500);
            return res.json(user);
        });
    },

    login: function (req, res) {
        User.find({email: req.body.email}).populateAll().exec(function (err, user) {
            if(err) return res.send(err, 401);
            bcrypt.compare(req.body.password, user[0].password, function (err, ress) {
                if(err || !ress) return res.send(err, 401);
                return res.json(user[0]);
            })
        })
    }

};

