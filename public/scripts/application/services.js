var goldenApp;

/** =======================================================
    Application Services
        Application: A $resource object for CRUD utilities
    ======================================================= **/

goldenApp.factory('Application', ['$resource', function($resource){
   return $resource('/application/:id', {id: '@_id'},
   {
      'update': {method: 'PUT'}
   });
}]);