marriageMapApp.controller('HomeController', ['$scope', 'IGoService', '$window', '$stateParams', function($scope, IGoService, $window, $stateParams) {

	$scope.iGoFormURLIFrame = null;

	

	/**
	* Clic sur "je viens" en mode desktop
	*/
	$scope.iGoClickedBigScreen = function() {

		IGoService.openIGo().then(function(urlForm) {

			// BOF retour utilisateur : on ouvre tjs dans la même fenetre
			// Ok, on ouvre en mode iFrame
			//$scope.iGoFormURLIFrame = urlForm;
			$window.location.href = urlForm;
			// EOF retour utilisateur : on ouvre tjs dans la même fenetre
		}, function() {
			// Cancel
		})
	}

	/**
	* Clic sur "je viens" en mode mobile
	*/
	$scope.iGoClickedMinorScreen = function() {

		IGoService.openIGo().then(function(urlForm) {

			// Ok, on ouvre dans la même page en plein écran
			$window.location.href = urlForm;
		}, function() {
			// Cancel
		})
	}

	$scope.closeIGoClickedBigScreen = function() {
		$scope.iGoFormURLIFrame = null;
	}
}]);