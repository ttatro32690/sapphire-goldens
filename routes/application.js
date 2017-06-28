var express = require('express');
var router = express.Router();
var middleware = require('../middleware/app');
var Application = require('../models/application');
var nodemailer = require('nodemailer');
var config = require('../config/config.js');

var transporter = nodemailer.createTransport(config.mailConfig);

router.get('/', function(req, res){
    Application.find({}, function(err, applications){
        if(err){
           console.log(err);
        } else {
           res.send(applications);
        }
    });
});

router.post('/', function(req, res){

    var applicantMailOptions = {
        from: config.mailOptions.from,
        to: req.body.email,
        subject: 'Sapphire Goldens Application',
        html: '<h3>Your Application for a New Puppy Has Been Stored!</h3><p>We will reach out to you soon to confirm that the information is correct.</p><br><p>If there are any additional questions please give us a call or email!</p><h4>Contact Us!</h4><p>508-946-4169</p><p>sapphiregoldens@comcast.net</p>'
    };
    
    var recipientMailOptions = {
        from: config.mailOptions.from,
        to: config.mailOptions.from,
        subject: 'New Sapphire Application',
        html: '<h3>A new application has been received!</h3>'
    };
    
    var promiseArray = [];
    
    promiseArray.push(Application.create(req.body));
    promiseArray.push(transporter.sendMail(applicantMailOptions));
    promiseArray.push(transporter.sendMail(recipientMailOptions));
    
    Promise.all(promiseArray)
    .then(response => {
        res.send(response[0]);
    });
    
});

router.get('/:id', function(req, res){
    Application.findById(req.params.id, function(err, application){
        if(err){
            console.log(err);
        } else {
            res.send(application);
        }
    });
});

router.put('/:id', middleware.isLoggedIn, function(req, res){
    Application.findByIdAndUpdate(req.params.id, req.body, function(err, application){
       if(err){
           console.log(err);
       } else {
           res.send(application);
       } 
    });
});

router.delete('/:id', middleware.isLoggedIn, function(req, res){
    Application.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
        } else {
            res.send(true);   
        }
    });
});


module.exports = router;