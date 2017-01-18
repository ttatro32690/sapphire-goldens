var goldenApp;

//======================
// Agreement Controllers
//======================
goldenApp.controller('agreementController', ['$scope', '$state', function($scope, $state){
    $state.go('agreementNew');
}]);

goldenApp.controller('agreementIndexController', ['$scope', 'agreements', function($scope, agreements){
    
    $scope.agreements = agreements;
    
}]);

goldenApp.controller('agreementNewController', ['$scope', 'AgreementFunctions', function($scope,  AgreementFunctions){
    
    $scope.new = true;
    var agreement = AgreementFunctions.newAgreement();
    $scope.agreement = AgreementFunctions.newDates(agreement);
    
    $scope.saveAgreement = function(){
        if($scope.agree.$error.required == null){
            $scope.agreement = AgreementFunctions.saveAgreement($scope.agreement);
        }
    };
    
}]);

goldenApp.controller('agreementEditController', ['$scope', '$stateParams', '$moment', 'AgreementFunctions', function($scope, $stateParams, $moment, AgreementFunctions){
    
    $scope.edit = true;
    var agreement = AgreementFunctions.getAgreement($stateParams.id);
    
    agreement.$promise.then(function(agreement){
        $scope.agreement = AgreementFunctions.intToExt(agreement);
        agreement = null;
    });
    
    $scope.updateAgreement = function(){
        if($scope.agree.$error.required == null){
            $scope.agreement = AgreementFunctions.updateAgreement($scope.agreement);
        }
    };
    
}]);

goldenApp.controller('agreementShowController', ['$scope', '$stateParams', '$moment', 'AgreementFunctions', function($scope, $stateParams, $moment, AgreementFunctions){
    
    var agreement = AgreementFunctions.getAgreement($stateParams.id);
    
    agreement.$promise.then(function(agreement){
        $scope.agreement = AgreementFunctions.intToExt(agreement);
        agreement = null;
    });
    
    $scope.deleteAgreement = AgreementFunctions.deleteAgreement;
    
}]);