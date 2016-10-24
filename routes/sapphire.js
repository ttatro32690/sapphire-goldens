var express = require('express');
var router = express.Router();

var Sapphire = require('../models/sapphire');

router.get('/sapphire', function(req, res){
    Sapphire.findOne({}, function(err, sapphire){
        if(err){
            console.log(err);
        } else {
            res.send(sapphire);
        }
    })
});

module.exports = router;