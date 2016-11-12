var goldenApp;

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

