//dynamic requests

var express = require('express');

var app = express();	//access to all express' dependencies

app.get('/', function(req, res){
	res.send('this is the message');	
});

app.get('/contact', function(req, res){
	res.send('this is contact page');
});

app.get('/profile/:id', function(req, res){
	res.send('you requested to view profile of id: '+req.params.id);
});

app.listen(3000);