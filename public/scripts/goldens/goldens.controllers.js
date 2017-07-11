var goldenApp;

//===================
// Golden Controllers
//===================
goldenApp.controller('goldenController', ['$scope', '$state', function($scope, $state){
    $state.go('goldensIndex');
}]);

goldenApp.controller('goldenModalController', ['$scope', 'GoldenFunctions', 'Images', function($scope, GoldenFunctions, Images){
    var modal = this;
    modal.multi = true;
    modal.single = false;
    
    modal.goldenPointer = 0;
    modal.imagePointer = 0;
    
    modal.goldens = $scope.$parent.golden.typedGoldens;

    modal.goldens.map(function(golden){
        return Images.get({id: golden.imageFiles[0]}).$promise.then(function(image){
            return golden.displayImage = image;
        });
    });
    
    modal.switch = function(golden, index){
        modal.multi = !modal.multi;
        modal.single = !modal.single;
        if(golden){
            modal.goldenPointer = index;
            modal.golden = modal.goldens[modal.goldenPointer];
        }
    };
    
    modal.nextGolden = function(){
        if(modal.goldenPointer + 1 == modal.goldens.length){
            modal.goldenPointer = 0;
            modal.golden = modal.goldens[0];
        } else {
            modal.goldenPointer += 1;
            modal.golden = modal.goldens[modal.goldenPointer];
        }
    };
    
    modal.prevGolden = function(){
        if(modal.goldenPointer - 1 < 0){
            modal.goldenPointer = modal.goldens.length - 1;
            modal.golden = modal.goldens[modal.goldenPointer];
        } else {
            modal.goldenPointer -= 1;
            modal.golden = modal.goldens[modal.goldenPointer];
        }
    };
    
    modal.nextImage = function(golden){
        if(modal.imagePointer + 1 == modal.golden.imageFiles.length){
            modal.imagePointer = 0;
            Images.get({id: modal.golden.imageFiles[modal.imagePointer]}).$promise.then(function(image){
                modal.golden.displayImage = image;
            });
        } else {
            modal.imagePointer += 1;
            Images.get({id: modal.golden.imageFiles[modal.imagePointer]}).$promise.then(function(image){
                modal.golden.displayImage = image;
            });
        }
    };
    
    modal.prevImage = function(golden){
        if(modal.imagePointer - 1 < 0){
            modal.imagePointer = modal.golden.imageFiles.length - 1;
            Images.get({id: modal.golden.imageFiles[modal.imagePointer]}).$promise.then(function(image){
                modal.golden.displayImage = image;
            });
        } else {
            modal.imagePointer -= 1;
            Images.get({id: modal.golden.imageFiles[modal.imagePointer]}).$promise.then(function(image){
                modal.golden.displayImage = image;
            });
        }
    };
    
}]);

goldenApp.controller('goldenIndexController', ['$scope', 'GoldenFunctions', 'Images', function($scope, GoldenFunctions, Images){
    $scope.types = GoldenFunctions.typeChoices(true);
    
    $scope.types.$promise.then(function(types){
        var goldens = types.map(function(type){
            return GoldenFunctions.getSimilarTypeGoldens(type._id).$promise.then(function(goldens){
                goldens[0].type = type;
                goldens[0].typedGoldens = goldens;
                return goldens[0];
            });
        });
        
        Promise.all(goldens).then(function(goldens){
            
            var images = goldens.map(function(golden){
                return Images.get({id: golden.imageFiles[0]}).$promise.then(function(image){
                    golden.displayImage = image;
                    return golden;
                });
            });
            
            Promise.all(images).then(function(images){
                
            });
            
            $scope.goldens = goldens;
        });
    });
   
}]);

goldenApp.controller('goldenNewController', ['$scope', 'GoldenFunctions', function($scope, GoldenFunctions){
    
    $scope.golden = GoldenFunctions.newGolden();
    $scope.new = true;
    $scope.types = GoldenFunctions.typeChoices();
    $scope.existing = true;
    
    $scope.saveGolden = function(){
        if($scope.goldenForm.$error.required == null){
            GoldenFunctions.saveGolden($scope.golden);
        }
    };
    
    //Deleted files will go into $scope.golden.deletedImages array
    //New files will go into $scope.golden.newFiles array
    //Good images will be stored in $scope.golden.imageFiles and will need to be loaded via chained promises
    
    $scope.fileChanged = function(element){
    		if(!$scope.golden.newFiles){
    		    $scope.golden.newFiles = [];
    		}
    		
            for(var i = 0; i < element.files.length; i++){
                if(element.files[i] instanceof Object){
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL(element.files[i]);
                    
                    fileReader.onload = function(event){
                        $scope.golden.newFiles.push(event.target.result);
                    };
                    
                    fileReader.onloadend = function(event){
                        $scope.$apply();
                    };
                }
            }
            
        element.value = "";
    };
    
    // Maintain the new images that will need to be created on the back end.
    $scope.removeNewFile = function(indexPos){
        $scope.golden.newFiles.splice(indexPos,1);
		if($scope.golden.newFiles.length == 0){
		    $scope.golden.newFiles = [];
		}
    };
    
    // Maintain deleted images in a temporary `Deleted' array
    // Remove the image from the permanent image files.
    // Back end will then delete the image from deletedFiles from the database
    $scope.removeExistingFile = function(indexPos){
        $scope.golden.deletedFiles.push($scope.golden.imageFiles[indexPos]._id);
        $scope.golden.imageFiles.splice(indexPos,1);
    };
    
    $scope.changeTypeInput = function(){
        $scope.golden.type = "";
        $scope.existing = !$scope.existing;
    };
    
}]);

