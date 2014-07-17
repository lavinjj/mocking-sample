angular.module('mockingSample').factory('data',function(constants, $http) {

  var getAdjuncts = function ( ) {
    return $http( { method: "GET", url: constants.apiUris.adjuncts, cache: false, apiMock: constants.config.mockApi } ).then( function ( response ) {
      return response.data;
    }, function () {
      return [];
    } );
  };

  var getAdjunctById  = function(id) {
    return $http( { method: "GET", url: constants.apiUris.adjuncts + '/' + id, cache: false, apiMock: constants.config.mockApi } ).then( function ( response ) {
      return response.data;
    }, function () {
      return [];
    } );
  };

	var data = {
    getAdjuncts: getAdjuncts,
    getAdjunctById: getAdjunctById
  };

	return data;
});