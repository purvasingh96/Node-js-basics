var events = require('events');	//event is a core module
var util = require('util');	//usually set the event name to module name
/*var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(msg){
	console.log(msg);
})

myEmitter.emit('someEvent', 'an event has been emitted');
*/
var person = function(name){
	this.name=name;
}

util.inherits(person, events.EventEmitter); //who wants to inherit, what they want to inherit

var purva = new person('purva');
var kunal = new person('kunal');
var sneha = new person('sneha');
var people = [purva, kunal, sneha];

people.forEach(function(person){
	person.on('speak', function(msg){
		console.log(person.name+' said '+msg);
	});
});

purva.emit('speak', 'hi, my name is purva');	//emit is the way to emit an event
kunal.emit('speak', 'hi, my name is kunal');