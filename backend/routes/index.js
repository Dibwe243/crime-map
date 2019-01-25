var express = require('express');
var route = express.Router();
var myDatabase = require('../models/');
var session = require('express-session');
var bcrypt = require('bcrypt');

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

//save user and crime details
route.post('/save-crime-reports', function(req, res){
    myDatabase.findOne({userName: req.body.username})
    .then((data) => {
        if(data.userName) {
            res.send({myResponse: 'Email exists'});
        }
       
    })
    .catch((err) => {
        if(req.body.userName !== "") {
  
                var password = req.body.password;
                var username = req.body.username;
                var email = req.body.email;
                
                bcrypt.hash(password, 10, function(err, hash) {
                    var user = req.body;
                    user.password = hash;
                    myDatabase.create(user)
                    .then(user => {
                        res.send({myResponse: 'Worked'})
                        
                    })
                    .catch(function(err){
                        res.send({myResponse: 'Something went wrong'});
                        console.log(hash);
                        
                    });
                });
        } else {
            res.send({myResponse: 'all fields are required'});
        }
    })
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

route.post('/login-user', function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    myDatabase.findOne({userName: username}, function(err, user) {
        if(err) {
            console.log('something went wrong');
            return res.send({response: 'failed'});
        }

        if(!user) {
            console.log('no user');
            return res.send({myResponse: 'failed'}) ;           
            
        }
        var userInfo = user.toObject();

        bcrypt.compare(password, userInfo.password, function(err, results){
            if(err) {
                return res.send('failed');
                
            }
            else if (!results) {
                return res.send({myResponse: `wrong assword or user`});
            }
            else if (results){
                req.session.user = userInfo;
                return res.send({myResponse: `Logged`});
            }
            
        })
        
    })
})

route.get('/dashboard', function(req, res){
    
    if(req.session.user) {
        res.send('logged in');
    }
    else {
        res.send('not logged in');
    }
})

route.get('/logout', function(req, res){
    req.session.destroy();
    return res.send('logout');
})



module.exports = route;