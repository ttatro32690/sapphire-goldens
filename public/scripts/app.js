var angular;
var goldenApp = angular.module('goldenApp', ['ui.router', 'ngAnimate', 'ngResource', 'ngNotify', 'angular-momentjs', 'ngSanitize']);

// ROUTES
goldenApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
   
   $urlRouterProvider.otherwise('/');

// Main Route
  
   $stateProvider
   .state('landing', {
      url: '/',
      templateUrl: '/views/pages/home/index.ejs',
      controller: 'homeController',
      controllerAs: 'homeVm',
      resolve: {
         sapphire: ['Sapphire', function(Sapphire){
            return Sapphire.query();
         }]
      }
   })
   
   .state('dashboard', {
      url: '/dashboard',
      templateUrl: '/views/pages/dashboard/index.ejs',
      resolve: {
         authorized: ['User', function(User){
            return User.isLoggedIn();
         }]
      }
   })
   
   .state('sapphireDashboard', {
      parent: 'dashboard',
      url: '/sapphire',
      templateUrl: '/views/pages/sapphire/index.ejs',
      controller: 'sapphireDashboardController',
      resolve: {
         authorized: ['User', function(User){
            return User.isLoggedIn();
         }]
      }
   })
   
   .state('sapphireEdit', {
      parent: 'sapphireDashboard',
      url: '/:id/edit',
      templateUrl: '/views/pages/sapphire/edit.ejs',
      controller: 'sapphireEditController',
      resolve: {
         authorized: ['User', function(User){
            return User.isLoggedIn();
         }]
      }
   })
   
   .state('sapphireShow', {
      parent: 'sapphireDashboard',
      url: '/:id/show',
      templateUrl: '/views/pages/sapphire/show.ejs',
      controller: 'sapphireShowController',
      resolve: {
         authorized: ['User', function(User){
            return User.isLoggedIn();
         }]
      }
   })
   
   .state('applicationDashboard', {
      parent: 'dashboard',
      url:'/application',
      templateUrl: '/views/pages/application/applicationDashboard.ejs',
      resolve: {
         authorized: ['User', function(User){
            return User.isLoggedIn();
         }]
      }
   })
   
   .state('applicationIndex', {
      parent: 'applicationDashboard',
      url: '/index',
      templateUrl: '/views/pages/application/index.ejs',
      controller: 'applicationIndexController',
      resolve: {
         authorized: ['User', function(User){
            return User.isLoggedIn();
         }],
         applications: ['ApplicationFunctions', function(ApplicationFunctions){
            return ApplicationFunctions.getAllApplications();
         }]
      }
   })
   
   .state('applicationDashboardNew', {
      parent: 'applicationDashboard',
      url: '/new',
      templateUrl: '/views/pages/application/edit.ejs',
      controller: 'applicationNewController',
      resolve: {
         application: ['ApplicationFunctions', function(ApplicationFunctions){
            var application = ApplicationFunctions.newApplication();
            return application;
         }],
         authorized: ['User', function(User){
            return User.isLoggedIn();
         }]
      }
   })
   

   
   .state('applicationDashboardShow', {
      parent: 'applicationDashboard',
      url: '/:id/show',
      templateUrl: '/views/pages/application/show.ejs',
      controller: 'applicationShowController',
      resolve: {
         application: ['$stateParams', 'ApplicationFunctions', function($stateParams, ApplicationFunctions){
               var application = ApplicationFunctions.getApplication($stateParams.id);
               
               application.$promise.then(function(application){
                  application = ApplicationFunctions.intToExt(application);
               });
               
               return application;
         }],
         authorized: ['User', function(User){
            return User.isLoggedIn();
         }]
      }
   })
   
   .state('applicationEdit', {
      parent: 'applicationDashboard',
      url: '/:id/edit',
      templateUrl: '/views/pages/application/edit.ejs',
      controller: 'applicationEditController',
      resolve: {
         authorized: ['User', function(User){
            return User.isLoggedIn();
         }],
         application: ['$stateParams', 'ApplicationFunctions', function($stateParams, ApplicationFunctions){
               var application = ApplicationFunctions.getApplication($stateParams.id);
               application = ApplicationFunctions.intToExt(application);
               
               application.$promise.then(function(application){
                  application = ApplicationFunctions.intToExt(application);
               });
               
               return application;
         }]
      }
   })
   
   .state('goldensDashboard', {
      parent: 'dashboard',
      url: '/goldens',
      templateUrl: '/views/pages/goldens/goldensDashboard.ejs',
      resolve: {
         authorized: ['User', function(User){
            return User.isLoggedIn();
         }]
      }
   })
   
   .state('goldensDashboardIndex', {
      parent: 'goldensDashboard',
      url: '/index',
      templateUrl: '/views/pages/goldens/goldensDashboardIndex.ejs',
      controller: 'goldensDashboardIndexController',
      resolve: {
         authorized: ['User', function(User){
            return User.isLoggedIn();
         }]
      }
   })
   
   .state('goldensNew',{
      parent: 'goldensDashboard',
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
      parent: 'goldensDashboard',
      url: '/:id/edit',
      templateUrl: '/views/pages/goldens/edit.ejs',
      controller: 'goldenEditController',
      resolve: {
         authorized: ['User', function(User){
            return User.isLoggedIn();
         }],
         golden: ['$stateParams', 'GoldenFunctions', function($stateParams, GoldenFunctions){
            var golden = GoldenFunctions.getGolden($stateParams.id);
            
            golden.$promise.then(function(golden){
               if(golden.birthdate != null){
                  golden = GoldenFunctions.intToExt(golden);
               } else {
                  golden = golden;
               }
            });
            
            return golden;
         }]
      }
   })
   
   .state('goldensShow',{
      parent: 'goldensDashboard',
      url: '/:id/show',
      templateUrl: '/views/pages/goldens/show.ejs',
      controller: 'goldenShowController'
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
      controllerAs: 'aboutVm',
      resolve: {
         sapphire: ['Sapphire', function(Sapphire){
            return Sapphire.query();
         }]
      }
   })
   
// Agreement Routes
   
   .state('agreement', {
      url: '/agreement',
      templateUrl: '/views/pages/agreement/agreement.ejs',
      controller: 'agreementController'
   })

// Application Routes
   
   .state('application', {
      url: '/application',
      templateUrl: '/views/pages/application/application.ejs',
      controller: 'applicationController'
   })
   
   .state('applicationNew', {
      parent: 'application',
      url: '/new',
      templateUrl: '/views/pages/application/edit.ejs',
      controller: 'applicationNewController',
      resolve: {
         application: ['ApplicationFunctions', function(ApplicationFunctions){
            var application = ApplicationFunctions.newApplication();
            return application;
         }]
      }
   })
   
   .state('applicationShow', {
      parent: 'application',
      url: '/:id/show',
      templateUrl: '/views/pages/application/show.ejs',
      controller: 'applicationShowController',
      resolve: {
         application: ['$stateParams', 'ApplicationFunctions', function($stateParams, ApplicationFunctions){
               var application = ApplicationFunctions.getApplication($stateParams.id);
               
               application.$promise.then(function(application){
                  application = ApplicationFunctions.intToExt(application);
               });
               
               return application;
         }]
      }
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
      controller: 'goldenIndexController',
      resolve: {
         goldens: ['Golden', function(Golden){
            return Golden.query();
         }]
      }
   });
   
}])

.run(['ngNotify', function(ngNotify){
   ngNotify.config({
      default: 'info',
      duration: 4000,
      position: 'bottom',
      sticky: false,
      theme: 'pure',
   });
}]);
