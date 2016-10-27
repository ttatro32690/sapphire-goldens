var goldenApp;

goldenApp.directive('dogImages', function(){
   return{
      templateUrl: '/views/templates/images.ejs',
      replace: true
   };
});

goldenApp.directive('header', function(){
   return{
      templateUrl: '/views/templates/header.ejs',
      replace: true
   };
});

goldenApp.directive('footer', function(){
   return{
      templateUrl: '/views/templates/footer.ejs',
      replace: true,
   };
});

goldenApp.directive('petApplication', function(){
   return{
      templateUrl: '/views/templates/application.ejs',
      replace: true
   };
});

goldenApp.directive('petAgreement', function(){
   return{
      templateUrl: '/views/templates/agreement.ejs',
      replace: true
   };
});

