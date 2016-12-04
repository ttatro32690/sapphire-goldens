var angular;
var goldenApp = angular.module('goldenApp', ['ui.router', 'ngResource', 'angular-momentjs']);

// ROUTES
goldenApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
   
   $urlRouterProvider.otherwise('/');

// Main Route
  
   $stateProvider
   .state('landing', {
      url: '/',
      templateUrl: '/views/pages/home/index.ejs',
      controller: 'homeController',
   })
   
// Login/Register Routes

   .state('login', {
      url: '/login',
      templateUrl: '/views/users/login.ejs',
      controller: 'loginController'
   })
   
   .state('register', {
      url: '/register',
      templateUrl: '/views/users/register.ejs',
      controller: 'registerController',
      resolve: {
         authorized: ['User', function(User){
            return User.isLoggedIn();
         }]
      }
   })
   
// About Routes
   
   .state('about', {
      url: '/about',
      templateUrl: 'views/pages/about/index.ejs',
      controller: 'aboutController',
      resolve: {
         sapphires: ['Sapphire', function(Sapphire){
            return Sapphire.query();
         }]
      }
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
      controller: 'agreementIndexController',
      resolve: {
         agreements: ['Agreement', function(Agreement){
            return Agreement.query();
         }],
         authorized: ['User', function(User){
            return User.isLoggedIn();
         }]
      }
   })

   .state('agreementNew', {
      parent: 'agreement',
      url: '/new',
      templateUrl: '/views/pages/agreement/edit.ejs',
      controller: 'agreementNewController',
      resolve: {
         agreement: ['Agreement', function(Agreement){
             var agreement = new Agreement();
             
             agreement.buyerDate = new Date();
             agreement.breederDate = new Date();
             
             return agreement;
         }]
      }
   })
   
   .state('agreementEdit', {
      parent: 'agreement',
      url: '/:id/edit',
      templateUrl: '/views/pages/agreement/edit.ejs',
      controller: 'agreementEditController',
      resolve: {
         authorized: ['User', function(User){
            return User.isLoggedIn();
         }]
      }
      
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
      controller: 'applicationIndexController',
      resolve: {
         authorized: ['User', function(User){
            return User.isLoggedIn();
         }]
      }
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
      controller: 'applicationEditController',
      resolve: {
         authorized: ['User', function(User){
            return User.isLoggedIn();
         }]
      }
   })
   
   .state('applicationShow', {
      parent: 'application',
      url: '/:id/show',
      templateUrl: '/views/pages/application/show.ejs',
      controller: 'applicationShowController',
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
      controller: 'goldenNewController',
      resolve: {
         authorized: ['User', function(User){
            return User.isLoggedIn();
         }]
      }
   })
   
   .state('goldensEdit',{
      parent: 'goldens',
      url: '/:id/edit',
      templateUrl: '/views/pages/goldens/edit.ejs',
      controller: 'goldenEditController',
      resolve: {
         authorized: ['User', function(User){
            return User.isLoggedIn();
         }]
      }
   })
   
   .state('goldensShow',{
      parent: 'goldens',
      url: '/:id/show',
      templateUrl: '/views/pages/goldens/show.ejs',
      controller: 'goldenShowController'
   });
   
}]);