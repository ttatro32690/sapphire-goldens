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

goldenApp.directive('appPrinter', ['$compile', '$templateCache', '$window', function($compile, $templateCache, $window){
   return {
      link: function(scope, element){
         var template = $templateCache.get('print.ejs');
         scope.compiledTemplate = $compile(template)(scope)[0];
      },
      controller: function($scope, $window){
         $scope.print = function(){
            var window = $window.open();
            window.document.body.append($scope.compiledTemplate);
         };
      }
   };
}]);
