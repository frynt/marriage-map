marriageMapApp.controller('IGoController', ['$scope', '$modalInstance', 'IGoService', function($scope, $modalInstance, IGoService) {

  /**
  * Url du formulaire correct en fonction du code de l'utilisateur.
  */
  var iGoFormAction = null;

  /**
  * Code rentré par l'utilisateur
  */
	$scope.iGoCode = null;

  /**
  * En cas de changement de ce code
  */
	$scope.$watch('iGoCode', function(newValue, oldValue) {
    if (newValue) {
  		if (IGoService.isIGoCodeAuthorized(newValue)) {
    		$scope.iGoCodeErrorMessage = null;
    		iGoFormAction = IGoService.getIGoFormAction(newValue);
      } else {
		    $scope.iGoCodeErrorMessage = "Code non valide pour le moment";
  		}
    }
	});

  /**
  * Message d'erreur en cas de code erroné.
  */
	$scope.iGoCodeErrorMessage = "";

  /**
  * Appelé à la soumission du formulaire
  */
 	$scope.iGoFormSubmit = function () {
    	$modalInstance.close(iGoFormAction);
	};

  /**
  * APpelé lors du clic sur Fermer
  */
  $scope.ok = function () {
    	$modalInstance.dismiss('cancel');
  	};
}]);