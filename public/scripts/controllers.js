var goldenApp;

//=================
// Home Controllers
//=================
goldenApp.controller('homeController', ['$scope', function($scope){
   
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

//======================
// Agreement Controllers
//======================
goldenApp.controller('agreementController', ['$scope', function($scope){
    
}]);

goldenApp.controller('agreementIndexController', ['$scope', function($scope){
    
}]);

goldenApp.controller('agreementNewController', ['$scope', function($scope){
    
}]);

goldenApp.controller('agreementEditController', ['$scope', function($scope){
    
}]);

goldenApp.controller('agreementShowController', ['$scope', function($scope){
    
}]);

//========================
// Application Controllers
//========================
goldenApp.controller('applicationController', ['$scope', function($scope){
    
}]);

goldenApp.controller('applicationIndexController', ['$scope', function($scope){
    
}]);

goldenApp.controller('applicationNewController', ['$scope', function($scope){
    
}]);

goldenApp.controller('applicationEditController', ['$scope', function($scope){
    
}]);

goldenApp.controller('applicationShowController', ['$scope', function($scope){
    
}]);

//===================
// Golden Controllers
//===================
goldenApp.controller('goldenController', ['$scope', '$state', function($scope, $state){
    $state.go('goldensIndex');
}]);

goldenApp.controller('goldenIndexController', ['$scope', function($scope){
   
}]);

goldenApp.controller('goldenNewController', ['$scope', function($scope){
   
}]);

goldenApp.controller('goldenEditController', ['$scope', function($scope){
   
}]);

goldenApp.controller('goldenShowController', ['$scope', function($scope){
   
}]);


//====================
// Gallery Controllers
//====================
goldenApp.controller('galleryController', ['$scope', '$state', function($scope, $state){
   $state.go('galleryIndex');
}]);

goldenApp.controller('galleryIndexController', ['$scope', '$state', 'Image', function($scope, $state, Image){
   $scope.images = Image.query();
}]);

goldenApp.controller('galleryNewController', ['$scope', '$state', 'Image', function($scope, $state, Image){

}]);

goldenApp.controller('galleryEditController', ['$scope', '$state', 'Image', function($scope, $state, Image){

}]);

goldenApp.controller('galleryShowController', ['$scope', '$state', 'Image', function($scope, $state, Image){

}]);
