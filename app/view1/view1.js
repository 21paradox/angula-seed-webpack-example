'use strict';

require('./view1.scss');
var mod = angular.module('myApp.view1', ['ui.router']);

require('./view1.controller.js')(mod);

 
// .config(['$stateProvider', function($stateProvider) {
//   $stateProvider.state('view1', {
//     template: require('./view1.html'),
//     controller: 'View1Ctrl',
//     url:'/view1'
//   });  
// }])
module.exports = {
  	name: mod.name,
	template: require('./view1.html') //load template
};