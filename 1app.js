//function statement 

function greet() {
	console.log('hi');
}

greet();

//first-class functions
//first-class fns can be operated like strings n numbers(i.e passed arnd in fns, set variables equal to them, put them in arrays etc)
function logGreeting(fn) {
	fn();
} 

logGreeting(greet);

//fn expression

var greetMe = function(){
	console.log('Hi Ravi');
};

greetMe();

//this fn expression is stil first class

logGreeting(greetMe);
