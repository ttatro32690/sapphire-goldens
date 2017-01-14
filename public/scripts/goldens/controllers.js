var goldenApp;

//===================
// Golden Controllers
//===================
goldenApp.controller('goldenController', ['$scope', '$state', function($scope, $state){
    $state.go('goldensIndex');
}]);

goldenApp.controller('goldenIndexController', ['$scope', 'GoldenFunctions', function($scope, GoldenFunctions){
   
   $scope.search = {};
   $scope.types = GoldenFunctions.typeChoices();
   $scope.goldens = GoldenFunctions.getAllGoldens();
   
   $scope.clearData = function(){
       $scope.search = {};
   };
}]);

goldenApp.controller('goldenNewController', ['$scope', 'GoldenFunctions', function($scope, GoldenFunctions){
    
    $scope.golden = GoldenFunctions.newGolden();
    $scope.new = true;
    $scope.types = GoldenFunctions.typeChoices();
    $scope.existing = true;
    
    $scope.saveGolden = GoldenFunctions.saveGolden;
    
    $scope.changeTypeInput = function(){
        $scope.existing = !$scope.existing;
    };
    
}]);

goldenApp.controller('goldenEditController', ['$scope', '$stateParams', 'GoldenFunctions', function($scope, $stateParams, GoldenFunctions){
    $scope.edit = true;
    $scope.existing = true;
    $scope.types = GoldenFunctions.typeChoices();
    
    $scope.golden = GoldenFunctions.getGolden($stateParams.id);
    $scope.updateGolden = GoldenFunctions.updateGolden;
    
    //File Functions
    $scope.fileChanged = function(element){
        $scope.golden.imageFile = element.files;
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