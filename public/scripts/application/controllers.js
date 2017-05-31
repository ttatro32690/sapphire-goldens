var goldenApp;

//========================
// Application Controllers
//========================
goldenApp.controller('applicationController', ['$state', function($state){

}]);

goldenApp.controller('applicationIndexController', ['$scope', 'applications', function($scope, applications){
    $scope.applications = applications;    
}]);

goldenApp.controller('applicationNewController', ['$scope', '$state', '$window', 'application', 'ApplicationFunctions', function($scope, $state, $window, application, ApplicationFunctions){
    $scope.new = true;
    $scope.application = application;
    
    $scope.states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC',
                    'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA',
                    'ME', 'MD', 'MH', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE',
                    'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR',
                    'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA',
                    'WV', 'WI', 'WY'];
    
    $scope.saveApplication = function(){
        if($scope.appl.$error.required == null){
            ApplicationFunctions.saveApplication($scope.application, $state.current.parent);
            $window.alert('Application Successfully Entered!');
        }
    };
}]);

goldenApp.controller('applicationEditController', ['$scope', '$state', 'application', 'ApplicationFunctions', function($scope, $state, application, ApplicationFunctions){
    $scope.edit = true;
    $scope.application = application;
    
    $scope.states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC',
                    'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA',
                    'ME', 'MD', 'MH', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE',
                    'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR',
                    'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA',
                    'WV', 'WI', 'WY'];
    
    $scope.updateApplication = function(){
        if($scope.appl.$error.required == null){
            ApplicationFunctions.updateApplication($scope.application);
        }
    };
}]);

goldenApp.controller('applicationShowController', ['$scope', 'application', 'ApplicationFunctions', function($scope, application, ApplicationFunctions){
    $scope.application = application;
    $scope.deleteApplication = ApplicationFunctions.deleteApplication;
}]);