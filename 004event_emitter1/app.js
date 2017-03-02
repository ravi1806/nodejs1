var Emitter = require('./emitter');

//Create a new objext instance
var emtr = new Emitter();

//Add an event(greet) property with an array of listener functions..
emtr.on('greet',function () {
   console.log('Somehwere I said hello');
});

emtr.on('greet',function () {
    console.log('Are you awesome bro');
});

console.log('Hello');

emtr.emit('greet');