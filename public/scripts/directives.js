var goldenApp;

goldenApp.directive('header', function(){
   return{
      templateUrl: '/views/templates/header.ejs',
      replace: true
   };
});

goldenApp.directive('footer', ['$rootScope', function($rootScope){
   return{
      templateUrl: '/views/templates/footer.ejs',
      replace: true,
      link: function(scope, element, attrs){
         $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams, options){
            if(toState.name == 'landing' || toState.name == 'login' || toState.name == 'register'){
               element.addClass('navbar-fixed-bottom');
            } else {
               element.removeClass('navbar-fixed-bottom');
            }
         });
      }
   };
}]);

goldenApp.directive('message', function(){
   return{
      templateUrl: '/views/templates/message.ejs',
      replace: true
   };
});

goldenApp.directive('goldenModal', function(){
   return {
      templateUrl: '/views/templates/goldenModal.ejs',
      replace: true,
      scope: {
         type: '=',
         typedGoldens: '@'
      },
      controller: 'goldenModalController',
      controllerAs: 'modal',
      bindToController: true,
      link: function(scope, element, attrs){
         
      }
   };
});

goldenApp.directive('multipleGoldens', function(){
   return{
      templateUrl: '/views/templates/multipleGoldens.ejs',
      replace: true
   };
});

goldenApp.directive('singleGolden', function(){
   return{
      templateUrl: '/views/templates/singleGolden.ejs',
      replace: true
   };
});
