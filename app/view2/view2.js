'use strict';

require('angular');
require('angular-ui-router');
require('ng-debounce');
require('./view2.css');

// create a sub module
var mod = angular.module('myApp.view2', ['debounce', 'ui.router']);

// load controller 
require('./view2.controller')(mod);

module.exports = {
	name: mod.name,
	template: require('./view2.html') //load template
};