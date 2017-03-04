/**
 * DiagnoseController
 *
 * @description :: Server-side logic for managing Diagnoses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {
    Diagnose.find().exec(function (err, data) {
      return res.json(data);
    });
  },

  create: function (req, res) {

    Diagnose.create(req.body).exec(function diagnose(err, diagnose) {
      if (err) {
        console.log(err);
        return res.send(err, 500);
      }

      return res.json(diagnose);
    });
  },

  destroy: function(req, res){
    Diagnose.destroy(req.query).exec(function (err){
      if(err){
        console.log(err);
      }
      else
      {
        console.log("Diagnose Destroyed");
      }
    })
  },

  show: function(req, res){
    Diagnose.find(req.query).exec(function (err, diagnose) {
      if(err) return res.send(err, 500);
      return res.json(diagnose);
    });
  },

  update: function(req, res){
    Diagnose.update(req.query, req.body).exec(function (err, diagnose) {
      if(err) return res.send(err, 500);
      return res.json(diagnose);
    });
  }

};

