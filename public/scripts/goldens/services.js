var goldenApp;

/** =======================================================
    Golden Services
        Golden: A $resource object for CRUD utilities
        GoldenFunctions: Used to manage user functions for the CRUD for the GoldenController sets
    ======================================================= **/

goldenApp.factory('Golden', ['$resource', function($resource){
    
    // CRUD Resource for managing Golden Content
   return $resource('/goldens/:id', {id: '@_id'},
   {
        'update': {method: 'PUT'}
   });
}]);

goldenApp.factory('Images', ['$resource', function($resource){
    return $resource('/images/:id');
}]);

goldenApp.factory('Types', ['$resource', function($resource){
    return $resource('/types/:id');
}]);

goldenApp.factory('GoldenFunctions', ['$state', '$q', 'Golden', 'Images', 'Types', function($state, $q, Golden, Images, Types){
    
    var goldenFunctions = {};
    
    // Provide a list of the first golden of it's type to the index screen.
    goldenFunctions.typeChoices = function(defer){
        if(defer){
                return Types.query();
        } else {
            var typeArray = [];
            var counter = 0;
            
            Types.query().$promise.then(function(types){
                types.forEach(function(type){
                    typeArray[counter] = type.type;
                    counter += 1;
                });
            });
        }
        
        return typeArray;
    };
    
    goldenFunctions.newDates = function(golden){
        golden.birthdate = new Date();
        return golden;
    };
    
    goldenFunctions.intToExt = function(golden){
        if(golden.birthdate){
            golden.birthdate = new Date(golden.birthdate);
        }
        return golden;
    };
    
    goldenFunctions.extToInt = function(golden){
        golden.birthdate = golden.birthdate.toISOString();
        return golden;
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
    
    goldenFunctions.getSimilarTypeGoldens = function(type){
        return Golden.query({type: type});
    };
    
    return goldenFunctions;
    
}]);