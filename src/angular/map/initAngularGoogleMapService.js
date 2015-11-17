marriageMapApp.factory('initAngularGoogleMapService',['uiGmapGoogleMapApi', '$q', function(uiGmapGoogleMapApi, $q) {
  	var service = {

  		getPromise : function() {
  			var defer = $q.defer();
  			uiGmapGoogleMapApi.then(function() {
  				defer.resolve();;
  			})
  			return defer.promise;

  		}
  	
	}
  return service;
}]);