var express = require('express');
var router = express.Router();

var Image = require('../models/image');

// INDEX ROUTE
router.get('/image', function(req, res){
    Image.find({}, function(err, image){
        if(err){
            console.log(err);
        } else {
            res.send(image);
        }
    });
});

// CREATE ROUTE
router.post('/image', function(req, res){
    
});

// SHOW ROUTE
router.get('/image/:id', function(req, res){
    
});

// EDIT ROUTE
router.get('/image/:id/edit', function(req, res){
    
});

// UPDATE ROUTE
router.put('/image/:id', function(req, res){
    
});

// DESTROY ROUTE
router.delete('/image/:id', function(req, res){
    
});


module.exports = router;