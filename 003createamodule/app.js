var greet = require('./greet1'); //require has returned the module.exports where its just a function which relplaced our empty objext

greet();

// var greet2 = require('./greet2');
//
// greet2.greet();//require has returned the module.exports where we have added a property greet to the empty module.exports object.
//or we could write the above two lines of code as follows..
var greet2 = require('./greet2').greet;

greet2();

var greet3 = require('./greet3'); //This will return a new instance of object from the constructor here in greet3

greet3.greet();

greet3.greeting = "Changed hello World as on second call, it didnt create a new instance but used the cached version of the last call on require(cached module in node core)"; //changed greet3.greeting as its changed by reference in the cache


var greetb3= require('./greet3');

greetb3.greet();

//To avoid getting the cached version of the object, we must export the entire constructor itself instead of passing an instance.

var greet4 = require('./greet4');

var greetr = new greet4();

greetr.greet();

// var greet5 = require('./greet5');
//
// greet5.greetr();

//OR

var greet5 = require('./greet5').greetr;

greet5();