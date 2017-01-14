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

goldenApp.controller('agreementNewController', ['$scope', '$state', 'agreement', function($scope, $state, agreement){
    
    $scope.new = true;
    $scope.agreement = agreement;
    
    $scope.saveAgreement = function(){
        
        if($scope.agree.$error.required == null){

            $scope.agreement.$save().then(function(res){
                $state.go('agreementShow', {id: res._id});
            });
        }

    };
    
}]);

goldenApp.controller('agreementEditController', ['$scope', '$state', '$stateParams', '$moment', 'Agreement', function($scope, $state, $stateParams, $moment, Agreement){
    
    $scope.edit = true;
    
    Agreement.get({id: $stateParams.id}, function(res){
        $scope.agreement = res;
        
        $scope.agreement.buyerDate = new Date($moment($scope.agreement.buyerDate));
        $scope.agreement.breederDate = new Date($moment($scope.agreement.breederDate));
        
    });
    
        $scope.updateAgreement = function(){
            if($scope.agree.$error.required == null){
                $scope.agreement.$update(function(){
                    $state.go('agreementShow', {id: $stateParams.id});
                });   
            }
        };
    
}]);

goldenApp.controller('agreementShowController', ['$scope', '$state', '$stateParams', '$moment', 'Agreement', function($scope, $state, $stateParams, $moment, Agreement){
    
    Agreement.get({id: $stateParams.id}, function(res){
        $scope.agreement = res;
        
        $scope.agreement.buyerDate = new Date($moment($scope.agreement.buyerDate));
        $scope.agreement.breederDate = new Date($moment($scope.agreement.breederDate));
        
    });
    
    $scope.deleteAgreement = function(){
        $scope.agreement.$remove(function(){
            $state.go('agreementIndex');
        });
    };
    
}]);