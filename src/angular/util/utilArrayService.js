/**
 * Master Controller
 */

marriageMapApp
    .factory('UtilArrayService', ['$filter', UtilArrayService]);

function UtilArrayService($filter) {
    var service = {

        sortBy : function(array, property) {
            if (!array) {
                return [];
            } else {
                return $filter('orderBy')(array, property);
            }
        },

    	/**
    	* Enlève une valeur dans le tableau array en comparant par attributeName pour la valeur attributeValue
    	*/
    	removeObjectByAttributeFromArray : function(attributeName, attributeValue, array) {
            var removed = false;
    		if (array) {
    			$(array).each(function(index,element) {
                    if (removed) {
                        //on a  déjà enlevé;
                    } else if (element[attributeName] === attributeValue) {
    					array.splice(index,1);
                        removed = true;
    				}
    			});
    		}
            return removed;
    	},

        /**
        * Enlève une valeur dans le tableau array en comparant par référence
        */
        removeObjectByRefFromArray : function(toRemove, array) {
            var removed = false;
            if (array) {
                $(array).each(function(index,element) {
                    if (removed) {
                        //on a  déjà enlevé;
                    } else if (toRemove == element) {
                        array.splice(index,1);
                        removed = true;
                    }
                });
            }
            return removed;
        },

    	/**
    	* Retourne une valeur dans le tableau array en comparant par attributeName pour la valeur attributeValue
    	*/
    	getObjectByAttributeFromArray : function(attributeName, attributeValue, array) {
            var result = null;
    		if (array) {
    			$(array).each(function(index,element) {
                    if (result != null) {
                        //on a  déjà trouvé;
                    } else if (element[attributeName] === attributeValue) {
                            result = element;
                    }
    			});
    		};
            return result;
    	},

        /**
        * Retourne true si valeur présente, false sinon.
        */
        isObjectByAttributeFromArray : function(attributeName, attributeValue, array) {
            var value = getObjectByAttributeFromArray(attributeName, attributeValue, array);
            return  value != null && value != undefined;
        },

        /**
        * Remplace un tableau d'éléments par un autre en conservant la référence du remplacé
        */
        replaceArrayByOther : function(arrayToReplace, arrayReplacement) {
            var arrayReplacementCopy = angular.copy(arrayReplacement);
            if (arrayToReplace) {
                arrayToReplace.splice(0,arrayToReplace.length);
            }
            angular.forEach(arrayReplacementCopy, function(value, key) {
                arrayToReplace.push(value);
            });
        },

        /**
        * Ajoute un tableau d'éléments à un autre.
        */
        addArrayToArray : function(array, arrayToAdd) {
            if (array && arrayToAdd) {
                angular.forEach(arrayToAdd, function(value, key) {
                    array.push(value);
                });
            }
        },

        /**
        * Enlève les éléments présents dans arrayToRemove de ceux présents dans array. Compare par l'attribut précisé.
        */
        removeArrayFromArrayByAttribute : function(attributeName, array, arrayToRemove) {
            var that = this;
            if (array && arrayToRemove) {
                angular.forEach(arrayToRemove, function(value, key) {
                    that.removeObjectByAttributeFromArray(attributeName, value[attributeName], array);
                });
            }
        },

        /**
        * Retourne un tableau d'id - label correspondant à chaque valeur contenue dans arrayConstant.
        * id = valeur dans arrayConstant
        * objectIdToLabel = objet comme un tableau associatif (id => label) qui pour un id renvoie le label
        */
        adaptConstant : function(arrayConstant, objectIdToLabel) {
            var result = [];
            if (arrayConstant) {
                $(arrayConstant).each(function(index,element) {
                    var label = objectIdToLabel[element];
                    result.push({
                        id : element,
                        label : label
                    });
                });
            }
            return result;
        }
    };
    return service;
   
};