var goldenApp;

/** =======================================================
    User Services
        User: A service for managing logins/logouts, authentication and authorization.
        
    ======================================================= **/

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
      
      $http.get('/isLoggedIn', {params: $rootScope.user})
         .then(function successCallback(response){
           defer.resolve('Authorized');
        }, function errorCallback(response){
            console.log(response);
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