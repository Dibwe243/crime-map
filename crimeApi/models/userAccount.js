//we are importing mongoose
var mongoose = require('mongoose');

//we need to importing Schema
var Schema = mongoose.Schema;

var userAccountSchema = new mongoose.Schema({
	user_name: {
		type: String,
		unique: true
	},

	user_password: {
		type: String
	},

	user_confirmPassword: {
		type: String
	}
});


/*
	Encapsulation means hiding attributes 
	module.exports allow us to make changes in one place of the code, 
	without having to also make changes in the other parts of an application.

	module.exports reference the same object
*/

module.exports = mongoose.model('User', userAccountSchema);
