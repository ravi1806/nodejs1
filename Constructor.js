//A constructor function

//function person(name,age,now){} OR
var person = function(name, age, now){
	this.name= name;
	this.age= age;
//	this.now= function(){
//		console.log(this.name);
//	}
//	this.now2 = function(){
//		console.log(this.age);
//	}
}


console.log(me);
//This is the efficient method..
//person.prototype.now = function() {} OR
person.prototype = {
	now: function() {
		console.log("Inside fn now "+this.name);
	},
	
	now2: function() {
		console.log("Inside fn now2 "+this.age);
	}
	
	
}

//An instance object
var me = new person("Ravi Yadav",26);

me.now();
me.now2();

//Every time we create a new instance of person, it will take memory for now() and now2(), better to make a prototype of these functions so that hey inherit instead of being created everytime...

//objects are always passed by reference and the values altered inside a function of an object wll reflect outside too, it means it will alter the object outside of that fun.

