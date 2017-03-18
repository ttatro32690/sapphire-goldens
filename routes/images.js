var express = require('express');
var router = express.Router();
var Images = require('../models/images');

router.get('/', function(req, res){
    Images.find({}, function(err, images){
        if(err){
            console.log(err);
        } else {
            res.send(images);
        }
    });
});

router.get('/:id', function(req, res){
    Images.findById(req.params.id, function(err, image){
        if(err){
            console.log(err);
        } else {
            res.send(image);
        }
    });
});

module.exports = router;