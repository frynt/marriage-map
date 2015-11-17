marriageMapApp.controller('PoiInfoController', ['$scope', '$modalInstance', 'poi', '$sce', function($scope, $modalInstance, poi, $sce) {

	$scope.poi = poi;

 	$scope.ok = function () {
    	$modalInstance.close();
	};

  	$scope.cancel = function () {
    	$modalInstance.dismiss('cancel');
  	};
}]);