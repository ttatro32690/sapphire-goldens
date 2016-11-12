var goldenApp;

//=================
// Home Controllers
//=================
goldenApp.controller('homeController', ['$scope', function($scope){
   
}]);

//==================
// About Controllers
//==================
goldenApp.controller('aboutController', ['$scope', 'Sapphire', function($scope, Sapphire){
    $scope.sapphires = Sapphire.query();  
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
goldenApp.controller('agreementController', ['$scope', function($scope){
    
}]);

goldenApp.controller('agreementIndexController', ['$scope', 'Agreement', function($scope, Agreement){
    
    $scope.agreements = Agreement.query(); 
    
}]);

goldenApp.controller('agreementNewController', ['$scope', '$state', 'Agreement', function($scope, $state, Agreement){
    
    $scope.new = true;
    
    $scope.agreement = new Agreement();
    
    $scope.saveAgreement = function(){
        $scope.agreement.$save().then(function(res){
            $state.go('agreementShow', {id: res._id});
        });
    };
    
}]);

goldenApp.controller('agreementEditController', ['$scope', '$state', '$stateParams', 'Agreement', function($scope, $state, $stateParams, Agreement){
    
    $scope.edit = true;
    
    $scope.agreement = Agreement.get({id: $stateParams.id});
    
    $scope.updateAgreement = function(){
        $scope.agreement.$update(function(){
            $state.go('agreementShow', {id: $stateParams.id});
        });
    };
    
}]);

goldenApp.controller('agreementShowController', ['$scope', '$state', '$stateParams', 'Agreement', function($scope, $state, $stateParams, Agreement){
    
    $scope.agreement = Agreement.get({id: $stateParams.id});
    
    $scope.deleteAgreement = function(){
        $scope.agreement.$remove(function(){
            $state.go('agreementIndex');
        });
    };
    
}]);

//========================
// Application Controllers
//========================
goldenApp.controller('applicationController', ['$scope', function($scope){
    
}]);

goldenApp.controller('applicationIndexController', ['$scope', '$state', 'Application', function($scope, $state, Application){
    $scope.applications = Application.query();    
}]);

goldenApp.controller('applicationNewController', ['$scope', '$state', 'Application', function($scope, $state, Application){
    $scope.new = true;
    
    $scope.application = new Application();
    
    $scope.saveApplication = function(){
        $scope.application.$save(function(){
            
        }).then(function(res){
            $state.go('applicationShow', {id: res._id});
        });
    };
}]);

goldenApp.controller('applicationEditController', ['$scope', '$state', '$stateParams', 'Application', function($scope, $state, $stateParams, Application){
    $scope.edit = true;
    
    $scope.application = Application.get({id: $stateParams.id});
    
    $scope.updateApplication = function(){
        $scope.application.$update(function(){
            $state.go('applicationShow', {id: $stateParams.id});
        });
    };
}]);

goldenApp.controller('applicationShowController', ['$scope', '$state', '$stateParams', 'Application', function($scope, $state, $stateParams, Application){
    
    $scope.application = Application.get({id: $stateParams.id});
    
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
   $scope.goldens = Golden.query();
}]);

goldenApp.controller('goldenNewController', ['$scope', '$state', 'Golden', function($scope, $state, Golden){
    $scope.new = true;
    
    $scope.golden = new Golden();
    
    $scope.saveGolden = function(){
        $scope.golden.$save(function(){
            
        }).then(function(res){
            $state.go('goldensShow', {id: res._id});
        });
    };
}]);

goldenApp.controller('goldenEditController', ['$scope', '$state', '$stateParams', 'Golden', function($scope, $state, $stateParams, Golden){
    $scope.edit = true;
    
    $scope.golden = Golden.get({id: $stateParams.id});
    
    $scope.updateGolden = function(){
        $scope.golden.$update(function(){
            $state.go('goldensShow', {id: $stateParams.id});
        });
    };
}]);

goldenApp.controller('goldenShowController', ['$scope', '$state', '$stateParams', 'Golden', function($scope, $state, $stateParams, Golden){
   $scope.golden = Golden.get({id: $stateParams.id});
   
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

goldenApp.controller('galleryIndexController', ['$scope', '$state', 'Image', function($scope, $state, Image){
    
   $scope.images = Image.query();
   
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
