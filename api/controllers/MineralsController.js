/**
 * MineralsController
 *
 * @description :: Server-side logic for managing Minerals
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res){
    Mineral.find().exec(function(err, data){
      return res.json(data);
    });
  },

  create: function(req, res){
    Mineral.create(req.body).exec(function mineralCreated(err, mineral){
      if(err){
        console.log(err);
        return res.send(err, 500);
      }

      return res.json(mineral);
    });
  },

  destroy: function(req, res){
    Mineral.destroy(req.query).exec(function(err){
      if(err){
        console.log(err);
      }
      else {
        console.log("Mineral Destroyed");
      }
    });
  },

  show: function(reg, res){
    Mineral.find(req.query).exec(function(err, mineral){
      if(err) return res.send(err, 500);
      return res.json(mineral);

    });
  },

  update: function(req, res){
    Mineral.update(req.query, req.body).exec(function(err, mineral){
      if(err) return res.send(err, 500);
      return res.json(mineral);
    });
  }


};

