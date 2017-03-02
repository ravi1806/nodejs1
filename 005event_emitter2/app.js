var Emitter = require('events');

var eventConfig = require('./config').events;

//Create a new objext instance
var emtr = new Emitter();

//Add an event(greet) property with an array of listener functions..
emtr.on(eventConfig.GREET,function () {
    console.log('Somehwere I said hello');
});

emtr.on(eventConfig.GREET,function () {
    console.log('Are you awesome bro');
});

console.log('Hello');

emtr.emit(eventConfig.GREET);