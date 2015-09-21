'use strict';

require('angular');
require('angular-ui-router');
require('ng-debounce');

// create a sub module
var mod = angular.module('myAppview2', ['debounce', 'ui.router']);

// load controller 
require('./view3.controller')(mod);

module.exports = {
	name: mod.name,
	template: require('./view3.html') //load template
};