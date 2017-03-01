var greet = function() {
	console.log(`Hello Ravi!`);
};

//greet(); //(Now tryin callin this fnction from app.js file, it wont work because the variables n fns defined in one module aren't exposed to other module just by using require)

module.exports = greet; //Now we can use the greet fn in app.js file, module.exports is an empty object which we replace OR fill

