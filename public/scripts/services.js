var goldenApp;

goldenApp.factory('ImageService', ['$http', function($http){
   return {
      getImage: function(){
         return $http.get('/image')
         .then(function successCallback(response){
            return response;
         }, function errorCallback(response){
            
         });
      }
   };
}]);

goldenApp.factory('SapphireService', ['$http', function($http){
   
   return{
      getSapphire: function() {
      return $http.get('/sapphire')
            .then(function successCallback(response){
               return response;
            }, function errorCallback(response){
               
            });      
   }};
      
}]);