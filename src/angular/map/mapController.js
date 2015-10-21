marriageMapApp.controller('MapController', ['$scope', 'uiGmapGoogleMapApi', 'MapStylesService', 'MapService', 'PoiInfoService', function($scope, uiGmapGoogleMapApi, MapStylesService, MapService, PoiInfoService) {

	// Carte
	$scope.map = MapService.getMap();

	// Options de la carte
	$scope.options = {
		styles :  MapStylesService.getStyles()
	};

	// Points d'intérêts
	$scope.pois = MapService.currentPois;
	var events = {
          places_changed: function (searchBox) {
          	if (searchBox.getPlaces().length > 0) {
          		$scope.map.center = {
          			latitude: searchBox.getPlaces()[0].geometry.location.lat(),
          			longitude: searchBox.getPlaces()[0].geometry.location.lng()
          		}
          	} else {
          		console.warn("Pas de places trouvées");
          	}
          }
        }

    // Boite de recherche
	$scope.searchbox = { 
    	template : 'searchboxContainer', 
    	events : events,
    	options : {
    		bounds : null
    	}
	};
    
    // Quanjd on clique sur un POI
	$scope.poiClicked = function(obj) {
		PoiInfoService.openInfo(obj.model);
	};

	// Une fois que angular google map est totalement chargé
	uiGmapGoogleMapApi.then(function(maps) {
		
		// BOF limiter les recherches empiriquement à la France, on déclare cela fait ici car lib google inconnu sinon
		var ne = new google.maps.LatLng(52.802761, 12.502441)// LatLng of the south-west corder of France
		var sw = new google.maps.LatLng(42.195969, -5.679932)// LatLng of the south-west corder of France
		$scope.searchbox.options.bounds = new google.maps.LatLngBounds(sw,ne);
		// EOF limiter les recherches empiriquement à la France, on déclare cela fait ici car lib google inconnu sinon
    });
	
}]);