var goldenApp;

//=================
// Home Controllers
//=================
goldenApp.controller('homeController', ['$scope', '$stateParams', function($scope, $stateParams){
   
}]);

//==================
// About Controllers
//==================
goldenApp.controller('aboutController', ['$scope', 'Sapphire', function($scope, Sapphire){

    $scope.sapphires = Sapphire.query();
       
}]);


//====================
// Contact Controllers
//====================
goldenApp.controller('contactController', ['$scope', '$state', function($scope, $state){
   $state.go('agreement');
}]);

goldenApp.controller('agreementController', ['$scope', function($scope){
    
}]);

goldenApp.controller('applicationController', ['$scope', function($scope){
    
}]);

//===================
// Golden Controllers
//===================
goldenApp.controller('goldenController', ['$scope', '$state', function($scope, $state){
    $state.go('goldensIndex');
}]);

goldenApp.controller('goldenFemaleController', ['$scope', function($scope){
   $scope.type ="Females";
}]);

goldenApp.controller('goldenMaleController', ['$scope', function($scope){
   $scope.type ="Males";
}]);

goldenApp.controller('goldenLitterController', ['$scope', function($scope){
   $scope.type ="Litters";
}]);

goldenApp.controller('goldenNewController', ['$scope', function($scope){
   
}]);

goldenApp.controller('goldenIndexController', ['$scope', function($scope){
   
}]);


//====================
// Gallery Controllers
//====================
goldenApp.controller('galleryIndexController', ['$scope', 'Image', function($scope, Image){
   $scope.images = Image.query();
}]);