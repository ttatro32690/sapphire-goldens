var goldenApp;

goldenApp.controller('appController', ['$rootScope', '$state', 'ngNotify', 'User', function($rootScope, $state, ngNotify, User){
    
    var app = this;
    
    app.userLogout = function(){
        var promise = User.logout();
        
        promise.then(function(message){
            $rootScope.user = null;
            ngNotify.set('Successfully Logged Out!');
            $state.go('landing');
        });
    };
    
    //
    
    $rootScope.$on('$stateChangeError', function(){
        $state.go('landing');
    });

    
}]);

goldenApp.controller('homeController', ['sapphire', function(sapphire){
    var homeVm = this;
    homeVm.data = sapphire;
}]);

goldenApp.controller('aboutController', ['sapphire', function(sapphire){
    var aboutVm = this;
    aboutVm.data = sapphire;
}]);