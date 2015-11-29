marriageMapApp.config(['$stateProvider' ,'$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");

  // Now set up the states
  $stateProvider
	.state('map', {
		url : "/map",
		views: {
      		'navigation': {
		        templateUrl: 'angular/navigation/navigation.html',
		        controller: "NavigationController"
      		},
      		'map': {
		        templateUrl: 'angular/map/map.html',
		        controller: "MapController"
      		}
  	},
    resolve : {
      initAngularGoogleMapService : function(initAngularGoogleMapService) { 
        return initAngularGoogleMapService.getPromise();
      }
    }
  })
  .state('home', {
    url : "/home",
    views: {
          'navigation': {
            
          },
          'map': {
            templateUrl: 'angular/home/home.html',
            controller: "HomeController"
          }
        }
  });
}])