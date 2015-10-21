/**
 * Master Controller
 */

marriageMapApp
    .factory('UtilStringService', ['$filter', UtilStringService]);

function UtilStringService($filter) {
    var service = {

    	concats : function(args) {
            var result = "";
            $(args).each(function(index, element) {
                if (element != undefined && element != null) {
                    result += element;
                }
            });
            return result;
        },

        abbreviate : function(string, limit) {
            if (string != null && string != undefined) {
                return string.length>limit? string.substr(0,limit-1)+"..." : string;
            } else {
                return "";
            }
        },

        isBlank : function(str) {
            return (!str || /^\s*$/.test(str));
        },

        isNotBlank : function(str) {
            return !this.isBlank(str);
        },

        datetimeToString : function(date) {
            return $filter('date')(date, "dd/MM/yyyy à HH:mm")
        },
        dateToString : function(date) {
            return $filter('date')(date, "dd/MM/yyyy")
        },
        periodDatetimeToString : function(dateStart, dateEnd) {
            var result = "De ?";
            if (dateStart) {
                result = "De " + this.datetimeToString(dateStart);
            }
            result += " au ";
            if (dateEnd) {
                result += this.datetimeToString(dateEnd);
            } else {
                result += " ?";
            }
            return result;
        },
        periodDateToString : function(date) {
            return "todo !";
        }
    };
    return service;
   
};