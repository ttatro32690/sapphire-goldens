var goldenApp;

goldenApp.factory('Sapphire', ['$resource', function($resource){
   return $resource('/sapphire/:id', {id: '@_id'});
}]);

goldenApp.factory('Image', ['$resource', function($resource){
   return $resource('/image/:id', {id: '@_id'},
   {
      'update': {method: 'PUT'}
   });
}]);

goldenApp.factory('Golden', ['$resource', function($resource){
   return $resource('/goldens/:id', {id: '@_id'},
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
        $http.post('/login', user)
        .then(function successCallback(response){
            $rootScope.user = response.data;
            $state.go('landing');
        }, function errorCallback(response){
            console.log(response);
        });
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
        $http.get('/logout')
        .then(function successCallback(){
            $rootScope.user = null;
            $state.go('landing');
        });
    };
    
    User.register = function(user){
        console.log('clicked');
        
        $http.post('/register', user)
        .then(function successCallback(){
            
        }, function errorCallback(response){
            
        });
    };
   
   return User;
}]);

