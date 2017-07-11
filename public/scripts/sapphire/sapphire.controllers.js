var goldenApp;

//===================
// Sapphire Controllers
//===================
goldenApp.controller('sapphireEditController', ['$scope', '$state', 'Sapphire', 'sapphire', function($scope, $state, Sapphire, sapphire){
    $scope.sapphire = sapphire;
    $scope.updateSapphire = function(){
        $scope.sapphire.$update(function(response){
            $state.go('sapphireShow', {id: response._id});
        });
    };
}]);

goldenApp.controller('sapphireShowController', ['$scope', '$stateParams', 'Sapphire', 'sapphire', function($scope, $stateParams, Sapphire, sapphire){
    $scope.sapphire = sapphire;
}]);

