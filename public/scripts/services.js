var goldenApp;

goldenApp.factory('ImageService', ['$resource', function($resource){
   return {
      Image: $resource('/image')
   };
}]);

goldenApp.factory('SapphireService', ['$resource', function($resource){
   return{
       Sapphire: $resource('/sapphire')
   };
      
}]);