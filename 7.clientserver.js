//making our own server
//requires http module
//headers are extra info about req or resp
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log('request was made: '+req.url);
	res.writeHead(200, {'Content-Type': 'text/plane'});	//creating response header
	var myReadStream = fs.createReadStream(__dirname+'/readMe2.txt', 'utf8');	//__dirname is parent directory
	myReadStream.pipe(res);
	//res.end('hey guys!');	//ending response
});	//creates server

server.listen(3000, '127.0.0.1');	//localhost
console.log('listening to port 3000');