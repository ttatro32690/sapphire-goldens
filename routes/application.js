var express = require('express');
var router = express.Router();

var Application = require('../models/application');

router.get('/', function(req, res){
    Application.find({}, function(err, applications){
        if(err){
           console.log(err);
        } else {
           res.send(applications);
        }
    });
});

router.post('/', function(req, res){
    Application.create(req.body, function(err, application){
        if(err){
           console.log(err);
        } else {
           res.send(application);
        }
    });
});

router.get('/:id', function(req, res){
    Application.findById(req.params.id, function(err, application){
        if(err){
            console.log(err);
        } else {
            res.send(application);
        }
    });
});

router.put('/:id', function(req, res){
    Application.findByIdAndUpdate(req.params.id, req.body, function(err, application){
       if(err){
           console.log(err);
       } else {
           res.send(application);
       } 
    });
});

router.delete('/:id', function(req, res){
    Application.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
        } else {
            res.send(true);   
        }
    });
});


module.exports = router;