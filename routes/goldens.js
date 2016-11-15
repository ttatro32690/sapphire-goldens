var express = require('express');
var router = express.Router();
var middleware = require('../middleware/app');
var Goldens = require('../models/goldens');

router.get('/', function(req, res){
    Goldens.find({}, function(err, goldens){
       if(err){
           console.log(err);
       } else {
           res.send(goldens);
       }
    });
});

router.post('/', middleware.isLoggedIn, function(req, res){
    Goldens.create(req.body, function(err, golden){
      if(err){
          console.log(err);
      } else {
            res.send(golden);
      } 
    });
});

router.get('/:id', function(req, res){
    Goldens.findById(req.params.id, function(err, golden){
       if(err){
           console.log(err);
       } else {
           res.send(golden);
       }
    });
});

router.put('/:id', middleware.isLoggedIn, function(req, res){
    Goldens.findByIdAndUpdate(req.params.id, req.body, function(err, golden){
       if(err){
           console.log(err);
       } else {
           res.send(golden);
       }
    });
});

router.delete('/:id', middleware.isLoggedIn, function(req, res){
    Goldens.findByIdAndRemove(req.params.id, function(err){
       if(err){
           console.log(err);
       } else {
           res.send(true);
       } 
    });
});

module.exports = router;