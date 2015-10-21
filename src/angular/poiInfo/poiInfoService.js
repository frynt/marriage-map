marriageMapApp.factory('PoiInfoService', ['$uibModal', '$log', function($uibModal, $log) {
	var service = {

		/**
		* Ouvre une popup d'info
		*/
		openInfo : function(poi) {
			var modalInstance = $uibModal.open({
		      templateUrl: '../angular/poiInfo/poiInfo.html?' + "random=" + Math.random(),
		      controller: 'PoiInfoController',
		      size: 'md',
		      backdrop : true,
		      resolve: {
		        poi: function () {
		          return poi;
		        }
		      }
		    });

		    modalInstance.result.then(function () {
		    }, function () {
	      		$log.info('Modal dismissed at: ' + new Date());
		    });
		}
  	}
	return service;
}]);