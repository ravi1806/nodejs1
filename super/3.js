class Base {
    constructor() {}
    foo() {}
}
class Derived extends Base {
    constructor() {}
    delete() {
        delete super.foo;
    }
}

new Derived().delete(); // ReferenceError: invalid delete involving 'super'.