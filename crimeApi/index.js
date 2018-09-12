var http = require('http');

//import express
var express = require('express');

//report Route to send images to the uploads folder
var reportRoute = require('./route/report');

//Image Route to send images to the uploads folder
var imageRoute = require('./route/image');

app = express(),
port = process.env.PORT || 3000,
bodyParser = require('body-parser');

//File system
var fs = require("fs");

/*
- We need to connect to our database CrimeMap
- We need to include our mongodb module so we can us it.
- We create a server instance for MongoD the same way we did for node js
- Remember to create a database on MongoDB we called ours CrimeMapp
- We can now connect to our database
*/

var mongo = require('mongodb'),
Server = mongo.Server;

//MongoDb has its own port number localhost://27017
var server = new Server('localhost', 27017, {auto_reconnect: true});


//Body Parser tajes the form information and converts to a json object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Report Route so we can use it
app.use('/api/reportRoute', reportRoute)
app.get('/' ,  function(req, res){
	res.send('Result sent from report')
})

//We need to use our Image Route
app.use('/imageRoute', imageRoute)
app.get('/', function(req, res){
	res.send('We recieved our uploaded image!')
})

//We are creating an API route
app.listen(port, function(){
	console.log("App is running on " + port);
})


/*   
	1. If you want to test the API'S these are the links you need to use
	Testing of the Report Route, When a user wants to create a new Report

			http://localhost:3000/api/reportRoute/createReport

	2. This is our API on testing the image upload
		There is a folder called `uploads` and that's where all our uploaded images are stored
		They all have a `pre-defined` key called `crimeImage` so we are not storing the name of the image,
		but a pre-defined default name with a unuque id number and the jpg extension

			http://localhost:3000/imageRoute/
*/

