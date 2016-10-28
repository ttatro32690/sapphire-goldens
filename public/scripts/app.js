var angular;
var goldenApp = angular.module('goldenApp', ['ui.router', 'ngResource']);

// ROUTES
goldenApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
   // Default page
   // Add catch all redirect
   $urlRouterProvider.otherwise('/');
   
   $stateProvider
   .state('landing', {
      url: '/',
      templateUrl: '/views/pages/home.ejs',
      controller: 'homeController'
   })
   
   .state('about', {
      url: '/about',
      templateUrl: 'views/pages/about.ejs',
      controller: 'aboutController'
   })
   
   .state('contact', {
      url: '/contact',
      templateUrl: '/views/pages/contact.ejs',
      controller: 'contactController'
   })
   
   .state('goldens', {
      url: '/goldens',
      templateUrl: '/views/pages/goldens.ejs',
      controller: 'goldenController'
   })
   
   .state('gallery', {
      url: '/gallery',
      templateUrl: '/views/pages/gallery.ejs',
      controller: 'galleryController'
   });
   
}]);