var express = require('express');
var router = express.Router();

var Sapphire = require('../models/sapphire');

router.get('/', function(req, res){
    Sapphire.find({}, function(err, sapphire){
        if(err){
            console.log(err);
        } else {
            res.send(sapphire);
        }
    });
});

router.put('/:id', function(req, res){
    Sapphire.findByIdAndUpdate(req.params.id, req.body.sapphire, function(err, sapphire){
        if(err){
            res.send(err);
        } else {
            res.send(sapphire);
        }
    });
});

module.exports = router;