//import express
var express = require('express');

var db = require('../models');

//We need to import the route module
var Router = express.Router();

console.log('this is the report route');


//This route is used to retrieve all the data
Router.route('/')
	.get( function(req, res){

		db.Crime.find()
		.then(function(crime){
			res.json(crime);
		})
		.catch(function(err){
			res.send(err);
		})
	});


//We create a new Route to send data
Router.route('/createReport')
	.post(function(req, res){
		db.Crime.create(req.body)
		.then(function(report){
			res.status(201).json(report);
		})
		.catch(function(err){
			res.send(err);
		})
	})


//We need to export our router to work in the index.js
module.exports = Router;