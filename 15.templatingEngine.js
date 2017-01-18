//dynamic requests
//template engine helps embed data into javascript code
//template used- npm install ejs
//ejs used as view engine

var express = require('express');
var app = express();	//access to all express' dependencies

app.set('view engine', 'ejs');	//node knows that ejs to be used as view engine
//default behaviour- /view

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');	
});

app.get('/contact', function(req, res){
	res.send('this is contact page');
});

app.get('/profile/:name', function(req, res){
	var data = {age:20, job:'ninja', hobbies: ['swimming', 'painting', 'skating']};
	res.render('profile', {person: req.params.name, data: data});	//person is object to fetch data
});

app.listen(3000);