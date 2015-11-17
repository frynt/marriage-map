/**
* Filtre permettant de transformer un string en html visionnable dans le html par angular.
*/
marriageMapApp.filter('viewableHtml', ['$sce', function($sce) {

    return function(val) {
        return $sce.trustAsHtml(val);
    };

}]);