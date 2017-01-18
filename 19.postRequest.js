//post is used while submitting forms on website

//query string starts with ?
var express = require('express');
var bodyParser = require('body-parser');
var app = express();	//access to all express' dependencies

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');	//node knows that ejs to be used as view engine
app.use('/css', express.static('css'));	//serves static files

app.get('/', function(req, res){
	res.render('index');	
});

app.get('/contact', function(req, res){
	res.render('contact', {qs: req.query});	//need to add additional stuff to make it handle post data too
});

app.post('/contact',urlencodedParser, function(req, res){
	console.log(req.body);
	res.render('contact-success', {data: req.body});	//need to add additional stuff to make it handle post data too
});

app.get('/profile/:name', function(req, res){
	var data = {age:20, job:'ninja', hobbies: ['swimming', 'painting', 'skating']};
	res.render('profile', {person: req.params.name, data: data});	//person is object to fetch data
});

app.listen(3000);