goldenApp.controller('goldenEditController', ['$scope', '$stateParams', 'golden', 'GoldenFunctions', 'Images', 'Types', function($scope, $stateParams, golden, GoldenFunctions, Images, Types){
    
    $scope.edit = true;
    $scope.existing = true;
    $scope.types = GoldenFunctions.typeChoices();
    
    $scope.updateGolden = function(){
        if($scope.goldenForm.$error.required == null){
            GoldenFunctions.updateGolden($scope.golden);
        }
    };
    
    var loadGolden = function(id){
        return GoldenFunctions.getGolden($stateParams.id).$promise;
    };
    
    var loadTypes = function(type){
        return Types.get({id: type}).$promise;
    };
    
    var loadImage = function(image){
        return Images.get({id: image});
    };
    
    loadGolden($stateParams.id)
    .then(function(golden){
        $scope.golden = GoldenFunctions.intToExt(golden);
        loadTypes(golden.type)
        .then(function(foundType){
            golden.type = foundType.type;
            var imagePromises = golden.imageFiles.map(function(image){
                return loadImage(image).$promise.then(function(image){
                    return image;
                });
            });
            
            return Promise.all(imagePromises);
        })
        .then(function(images){
            $scope.imageFiles = images;
        });
    });
    

    
    $scope.fileChanged = function(element){
    		if(!$scope.golden.newFiles){
    		    $scope.golden.newFiles = [];
    		}
    		
            for(var i = 0; i < element.files.length; i++){
                if(element.files[i] instanceof Object){
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL(element.files[i]);
                    
                    fileReader.onload = function(event){
                        $scope.golden.newFiles.push(event.target.result);
                    };
                    
                    fileReader.onloadend = function(event){
                        $scope.$apply();
                    };
                }
            }
        element.value = "";
    };
    
    $scope.removeNewFile = function(indexPos){
        $scope.golden.newFiles.splice(indexPos,1);
		if($scope.golden.newFiles.length == 0){
		    $scope.golden.newFiles = [];
		}
    };
    
    $scope.removeExistingFile = function(indexPos){
        if(!$scope.deletedFiles){
            $scope.deletedFiles = [];
        }
        
        $scope.deletedFiles.push($scope.imageFiles[indexPos]);
        
        $scope.imageFiles.splice(indexPos, 1);
        $scope.golden.imageFiles.splice(indexPos, 1);
        
        if($scope.golden.imageFiles.length == 0){
            $scope.golden.imageFiles = [];
        }
        if($scope.imageFiles.length == 0){
            $scope.imageFiles = [];
        }
    };
    
    $scope.changeTypeInput = function(){
        $scope.golden.type = "";
        $scope.existing = !$scope.existing;
    };
    
}]);

goldenApp.controller('goldenShowController', ['$scope', '$stateParams', 'GoldenFunctions', 'Images', 'Types', function($scope, $stateParams, GoldenFunctions, Images, Types){

    var loadGolden = function(id){
        return GoldenFunctions.getGolden($stateParams.id).$promise;
    };
    
    var loadTypes = function(type){
        return Types.get({id: type}).$promise;
    };
    
    var loadImage = function(image){
        return Images.get({id: image});
    };
    
    loadGolden($stateParams.id)
    .then(function(golden){
        $scope.golden = GoldenFunctions.intToExt(golden);
        
        loadTypes(golden.type).then(function(type){
            golden.type = type.type;
            
            var imagePromises = golden.imageFiles.map(function(image){
                return loadImage(image).$promise.then(function(image){
                    return image.rawImageData;
                });
            });
            
            return Promise.all(imagePromises);
        })
        .then(function(images){
            golden.images = images;
        });
    });
    
    $scope.deleteGolden = GoldenFunctions.deleteGolden;
}]);

goldenApp.controller('goldensDashboardIndexController', ['$scope', 'GoldenFunctions', 'Images', 'Types', function($scope, GoldenFunctions, Images, Types){
    
    var loadGoldens = function(goldens){
        return GoldenFunctions.getAllGoldens().$promise;
    };
    
    var loadTypes = function(type){
        return Types.get({id: type}).$promise;
    };
    
    var loadImage = function(image){
        return Images.get({id: image}).$promise;
    };
    
    loadGoldens()
    .then(function(goldens){
        $scope.goldens = goldens;
        $scope.goldens.forEach(function(golden){
            loadTypes(golden.type)
            .then(function(type){
                golden.indexType = type.type;
                return loadImage(golden.imageFiles[0]);
            })
            .then(function(image){
                golden.indexImage = image.rawImageData;
            });
        });
    });
    
}]);