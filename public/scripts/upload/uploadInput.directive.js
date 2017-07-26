var goldenApp;

goldenApp.directive('uploadInput', function(){
    return {
        templateUrl: '/views/templates/uploadInput.ejs',
        replace: true,
        scope: {
            files: '='
        },
        link: function(scope, element, attrs){
            element.on('change', function(){
                // initialize element file array and scope file array
                var fileList = element.get(0).files;
                scope.files = [];
                
                // push files into scope array
                for(var i = 0; i < fileList.length; i++){
                    scope.files.push(fileList[i]);
                }
                // run the digest loop for parent watcher
                scope.$apply();
            });
        }
    };
});