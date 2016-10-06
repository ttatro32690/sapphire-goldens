var angular;

var goldenApp = angular.module('goldenApp', ['ngRoute']);

goldenApp.config(function ($routeProvider){
    
   $routeProvider
   
   .when('/', {
      templateUrl: '/views/templates/landing.ejs',
      controller: 'indexController'
   })
   
   .when('/about', {
        templateUrl: '/views/templates/about.ejs',
        controller: 'aboutController'
   })
   
   .when('/contact', {
        templateUrl: '/views/templates/contact.ejs',
        controller: 'contactController'
   })
   
   .when('/goldens', {
        templateUrl: '/views/templates/goldens.ejs',
        controller: 'goldenController'
   })
   
   .when('/gallery', {
        templateUrl: '/views/templates/gallery.ejs',
        controller: 'galleryController'
   });
   
});

goldenApp.controller("indexController", ['$scope', function($scope){

}]);

goldenApp.controller("aboutController", ['$scope', function($scope){

}]);

goldenApp.controller("contactController", ['$scope', function($scope){

}]);

goldenApp.controller("goldenController", ['$scope', function($scope){

}]);

goldenApp.controller("galleryController", ['$scope', function($scope){

}]);