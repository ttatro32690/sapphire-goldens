var express = require('express');
var router = express.Router();

var Sapphire = require('../models/sapphire');

router.get('/sapphire', function(req, res){
    Sapphire.find({}, function(err, sapphire){
        if(err){
            console.log(err);
        } else {
            console.log(sapphire);
            res.send(sapphire);
        }
    });
});

module.exports = router;