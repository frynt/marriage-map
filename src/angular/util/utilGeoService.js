/**
 * Master Controller
 */

marriageMapApp
    .factory('UtilGeoService', [UtilGeoService]);

function UtilGeoService() {
    var service = {

        /**
        * Si coordonnées sont -présentes -et -correctes / ou non.
        * @ param coords to test
        */
        hasCorrectCoords : function(coords) {
            return coords && coords.latitude && coords.longitude && coords.latitude > - 90 && coords.latitude < 90
            && coords.longitude > -180 && coords.longitude < 180;
        },

        /**
        * Retourne les coordonnées en chaine : lat : 021, long : 21
        */
        coordsToString : function(coords) {
            var result = "";
            if (coords) {
                result = "lat : ";
                if (coords.latitude) {
                    result+=coords.latitude;
                } else {
                    result+= "?"
                }
                result += " ,long : ";
                if (coords.longitude) {
                    result+=coords.longitude;
                } else {
                    result+= "?"
                }
            } else {
                result = "Aucunes coordonnées";
            }
            return result;
        }
    };
    return service;
   
};