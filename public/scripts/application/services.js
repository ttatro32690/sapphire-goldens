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

goldenApp.factory('ApplicationFunctions', ['$state', 'Application', function($state, Application){
    var applicationFunctions = {};
    
    applicationFunctions.extToInt = function(application){
        application.date = application.date.toISOString();
        return application;
    };
    
    applicationFunctions.intToExt = function(application){
        application.date = new Date(application.date);
        return application;
    };
    
    applicationFunctions.newApplication = function(){
        var application = new Application();
        application.date = new Date();
        
        return application;
    };
    
    applicationFunctions.saveApplication = function(application, stateParent){
        return application.$save().then(function(newApplication){
                application = applicationFunctions.intToExt(newApplication);
                if(stateParent == 'application'){
                    $state.go('applicationShow', {id: newApplication._id});
                } else {
                    $state.go('applicationDashboardShow', {id: newApplication._id});
                }
            });
    };
    
    applicationFunctions.updateApplication = function(application){
        return application.$update().then(function(updatedApplication){
            application = applicationFunctions.intToExt(updatedApplication);
            $state.go('applicationDashboardShow', {id: updatedApplication._id});
        });
    };
    
    applicationFunctions.getApplication = function(id){
        return Application.get({id: id});
    };
    
    applicationFunctions.getAllApplications = function(){
        return Application.query();
    };
    
    applicationFunctions.deleteApplication = function(application){
        application.$remove(function(){
            $state.go('applicationIndex');
        });
    };
    
    return applicationFunctions;
}]);