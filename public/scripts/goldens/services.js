var goldenApp;

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