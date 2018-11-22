
var mongoose = require('mongoose');


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


module.exports = mongoose.model('User', userAccountSchema);
