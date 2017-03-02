var EventEmitter = require('events');
var util = require('util');
//1. we create a function consrtuctor Greetr
//2. Make Greetr constructor inherit all properties of EventEmitter
//3. Add a prototype to our constructor.
// 4. create an object instance from our construcktor
// 5.use a property of EventEmitter(on) on the new objext
// 6.Call the function which will log out and trigger the event.

function Greetr() {
    this.greeting = "Hello Hi";
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function () {
    console.log(this.greeting);
    this.emit('greet');
};

var greet1 = new Greetr();

greet1.on('greet',function () {
   console.log('Someone greeted');
})

greet1.greet();