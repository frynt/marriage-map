marriageMapApp.controller('NavigationController', ['$scope', 'MapService', function($scope, MapService) {

	$scope.btnDayClicked = function() {
		MapService.setCurrentPoisDay();
	}
	$scope.btnSleepClicked = function() {
		MapService.setCurrentPoisSleep();
	}
	$scope.btnIGoClicked = function() {
		MapService.setCurrentPoisIGo();
	}
}]);