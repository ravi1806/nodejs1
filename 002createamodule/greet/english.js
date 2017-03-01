var greetings = require('./greetings.json'); //the json will have the json file content in objm require takes it onto a var greetings.

var greet = function () {
    console.log(greetings.en);
}

module.exports = greet;