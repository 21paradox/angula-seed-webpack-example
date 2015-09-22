'use strict';

require('./version.js');

describe('myApp.version module', function() {
  beforeEach(window.module('myApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
