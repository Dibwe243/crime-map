var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

var session = require('express-session');


    
var crimeRoutes = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret:'2323uuuhu323uiu232u', resave: false, saveUninitialized:true}));
app.use(express.static(__dirname +'/client'));


app.get('/', function(req, res){
    res.sendFile("index.html");
});


app.use('/api/v0.1/', crimeRoutes );
app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
});