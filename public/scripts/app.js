var angular;
var goldenApp = angular.module('goldenApp', ['ngRoute', 'ngResource']);

// ROUTES
goldenApp.config(function ($routeProvider){
// Potentially Switch to StateProvider instead using ui-router
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