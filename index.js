var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');
    
var crimeRoutes = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +'/client'));


app.get('/', function(req, res){
    res.sendFile("index.html");
});



app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
});