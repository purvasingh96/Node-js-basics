var counter = function(arr){
	return 'there are '+ arr.length +'elements in this array'; 
};
console.log(counter(['purva', 'mini', 'kunal']));

var adder = function(a, b){
	return `the sum is ${a+b}`;
};

var pi= 3.14;

module.exports = {
	counter: counter,
	adder: adder,
	pi: pi
}
