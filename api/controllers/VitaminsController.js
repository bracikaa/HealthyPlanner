/**
 * VitaminsController
 *
 * @description :: Server-side logic for managing Vitamins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res){
    Vitamin.find().exec(function(err, data){
      return res.json(data);
    });
  },

  create: function(req, res){
    Vitamin.create(req.body).exec(function vitaminCreated(err, vitamin){
      if(err){
        console.log(err);
        return res.send(err, 500);
      }

      return res.json(vitamin);
    });
  },

  destroy: function(req, res){
    Vitamin.destroy(req.query).exec(function(err){
      if(err){
        console.log(err);
      }
      else {
        console.log("Vitamin Destroyed");
      }
    });
  },

  show: function(reg, res){
    Vitamin.find(req.query).exec(function(err, vitamin){
      if(err) return res.send(err, 500);
      return res.json(vitamin);

    });
  },

  update: function(req, res){
    Vitamin.update(req.query, req.body).exec(function(err, vitamin){
      if(err) return res.send(err, 500);
      return res.json(vitamin);
    });
  }


};

