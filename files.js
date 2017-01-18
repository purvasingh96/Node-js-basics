var fs = require('fs');

//synchronus method
/*
var readMe = fs.readFileSync('readme.txt', 'utf8');	//this function (blocking function) is synchronous meaning that if there is any code below it, it will first read the file fully and then go for the code.
console.log(readMe);	//read a file
fs.writeFileSync('writeMe.txt', readMe);	//a txt file writeMe.txt is created in nodejs folder

*/

//asynchronus method, non-blocking code
//for asynchronus functions, we need a callback function.
//will print the o/p of code first then the file data

fs.readFile('readme.txt', 'utf8', function(err, data){
	fs.writeFile('writeMe2.txt', data);
});

//code
console.log('test');