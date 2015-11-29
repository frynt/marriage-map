/**
 * Master Controller
 */

marriageMapApp
    .factory('ConstantService', ['$filter', ConstantService]);

function ConstantService($filter) {
    var service = {
        astuceTypeWebsite : "website",
        astuceTypeAstuce : "astuce",
        astuceTypePhone : "phone"
    }
    return service;
   
};