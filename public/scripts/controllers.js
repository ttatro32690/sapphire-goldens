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

goldenApp.controller('agreementNewController', ['$scope', '$state', '$stateParams', 'Agreement', function($scope, $state, $stateParams, Agreement){
    
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

goldenApp.controller('applicationIndexController', ['$scope', '$state', '$stateParams', 'Application', function($scope, $state, $stateParams, Application){
    $scope.applications = Application.query();    
}]);

goldenApp.controller('applicationNewController', ['$scope', '$state', '$stateParams', 'Application', function($scope, $state, $stateParams, Application){
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

goldenApp.controller('goldenIndexController', ['$scope', function($scope){
   
}]);

goldenApp.controller('goldenNewController', ['$scope', function($scope){
   
}]);

goldenApp.controller('goldenEditController', ['$scope', function($scope){
   
}]);

goldenApp.controller('goldenShowController', ['$scope', function($scope){
   
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

}]);

goldenApp.controller('galleryEditController', ['$scope', '$state', 'Image', function($scope, $state, Image){

}]);

goldenApp.controller('galleryShowController', ['$scope', '$state', 'Image', function($scope, $state, Image){

}]);
