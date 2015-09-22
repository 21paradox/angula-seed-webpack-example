'use strict';

require('./version.js');

describe('myApp.version module', function() {
  beforeEach(window.module('myApp.version'));

  describe('app-version directive', function() {
    it('should print current version', function() {
      window.module(function($provide) {
        $provide.value('version', 'TEST_VER');
      });
      inject(function($compile, $rootScope) {
        var element = $compile('<span app-version></span>')($rootScope);
        expect(element.text()).toEqual('TEST_VER');
      });
    });
  });
});
