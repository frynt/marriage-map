function initData(map) {

	addIcon(map,"../img/church-64.png", 48.8145125, -3.4440839999999753);
	
}

function addIcon(map,img64,lat,lng) {
	var icon = new google.maps.MarkerImage("../img/church-64.png");
	var mark = new google.maps.Marker({position:new google.maps.LatLng(48.8145125, -3.4440839999999753),map:map, icon:icon});
	mark.addListener('click', function() {
	    $('#myModal').modal({
	    });
  });
}

