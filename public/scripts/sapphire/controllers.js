var goldenApp;

//===================
// Sapphire Controllers
//===================

goldenApp.controller('sapphireDashboardController', ['$scope', 'Sapphire', function($scope, Sapphire){
    $scope.sapphire = Sapphire.query();
}]);

goldenApp.controller('sapphireEditController', ['$scope', '$state', '$stateParams', 'Sapphire', function($scope, $state, $stateParams, Sapphire){
    Sapphire.get({id: $stateParams.id}).$promise.then(function(response){
        $scope.sapphire = response;
    });
    
    $scope.updateSapphire = function(){
        $scope.sapphire.$update(function(response){
            $state.go('sapphireShow', {id: response._id});
        });
    };
}]);

goldenApp.controller('sapphireShowController', ['$scope', '$stateParams', 'Sapphire', function($scope, $stateParams, Sapphire){
    $scope.sapphire = Sapphire.get({id: $stateParams.id});
}]);

