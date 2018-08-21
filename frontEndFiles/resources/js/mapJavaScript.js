// alert("Javascript is linked");

//Create a function to initialize the map
// function initMap() {

// 	var location = {
// 		lat:
// 	}

// }

// Initialize the Google Maps API v3
// var map = new google.maps.Map(document.getElementById('map'), {
//   zoom: 18,
//   mapTypeId: google.maps.MapTypeId.ROADMAP
// });

// var marker = null;

// function autoUpdate() {
//   navigator.geolocation.getCurrentPosition(function(position) {  
 
//    var location =position.coords.latitude+','+position.coords.longitude;
   
//     var newPoint = new google.maps.LatLng(position.coords.latitude, 
//                                           position.coords.longitude);

//     if (marker) {
//       // Marker already created - Move it
//       marker.setPosition(newPoint);
//     }
//     else {
//       // Marker does not exist - Create it
//       marker = new google.maps.Marker({
//         position: newPoint,
//         map: map
//       });
//     }

//     // Center the map on the new position
//     map.setCenter(newPoint);
//   }); 

//   // Call the autoUpdate() function every 5 seconds
//   setTimeout(autoUpdate, 15000);
// }

// autoUpdate();



x = navigator.geolocation;
x.getCurrentPosition(success, failure);

function success(position)
{
	var myLat = position.coords.latitude;
	var myLong = position.coords.longitude;

	var coords = new google.maps.LatLng(myLat,myLong);

	var mapOptions = {

		zoom: 8,
		center: coords,
		mapTypeId: google.maps.MapTypeId.ROADMAP 
	}


	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	var marker = new google.maps.Marker({map:map,position:coords});
}

function failure(){}