var angular;

var goldenApp = angular.module('goldenApp', ['ngRoute']);

// ROUTES
goldenApp.config(function ($routeProvider){
    
   $routeProvider
   
   .when('/', {
      templateUrl: '/views/pages/landing.ejs',
      controller: 'indexController'
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
   });
   
});


// DIRECTIVES

goldenApp.directive('dogImages', function(){
   return{
      templateUrl: '/views/templates/images.ejs',
      replace: true
   }
});

goldenApp.directive('header', function(){
   return{
      templateUrl: '/views/templates/header.ejs',
      replace: true
   }
});

goldenApp.directive('footer', function(){
   return{
      templateUrl: '/views/templates/footer.ejs',
      replace: true,
   }
});

goldenApp.directive('petApplication', function(){
   return{
      templateUrl: '/views/templates/application.ejs',
      replace: true
   }
});

goldenApp.directive('petAgreement', function(){
   return{
      templateUrl: '/views/templates/agreement.ejs',
      replace: true
   }
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

// CONTROLLERS
goldenApp.controller("indexController", ['$scope', 'SapphireService', function($scope, SapphireService){
   SapphireService.getSapphire().then(function(response){
      $scope.sapphire = response.data;
   });
   
}]);

goldenApp.controller("contactController", ['$scope', function($scope){
   $scope.subScreen = "agreement";
}]);

goldenApp.controller("goldenController", ['$scope', function($scope){
   
}]);

goldenApp.controller("galleryController", ['$scope', function($scope){
   
   $scope.images = [
         '/public/images/sapphire01.png',
         '/public/images/sapphire02.png',
         '/public/images/sapphire03.png',
         '/public/images/sapphire04.png',
         '/public/images/sapphire05.png',
         '/public/images/sapphire06.png',
         '/public/images/sapphire07.png',
         '/public/images/sapphire08.png',
         '/public/images/sapphire09.png',
         '/public/images/sapphire10.png',
         '/public/images/sapphire11.png',
         '/public/images/sapphire12.png',
         '/public/images/sapphire13.png',
         '/public/images/sapphire14.png',
         '/public/images/sapphire15.png',
         '/public/images/sapphire16.png',
         '/public/images/sapphire17.png',
         '/public/images/sapphire18.png',
         '/public/images/sapphire19.png',
         '/public/images/sapphire20.png',
         '/public/images/sapphire21.png',
         '/public/images/sapphire22.png',
         '/public/images/sapphire23.png',
         '/public/images/sapphire24.png',
         '/public/images/sapphire25.png',
         '/public/images/sapphire26.png',
         '/public/images/sapphire27.png',
         '/public/images/sapphire28.png',
         '/public/images/sapphire29.png',
         '/public/images/sapphire30.png',
         '/public/images/sapphire31.png',
         '/public/images/sapphire32.png',
         '/public/images/sapphire33.png',
         '/public/images/sapphire34.png',
         '/public/images/sapphire35.png',
         '/public/images/sapphire36.png',
         '/public/images/sapphire37.png',
         '/public/images/sapphire38.png',
         '/public/images/sapphire39.png',
      ];

}]);