//Create a constructor for events
function Emitter() {
    this.events = {};
}


Emitter.prototype.on = function (type,listener) {
    this.events[type] = this.events[type] || []; //If the property already exists then let it be else create a new array
    this.events[type].push(listener); // Add the listener function to that property
};

Emitter.prototype.emit = function (type) {
    if(this.events[type]) //Check if this event property exists
    {
        //This will run all the listener functions stored in the array
        this.events[type].forEach(function (listener) {
            listener();
        });
    }
};

module.exports = Emitter;