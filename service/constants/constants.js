angular.module('mockingSample').constant('constants', {
  config: {
    mockApi: true
  },
  apiUris: {
    adjuncts: '/api/data/adjunct',
    equipment: '/api/data/equipment',
    fermentables: '/api/data/fermentable',
    hops: '/api/data/hop',
    mashProfiles: '/api/data/mash',
    styles: '/api/data/style',
    waterProfiles: '/api/data/waterprofile',
    yeast: '/api/data/yeast'
  }
});