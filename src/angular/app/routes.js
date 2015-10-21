marriageMapApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/map");
  //
  // Now set up the states
  $stateProvider
	.state('map', {
		url : "/map",
		views: {
      		'navigation': {
		        templateUrl: '../angular/navigation/navigation.html',
		        controller: "NavigationController"
      		},
      		'map': {
		        templateUrl: '../angular/map/map.html',
		        controller: "MapController"
      		}
      	}
    });
})