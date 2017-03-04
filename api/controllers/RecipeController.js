/**
 * RecipeController
 *
 * @description :: Server-side logic for managing Recipes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
        Recipe.find().exec(function (err, data) {
            if(err) return res.send(err, 500);
            return res.json(data);
        });
    },

    create: function (req, res) {
        Recipe.create(req.body).exec(function (err, recipe) {
            if(err) return res.send(err);
            return res.json(recipe);
        });
    },

    get: function (req, res) {
        Recipe.find(req.query).exec(function (err, recipe) {
            if(err) return res.send(err, 500);
            return res.json(recipe);
        })
    },

    update: function (req, res) {
        Recipe.update(req.query, req.body).exec(function (err, recipe) {
            if(err) return res.send(err, 500);
            return res.json(recipe);
        })
    },

    destroy: function (req, res) {
        Recipe.destroy(req.query).exec(function (err, data) {
            if(err) return res.send(err, 500);
            return res.send("ok");
        })
    }
};

