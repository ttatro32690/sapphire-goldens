var goldenApp;

goldenApp.controller('homeController', ['$scope', '$stateParams', function($scope, $stateParams){
   
}]);

goldenApp.controller('aboutController', ['$scope', 'Sapphire', function($scope, Sapphire){

    $scope.sapphires = Sapphire.query();
       
}]);

goldenApp.controller('contactController', ['$scope', '$state', function($scope, $state){
   $state.go('agreement');
}]);

goldenApp.controller('agreementController', ['$scope', function($scope){
    
}]);

goldenApp.controller('applicationController', ['$scope', function($scope){
    
}]);

goldenApp.controller('goldenController', ['$scope', '$state', function($scope, $state){
    $state.go('goldensIndex');
}]);

goldenApp.controller('goldenNewController', ['$scope', function($scope){
   
}]);

goldenApp.controller('goldenIndexController', ['$scope', function($scope){
   
}]);

goldenApp.controller('galleryIndexController', ['$scope', 'Image', function($scope, Image){
   $scope.images = Image.query();
}]);