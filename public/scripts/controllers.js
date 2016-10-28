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

goldenApp.controller('galleryController', ['$scope', 'ImageService', function($scope, ImageService){
   $scope.images = ImageService.Image.query();
}]);