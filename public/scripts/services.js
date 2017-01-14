var goldenApp;

/** =======================================================
    Sapphire Services
        Application: A $resource object for CRUD utilities
    ======================================================= **/

goldenApp.factory('Sapphire', ['$resource', function($resource){
   return $resource('/sapphire/:id', {id: '@_id'});
}]);

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

/** =======================================================
    Golden Services
        Golden: A $resource object for CRUD utilities
        GoldenFunctions: Used to manage user functions for the CRUD for the GoldenController sets
    ======================================================= **/

goldenApp.factory('Golden', ['$resource', function($resource){
    
    // CRUD Resource for managing Golden Content
   return $resource('/goldens/:id', {id: '@_id', name: '@name'},
   {
        'update': {method: 'PUT'}
   });
}]);

goldenApp.factory('GoldenFunctions', ['$moment', '$state', 'Golden', function($moment, $state, Golden){
    
    var goldenFunctions = {};
    
    // Provide a list of unique choices based on the golden.types fields
    goldenFunctions.typeChoices = function(){
        
        var types = [];
        
        Golden.query(function(goldens){
            goldens.forEach(function(golden, index){
                if(golden.type != null){
                   if(types.includes(golden.type) == false){
                       types.push(golden.type);
                   }
                }
            });
        });
        
        return types;
    };
    
    // Instantiate a new instance of a golden object.
    goldenFunctions.newGolden = function(){
        return new Golden();
    };
    
    // Save the golden data to create a new golden
    goldenFunctions.saveGolden = function(golden){
        golden.$save(function(){
            
        }).then(function(res){
            $state.go('goldensShow', {id: res._id});
        });
    };
    
    // Update existing golden data
    goldenFunctions.updateGolden = function(golden){
        golden.$update(function(){
            $state.go('goldensShow', {id: golden._id});
        });
    };
    
    // Delete a golden from the database
    goldenFunctions.deleteGolden = function(golden){
       golden.$remove(function(){
           $state.go('goldensIndex');
       });
    };
    
    // Return all goldens for the index show screen
    goldenFunctions.getAllGoldens = function(){
        return Golden.query();
    };
    
    // Get a singular golden and instantiate specific fields for display
    goldenFunctions.getGolden = function(id, getSimilarGoldens){
        return Golden.get({id: id});
        
    };
    
    // Get all like goldens for the show routine. This will query the database by name
    goldenFunctions.getSimilarGoldens = function(name){
        return Golden.query({name: name});
    };
    
    return goldenFunctions;
    
}]);