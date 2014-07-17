angular.module('mockingSample', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate', 'apiMock']);

angular.module('mockingSample').config(function($routeProvider) {

    $routeProvider.when('/',{templateUrl: 'partial/home/home.html'});
    $routeProvider.when('/adjuncts',{templateUrl: 'partial/adjuncts/adjuncts.html'});
    $routeProvider.when('/adjunct/:id',{templateUrl: 'partial/adjunct/adjunct.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/'});

});

angular.module('mockingSample').config(function (apiMockProvider) {
  apiMockProvider.config({
    mockDataPath: '/mock_data',
    apiPath: '/api'
  });
});

angular.module('mockingSample').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
