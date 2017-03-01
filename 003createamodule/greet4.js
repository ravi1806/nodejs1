//A function constructor in module.exports

function Greetr() {
    this.greeting = "Hellow World!! in greet4";
    this.greet = function () {
        console.log(this.greeting);
    };
}

module.exports = Greetr; //Here we pass the constructor function itself unlike greet3.js where we pass an objext instance
