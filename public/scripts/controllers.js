var goldenApp;

//================
// Root Controller
//================

goldenApp.controller('GoldenController', ['$scope', '$rootScope', '$http', '$state', '$timeout', 'User', function($scope, $rootScope, $http, $state, $timeout, User){
    
    $rootScope.$on('$stateChangeError', function(event, toParams, fromState, fromParams, error){
        $state.go('landing');
    });
    
    $scope.userLogout = function(){
        var promise = User.logout();
        
        promise.then(function(message){
            $scope.message = "Successfully Logged Out";
            
            $timeout(function(){
                $rootScope.user = null;
                $scope.message = null;
                $state.go('landing');
            }, 1500);  
        });
    };

    
}]);

//=================
// Home Controllers
//=================         
goldenApp.controller('homeController', ['$scope', 'sapphire', function($scope, sapphire){
    $scope.sapphire = sapphire;
}]);

//==================
// About Controllers
//==================
goldenApp.controller('aboutController', ['$scope', 'sapphire', function($scope, sapphire){
    $scope.sapphire = sapphire;
}]);


//====================
// Contact Controllers
//====================
goldenApp.controller('contactController', ['$scope', '$state', function($scope, $state){
   $state.go('agreement');
}]);

goldenApp.controller('dashboardController', ['$scope', function($scope){
    
}]);