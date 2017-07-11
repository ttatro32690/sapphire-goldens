var goldenApp;

//======================
// Agreement Controllers
//======================
goldenApp.controller('agreementController', ['$rootScope', '$state', function($rootScope, $state){
    
    if($rootScope.user){
        $state.go('agreementIndex');
    }
    
}]);