angular.module('mockingSample').filter('startFrom', function() {
    return function(input, start) {
        start = parseInt(start, 10); //parse to int
        return input.slice(start);
    };
});