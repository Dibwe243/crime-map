//we are importing mongoose
var mongoose = require('mongoose');

//we need to importing Schema
var Schema = mongoose.Schema;

var reportSchema = new mongoose.Schema({
	crimeDescription: {
		type: String,
		required: "This information is required"
	},

	crimeLocation: {
		type: Object,
		required: "This information is required"
	},

	imageLocation: {
		type: String,
		data: Buffer
	},

	createDate: {
		type: Date,
		default: Date.now
	}
});


module.exports = mongoose.model('Crime', reportSchema);
