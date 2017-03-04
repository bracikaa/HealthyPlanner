/**
 * RecipeController
 *
 * @description :: Server-side logic for managing Recipes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var nested = require('nested-pop');

module.exports = {
	index: function (req, res) {
        Recipe.find().populateAll().then(function (recipes) {
            return nested(recipes, {
                ingredients: {
                    as: 'recipefood',
                    populate:[
                        'food'
                    ]
                }
            }).then(function (recipes) {
                return res.json(recipes);
            }).catch(function (err) {
                throw err;
            })
        }).catch(function (err) {
            throw err;
        })
    },

    create: function (req, res) {
        Recipe.create(req.body).populate('ingredients').exec(function (err, recipe) {
            if(err) {
                console.log(err);
                return res.send(err);
            }
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
        Recipe.find().populateAll().then(function (recipes) {
            return nested(recipes, {
                ingredients: {
                    as: 'recipefood',
                    populate:[
                        'food'
                    ]
                }
            }).then(function (recipes) {
                return res.json(recipes[0]);
            }).catch(function (err) {
                throw err;
            })
        }).catch(function (err) {
            throw err;
        })
    },

    getMeal: function (req, res) {
        Recipe.find().populateAll().then(function (recipes) {
            return nested(recipes, {
                ingredients: {
                    as: 'recipefood',
                    populate:[
                        'food'
                    ]
                }
            }).then(function (recipes){
                var filtered = [];
                recipes.forEach(function (recipe) {
                    if(recipe.type.indexOf(req.query.meal) != -1)
                        filtered.push(recipe);
                });
                return res.json(filtered);
            }).catch(function (err) {
                throw err;
            })
        }).catch(function (err) {
            res.send(err, 500);
        })
    }
};

