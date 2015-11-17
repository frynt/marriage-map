marriageMapApp.controller('NavigationController', ['$scope', 'MapService', 'IGoService', '$stateParams', '$location', function($scope, MapService, IGoService, $stateParams, $location) {

	//TODO service doit savoir, pas le controller
	$scope.poisDayDisplayed = true;

	//TODO service doit savoir, pas le controller
	$scope.poisSleepDisplayed = false;


	$scope.btnDayClicked = function() {
		$scope.poisDayDisplayed = !$scope.poisDayDisplayed ;
		jQuery(".navbar").click();
		MapService.setCurrentPoisDay($scope.poisDayDisplayed);
	}
	$scope.btnSleepClicked = function() {
		$scope.poisSleepDisplayed = !$scope.poisSleepDisplayed;
		MapService.setCurrentPoisSleep($scope.poisSleepDisplayed);
	}
	$scope.btnIGoClicked = function() {
		IGoService.openIGo();
	}

}]);