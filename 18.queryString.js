//query string starts with ?
var express = require('express');
var app = express();	//access to all express' dependencies

app.set('view engine', 'ejs');	//node knows that ejs to be used as view engine
app.use('/css', express.static('css'));	//serves static files

app.get('/', function(req, res){
	res.render('index');	
});

app.get('/contact', function(req, res){
	res.render('contact', {qs: req.query});	//we can pass data to view by adding an object to render method
});

app.get('/profile/:name', function(req, res){
	var data = {age:20, job:'ninja', hobbies: ['swimming', 'painting', 'skating']};
	res.render('profile', {person: req.params.name, data: data});	//person is object to fetch data
});

app.listen(3000);