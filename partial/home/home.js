angular.module('mockingSample').controller('HomeCtrl',function($scope, $location){
  $scope.goTo = function(uri){
    $location.path(uri);
  };

});