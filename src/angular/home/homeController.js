marriageMapApp.controller('HomeController', ['$scope', 'IGoService', function($scope, IGoService) {

	$scope.showIGoForm = false;

	$scope.iGoClicked = function() {
		$scope.showIGoForm = true;
	}

	$scope.closeIGoClicked = function() {
		$scope.showIGoForm = false;
	}
}]);