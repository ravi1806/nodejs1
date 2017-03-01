var greet = require('./greet');
//There is no greet.js file here, so it will find for greet folder and take index.js from there by default

greet.english(); //will first go in index.js, then from there will go english.js and take the func.
greet.spanish();