var goldenApp;

goldenApp.factory('uploadFactory', ['$http', function($http){
    
    var upload = {
        post: post
    };
    
    return upload;
    
    function post(files) {
        var formData = new FormData();
        
        files.forEach(function(file){
            formData.append('uploads[]', file, file.name);
        });
        
        return $http({
            method: 'POST',
            url: '/uploads/',
            data: formData,
            headers: {
                'Content-Type': undefined
            },
        }).then(function(response){
            return response;
        }, function(response){
            return response;
        });
    }
}]);