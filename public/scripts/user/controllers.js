var goldenApp;

//===========================
// Login/Register Controllers
//===========================
goldenApp.controller('loginController', ['$scope', '$http', '$rootScope', '$state', '$timeout', 'User', function($scope, $http, $rootScope, $state, $timeout, User){

    $scope.userLogin = function(user){
        
        if($scope.login.$error.required == null){
            $scope.message = null;
            $scope.warning = null;
            
            var promise = User.login(user);
            
            promise.then(function(message){
                if(message.status == 200){
                    $scope.message = "Successfully Logged In As: " + message.data;
                    $timeout(function(){
                        $rootScope.user = message.data;
                        $state.go('dashboard');
                    }, 1500);
                }
            }, function(warning){
                if(warning.status == 401){
                    $scope.warning = "Invalid Username and/or Password, Please Try Again!";
                }
            });
        }
    };

}]);

goldenApp.controller('registerController', ['$scope', '$http', '$rootScope', '$state', '$timeout', 'User', function($scope, $http, $rootScope, $state, $timeout, User){
    
    $scope.registerUser = function(user){
        if($scope.register.$error.required == null){
            $scope.message = null;
            $scope.warning = null;
            
            var promise = User.register(user);
            
            promise.then(function(message){
                if(message.status == 200){
                    $scope.message = "Successfully Registered As: " + message.data;
                    $timeout(function(){
                        $state.go('landing');
                    }, 1500);
                }
            }, function(warning){
                if(warning.status == 401){
                    $scope.warning = "Could Not Register User";
                }
            });
        }   
    };
    
}]);