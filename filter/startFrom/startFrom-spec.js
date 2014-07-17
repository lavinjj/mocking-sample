describe('startFrom', function() {

	beforeEach(module('mockingSample'));

	it('should ...', inject(function($filter) {

        var filter = $filter('startFrom');

		expect(filter('input')).toEqual('output');

	}));

});