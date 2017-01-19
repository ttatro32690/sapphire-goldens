var goldenApp;

//======================
// Agreement Controllers
//======================
goldenApp.controller('agreementController', ['$rootScope', '$state', function($rootScope, $state){
    
    if($rootScope.user){
        $state.go('agreementIndex');
    }
    
}]);

goldenApp.controller('agreementIndexController', ['$scope', 'agreements', function($scope, agreements){
    
    $scope.agreements = agreements;
    
}]);

goldenApp.controller('agreementNewController', ['$scope', '$state', 'agreement', 'AgreementFunctions', function($scope, $state, agreement, AgreementFunctions){
    
    $scope.new = true;
    $scope.agreement = agreement;
    
    $scope.saveAgreement = function(){
        if($scope.agree.$error.required == null){
            AgreementFunctions.saveAgreement($scope.agreement);
        }
    };
    
}]);

goldenApp.controller('agreementEditController', ['$scope', '$state', 'agreement', 'AgreementFunctions', function($scope, $state, agreement, AgreementFunctions){
    
    $scope.edit = true;
    $scope.agreement = agreement;
    
    $scope.updateAgreement = function(){
        if($scope.agree.$error.required == null){
            AgreementFunctions.updateAgreement($scope.agreement);
        }
    };
    
}]);

goldenApp.controller('agreementShowController', ['$scope', '$stateParams', 'agreement', 'AgreementFunctions', function($scope, $stateParams, agreement, AgreementFunctions){
    
    $scope.agreement = agreement;
    
    $scope.deleteAgreement = AgreementFunctions.deleteAgreement;
    
}]);