
//require is a function that takes a parameter of path. It returns module.exports..
//this is done because our code in the app.js or all other files are wrapped inside a function in nodejs..

var greetHere = require(`./greet.js`); //This will get the data exported from greet.js file in this case the func greet. Now we can use that fn here. We can also omit the extension .js in the path.

//greet(); //This will throw error cos we cant use variables or fns of required module straightaway.

greetHere();