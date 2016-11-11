var angular;
var goldenApp = angular.module('goldenApp', ['ui.router', 'ngResource']);

// ROUTES
goldenApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
   
   $urlRouterProvider.otherwise('/');

// Main Route
  
   $stateProvider
   .state('landing', {
      url: '/',
      templateUrl: '/views/pages/home/index.ejs',
      controller: 'homeController'
   })
   
// About Routes
   
   .state('about', {
      url: '/about',
      templateUrl: 'views/pages/about/index.ejs',
      controller: 'aboutController'
   })
   
// Contact Routes
   
   .state('contact', {
      url: '/contact',
      templateUrl: '/views/pages/contact/index.ejs',
      controller: 'contactController'
   })
   
// Agreement Routes
   
   .state('agreement', {
      parent: 'contact',
      url: '/agreement',
      templateUrl: '/views/pages/agreement/agreement.ejs',
      controller: 'agreementController'
   })

   .state('agreementIndex', {
      parent: 'agreement',
      url: '/index',
      templateUrl: '/views/pages/agreement/index.ejs',
      controller: 'agreementIndexController'
   })

   .state('agreementNew', {
      parent: 'agreement',
      url: '/new',
      templateUrl: '/views/pages/agreement/edit.ejs',
      controller: 'agreementNewController'
   })
   
   .state('agreementEdit', {
      parent: 'agreement',
      url: '/:id/edit',
      templateUrl: '/views/pages/agreement/edit.ejs',
      controller: 'agreementEditController'
   })
   
   .state('agreementShow', {
      parent: 'agreement',
      url: '/:id/show',
      templateUrl: '/views/pages/agreement/show.ejs',
      controller: 'agreementShowController'
   })

// Application Routes
   
   .state('application', {
      parent: 'contact',
      url: '/application',
      templateUrl: '/views/pages/application/application.ejs',
      controller: 'applicationController'
   })
   
   .state('applicationIndex', {
      parent: 'application',
      url: '/index',
      templateUrl: '/views/pages/application/index.ejs',
      controller: 'applicationIndexController'
   })
   
   .state('applicationNew', {
      parent: 'application',
      url: '/new',
      templateUrl: '/views/pages/application/edit.ejs',
      controller: 'applicationNewController'
   })
   
   .state('applicationEdit', {
      parent: 'application',
      url: '/:id/edit',
      templateUrl: '/views/pages/application/edit.ejs',
      controller: 'applicationEditController'
   })
   
   .state('applicationShow', {
      parent: 'application',
      url: '/:id/show',
      templateUrl: '/views/pages/application/view.ejs',
      controller: 'applicationShowController'
   })

// Goldens Routes  

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
   
   .state('goldensNew',{
      parent: 'goldens',
      url: '/new',
      templateUrl: '/views/pages/goldens/edit.ejs',
      controller: 'goldenNewController'
   })
   
   .state('goldensEdit',{
      parent: 'goldens',
      url: '/:id/edit',
      templateUrl: '/views/pages/goldens/edit.ejs',
      controller: 'goldenEditController'
   })
   
   .state('goldensShow',{
      parent: 'goldens',
      url: '/:id/show',
      templateUrl: '/views/pages/goldens/show.ejs',
      controller: 'goldenShowController'
   })
   
// Gallery Routes

   .state('gallery', {
      url:'/gallery',
      templateUrl: '/views/pages/gallery/gallery.ejs',
      controller: 'galleryController'
   })

   .state('galleryIndex', {
      parent: 'gallery',
      url: '/index',
      templateUrl: '/views/pages/gallery/index.ejs',
      controller: 'galleryIndexController'
   })
   
   .state('galleryNew', {
      parent: 'gallery',
      url: '/new',
      templateUrl: '/views/pages/gallery/edit.ejs',
      controller: 'galleryNewController'
   })
   
   .state('galleryEdit', {
      parent: 'gallery',
      url: '/:id/edit',
      templateUrl: '/views/pages/gallery/edit.ejs',
      controller: 'galleryEditController'
   })
   
   .state('galleryShow', {
      parent: 'gallery',
      url: '/:id/show',
      templateUrl: '/views/pages/gallery/show.ejs',
      controller: 'galleryShowController'
   });
   
}]);