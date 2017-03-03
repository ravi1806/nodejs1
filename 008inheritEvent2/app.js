var EventEmitter = require('events');
var util = require('util');

function Greetr()
    EventEmitter.call(this); // now this, will take all the (this.values) of EventEmitter and not be undefined.
    this.greeting = "Hello Hi";
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function (data) {
    console.log(this.greeting + ':' + data);
    this.emit('greet',data);
};

var greet1 = new Greetr();

greet1.on('greet',function (data) {
    console.log('Someone greeted!: ' + data);
});

greet1.greet('Ravi');