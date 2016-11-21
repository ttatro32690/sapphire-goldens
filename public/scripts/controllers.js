var goldenApp;

//================
// Root Controller
//================

goldenApp.controller('GoldenController', ['$scope', '$rootScope', '$http', '$state', 'User', function($scope, $rootScope, $http, $state, User){
    $rootScope.$on('$stateChangeError', 
    function(event, toState, toParams, fromState, fromParams, error){ 
        
    });
    
    $rootScope.$watch('user', function(newValue, oldValue){
        
    });
    
    $rootScope.$on('$stateChangeError', function(event, toParams, fromState, fromParams, error){
        $state.go('landing');
    });
    
    $scope.logout = User.logout;
    
}]);

//=================
// Home Controllers
//=================
goldenApp.controller('homeController', ['$scope', function($scope){

}]);

//===========================
// Login/Register Controllers
//===========================
goldenApp.controller('loginController', ['$scope', '$http', '$rootScope', '$state', 'User', function($scope, $http, $rootScope, $state, User){
    
    $scope.user = {
        username: "Travis",
        password: "Travis"
    };
    
    $scope.login = User.login;
    
}]);

goldenApp.controller('registerController', ['$scope', '$http', 'User', function($scope, $http, User){
    $scope.user = {
        username: "Travis",
        password: "Travis"
    };
        
    
    $scope.register = User.register;
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
        
        console.log($scope.agreement.buyerDate);
        
        $scope.agreement.$save().then(function(res){
            $state.go('agreementShow', {id: res._id});
        });
    };
    
}]);

goldenApp.controller('agreementEditController', ['$scope', '$state', '$stateParams', '$moment', 'Agreement', function($scope, $state, $stateParams, $moment, Agreement){
    
    $scope.edit = true;
    
    Agreement.get({id: $stateParams.id}, function(res){
        $scope.agreement = res;
        
        $scope.agreement.dateWhelped = new Date($moment($scope.agreement.dateWhelped));
        $scope.agreement.buyerDate = new Date($moment($scope.agreement.buyerDate));
        $scope.agreement.breederDate = new Date($moment($scope.agreement.breederDate));
        
    });
    
    $scope.updateAgreement = function(){
        $scope.agreement.$update(function(){
            $state.go('agreementShow', {id: $stateParams.id});
        });
    };
    
}]);

goldenApp.controller('agreementShowController', ['$scope', '$state', '$stateParams', '$moment', 'Agreement', function($scope, $state, $stateParams, $moment, Agreement){
    
    Agreement.get({id: $stateParams.id}, function(res){
        $scope.agreement = res;
        
        $scope.agreement.dateWhelped = new Date($moment($scope.agreement.dateWhelped));
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
        $scope.application.$save(function(){
            
        }).then(function(res){
            $state.go('applicationShow', {id: res._id});
        });
    };
}]);

goldenApp.controller('applicationEditController', ['$scope', '$state', '$stateParams', '$moment', 'Application', function($scope, $state, $stateParams, $moment, Application){
    $scope.edit = true;
    
    Application.get({id: $stateParams.id}, function(res){
        $scope.application = res;
        
        $scope.application.date = new Date($moment($scope.application.date));
    });
    
    $scope.updateApplication = function(){
        $scope.application.$update(function(){
            $state.go('applicationShow', {id: $stateParams.id});
        });
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

goldenApp.controller('goldenIndexController', ['$scope', '$state', 'Golden', function($scope, $state, Golden){
   $scope.search = {};
   
   $scope.goldens = Golden.query();
   
   $scope.clearData = function(){
       $scope.search = {};
   };
}]);

goldenApp.controller('goldenNewController', ['$scope', '$state', 'Golden', function($scope, $state, Golden){
    $scope.new = true;
    
    $scope.golden = new Golden();
    
    $scope.golden.birthdate = new Date();
    
    $scope.saveGolden = function(){
        
        $scope.golden.$save(function(){
            
        }).then(function(res){
            $state.go('goldensShow', {id: res._id});
        });
    };
}]);

goldenApp.controller('goldenEditController', ['$scope', '$state', '$stateParams', '$moment', 'Golden', function($scope, $state, $stateParams, $moment, Golden){
    $scope.edit = true;
    
    Golden.get({id: $stateParams.id}, function(res){
    
        $scope.golden = res;
        
        $scope.golden.birthdate = new Date($moment($scope.golden.birthdate));
    
    });
    
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
        $scope.golden.whelpedDate = new Date($moment($scope.golden.whelpedDate));
   });
   
   $scope.deleteGolden = function(){
       $scope.golden.$remove(function(){
           $state.go('goldensIndex');
       });
   };
}]);

//====================
// Gallery Controllers
//====================
goldenApp.controller('galleryController', ['$scope', '$state', function($scope, $state){
    
   $state.go('galleryIndex');
   
}]);

goldenApp.controller('galleryIndexController', ['$scope', '$state', 'images', function($scope, $state, images){
    $scope.images = images;
}]);

goldenApp.controller('galleryNewController', ['$scope', '$state', 'Image', function($scope, $state, Image){
    $scope.new = true;
    
    $scope.image = new Image();
    
    $scope.saveImage = function(){
        $scope.image.$save(function(){
            
        }).then(function(res){
            $state.go('galleryShow', {id: res._id});
        });
    };
}]);

goldenApp.controller('galleryEditController', ['$scope', '$state', '$stateParams', 'Image', function($scope, $state, $stateParams, Image){
    $scope.edit = true;
    
    $scope.image = Image.get({id: $stateParams.id});
    
    $scope.updateImage = function(){
        $scope.image.$update(function(){
           $state.go('galleryShow', {id: $stateParams.id});
        });
    };
}]);

goldenApp.controller('galleryShowController', ['$scope', '$state', '$stateParams', 'Image', function($scope, $state, $stateParams, Image){
    
    $scope.image = Image.get({id: $stateParams.id});
    
    $scope.deleteImage = function(){
        $scope.image.$remove(function(){
            $state.go('galleryIndex');
        });
    };
}]);
