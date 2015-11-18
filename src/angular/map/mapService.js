marriageMapApp.factory('MapService', ['UtilArrayService', function(UtilArrayService) {

	var map = { 
		center: { latitude: null, longitude: null }, 
		zoom: null 
	};
	var poisDay = [
		{
			id : 10,
			coords : {
				latitude  : 48.8143725, 
				longitude : -3.4430839999999753
			},
			icon : "../img/church/blue-outline-church-64.png?random=" + Math.random(),
			iconInverse : "../img/church/blank-outline-church-64.png?random=" + Math.random(),
			options : "",
			title : "L'église",
			description : "Nous vous donnons rendez-vous à 10h45 pour la célébration qui aura lieu à l'église Saint Jacques à Perros Guirec.",
			astuces : ["Pour vous garer, pensez au parking du Carrefour City, ou celui derrière l'église (place des halles) ou dans le centre ville."]
		},
		{
			id : 20,
			coords : {
				latitude  : 48.8156313, 
				longitude : -3.4447666
			},
			icon : "../img/ring/blue-outline-ring-64.png?random=" + Math.random(),
			iconInverse : "../img/ring/blank-outline-ring-64.png?random=" + Math.random(),
			options : "",
			title : "La mairie",
			description : "La cérémonie civile aura lieu à 10h dans la mairie de Perros-Guirec.",
			astuces : ["Pour vous garer, pensez au parking de la police municipale (rue Anatole France), nous nous rendrons ensuite à l'église à pied."]
		},
		{
			id : 30,
			coords : {
				latitude  : 48.8151101, 
				longitude : -3.4543653
			},
			icon : "../img/glasses/blue-outline-glasses-64.png?random=" + Math.random(),
			iconInverse : "../img/glasses/blank-outline-glasses-64.png?random=" + Math.random(),
			options : "",
			title : "Le vin d'honneur",
			description : "Après l'église, retrouvons nous pour partager un moment de convivialité au palais des Congrès, rue du Maréchal Foch.",
			astuces : ["Nous irons à pied depuis l'église (15 min de marche). Prévoyez de bonnes chaussures !"]
		},
		{
			id : 40,
			coords : {
				latitude  : 48.8155061,
				longitude : -3.3579911
			},
			icon : "../img/servers/blue-outline-servers-64.png?random=" + Math.random(),
			iconInverse : "../img/servers/blank-outline-servers-64.png?random=" + Math.random(),
			options : "",
			title : "Le repas",
			description : "Les festivités se dérouleront dans la salle des fêtes de Trévou Tréguignec, 23 rue de la mairie.",
			astuces : ["Les logements proposés sur la carte sont tous à moins de 10 min à pied de la salle.", "N'hésitez pas à regarder aussi les chambres d'hôtes, gîtes ou locations non mentionnés ici."]
		}
	];
	var poisSleep = [
		{
			id : 100,
			coords : {
				latitude  : 48.819331,
				longitude : -3.352362
			},
			icon : "../img/camping/blue-outline-camping-64.png?random=" + Math.random(),
			iconInverse : "../img/camping/blank-outline-camping-64.png?random=" + Math.random(),
			options : "",
			distance : "à 700 m de la salle",
			title : "Camping le Mat",
			description : "<i>Entre Paimpol et Perros-Guirec, la vue sur les 7 îles est imprenable. La grande plage de sable fin de la baie de Trestel, spot reconnu par les amateurs de glisse, vous invite à la détente ou à des vacances dynamiques. C 'est la Bretagne de la Côte de Granit Rose, avec ses sentiers côtiers et ses longues balades iodées. Au camping, autour de la piscine chauffée : flânerie, aquagym, et en été, nocturnes-piscine, concerts et danses bretonnes.</i><br><img src ='../../src/img/addresses/mat.jpg'>",
			astuces : ["<a target='_new' href ='http://www.flowercampings.com/camping-bretagne/camping-le-mat'>Consulter le site internet (nouvel onglet)</a>","Si vous réservez pour une seule nuit, pensez à préciser qu'il s'agit de notre mariage afin de faciliter votre réservation."]
		},
		{
			id : 110,
			coords : {
				latitude  : 48.8189145,
				longitude : -3.3538073
			},
			icon : "../img/hotel/blue-outline-hotel-64.png?random=" + Math.random(),
			iconInverse : "../img/hotel/blank-outline-hotel-64.png?random=" + Math.random(),
			options : "",
			distance : "à 600 m de la salle",
			title : "Les Terrasses de Trestel",
			description : "<i>Entre Tréguier et Perros-Guirec, en bordure d'une magnifique plage de sable fin, la Résidence Hôtelière «les terrasses de Trestel» vous ouvre les portes de la côte de Granit Rose. Vous aurez le bonheur d'habiter une maisonnette ou un appartement au coeur d'un grand jardin devant la mer.</i><br><img src='../../src/img/addresses/trestel.jpg'>",
			astuces : ["<a target='_new' href ='http://location-bord-de-mer-appartement-vacances-piscine-tourisme.terrasses-trestel.fr/'>Consulter le site internet (nouvel onglet)</a>"]
		},
		{
			id : 120,
			coords : {
				latitude  : 48.8165061,
				longitude : -3.3597911
			},
			icon : "../img/camping/blue-outline-camping-64.png?random=" + Math.random(),
			iconInverse : "../img/camping/blank-outline-camping-64.png?random=" + Math.random(),
			options : "",
			title : "Camping les Macareux",
			distance : "à 300 m de la salle",
			description : "<i>Camping familial, très calme et reposant (ni piscine ,ni animation), ombragé situé dans un site remarquable à 800 mètres de la grande plage de sable fin de Trestel et à 400 mètres du port de plaisance 'Port Le Goff'.</i><br><img src ='../../src/img/addresses/macareux.jpg'>",
			astuces : ["<a target='_new' href ='http://camping-les-macareux.monsite-orange.fr/'>Consulter le site internet (nouvel onglet)</a>","Si vous réservez pour une seule nuit, pensez à préciser qu'il s'agit de notre mariage afin de faciliter votre réservation."]
		}
	];
	var currentPois = [];
	var service = {

		/**
		* Retourne le centre de la carte
		*/
		getMap : function () {
			return map;
		},

		/**
		* Retourne les points d'intérêts
		*/
		currentPois : currentPois,

		setCurrentPoisDay : function(set) {
			angular.forEach(currentPois, function(value, key) {
                	value.options = {animation : null};
            	});
			if (set) {
				angular.forEach(poisDay, function(value, key) {
                	value.options = {animation : 2};
            	});
				UtilArrayService.addArrayToArray(currentPois, poisDay);
			} else {
				angular.forEach(currentPois, function(value, key) {
                	value.options = {animation : null};
            	});
				UtilArrayService.removeArrayFromArrayByAttribute("id", currentPois, poisDay);
			}
		},

		setCurrentPoisSleep : function(set) {
			angular.forEach(currentPois, function(value, key) {
                	value.options = {animation : null};
            	});
			if (set) {
				angular.forEach(poisSleep, function(value, key) {
                	value.options = {animation : 2};
            	});
				UtilArrayService.addArrayToArray(currentPois, poisSleep);
			} else {
				UtilArrayService.removeArrayFromArrayByAttribute("id", currentPois, poisSleep);
			}
		}
  	}

  	service.setCurrentPoisDay(true);
	return service;
}]);