angular.module('mockingSample').constant('constants', {
  config: {
    mockApi: true
  },
  apiUris: {
    adjuncts: 'api/adjuncts',
    equipment: 'api/equipment',
    fermentables: 'api/fermentable',
    hops: 'api/hop',
    mashProfiles: 'api/mash',
    styles: 'api/style',
    waterProfiles: 'api/waterprofile',
    yeast: 'api/yeast'
  }
});