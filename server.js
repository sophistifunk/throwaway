var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));

app.get('/hw', function(req, res){
  res.send('Hello World2');
});

app.listen(6789, "localhost");
console.log("listening to 6789 on localhost");

