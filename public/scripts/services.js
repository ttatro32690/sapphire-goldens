var goldenApp;

goldenApp.factory('Image', ['$resource', function($resource){
   return $resource('/image/:id', {id: '@_id'});
}]);

goldenApp.factory('Sapphire', ['$resource', function($resource){
   return $resource('/sapphire/:id', {id: '@_id'});
}]);