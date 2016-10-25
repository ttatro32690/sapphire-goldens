var express = require('express');
var router = express.Router();

var Image = require('../models/image');

router.get('/image', function(req, res){
    Image.find({}, function(err, image){
        if(err){
            console.log(err);
        } else {
            res.send(image);
        }
    });
});

module.exports = router;