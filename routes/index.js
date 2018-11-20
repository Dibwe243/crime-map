var express = require('express');
var route = express.Router();
var myDatabase = require('../models/');
route.get('/', function(req, res){
    myDatabase.find()
    .then(data =>{
        res.send(data);
    })
})

route.get('/display', function(req, res){
    
    myDatabase.find()
    .then(data => res.send(data))
})

route.post('/save-crime-reports', function(req, res){
    
    myDatabase.create(req.body)
    .then(data => res.send(data))
})

module.exports = route;