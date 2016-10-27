var goldenApp;

goldenApp.controller('homeController', ['$scope', function($scope){
   
}]);

goldenApp.controller('aboutController', ['$scope', 'SapphireService', function($scope, SapphireService){
   SapphireService.getSapphire().then(function(response){
      $scope.sapphire = response.data;
   });
   
}]);

goldenApp.controller('contactController', ['$scope', function($scope){
   $scope.subScreen = "agreement";
}]);

goldenApp.controller('goldenController', ['$scope', function($scope){
   
}]);

goldenApp.controller('galleryController', ['$scope', '$resource', '$routeParams', 'ImageService', function($scope, $resource, $routeParams, ImageService){
// Research $resource more
   ImageService.getImage().then(function(response){
      $scope.images = response.data;
   });
   
   $scope.updateImage = function(){
      console.log($routeParams.id);
   };
   
}]);