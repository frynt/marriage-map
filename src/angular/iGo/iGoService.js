marriageMapApp.factory('IGoService', ['$uibModal', '$log', function($uibModal, $log) {
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

		    modalInstance.result.then(function () {
		    }, function () {
	      		$log.info('Modal dismissed at: ' + new Date());
		    });
		}
  	}
	return service;
}]);