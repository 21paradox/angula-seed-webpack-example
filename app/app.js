'use strict';

require('angular');
require('./app.css');
require('./view1/view1.js')
require('oclazyload');
require('angular-ui-router');
require('./components/version/version.js');

// Declare app level module which depends on views, and components
angular.module('myApp', [
      'ui.router',
      'oc.lazyLoad',
      'myApp.view1',
      'myApp.version'
])

.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function ($urlRouterProvider, $stateProvider, $locationProvider) {

      $urlRouterProvider.otherwise('/view1');

      function loadModule(fn) {

            return ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {

                  return $q(function (resolve) {

                        fn(function (mod) {
                              $ocLazyLoad.inject(mod.name);
                              resolve(mod.template);
                        })
                  });
            }];
      }

      $stateProvider.state('view2', {
            url: '/view2',
            templateProvider: loadModule(function (cb) {
                  require(['./view2/view2.js'], cb);
            }),
            controller: 'View2Ctrl',
      })
      
      .state('view3', {
            url: '/view3',
            templateProvider: loadModule(function (cb) {
                  require(['./view3/view3.js'], cb);
            }),
            controller: 'View3Ctrl',
      });
}]);
  
   