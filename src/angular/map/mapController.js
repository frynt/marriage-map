marriageMapApp.controller('MapController', ['$scope', 'uiGmapGoogleMapApi', 'MapStylesService', 'MapService', 'PoiInfoService', '$timeout', '$stateParams', function($scope, uiGmapGoogleMapApi, MapStylesService, MapService, PoiInfoService, $timeout, $stateParams) {

	// Carte
	$scope.map = MapService.getMap();

	// Options de la carte
	$scope.options = {
		styles :  MapStylesService.getStyles(),
		panControl : false,
		zoomControlOptions : {
			position : google.maps.ControlPosition.RLEFT_TOP
		},
		mapTypeControlOptions : {
			position : google.maps.ControlPosition.RIGHT_TOP
		}
	};

	// BOF Boite de recherche
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
    };

	// EOF Boite de recherche

	$scope.searchbox = { 
    	template : 'searchboxContainer', 
    	events : events,
    	options : {
    		bounds : null
    	}
	};

	// BOF limiter les recherches empiriquement à la France
	var ne = new google.maps.LatLng(52.802761, 12.502441);// LatLng of the south-west corder of France
	var sw = new google.maps.LatLng(42.195969, -5.679932);// LatLng of the south-west corder of France
	$scope.searchbox.options.bounds = new google.maps.LatLngBounds(sw,ne);
	// EOF limiter les recherches empiriquement à la France

	// BOF set des bounds
	$timeout(function(){
		$scope.bounds = {
	      northeast: {
	        latitude: 48.83,
	        longitude: -3.37
	      },
	      southwest: {
	        latitude: 48.78,
	        longitude: -3.45
	      }
		};
	});
	// EOF set des bounds

	// Points d'intérêts
	$scope.pois = MapService.currentPois;
	

   
    
    // Quand on clique sur un POI
	$scope.poiClicked = function(marker) {

		// Annulation des anim sinon google les rejoue quand on ferme la popup...
		angular.forEach($scope.pois, function(value, key) {
                	value.options.animation = null;
    	});

		// Sauvegarde des icones
		var saveIconeInverse = marker.model.iconInverse;
		var saveIcone = marker.model.icon;

		// On inverse pour que le mouse out rende quand même l'icone inverse
		marker.model.iconInverse = marker.model.icon;
		marker.model.icon = saveIconeInverse;

		PoiInfoService.openInfo(marker.model).then(function(){

			// On remet comme avant
			marker.model.iconInverse = saveIconeInverse;
			marker.model.icon = saveIcone;
		},function() {
			console.log("dismiss");
		});
	};

	// Evenemenrs souris sur le marker
	$scope.mouseEventsObject = {
      mouseover: markerMouseOver,
      mouseout: markerMouseOut
	};
	function markerMouseOver(marker, e) {
	    marker.setIcon(marker.model.iconInverse);
	}

	function markerMouseOut(marker, e) {
    	marker.setIcon(marker.model.icon);
	}

	

	
}]);