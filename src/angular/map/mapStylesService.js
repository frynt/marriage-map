marriageMapApp.factory('MapStylesService', function() {
  var service = {

  	/**
  	* Retourne les styles de la carte
  	*/
  	getStyles : function () {
  		return [
		    {
		        "featureType": "administrative.country",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "gamma": "10.00"
		            },
		            {
		                "weight": "3.13"
		            },
		            {
		                "color": "#572626"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.country",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "color": "#0968f1"
		            },
		            {
		                "saturation": "61"
		            },
		            {
		                "lightness": "16"
		            },
		            {
		                "gamma": "5.72"
		            },
		            {
		                "weight": "1.40"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape.natural",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "color": "#E9E5DC"
		            }
		        ]
		    },
		     {
		        "featureType": "landscape.man_made",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "color": "#E9E5DC"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "hue": "#1900ff"
		            },
		            {
		                "color": "#c0e8e8"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "lightness": 100
		            },
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "transit.line",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "lightness": 700
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#7dcdcd"
		            }
		        ]
		    }
		];
  	}
  }
  return service;
});