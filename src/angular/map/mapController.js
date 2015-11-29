marriageMapApp.controller('MapController', ['$scope', 'uiGmapGoogleMapApi', 'MapStylesService', 'MapService', 'PoiInfoService', '$timeout', '$stateParams', function($scope, uiGmapGoogleMapApi, MapStylesService, MapService, PoiInfoService, $timeout, $stateParams) {

	$scope.mapDisabled = function() {
		return MapService.getMapLoading();
	}

	// si on set les bounds de la map en fonction de la position des markers : non par défaut
	$scope.fitMarkers = false;

	MapService.setMapLoading(true);

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

	// Bounds initial centré sur le milieu de la baie de perros et trévou
	var initialBounds = {
		northeast: {
			latitude: 48.83,
			longitude: -3.37
		},
		southwest: {
			latitude: 48.78,
			longitude: -3.45
		}
	};

	// BOF set des bounds
	$timeout(function(){
		$scope.bounds = initialBounds;
	});
	// EOF set des bounds

	// Points d'intérêts
	$scope.pois = MapService.currentPois;

    // Quand on clique sur un POI
	$scope.poiClicked = function(marker) {

		if (!MapService.getMapLoading()) {

			MapService.setMapLoading(true);

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

				// On remet comme avant
				marker.model.iconInverse = saveIconeInverse;
				marker.model.icon = saveIcone;
			});

			MapService.setMapLoading(false);
		}
	};

	// Evenemenrs souris sur le marker
	$scope.mouseEventsObject = {
      mouseover: markerMouseOver,
      mouseout: markerMouseOut
	};
	function markerMouseOver(marker, e) {
		if (!MapService.getMapLoading()) {
	    	marker.setIcon(marker.model.iconInverse);
		}
	}

	function markerMouseOut(marker, e) {
    	marker.setIcon(marker.model.icon);
	}

	MapService.setMapLoading(false);

	// Calback en cas de montrage de groupe de points
	var callbackPOIShow = function(pois, isSleepPOI) {

		if (isSleepPOI) {
			$scope.map.zoom =15;
			$scope.bounds = {
				northeast: {

					// PLUS GRAND QUE AUTRE LAT
					latitude  : 48.829331,

					// PLUS GRAND QUE AUTRE LONG
					longitude : -3.352362
				},
				southwest: {
					latitude  : 48.8102000,
					longitude : -3.360000
				}
			};
		} /*else {

		$timeout(function() {

			

			//BOF on annule le recentrage sinon pb lorsque l'on fermme la popup : ca recentre automatiquement

			// Annulation des anim sinon google les rejoue quand le timeout va s'exécuter
			angular.forEach(pois, function(value, key) {
	                	value.options.animation = 2;
	    	});

	    	//On recentre la map sur les points
			$scope.fitMarkers = true;

			$timeout(function() {
				$scope.fitMarkers = false;

					// Annulation des anim sinon google les rejoue quand le timeout va s'exécuter
					angular.forEach(pois, function(value, key) {
			                	value.options.animation = null;
			    	});
				},
				500);
			}, 1);
		}*/
		//EOF on annule le recentrage sinon pb lorsque l'on fermme la popup : ca recentre automatiquement
	};

	MapService.setObserverPOIShow(callbackPOIShow);
	
}]);