'use strict';

require('./view2.js');

describe('myApp.view2 module', function() {

  beforeEach(window.module('myApp.view2'));

  describe('view2 controller', function(){

    it('should ....', inject(function($rootScope, $controller) {
 
      //spec body
      var scope = $rootScope.$new();
      var view2Ctrl = $controller('View2Ctrl', {$scope: scope});
      expect(view2Ctrl).toBeDefined();
      
      
    }));

  });
});