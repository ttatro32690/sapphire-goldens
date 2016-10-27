var goldenApp;

goldenApp.service('SapphireService', ['$http', function($http){
   
   this.getSapphire = function() {
      return $http.get('/sapphire')
            .then(function successCallback(response){
               return response;
            }, function errorCallback(response){
               
            });      
   };
      
}]);

goldenApp.service('ImageService', ['$http', function($http){
   
   this.getImage = function(){
      return $http.get('/image')
            .then(function successCallback(response){
               return response;
            }, function errorCallback(response){
               
            });
   };
   
}]);