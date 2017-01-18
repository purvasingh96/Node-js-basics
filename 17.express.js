//express js used for routing and templating
//package.json keeps track of dependencies
//express- module written in javascript

var express = require('express');

var app = express();	//access to all express' dependencies

//http methods- get (app.get('route', fn), post, delete, put)

app.get('/', function(req, res){
	res.send('this is the message');	//no need to specify text/plain
});

app.get('/contact', function(req, res){
	res.send('this is contact page');
});

app.listen(3000);