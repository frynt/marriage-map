marriageMapApp.controller('PoiInfoController', ['$scope', '$modalInstance', 'poi', '$sce', 'ConstantService', function($scope, $modalInstance, poi, $sce, ConstantService) {

	$scope.poi = poi;

	$scope.constantService = ConstantService;

 	$scope.ok = function () {
    	$modalInstance.close();
	};

  	$scope.cancel = function () {
    	$modalInstance.dismiss('cancel');
  	};
}]);