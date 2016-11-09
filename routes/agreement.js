var express = require('express');
var router = express.Router();

var Agreement = require('../models/agreement');

router.get('/', function(req, res){
    Agreement.find({}, function(err, agreements){
        if(err){
            console.log(err);
        } else {
            res.send(agreements);
        }
    });
});

router.post('/', function(req, res){
    Agreement.create(req.body, function(err, agreement){
       if(err){
           console.log(err);
       } else {
           res.send(agreement);
       }
    });
});

router.get('/:id', function(req, res){
    Agreement.findById(req.params.id, function(err, agreement){
        if(err){
            console.log(err);
        } else {
            res.send(agreement);
        }
    });
});

router.put('/:id', function(req, res){
    Agreement.findByIdAndUpdate(req.params.id, req.body, function(err, agreement){
       if(err){
           console.log(err);
       } else {
           res.send(agreement);
       }
    });
});

router.delete('/:id', function(req, res){
    Agreement.findByIdAndRemove(req.params.id, function(err){
       if(err){
           console.log(err);
       } else {
           res.send(true);
       }
    });
});

module.exports = router;