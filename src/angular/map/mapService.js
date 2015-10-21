marriageMapApp.factory('MapService', ['UtilArrayService', function(UtilArrayService) {

	var map = { 
		center: { latitude: 48.81, longitude: -3.4240839999999753 }, 
		zoom: 14 
	}
	var poisDay = [
		{
			id : 10,
			coords : {
				latitude  : 48.8145125, 
				longitude : -3.4440839999999753
			},
			icon : "../img/church/blue-church-64.png",
			options : "",
			title : "L'église",
			description : "Nous vous donnons rendez-vous à 11h pour la célébration qui aura lieu à l'église Saint Jacques à Perros Guirec.",
			astuces : "Vous pouvez vous garer sur les parkings du Carrefour City."
		},
		{
			id : 20,
			coords : {
				latitude  : 48.8156313, 
				longitude : -3.4447666
			},
			icon : "../img/ring/blue-ring-64.png",
			options : "",
			title : "La mairie",
			description : "Nous vous donnons rendez-vous à 10h pour la consécration ultime dans la mairie.",
			astuces : "Vous pouvez vous garer sur les parkings du Carrefour City."
		},
		{
			id : 30,
			coords : {
				latitude  : 48.8151101, 
				longitude : -3.4543653
			},
			icon : "../img/glasses/blue-glasses-64.png",
			options : "",
			title : "Le vin d'honneur",
			description : "Après l'église, retrouvons pour partager un moment de convivialité au palais des Congrès, 10 avenue des tgs.",
			astuces : "Nous irons à pied depuis l'église. Prévoyez de bonnes chaussures !"
		},
		{
			id : 40,
			coords : {
				latitude  : 48.8155061,
				longitude : -3.3579911
			},
			icon : "../img/servers/blue-servers-64.png",
			options : "",
			title : "Le repas",
			description : "Nous vous proposons un repas dans la salle polyvalente de Trevou Treguignec. Ce repas comprend également le retour prévu le lendemain midi.",
			astuces : "Profitez-en pour déposer vos affaires dans les campings situés juste à côté !"
		}
	];
	var poisIGo = [];
	var poisSleep = [];
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

		setCurrentPoisDay : function() {
			UtilArrayService.replaceArrayByOther(currentPois, poisDay);
			console.log(currentPois);
		},

		setCurrentPoisSleep : function() {
			UtilArrayService.replaceArrayByOther(currentPois, poisSleep);
			console.log(currentPois);
		},

		setCurrentPoisIGo : function() {
			UtilArrayService.replaceArrayByOther(currentPois, poisIGo);
			console.log(currentPois);
		}
  	}

  	service.setCurrentPoisDay();
	return service;
}]);