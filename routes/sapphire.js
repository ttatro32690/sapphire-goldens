var express = require('express');
var router = express.Router();
var middleware = require('../middleware/app');
var Sapphire = require('../models/sapphire');

router.get('/', function(req, res){
    Sapphire.findOne({}, function(err, sapphire){
        if(err){
            console.log(err);
        } else {
            res.send(sapphire);
        }
    });
});

router.get('/:id', function(req, res){
    Sapphire.findById(req.params.id, function(err, sapphire){
        if(err){
            console.log(err);
        } else {
            res.send(sapphire);
        }
    });
});

router.put('/:id', middleware.isLoggedIn, function(req, res){
    Sapphire.findByIdAndUpdate(req.params.id, req.body, function(err, sapphire){
        if(err){
            res.send(err);
        } else {
            res.send(sapphire);
        }
    });
});

module.exports = router;