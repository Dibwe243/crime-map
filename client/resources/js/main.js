(() => {
    "use strict";
    document.addEventListener('DOMContentLoaded',initCoordinates)
    
        // check if browser supports the geolocation api
        function initCoordinates(){
            if(navigator.geolocation) {

               navigator.geolocation.getCurrentPosition(initMap);			// if geolocation supported, call function
           
            } else {
                $("#location").val('Your browser doesn\'t support the geolocation api.');
            }
        }
                
        function initMap(position) {
            var latitude		= position.coords.latitude;				// set latitude variable
            var longitude		= position.coords.longitude;
            console.log(latitude +'\n' + longitude);			// set longitude variable
            
            var mapcanvas		= document.createElement('div');		// create div to hold map
            mapcanvas.id = 'map';										// give this div an id of 'map'
            mapcanvas.style.height = '900px';							// set map height
            mapcanvas.style.width = '100%';								// set map width
            
            document.querySelector('#map-container').appendChild(mapcanvas);	// place new div within the 'map-container' div
            
            var coords = new google.maps.LatLng(latitude,longitude);	// set lat/long object for new map
  
            var options = {												// set options for map
                zoom: 20,
                center: coords,
                mapTypeControl: false,
                navigationControlOptions: {
                    style: google.maps.NavigationControlStyle.SMALL
                },
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            
            var map = new google.maps.Map(document.getElementById("map"), options);	// create new map using settings above
            var marker = new google.maps.Marker({						// place a marker at our lat/long
                position:	coords,
                map:		map
            });
           
        }
    


  })()

 
