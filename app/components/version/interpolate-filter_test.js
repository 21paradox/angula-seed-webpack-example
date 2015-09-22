'use strict';

require('./version.js');

describe('myApp.version module', function() {
  beforeEach(window.module('myApp.version'));

  describe('interpolate filter', function() {
    beforeEach(window.module(function($provide) {
      $provide.value('version', 'TEST_VER');
    }));

    it('should replace VERSION', inject(function(interpolateFilter) {
      expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
    }));
  });
});
