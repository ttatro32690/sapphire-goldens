var angular;

var goldenApp = angular.module('goldenApp', ['ngRoute']);

// ROUTES
goldenApp.config(function ($routeProvider){
    
   $routeProvider
   
   .when('/', {
      templateUrl: '/views/pages/home.ejs',
      controller: 'homeController'
   })
   
   .when('/about', {
      templateUrl: 'views/pages/about.ejs',
      controller: 'aboutController'
   })
   
   .when('/contact', {
      templateUrl: '/views/pages/contact.ejs',
      controller: 'contactController'
   })
   
   .when('/goldens', {
        templateUrl: '/views/pages/goldens.ejs',
        controller: 'goldenController'
   })
   
   .when('/gallery', {
        templateUrl: '/views/pages/gallery.ejs',
        controller: 'galleryController'
   })
   .otherwise({redirectTo: '/'});
   
});


// DIRECTIVES

goldenApp.directive('dogImages', function(){
   return{
      templateUrl: '/views/templates/images.ejs',
      replace: true
   };
});

goldenApp.directive('header', function(){
   return{
      templateUrl: '/views/templates/header.ejs',
      replace: true
   };
});

goldenApp.directive('footer', function(){
   return{
      templateUrl: '/views/templates/footer.ejs',
      replace: true,
   };
});

goldenApp.directive('petApplication', function(){
   return{
      templateUrl: '/views/templates/application.ejs',
      replace: true
   };
});

goldenApp.directive('petAgreement', function(){
   return{
      templateUrl: '/views/templates/agreement.ejs',
      replace: true
   };
});

goldenApp.service('SapphireService', ['$http', function($http){
   
   this.getSapphire = function() {
      return $http.get('/sapphire')
            .then(function successCallback(response){
               return response;
            }, function errorCallback(response){
               
            });      
   };
      
}]);

goldenApp.service('ImageService', ['$http', function($http){
   
   this.getImage = function(){
      return $http.get('/image')
            .then(function successCallback(response){
               return response;
            }, function errorCallback(response){
               
            });
   };
   
}]);

// CONTROLLERS
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

goldenApp.controller('galleryController', ['$scope', 'ImageService', function($scope, ImageService){
   
   ImageService.getImage().then(function(response){
      $scope.images = response.data;
   });
   
}]);