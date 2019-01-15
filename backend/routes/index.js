var express = require('express');
var route = express.Router();
var myDatabase = require('../models/');
route.get('/', function(req, res){
    myDatabase.find()
    .then(data =>{
        res.send(data);
    })
})

route.get('/display-reports', function(req, res){
    
    myDatabase.find()
    .then(data => res.send(data))
})

route.post('/save-crime-reports', function(req, res){
    
    myDatabase.create(req.body)
    .then(data => res.send(data))
})

//delete the the account for a user
route.delete('/delete-account', function(req, res){
    myDatabase.remove()
    .then(data => res.send(data))
    .catch(err => console.log('failed to delete'));
})

//delete all reports that belong to a user
route.delete('/delete-reports', function(req, res){
    var deleteId = req.body.id;
    myDatabase.update({_id: deleteId}, {$set: {reportCrime :[]}})
    .then(data => res.send(data))
    .catch(err => console.log('failed to delete'));
})

//Delete one report under a specific user
route.delete('/deleteOneReport', function(req, res){
    var idToUpdate = req.body.id;
    var idToDelete = req.body.idToUpdate;
    myDatabase.update({_id: idToUpdate}, {$pull: {reportCrime: {id: idToDelete}}})
    .then(data => res.send(data))
    .catch(err => console.log('failed to delete'));
})
route.post('/update-reports', function(req, res){
    
    myDatabase.update(req.body)
    .then(data => res.send(data))
})


module.exports = route;