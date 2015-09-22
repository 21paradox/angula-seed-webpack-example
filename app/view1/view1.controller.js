//view1mod is module
module.exports = function (view1) {
	view1.controller('View1Ctrl', ['$scope', function ($scope) {
			console.log('view1');
	}]);
}

