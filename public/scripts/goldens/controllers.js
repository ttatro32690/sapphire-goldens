var goldenApp;

//===================
// Golden Controllers
//===================
goldenApp.controller('goldenController', ['$scope', '$state', function($scope, $state){
    $state.go('goldensIndex');
}]);

goldenApp.controller('goldenIndexController', ['$scope', 'GoldenFunctions', function($scope, GoldenFunctions){
   
   $scope.types = GoldenFunctions.typeChoices();
   
   $scope.getSimilarGoldens = function(type){
       $scope.goldens = GoldenFunctions.getSimilarTypeGoldens(type);
       $scope.goldens.$promise.then(function(goldens){
            $scope.golden = goldens[0];
            setupImages(0);
        });
   };
   
   // Modal Functions
   
    var pointer = 0;
   
   $scope.next = function(){
       
       if((pointer + 1) > ($scope.goldens.length - 1)){
           pointer = 0;
       } else {
           pointer += 1;
       }
       $scope.golden = $scope.goldens[pointer];
       setupImages(pointer);
   };
   
   $scope.prev = function(){

       if((pointer - 1) < 0){
           pointer = $scope.goldens.length - 1;
       } else {
           pointer -= 1;
       }
       $scope.golden = $scope.goldens[pointer];
       setupImages(pointer);
   };
   
   var imagePointer = 0;
   
   $scope.nextImage = function(){
       if((imagePointer + 1) > ($scope.golden.imageFiles.length - 1)){
           imagePointer = 0;
       } else {
           imagePointer += 1;
       }
            setupImages(imagePointer);
   };
   
    $scope.prevImage = function(){
       if((imagePointer - 1) < 0){
           imagePointer = $scope.golden.imageFiles.length - 1;
       } else {
           imagePointer -= 1;
       }
            setupImages(imagePointer);
    };
    
    $scope.exitModal = function(){
        $scope.golden = {};
        $scope.mainImage = null;
        $scope.nextImg = null;
        $scope.prevImg = null;
        imagePointer = null;
        pointer = null;
    };
   
   var setupImages = function(pointer){
        $scope.mainImage = $scope.golden.imageFiles[pointer] || $scope.golden.url;
        $scope.prevImg = $scope.golden.imageFiles[pointer - 1] || $scope.golden.imageFiles[$scope.golden.imageFiles.length-1];
        $scope.nextImg = $scope.golden.imageFiles[pointer + 1] || $scope.golden.imageFiles[0];
        if($scope.nextImg == $scope.prevImg){
            $scope.nextImg = null;
        }
   };
   
}]);

goldenApp.controller('goldenNewController', ['$scope', 'GoldenFunctions', function($scope, GoldenFunctions){
    
    $scope.golden = GoldenFunctions.newGolden();
    $scope.new = true;
    $scope.types = GoldenFunctions.typeChoices();
    $scope.existing = true;
    
    $scope.saveGolden = GoldenFunctions.saveGolden;
    
    $scope.fileChanged = function(element){
    		if(!$scope.golden.imageFiles){
    		    $scope.golden.imageFiles = [];
    		}
    		
            for(var i = 0; i < element.files.length; i++){
                if(element.files[i] instanceof Object){
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL(element.files[i]);
                    
                    fileReader.onload = function(event){
                        $scope.golden.imageFiles.push(event.target.result);
                    };
                    
                    fileReader.onloadend = function(event){
                        $scope.$apply();
                    };
                }
            }
            
        element.value = "";
    };
    
    $scope.removeFile = function(indexPos){
        $scope.golden.imageFiles = $scope.golden.imageFiles.splice(1);
		if($scope.golden.imageFiles.length == 0){
		    $scope.golden.imageFiles = [];
		}
        
    };
    
    $scope.changeTypeInput = function(){
        $scope.existing = !$scope.existing;
    };
    
}]);

goldenApp.controller('goldenEditController', ['$scope', '$stateParams', 'golden', 'GoldenFunctions', function($scope, $stateParams, golden, GoldenFunctions){
    
    $scope.edit = true;
    $scope.existing = true;
    $scope.types = GoldenFunctions.typeChoices();
    
    $scope.golden = golden;
    $scope.updateGolden = GoldenFunctions.updateGolden;
    
    $scope.fileChanged = function(element){
    		if(!$scope.golden.imageFiles){
    		    $scope.golden.imageFiles = [];
    		}
    		
            for(var i = 0; i < element.files.length; i++){
                if(element.files[i] instanceof Object){
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL(element.files[i]);
                    
                    fileReader.onload = function(event){
                        $scope.golden.imageFiles.push(event.target.result);
                    };
                    
                    fileReader.onloadend = function(event){
                        $scope.$apply();
                    };
                }
            }
    };
    
    $scope.removeFile = function(indexPos){
        $scope.golden.imageFiles = $scope.golden.imageFiles.splice(1);
		if($scope.golden.imageFiles.length == 0){
		    $scope.golden.imageFiles = [];
		}
        
    };
    
    $scope.changeTypeInput = function(){
        $scope.existing = !$scope.existing;
    };
    
}]);

goldenApp.controller('goldenShowController', ['$scope', '$stateParams', 'GoldenFunctions', function($scope, $stateParams, GoldenFunctions){

    $scope.golden = GoldenFunctions.getGolden($stateParams.id);
    
    $scope.golden.$promise.then(function(golden){
        $scope.goldens = GoldenFunctions.getSimilarGoldens($scope.golden.name);
    });

    $scope.deleteGolden = GoldenFunctions.deleteGolden;
}]);

goldenApp.controller('goldensDashboardIndexController', ['$scope', 'GoldenFunctions', function($scope, GoldenFunctions){
    $scope.goldens = GoldenFunctions.getAllGoldens();

}]);