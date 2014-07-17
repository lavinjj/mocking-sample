angular.module('mockingSample').controller('AdjunctsCtrl', function ($scope, $location, data) {
  $scope.adjuncts = [];

  $scope.init = function () {
    data.getAdjuncts().then(function (adjuncts) {
      $scope.adjuncts = adjuncts;
    });
  };

  $scope.init();
});