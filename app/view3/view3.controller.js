
//view2mod is module
module.exports = function (view2mod) {

	view2mod.config(['$urlRouterProvider', '$stateProvider', '$locationProvider',

		function ($urlRouterProvider, $stateProvider, $locationProvider) {

		}])

		.controller('View2Ctrl', ['$scope', 'debounce', function ($scope, debounce) {

			console.log('view2');

		}]);
}