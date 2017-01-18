//create and destroy directories
var fs = require('fs');

//fs.unlink('writeMe2.txt');	//deletes writeMe2.txt file

//Synchronous method
//making directory

//fs.mkdirSync('newDirectory');	creates a newDirectory folder
//fs.rmdirSync('newDirectory');	removes the directory

//asynchronus method, create directory
/*
fs.mkdir('newDirectory', function(){
	fs.readFile('readMe.txt', 'utf8', function(err, data){
			fs.writeFile('./newDirectory/writeMe2.txt', data);
	});
});
*/

//we cant remove a directory without it being empty
//removing directory
//asynchronus method

fs.unlink('./newDirectory/writeMe2.txt', function(){
	fs.rmdir('newDirectory');
});

