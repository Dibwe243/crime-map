// alert("Our js is working");
function saveForm(form) {
	var crimeInfo {
		"crime_icon_murder" 		: form.murder.value,
		"crime_icon_hijacking"		: form.hijacking.value,
		"crime_icon_assault"		: form.assault.value,
		"crime_icon_protests"		: form.protests.value,
		"crime_icon_burglary"		: form.burglary.value,
		"crime_icon_rape"			: form.rape.value,
		"crime_icon_SmashGrab"		: form.SmashGrab.value,
		"comment"					: form.comment.value,
		"crime_img"					: form.crimeImage.value
	};

	var html=JSON.stringify(crimeInfo);
	document.getElementById("showInfomation").innerHTML=html;
	return false; //cancel submition
}