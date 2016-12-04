var express = require('express');
var router = express.Router();
var passport = require('passport');
var middleware = require('../middleware/app');
var User = require('../models/users');

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.send(req.body.username);
  });

router.get('/isLoggedIn', function(req, res){
    if(req.isAuthenticated()){
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
});

router.get('/logout', function(req, res){
    req.logout();
    res.send("Successfully Logged Out");
});

router.post('/register', middleware.isLoggedIn, function(req, res){
    var newUser = {
        username: req.body.username
    };
    
    console.log(req.body);
    
    User.register(newUser, req.body.password, function(err, registeredUser){
        if(err){
            res.sendStatus(401);
        } else {
            passport.authenticate('local')(req, res, function(){
                res.send(registeredUser.username);
            });
        }
    });
});

module.exports = router;