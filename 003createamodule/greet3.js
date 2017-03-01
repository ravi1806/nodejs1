//A function constructor in module.exports

function Greetr() {
    this.greeting = "Hellow World!!";
    this.greet = function () {
        console.log(this.greeting);
    };
}

module.exports = new Greetr();