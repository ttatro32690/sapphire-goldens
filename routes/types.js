var express = require('express');
var router = express.Router();
var Types = require('../models/types');

router.get('/', function(req, res){
    Types.find({}, function(err, types){
        if(err){
            console.log(err);
        } else {
            res.send(types);
        }
    });
});

router.get('/:id', function(req, res){
    Types.findById(req.params.id, function(err, type){
        if(err){
            console.log(err);
        } else {
            res.send(type);
        }
    });
});

module.exports = router;