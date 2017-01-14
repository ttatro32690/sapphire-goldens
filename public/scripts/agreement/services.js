var goldenApp;

/** =======================================================
    Agreement Services
        Application: A $resource object for CRUD utilities
    ======================================================= **/

goldenApp.factory('Agreement', ['$resource', function($resource){
   return $resource('/agreement/:id', {id: '@_id'},
   {
      'update': {method: 'PUT'}
   });
}]);