//making our own server
//requires http module
//headers are extra info about req or resp
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log('request was made: '+req.url);
	res.writeHead(200, {'Content-Type': 'application/json'});	//creating response header
	var myObj = {
		name: 'purva',
		job: 'engineer',
		age: 20
	};
	res.end(JSON.stringify(myObj));	//sending data back to client: 	end() accepts only string or buffer 
});

server.listen(3000, '127.0.0.1');	//localhost
console.log('listening to port 3000');