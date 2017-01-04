var goldenApp;

goldenApp.factory('Sapphire', ['$resource', function($resource){
   return $resource('/sapphire/:id', {id: '@_id'});
}]);

goldenApp.factory('Golden', ['$resource', function($resource){
   return $resource('/goldens/:id', {id: '@_id', name: '@name'},
   {
        'update': {method: 'PUT'}
   });
}]);

goldenApp.factory('Agreement', ['$resource', function($resource){
   return $resource('/agreement/:id', {id: '@_id'},
   {
      'update': {method: 'PUT'}
   });
}]);

goldenApp.factory('Application', ['$resource', function($resource){
   return $resource('/application/:id', {id: '@_id'},
   {
      'update': {method: 'PUT'}
   });
}]);

goldenApp.service('User', ['$http', '$q', '$rootScope', '$state', function($http, $q, $rootScope, $state){
   var User = {};
   
   User.login = function(user){
       
       var defer = $q.defer();
       
       $http.post('/login', user)
        .then(function successCallback(response){
            defer.resolve(response);
        }, function errorCallback(response){
            defer.reject(response);
        });
        
        return defer.promise;
    };
   
   User.isLoggedIn = function(){
      var defer = $q.defer();
      
      $http.get('/isLoggedIn', $rootScope.user)
         .then(function successCallback(response){
           defer.resolve('Authorized');
        }, function errorCallback(response){
           defer.reject('Not Authorized');
        });
        
        return defer.promise;
    };
    
    User.logout = function(){
        return $http.get('/logout')
        .then(function successCallback(){
                
        });
    };
    
    User.register = function(user){
        
        var defer = $q.defer();
        
        $http.post('/register', user)
        .then(function successCallback(response){
            defer.resolve('Authorized');
        }, function errorCallback(response){
            defer.reject('Not Authorized');
        });
        
        return defer.promise;
    };
   
   return User;
}]);

