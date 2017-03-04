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
        Recipe.find(req.query).populate('ingredients').exec(function (err, recipe) {
            if(err) return res.send(err, 500);
            return res.json(recipe);
        })
    },

    update: function (req, res) {
        Recipe.update(req.query, req.body).populate('ingredients').exec(function (err, recipe) {
            if(err) return res.send(err, 500);
            return res.json(recipe);
        })
    },

    destroy: function (req, res) {
        Recipe.destroy(req.query).populate('ingredients').exec(function (err, data) {
            if(err) return res.send(err, 500);
            return res.send("ok");
        })
    },

    getRecipeOfDay: function (req, res) {
        Recipe.find().exec(function (err, data) {
            if(err) return res.send(err);
            return data[0];
        })
    },

    getMeal: function (req, res) {
        Recipe.find().exec(function (err, data) {
            if (err) return res.send(err);
            return data[req.query.meal];
        })
    }
};

