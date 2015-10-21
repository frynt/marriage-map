marriageMapApp.controller('PoiInfoController', ['$scope', '$modalInstance', 'poi', function($scope, $modalInstance, poi) {
	$scope.poi = poi;

 	$scope.ok = function () {
    	$modalInstance.close();
	};

  	$scope.cancel = function () {
    	$modalInstance.dismiss('cancel');
  	};
}]);