/**
 * AllergyController
 *
 * @description :: Server-side logic for managing Allergies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {
    Allergy.find().exec(function (err, data) {
      return res.json(data);
    });
  },

  create: function (req, res) {

    Allergy.create(req.body).exec(function allergyCreated(err, allergy) {
      if (err) {
        console.log(err);
        return res.send(err, 500);
      }

      return res.json(allergy);
    });
  },

  destroy: function(req, res){
    Allergy.destroy(req.query).exec(function (err){
      if(err){
        console.log(err);
      }
      else
      {
        console.log("Allergy Destroyed");
      }
    });
  },

  show: function(req, res){
    Allergy.find(req.query).exec(function (err, allergy) {
      if(err) return res.send(err, 500);
      return res.json(allergy);
    });
  },

  update: function(req, res){
    Allergy.update(req.query, req.body).exec(function (err, allergy) {
      if(err) return res.send(err, 500);
      return res.json(allergy);
    });
  }
};

