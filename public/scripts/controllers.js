var goldenApp;

goldenApp.controller('homeController', ['$scope', function($scope){
   
}]);

goldenApp.controller('aboutController', ['$scope', 'SapphireService', function($scope, SapphireService){

    $scope.sapphires = SapphireService.Sapphire.query();
    console.log($scope.sapphire);
       
}]);

goldenApp.controller('contactController', ['$scope', function($scope){
   $scope.subScreen = "agreement";
}]);

goldenApp.controller('goldenController', ['$scope', function($scope){
   
}]);

goldenApp.controller('galleryController', ['$scope', '$resource', '$routeParams', 'ImageService', function($scope, $resource, $routeParams, ImageService){
   $scope.images = ImageService.Image.query();
       console.log($scope.images);
   
   $scope.updateImage = function(){
      console.log($routeParams.id);
   };
   
}]);