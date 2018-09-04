//we are importing mongoose
var mongoose = require('mongoose');

//we need to importing Schema
var Schema = mongoose.Schema;


var ImageSchema = new mongoose.Schema({

	imageSave: {
		type: String,
		data: Buffer
	}

});


module.exports = mongoose.model('Image', ImageSchema);