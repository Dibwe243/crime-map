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

	createDate: {
		type: Date,
		default: Date.now
	}
});

//create a variable to store our schema
// //We are creating our database here

// var Crime = mongoose.model('Crime', reportSchema);

module.exports = mongoose.model('Crime', reportSchema);