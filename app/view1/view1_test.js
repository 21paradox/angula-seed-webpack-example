'use strict';

require('./view1.js');

describe('myApp.view1 module', function() {

 beforeEach(window.module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($rootScope, $controller) {
      //spec body
      var scope = $rootScope.$new();
      var view1Ctrl = $controller('View1Ctrl', {$scope: scope});
      expect(view1Ctrl).toBeDefined();
    }));

  });
});