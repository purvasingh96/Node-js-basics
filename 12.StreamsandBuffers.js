//buffer- temp storage spot for data
//stream- when buffer is full, it passes data in form of stream
//stream- read, write, duplex
var http = require('http');
var fs = require('fs');

//readable stream- createReadStream

var myReadStream = fs.createReadStream(__dirname+'/readMe2.txt', 'utf8');	//__dirname is parent directory
var myWriteStream = fs.createWriteStream(__dirname+'/writeMe.txt');
/*
myReadStream.on(`data`, function(chunk){
	console.log('new chunk recieved: ');
	myWriteStream.write(chunk);	//every time we recieve chunk, we write it
});
*/

//using pipes to convert read to write
//applicable only for readable streams

myReadStream.pipe(myWriteStream);

