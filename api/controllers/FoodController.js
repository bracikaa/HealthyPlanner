/**
 * FoodController
 *
 * @description :: Server-side logic for managing Foods
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res){
    Food.find().populate('vitamins').populate('minerals').exec(function(err, data){
      return res.json(data);
    });
  },

  create: function(req, res){
    Food.create(req.body).exec(function foodCreated(err, food){
      if(err){
        console.log(err);
        return res.send(err, 500);
      }

      return res.json(food);
    });
  },

  destroy: function(req, res){
    Food.destroy(req.query).exec(function(err){
      if(err){
        console.log(err);
      }
      else {
        console.log("Food Destroyed");
      }
    });
  },

  show: function(reg, res){
    Food.find(req.query).exec(function(err, food){
      if(err) return res.send(err, 500);
      return res.json(food);

    });
  },

  update: function(req, res){
    Food.update(req.query, req.body).exec(function(err, food){
      if(err) return res.send(err, 500);
      return res.json(food);
    });
  }



};

