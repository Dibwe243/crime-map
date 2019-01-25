
var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var userAccountSchema = new mongoose.Schema({
	userName: {
		type: String,
		unique: true
	},
	firstName: {
		type: String,
		unique: true
	},
	lastName:{ 
		type: String
	},
	userPassword: {
		type: String
	},
	reportCrime: {
		type: Array
	}
});


module.exports = mongoose.model('User', userAccountSchema);
