var goldenApp;

//===========================
// Login/Register Controllers
//===========================
goldenApp.controller('loginController', ['$scope', '$http', '$rootScope', '$state', '$timeout', 'ngNotify', 'User', function($scope, $http, $rootScope, $state, $timeout, ngNotify, User){

    $scope.userLogin = function(user){
        if($scope.login.$error.required == null){
            var promise = User.login(user);
            
            promise.then(function(message){
                if(message.status == 200){
                    ngNotify.set('Successfully Logged In As: ' + message.data);
                    $rootScope.user = message.data;
                    $state.go('dashboard');
                }
            }, function(warning){
                if(warning.status == 401){
                    ngNotify.set('Invalid Username and/or Password, Please Try Again!', 'error');
                }
            });
        }
    };

}]);

goldenApp.controller('registerController', ['$scope', '$http', '$state', 'ngNotify', 'User', function($scope, $http, $state, ngNotify, User){
    
    $scope.registerUser = function(user){
        if($scope.register.$error.required == null){
            var promise = User.register(user);
            
            promise.then(function(message){
                if(message.status == 200){
                    ngNotify.set("Successfully Registered As: " + message.data);
                    $state.go('landing');
                }
            }, function(warning){
                if(warning.status == 401){
                    ngNotify.set('Could Not Register User', 'error');
                }
            });
        }   
    };
    
}]);