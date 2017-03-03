class Polygon {
    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }
    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }
}

class Square extends Polygon {
    constructor(length) {
        this.height; // ReferenceError, super needs to be called first!

        // Here, it calls the parent class' constructor with lengths
        // provided for the Polygon's width and height
        super(length, length);

        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.
        this.name = 'Square';
    }

    get area() {
        return this.height * this.width;
    }

    set area(value) {
        this.height = this.width = Math.sqrt(value);
    }
}