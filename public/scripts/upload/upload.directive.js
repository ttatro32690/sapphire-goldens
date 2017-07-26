var goldenApp;

goldenApp.directive('upload', ['uploadFactory', function(uploadFactory){
    return {
        templateUrl: '/views/templates/upload.ejs',
        replace: true,
        scope: {
            value: '=',
        },
        link: function(scope, element, attrs){
            scope.$watch('files', function(newVal, oldVal){
                scope.files = newVal;
            });
            
            // upload button
            scope.upload = function(){
                var promise = uploadFactory.post(scope.files);
                promise.then(function(response){
                    scope.value = '/public/images/uploads/' + response.data.name;
                }, function(response){
                    //failure
                });
            };
        },
    };
}]);