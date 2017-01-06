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
goldenApp.controller('homeController', ['$scope', function($scope){

}]);

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
                        $state.go('landing');
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

//==================
// About Controllers
//==================
goldenApp.controller('aboutController', ['$scope', 'sapphires', function($scope, sapphires){
    $scope.sapphires = sapphires;
}]);


//====================
// Contact Controllers
//====================
goldenApp.controller('contactController', ['$scope', '$state', function($scope, $state){
   $state.go('agreement');
}]);

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
            console.log($scope.agreement.buyerDate);
            
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

//========================
// Application Controllers
//========================
goldenApp.controller('applicationController', ['$scope', '$state', function($scope, $state){
    $state.go("applicationNew");
}]);

goldenApp.controller('applicationIndexController', ['$scope', '$state', 'Application', function($scope, $state, Application){
    $scope.applications = Application.query();    
}]);

goldenApp.controller('applicationNewController', ['$scope', '$state', 'Application', function($scope, $state, Application){
    $scope.new = true;
    $scope.application = new Application();
    $scope.application.date = new Date();
    
    
        $scope.saveApplication = function(){
            if($scope.appl.$error.required == null){
                $scope.application.$save(function(){
                    
                }).then(function(res){
                    $state.go('applicationShow', {id: res._id});
                });
            }
        };   
}]);

goldenApp.controller('applicationEditController', ['$scope', '$state', '$stateParams', '$moment', 'Application', function($scope, $state, $stateParams, $moment, Application){
    $scope.edit = true;
    
    Application.get({id: $stateParams.id}, function(res){
        $scope.application = res;
        
        $scope.application.date = new Date($moment($scope.application.date));
    });
    
        $scope.updateApplication = function(){
            if($scope.appl.$error.required == null){
                $scope.application.$update(function(){
                    $state.go('applicationShow', {id: $stateParams.id});
                });
            }
        };   

}]);

goldenApp.controller('applicationShowController', ['$scope', '$state', '$stateParams', '$moment', 'Application', function($scope, $state, $stateParams, $moment, Application){
    
    Application.get({id: $stateParams.id}, function(res){
        $scope.application = res;
        
        $scope.application.date = new Date($moment($scope.application.date));
    });
    
    $scope.deleteApplication = function(){
        $scope.application.$remove(function(){
            $state.go('applicationIndex');
        });
    };
}]);

//===================
// Golden Controllers
//===================
goldenApp.controller('goldenController', ['$scope', '$state', function($scope, $state){
    $state.go('goldensIndex');
}]);

goldenApp.controller('goldenIndexController', ['$scope', 'Golden', function($scope, Golden){
   
   $scope.search = {};
   $scope.types = [];
   
   Golden.query(function(goldens){
       $scope.goldens = goldens;

        goldens.forEach(function(golden, index){
            if(golden.type != null){
               if($scope.types.includes(golden.type) == false){
                   $scope.types.push(golden.type);
               }
            }
        });
    });
   
   $scope.clearData = function(){
       $scope.search = {};
   };
}]);

goldenApp.controller('goldenNewController', ['$scope', '$state', 'Golden', function($scope, $state, Golden){
    
    $scope.new = true;
    $scope.types = [];
    $scope.existing = true;
    $scope.golden = new Golden();
    $scope.golden.birthdate = new Date();
    
    Golden.query(function(goldens){
        goldens.forEach(function(golden, index){
            if(golden.type != null){
               if($scope.types.includes(golden.type) == false){
                   $scope.types.push(golden.type);
               }
            }
        });
    });
    
    $scope.changeTypeInput = function(){
        $scope.existing = !$scope.existing;
    };
    
    $scope.saveGolden = function(){
        
        $scope.golden.$save(function(){
            
        }).then(function(res){
            $state.go('goldensShow', {id: res._id});
        });
    };
}]);

goldenApp.controller('goldenEditController', ['$scope', '$state', '$stateParams', '$moment', 'Golden', function($scope, $state, $stateParams, $moment, Golden){
    $scope.edit = true;
    $scope.existing = true;
    $scope.types = [];
    
    Golden.get({id: $stateParams.id}, function(res){
        $scope.golden = res;
        $scope.golden.birthdate = new Date($moment($scope.golden.birthdate));
    });
    
    Golden.query(function(goldens){
        goldens.forEach(function(golden, index){
            if(golden.type != null){
               if($scope.types.includes(golden.type) == false){
                   $scope.types.push(golden.type);
               }
            }
        });
    });
    
    $scope.changeTypeInput = function(){
        $scope.existing = !$scope.existing;
    };
    
    $scope.updateGolden = function(){
        $scope.golden.$update(function(){
            $state.go('goldensShow', {id: $stateParams.id});
        });
    };
}]);

goldenApp.controller('goldenShowController', ['$scope', '$state', '$stateParams', '$moment', 'Golden', function($scope, $state, $stateParams, $moment, Golden){
   Golden.get({id: $stateParams.id}, function(res){
       $scope.golden = res;
       
        $scope.golden.birthdate = new Date($moment($scope.golden.birthdate));
        
        $scope.goldens = Golden.query({name: $scope.golden.name}); 
   });
   
   $scope.deleteGolden = function(){
       $scope.golden.$remove(function(){
           $state.go('goldensIndex');
       });
   };
}]);
