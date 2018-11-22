function saveInfo () {
  myLocations.push(new Locate());
}

var myLocations = [];

var Locate = function() {
  this.latitude = document.getElementById("latitude").value;
  this.longitude = document.getElementById("longitude").value;
}