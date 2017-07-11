var goldenApp;

/** =======================================================
    Sapphire Services
        Application: A $resource object for CRUD utilities
    ======================================================= **/

goldenApp.factory('Sapphire', ['$resource', function($resource){
   return $resource('/sapphire/:id', {id: '@_id'},
   {
        'update': {method: 'PUT'},
        'query': {method: 'GET', isArray: false}
   });
}]);