var angular;
var goldenApp = angular.module('goldenApp', ['ui.router', 'ngResource']);

// ROUTES
goldenApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
   
   $urlRouterProvider.otherwise('/');
   
   $stateProvider
   .state('landing', {
      url: '/',
      templateUrl: '/views/pages/home/index.ejs',
      controller: 'homeController'
   })
   
   .state('about', {
      url: '/about',
      templateUrl: 'views/pages/about/index.ejs',
      controller: 'aboutController'
   })
   
   .state('contact', {
      url: '/contact',
      templateUrl: '/views/pages/contact/index.ejs',
      controller: 'contactController'
   })
   
   .state('agreement', {
      parent: 'contact',
      url: '/agreement',
      templateUrl: '/views/templates/agreement.ejs',
      controller: 'agreementController'
   })
   
   .state('application', {
      parent: 'contact',
      url: '/application',
      templateUrl: '/views/templates/application.ejs',
      controller: 'applicationController'
   })
   
   .state('goldens', {
      url: '/goldens',
      templateUrl: '/views/pages/goldens/goldens.ejs',
      controller: 'goldenController'
   })
   
   .state('goldensIndex',{
      parent: 'goldens',
      url: '/index',
      templateUrl: '/views/pages/goldens/index.ejs',
      controller: 'goldenIndexController'
   })
   
   .state('goldensFemale', {
      parent: 'goldens',
      url: '/females',
      templateUrl: '/views/pages/goldens/show.ejs',
      controller: 'goldenFemaleController'
   })
   
   .state('goldensMale', {
      parent: 'goldens',
      url: '/males',
      templateUrl: '/views/pages/goldens/show.ejs',
      controller: 'goldenMaleController'
   })
   
   .state('goldensLitter', {
      parent: 'goldens',
      url: '/litters',
      templateUrl: '/views/pages/goldens/show.ejs',
      controller: 'goldenLitterController'
   })
   
   .state('goldensNew',{
      parent: 'goldens',
      url: '/new',
      templateUrl: '/views/pages/goldens/new.ejs',
      controller: 'goldenNewController'
   })
   
   .state('gallery', {
      url: '/gallery',
      templateUrl: '/views/pages/gallery/index.ejs',
      controller: 'galleryIndexController'
   });
   
}]);