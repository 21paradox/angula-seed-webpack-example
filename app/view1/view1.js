'use strict';

angular.module('myApp.view1', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('view1', {
    template: require('./view1.html'),
    controller: 'View1Ctrl',
    url:'/view1'
  });
   
  console.log('config');
  
}])

.controller('View1Ctrl', [function() {

  console.log(222);


}]);
