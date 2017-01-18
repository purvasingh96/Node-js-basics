//making our own server
//requires http module
//headers are extra info about req or resp
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log('request was made: '+req.url);
	if(req.url === '/home' || req.url === '/'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	} else if(req.url === '/contact'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/contact.html').pipe(res);
	} else if(req.url === '/api/employees'){
		var employees = [{name:'purva', job:'engineer', age:20}, {name:'sneha', job:'engineer', age:20}];
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(employees));
	} else {
		res.writeHead(404, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/notFound.html').pipe(res);		
	}

});	//creates server

server.listen(3000, '127.0.0.1');	//localhost
console.log('listening to port 3000');