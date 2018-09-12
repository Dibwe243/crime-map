//Import mongoose
var mongoose = require('mongoose');

//Mongoose is a connection to the MongoDB database
//Debug will show all the errors
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/crimeApi');


//We are going to use Promises
mongoose.Promise = Promise;

module.exports.Crime = require("./report");