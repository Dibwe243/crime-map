import {MDCDrawer} from "@material/drawer";
import {MDCTopAppBar} from "@material/top-app-bar";
import {MDCRipple} from '@material/ripple';

const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));


const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});


(() => {
  "use strict";

  // const list = MDCList.attachTo(document.querySelector('.mdc-list'));
  // list.wrapFocus = true;

    const murderIncon =require('../../src/icons/Murder.svg');
    const curentLocation = require('../../src/icons/maps-and-flags.svg');
    const loading = require("../../src/css/img/splash_screen.png");

    console.log(`here is the image ${murderIncon}`)



    window.addEventListener('load',function(){

      const loader = document.querySelector('.loader');
      console.log(loader);
      loader.classList.add('hidden');
    });
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
            let styles = [{ "stylers": [{ "saturation": -80 }, { "gamma": 1 }] }, { "featureType": "water", "stylers": [{ "lightness": -12 }] }];
            let latitude		= position.coords.latitude;				// set latitude variable
            let longitude		= position.coords.longitude;
            //var coords = new google.maps.LatLng(latitude,longitude);	// set lat/long object for new map


            let mapcanvas		= document.createElement('div');		// create div to hold map
            mapcanvas.id = 'map';										// give this div an id of 'map'
            mapcanvas.style.height ='100vh';							// set map height
            mapcanvas.style.width = '100%';								// set map width

            document.querySelector('#map-container').appendChild(mapcanvas);	// place new div within the 'map-container' div

            let styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });

            let coords = new google.maps.LatLng(latitude,longitude);	// set lat/long object for new map

            //var myOptions = { scrollwheel: false, zoom: 13, center: latlng, mapTypeControlOptions: { mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style'] } };

            let options = {												// set options for map
                zoom: 14,
                center: coords,
                mapTypeControl: false,
                navigationControlOptions: {
                    style: google.maps.NavigationControlStyle.SMALL
                },
                mapTypeId: 'roadmap',
                mapTypeControlOptions: { mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style'] }


            };

            let map = new google.maps.Map(document.getElementById("map"), options);	// create new map using settings above
            map.mapTypes.set('map_style', styledMap);
            map.setMapTypeId('map_style');




var infoWindow = new google.maps.InfoWindow();

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
                icon: murderIncon
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
                icon: 'resources/icons/Protests.svg'
              }, {
                position: new google.maps.LatLng(latitude, longitude),
                type: 'current-position',
                icon: curentLocation
              }
            ];
            let marker,i;

            for(i=0; i< locations.length ; i++){
              marker = new google.maps.Marker({




                  position:locations[i].position,
                  icon:{
                      url:locations[i].icon,
                      scaledSize: new google.maps.Size(40,40)
                  },
                  map:map
              });
              marker.addListener('click', toggleBounce);
              function toggleBounce() {
                if (marker.getAnimation() !== null) {
                  marker.setAnimation(null);
                } else {
                  marker.setAnimation(google.maps.Animation.BOUNCE);
                }
              }

                //display popup
                (function (marker, data) {

                  google.maps.event.addListener(marker, "click", function (e) {


                  //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
                  infoWindow.setContent("<div style = 'width:180px;min-height:100px'> Type: " + data.type + "</div>");
                  infoWindow.open(map, marker);
                });
            })(marker,locations[i]);

                console.log(marker);
            }


        }

        






        function myFunction() {
          var input, filter, ul, li, a, i;
          input = document.getElementById("search");
          filter = input.value.toUpperCase();
          ul = document.getElementById("myUl");
          li = ul.getElementsByTagName("li");
          for (i = 0; i < li.length; i++) {
              a = li[i].getElementsByTagName("a")[0];
              if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                  li[i].style.display = "";
              } else {
                  li[i].style.display = "none";
              }
          }
          }

      
  })()

/**
 * Displaying markers on the map
 *  -create a list (dummy data) of marker in json file
 *  -
 *
 */
