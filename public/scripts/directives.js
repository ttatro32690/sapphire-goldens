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
            console.log(toState.name);
            
            if(toState.name == 'landing'){
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
