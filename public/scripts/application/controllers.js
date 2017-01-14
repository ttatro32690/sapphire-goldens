var goldenApp;

//========================
// Application Controllers
//========================
goldenApp.controller('applicationController', ['$scope', '$state', function($scope, $state){
    $state.go("applicationNew");
}]);

goldenApp.controller('applicationIndexController', ['$scope', '$state', 'Application', function($scope, $state, Application){
    $scope.applications = Application.query();    
}]);

goldenApp.controller('applicationNewController', ['$scope', '$state', 'Application', function($scope, $state, Application){
    $scope.new = true;
    $scope.application = new Application();
    $scope.application.date = new Date();
    
    
        $scope.saveApplication = function(){
            if($scope.appl.$error.required == null){
                $scope.application.$save(function(){
                    
                }).then(function(res){
                    $state.go('applicationShow', {id: res._id});
                });
            }
        };   
}]);

goldenApp.controller('applicationEditController', ['$scope', '$state', '$stateParams', '$moment', 'Application', function($scope, $state, $stateParams, $moment, Application){
    $scope.edit = true;
    
    Application.get({id: $stateParams.id}, function(res){
        $scope.application = res;
        
        $scope.application.date = new Date($moment($scope.application.date));
    });
    
        $scope.updateApplication = function(){
            if($scope.appl.$error.required == null){
                $scope.application.$update(function(){
                    $state.go('applicationShow', {id: $stateParams.id});
                });
            }
        };   

}]);

goldenApp.controller('applicationShowController', ['$scope', '$state', '$stateParams', '$moment', 'Application', function($scope, $state, $stateParams, $moment, Application){
    
    Application.get({id: $stateParams.id}, function(res){
        $scope.application = res;
        
        $scope.application.date = new Date($moment($scope.application.date));
    });
    
    $scope.deleteApplication = function(){
        $scope.application.$remove(function(){
            $state.go('applicationIndex');
        });
    };
}]);