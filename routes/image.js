var express = require('express');
var router = express.Router();
var middleware = require('../middleware/app');
var Image = require('../models/image');

// INDEX ROUTE
router.get('/', function(req, res){
    Image.find({}, function(err, image){
        if(err){
            console.log(err);
        } else {
            res.send(image);
        }
    });
});

// CREATE ROUTE
router.post('/', function(req, res){
    
});

// SHOW ROUTE
router.get('/:id', function(req, res){
    
});

// UPDATE ROUTE
router.put('/:id', function(req, res){
    
});

// DESTROY ROUTE
router.delete('/:id', function(req, res){
    
});


module.exports = router;