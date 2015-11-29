marriageMapApp.factory('PoiInfoService', ['$uibModal', '$log', function($uibModal, $log) {
	var service = {

		/**
		* Ouvre une popup d'info
		*/
		openInfo : function(poi) {
			var modalInstance = $uibModal.open({
		      templateUrl: 'angular/poiInfo/poiInfo.html',
		      controller: 'PoiInfoController',
		      size: 'md',
		      backdrop : true,
		      resolve: {
		        poi: function () {
		          return poi;
		        }
		      }
		    });

		    return modalInstance.result;
		}
  	}
	return service;
}]);