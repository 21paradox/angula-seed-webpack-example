webpackJsonp([1],{

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	__webpack_require__(9);
	__webpack_require__(14);
	
	// create a sub module
	var mod = angular.module('myAppview2', ['debounce', 'ui.router']);
	
	// load controller 
	__webpack_require__(15)(mod);
	
	module.exports = {
		name: mod.name,
		template: __webpack_require__(16) //load template
	};

/***/ },

/***/ 14:
/***/ function(module, exports) {

	'use strict';
	
	angular.module('debounce', [])
	  .service('debounce', ['$timeout', function ($timeout) {
	    return function (func, wait, immediate, invokeApply) {
	      var timeout, args, context, result;
	      function debounce() {
	        /* jshint validthis:true */
	        context = this;
	        args = arguments;
	        var later = function () {
	          timeout = null;
	          if (!immediate) {
	            result = func.apply(context, args);
	          }
	        };
	        var callNow = immediate && !timeout;
	        if (timeout) {
	          $timeout.cancel(timeout);
	        }
	        timeout = $timeout(later, wait, invokeApply);
	        if (callNow) {
	          result = func.apply(context, args);
	        }
	        return result;
	      }
	      debounce.cancel = function () {
	        $timeout.cancel(timeout);
	        timeout = null;
	      };
	      return debounce;
	    };
	  }])
	  .directive('debounce', ['debounce', '$parse', function (debounce, $parse) {
	    return {
	      require: 'ngModel',
	      priority: 999,
	      link: function ($scope, $element, $attrs, ngModelController) {
	        var debounceDuration = $parse($attrs.debounce)($scope);
	        var immediate = !!$parse($attrs.immediate)($scope);
	        var debouncedValue, pass;
	        var prevRender = ngModelController.$render.bind(ngModelController);
	        var commitSoon = debounce(function (viewValue) {
	          pass = true;
	          ngModelController.$$lastCommittedViewValue = debouncedValue;
	          ngModelController.$setViewValue(viewValue);
	          pass = false;
	        }, parseInt(debounceDuration, 10), immediate);
	        ngModelController.$render = function () {
	          prevRender();
	          commitSoon.cancel();
	          //we must be first parser for this to work properly,
	          //so we have priority 999 so that we unshift into parsers last
	          debouncedValue = this.$viewValue;
	        };
	        ngModelController.$parsers.unshift(function (value) {
	          if (pass) {
	            debouncedValue = value;
	            return value;
	          } else {
	            commitSoon(ngModelController.$viewValue);
	            return debouncedValue;
	          }
	        });
	      }
	    };
	  }]);


/***/ },

/***/ 15:
/***/ function(module, exports) {

	
	//view2mod is module
	module.exports = function (view2mod) {
	
		view2mod.config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
	
			function ($urlRouterProvider, $stateProvider, $locationProvider) {
	
			}])
	
			.controller('View2Ctrl', ['$scope', 'debounce', function ($scope, debounce) {
	
				console.log('view2');
	
			}]);
	}
	
	
	
	


/***/ },

/***/ 16:
/***/ function(module, exports) {

	module.exports = "<p>This is the partial for view 2.</p>\n<p>\n  Showing of 'interpolate' filter:\n</p>\n"

/***/ }

});
//# sourceMappingURL=1.bundle.js.map