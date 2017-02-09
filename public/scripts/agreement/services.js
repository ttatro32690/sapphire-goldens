var goldenApp;

/** =======================================================
    Agreement Services
        Application: A $resource object for CRUD utilities
    ======================================================= **/

goldenApp.factory('Agreement', ['$resource', function($resource){
   return $resource('/agreement/:id', {id: '@_id'},
   {
      'update': {method: 'PUT'}
   });
}]);

goldenApp.factory('AgreementFunctions', ['Agreement', '$state', function(Agreement, $state){
    
    var agreementFunctions = {};
    
    agreementFunctions.newDates = function(agreement){
        
        agreement.dateWhelped = new Date();
        agreement.buyerDate = new Date();
        agreement.breederDate = new Date();
        
        return agreement;
    };
    
    agreementFunctions.intToExt = function(agreement){
        
        agreement.dateWhelped = new Date(agreement.dateWhelped);
        agreement.buyerDate = new Date(agreement.buyerDate);
        agreement.breederDate = new Date(agreement.breederDate);
        
        return agreement;
    };
    
    agreementFunctions.extToInt = function(agreement){
        
        agreement.dateWhelped = agreement.dateWhelped.toISOString();
        agreement.buyerDate = agreement.buyerDate.toISOString();
        agreement.breederDate = agreement.breederDate.toISOString();
        
        return agreement;
    };
    
    agreementFunctions.newAgreement = function(){
        return new Agreement();
    };
    
    agreementFunctions.saveAgreement = function(agreement){
        return agreement.$save().then(function(newAgreement){
            agreement = agreementFunctions.intToExt(newAgreement);
            $state.go('agreementShow',{id: newAgreement._id});
        });
    };
    
    agreementFunctions.updateAgreement = function(agreement){
        
        return agreement.$update().then(function(updatedAgreement){
            agreement = agreementFunctions.intToExt(updatedAgreement);
            $state.go('agreementShow', {id: updatedAgreement._id});
        });
    };
    
    agreementFunctions.deleteAgreement = function(agreement){
        agreement.$remove(function(){
            $state.go('agreementIndex');
        });
    };
    
    agreementFunctions.getAgreement = function(id){
        return Agreement.get({id: id});
    };
    
    agreementFunctions.getAllAgreements = function(){
        return Agreement.query();
    };
    
    return agreementFunctions;
}]);