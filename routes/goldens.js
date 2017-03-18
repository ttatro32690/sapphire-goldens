var express = require('express');
var router = express.Router();
var middleware = require('../middleware/app');
var Goldens = require('../models/goldens');
var Images = require('../models/images');
var Types = require('../models/types');

router.get('/', function(req, res){

    Goldens.find(req.query, function(err, goldens){
      if(err){
          console.log(err);
      } else {
          res.send(goldens);
      }
    });

});

router.post('/', middleware.isLoggedIn, function(req, res){
    // 1. Promise to create shell of a new golden
    // 2. Promise of golden after saving all image besides Images/Type
    // 3. Promise of found or new type
    // 4. Promise of created Images
    
    var golden = new Goldens();
    var goldenPromise = Goldens.create(golden);
    var typePromise = Types.findOne({type: req.body.type}).exec();
    
    var existingOrNewTypePromise = typePromise.then(function(foundType){
        if(foundType){
            return Types.findById(foundType._id);
        } else {
            return Types.create({type: req.body.type});
        }
    });
    
    var updatedGoldenFields = function(createdGolden){
        createdGolden.name = req.body.name;
        createdGolden.description = req.body.description;
        createdGolden.birthdate = req.body.birthdate;
        createdGolden.k9data = req.body.k9data;
        createdGolden.pedigree = req.body.pedigree;
        createdGolden.clearances = req.body.clearances;        
    };
    
    var updateGoldenImages = function(newFiles){ 
        
        var imageArray = newFiles.map(function(file){
            return Images.create({rawImageData: file})
            .then(function(image){
                return image._id;
            });
        });
        
        return Promise.all(imageArray);
        
    };
    
    //This code works!!!    
    goldenPromise.then(function(createdGolden){
        existingOrNewTypePromise
        .then(function(foundType){
            updatedGoldenFields(createdGolden);
            createdGolden.type = foundType._id;
            return createdGolden.save();
        })
        .then(function(updatedGolden){
            if(req.body.newFiles && req.body.newFiles.length > 0){
                var imagePromise = updateGoldenImages(req.body.newFiles);

                return imagePromise.then(function(images){
                    updatedGolden.imageFiles = images;
                    return updatedGolden.save();
                });
                
            } else {
                res.send(updatedGolden);
            }
        })
        .then(function(updatedGolden){
            res.send(updatedGolden);
        });
    })
    .catch(function(err){
        console.log(err);
    });
    
    
});

router.get('/:id', function(req, res){
    Goldens.findById(req.params.id, function(err, golden){
       if(err){
           console.log(err);
       } else {
           res.send(golden);
       }
    });
});

router.put('/:id', middleware.isLoggedIn, function(req, res){

    var goldenPromise = Goldens.findById(req.body._id).exec();
    var typePromise = Types.findOne({type: req.body.type}).exec();
    
    var existingOrNewTypePromise = typePromise.then(function(foundType){
        if(foundType){
            return Types.findById(foundType._id).exec();
        } else {
            return Types.create({type: req.body.type});
        }
    });
    
    var updatedGoldenFields = function(){
        var editedGolden = new Goldens();
        
        editedGolden._id = req.body._id;
        editedGolden.name = req.body.name;
        editedGolden.description = req.body.description;
        editedGolden.birthdate = req.body.birthdate;
        editedGolden.k9data = req.body.k9data;
        editedGolden.pedigree = req.body.pedigree;
        editedGolden.clearances = req.body.clearances;
        editedGolden.dateCreated = req.body.dateCreated;
        editedGolden.imageFiles = req.body.imageFiles;
        
        return editedGolden;
    };
    
    var updateGoldenImages = function(newFiles){ 
        
        var imageArray = newFiles.map(function(file){
            return Images.create({rawImageData: file})
            .then(function(image){
                return image._id;
            });
        });
        
        return Promise.all(imageArray);
        
    };
    
    //Get old golden
    //Update new golden
    //Check Type
    //Delete Old Type
    //Delete Old Images
    //Add New Images
    //Return Golden
    
    goldenPromise.then(function(oldGolden){
        existingOrNewTypePromise.then(function(foundType){
            var golden = updatedGoldenFields(golden);
            golden.type = foundType;

            return Goldens.findByIdAndUpdate(golden._id, golden).exec();
        })
        .then(function(updatedGolden){
            if(updatedGolden.type != oldGolden.type){
                Goldens.findOne({type: oldGolden.type}).then(function(foundGolden){
                    if(!foundGolden){
                        Types.findByIdAndRemove(oldGolden.type);
                    }
                });
            } 
            
            return Goldens.findById(updatedGolden._id).exec();
        })
        .then(function(updatedGolden){
            if(req.body.newFiles && req.body.newFiles.length > 0){
                var imagePromise = updateGoldenImages(req.body.newFiles);
            
                return imagePromise.then(function(images){
                    updatedGolden.imageFiles.push(images);
                    return updatedGolden.save();
                });
                
            } 
            
            return Goldens.findById(updatedGolden._id).exec();

        })
        .then(function(updatedGolden){
            // Images need to be removed
            return Goldens.findById(updatedGolden._id).exec();
        })
        .then(function(updatedGolden){
            res.send(updatedGolden);
        });
        
    });
    
});

router.delete('/:id', middleware.isLoggedIn, function(req, res){
    
    // Delete golden
    // Delete images
    // Delete type if no other goldens exist for said type
    
    // Goldens.findByIdAndRemove(req.params.id, function(err){
    //   if(err){
    //       console.log(err);
    //   } else {
    //       res.send(true);
    //   } 
    // });
});

module.exports = router;