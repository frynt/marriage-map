	marriageMapApp.factory('IGoService', ['$uibModal', '$log', 'md5', '$sce', function($uibModal, $log, md5, $sce) {

	var iGoTypes = {
			VIN_HONNEUR_SOIREE : "VIN_HONNEUR_SOIREE",
			TOTALE : "TOTALE"
	};

	/**
	* Renvoie type d'invitation en fonction du code.
	*/
	var getIGoType = function(iGoCode) {
		var hashIGoCode = md5.createHash(iGoCode || '');

		if(hashIGoCode == "17dc3db6a89d584ee802de2b5a5d09b8") {

			return iGoTypes.VIN_HONNEUR_SOIREE;

		} else if(hashIGoCode == "d15e05295d36e1726468e6a7a575cc69") {
			// Choix 2 : tout

			return iGoTypes.TOTALE;
		} 

		console.warn("Code erroné !");
		return null;
	};
		
	var service = {

		

		/**
		* Ouvre la popup pour participer au mariage
		*/
		openIGo : function() {
			var modalInstance = $uibModal.open({
		      templateUrl: '../angular/iGo/iGo.html?' + "random=" + Math.random(),
		      controller: 'IGoController',
		      size: 'md',
		      backdrop : true,
		    });

		    return modalInstance.result;
		},

		/**
		* Check si code autorisé
		*/
		isIGoCodeAuthorized : function(iGoCode) {
			if(getIGoType(iGoCode)) {
				return true;
			}
			return false;
		},

		/**
		* Retourne l'url du formulaire adéquat en fonction du code saisi
		*/
		getIGoFormAction : function(iGoCode) {

			var iGoType = getIGoType(iGoCode);

			// Test des types d'invit
			if(iGoType == iGoTypes.VIN_HONNEUR_SOIREE) {

				// Choix 1 : vin honneur et soirée
				return $sce.trustAsResourceUrl("https://docs.google.com/forms/d/1lMd8U93sH6yyvz3SS9vsmm6-d7OMpVcTc8jXmePJnmU/viewform?entry.743673421&entry.238974991&entry.1513214179=17dc3db6a89d584ee802de2b5a5d09b8&entry.438709898");

			} else if(iGoType == iGoTypes.TOTALE) {

				// Choix 2 : tout
				return $sce.trustAsResourceUrl("https://docs.google.com/forms/d/1lMd8U93sH6yyvz3SS9vsmm6-d7OMpVcTc8jXmePJnmU/viewform?entry.743673421&entry.238974991&entry.1513214179=d15e05295d36e1726468e6a7a575cc69&entry.438709898");
			}

			console.warn("Code erroné !");
			return null;
		}
  	}
	return service;
}]);