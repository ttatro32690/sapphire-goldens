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
    
    $scope.agreement.dateWhelped = new Date();
    $scope.agreement.buyerDate = new Date();
    $scope.agreement.breederDate = new Date();
    
    $scope.saveAgreement = function(){
        $scope.agreement.$save().then(function(res){
            $state.go('agreementShow', {id: res._id});
        });
    };
    
}]);

goldenApp.controller('agreementEditController', ['$scope', '$state', '$stateParams', '$moment', 'Agreement', function($scope, $state, $stateParams, $moment, Agreement){
    
    $scope.edit = true;
    
    Agreement.get({id: $stateParams.id}, function(res){
        $scope.agreement = res;
        
        $scope.agreement.dateWhelped = new Date($moment($scope.agreement.dateWhelped).format("YYYY-MM-DD"));
        $scope.agreement.buyerDate = new Date($moment($scope.agreement.buyerDate).format("YYYY-MM-DD"));
        $scope.agreement.breederDate = new Date($moment($scope.agreement.breederDate).format("YYYY-MM-DD"));
        
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
        
        $scope.agreement.dateWhelped = new Date($moment($scope.agreement.dateWhelped).format("YYYY-MM-DD"));
        $scope.agreement.buyerDate = new Date($moment($scope.agreement.buyerDate).format("YYYY-MM-DD"));
        $scope.agreement.breederDate = new Date($moment($scope.agreement.breederDate).format("YYYY-MM-DD"));
        
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
goldenApp.controller('applicationController', ['$scope', function($scope){
    
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
        
        $scope.application.date = new Date($moment($scope.application.date).format("YYYY-MM-DD"));
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
        
        $scope.application.date = new Date($moment($scope.application.date).format("YYYY-MM-DD"));
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
   $scope.goldens = Golden.query();
}]);

goldenApp.controller('goldenNewController', ['$scope', '$state', 'Golden', function($scope, $state, Golden){
    $scope.new = true;
    
    $scope.golden = new Golden();
    
    $scope.golden.birthdate = new Date();
    $scope.golden.whelpedDate = new Date();
    
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
        
        $scope.golden.birthdate = new Date($moment($scope.golden.birthdate).format("YYYY-MM-DD"));
        $scope.golden.whelpedDate = new Date($moment($scope.golden.whelpedDate).format("YYYY-MM-DD"));
    
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
       
        $scope.golden.birthdate = new Date($moment($scope.golden.birthdate).format("YYYY-MM-DD"));
        $scope.golden.whelpedDate = new Date($moment($scope.golden.whelpedDate).format("YYYY-MM-DD"));
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
