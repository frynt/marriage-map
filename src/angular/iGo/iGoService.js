	marriageMapApp.factory('IGoService', ['$uibModal', '$log', 'md5', '$sce', function($uibModal, $log, md5, $sce) {

	var iGoTypes = {
		    VIN_HONNEUR: "VIN_HONNEUR_SOIREE",
			VIN_HONNEUR_SOIREE : "VIN_HONNEUR_SOIREE",
			TOTALE : "TOTALE"
	};
	var getHashIGoCode = function(iGoCode) {
		return md5.createHash(iGoCode || '');
	}

	/**
	* Renvoie type d'invitation en fonction du code.
	*/
	var getIGoType = function(iGoCode) {
		var hashIGoCode = getHashIGoCode(iGoCode);

		if(hashIGoCode == "503235f2a9d9215777ae08edc35733b1") {

			// Choix 1 : vin honneur
			return iGoTypes.VIN_HONNEUR;

		} else if(hashIGoCode == "0b675a7e649da044ab4a95c974a6a9b5") {

			// Choix 2 : vin honneur soirée
			return iGoTypes.VIN_HONNEUR_SOIREE;

		} else if(hashIGoCode == "6e3e0be8e56cecf2472e03049cbf496a") {

			// Choix 3 : tout
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
		      templateUrl: 'angular/iGo/iGo.html',
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

			return $sce.trustAsResourceUrl("https://docs.google.com/forms/d/1lMd8U93sH6yyvz3SS9vsmm6-d7OMpVcTc8jXmePJnmU/viewform?entry.743673421&entry.238974991&entry.1513214179=" + getHashIGoCode(iGoCode) +"&entry.438709898");
		}
  	}
	return service;
}]);