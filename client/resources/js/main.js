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
            let latitude		= position.coords.latitude;				// set latitude variable
            let longitude		= position.coords.longitude;
            console.log(latitude +'\n' + longitude);			// set longitude variable
            
            let mapcanvas		= document.createElement('div');		// create div to hold map
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
            // var marker = new google.maps.Marker({						// place a marker at our lat/long
            //     position:	coords,
            //     map:		map
            // });

           // /client/resources/icons/Assault.svg
            
        
            let locations = [ 
                {
                  position: new google.maps.LatLng(-26.207079, 28.063712),
                  type: 'assault',
                  icon: 'resources/icons/Assault.svg'
                }, {
                  position: new google.maps.LatLng(-26.206531, 28.063623),
                  type: 'burglary',
                  icon: 'resources/icons/Burglary.svg'
                }, {
                  position: new google.maps.LatLng(-26.206397, 28.064391),
                  type: 'hijacking',
                  icon: 'resources/icons/Hijacking.svg'
                }, {
                  position: new google.maps.LatLng(-26.206634, 28.064422),
                  type: 'mugging',
                  icon: 'resources/icons/Mugging.svg'
                }, {
                  position: new google.maps.LatLng(-26.206232, 28.063607),
                  type: 'murder',
                  icon: 'resources/icons/Murder.svg'
                }, {
                  position: new google.maps.LatLng(-26.206266, 28.063596),
                  type: 'protests',
                  icon: 'resources/icons/Protests.svg'
                }, {
                  position: new google.maps.LatLng(-26.205790, 28.064296),
                  type: 'rape',
                  icon: 'resources/icons/Rape.svg'
                }, {
                  position: new google.maps.LatLng(-26.205836, 28.063499),
                  type: 'smash_grab',
                  icon: 'resources/icons/SmashGrab.svg'
                }, {
                  position: new google.maps.LatLng(-26.205278, 28.062643),
                  type: 'assault',
                  icon: 'resources/icons/Assault.svg'
                }, {
                  position: new google.maps.LatLng(-26.204777, 28.062592),
                  type: 'burglary',
                  icon: 'resources/icons//Protests.svg'
                }
              ];
              let marker,i;
              for(i=0; i< locations.length-1 ; i++){
                marker = new google.maps.Marker({
                    position:locations[i].position,
                    icon:{
                        url:locations[i].icon,
                        scaledSize: new google.maps.Size(30,30)
                    },
                    map:map
                });
                console.log(marker);
            }
           
        }
        


  })()

/**
 * Displaying markers on the map
 *  -create a list (dummy data) of marker in json file 
 *  -
 * 
 */

 
