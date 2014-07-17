angular.module('mockingSample').controller('AdjunctsCtrl', function ($scope, $location, data) {
  $scope.itemsPerPage = 5;
  $scope.adjuncts = [];
  $scope.currentAdjunctPage = 0;

  $scope.changeAdjunctPage = function (page) {
    $scope.currentAdjunctPage = page;
  };

  $scope.getAdjunctStartFrom = function () {
    return (($scope.currentAdjunctPage - 1) * $scope.itemsPerPage);
  };

  $scope.init = function () {
    data.getAdjuncts().then(function (adjuncts) {
      $scope.adjuncts = adjuncts;
    });
  };

  $scope.init();
});