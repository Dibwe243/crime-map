var express = require('express');

var app = express();

app.use(express.static('frontEndFiles/resources'));

app.get('/',(req,res)=>{

  res.sendFile(__dirname + '/frontEndFiles/appLoader.html');
});

app.listen(3000,function(){
  console.log('app is running at port 3000');
});
