'use strict';

var EventEmitter = require(`events`);

class Greetr extends EventEmitter{ //this extends is equivalent to util.inherits(Greetr,EvenEmitter);
    constructor() {
        super(); //This is equiv to EventEmitter.call(this); reqd so that it contains all props of parent object(EVentEmitter)
        this.greeting = "Hello Ravi";
    }

    greet(data) {
    console.log(`${this.greeting}: ${data}`);
    this.emit('greet',data);
    };

}

var greet1 = new Greetr();

greet1.on('greet',function (data) {
    console.log('Someone greeted!: ' + data);
});

greet1.greet('Ravi');


