var goldenApp;

//======================
// Agreement Controllers
//======================
goldenApp.controller('agreementController', ['$state', function($state){
    
    $state.go('agreementNew');
    
}]);

goldenApp.controller('agreementIndexController', ['$scope', 'agreements', function($scope, agreements){
    
    $scope.agreements = agreements;
    
}]);

goldenApp.controller('agreementNewController', ['$scope', '$state', 'agreement', 'AgreementFunctions', function($scope, $state, agreement, AgreementFunctions){
    
    $scope.new = true;
    $scope.agreement = agreement;
    
    $scope.saveAgreement = function(){
        if($scope.agree.$error.required == null){
            $scope.agreement = AgreementFunctions.saveAgreement($scope.agreement);
            $scope.agreement.then(function(tempAgreement){
                return $state.go('agreementShow',{id: tempAgreement._id});
            });
        }
    };
    
}]);

goldenApp.controller('agreementEditController', ['$scope', '$stateParams', '$moment', 'agreement', 'AgreementFunctions', function($scope, $stateParams, $moment, agreement, AgreementFunctions){
    
    $scope.edit = true;
    $scope.agreement = agreement;
    
    $scope.updateAgreement = function(){
        if($scope.agree.$error.required == null){
            $scope.agreement = AgreementFunctions.updateAgreement($scope.agreement);
        }
    };
    
}]);

goldenApp.controller('agreementShowController', ['$scope', '$stateParams', 'agreement', 'AgreementFunctions', function($scope, $stateParams, agreement, AgreementFunctions){
    
    $scope.agreement = agreement;
    
    $scope.deleteAgreement = AgreementFunctions.deleteAgreement;
    
}]);