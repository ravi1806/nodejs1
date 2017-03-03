const obj = {
    name: "Jim Jam",
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
};

obj.greet();
obj.greet.call();
obj.greet.call({name: "Ravi Yadav"}) // if any params there, they are seperated by comma
obj.greet.apply();
//if any params there they are seprated in an array

