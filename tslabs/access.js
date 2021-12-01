var PersonAccesss = /** @class */ (function () {
    // interface: any
    function PersonAccesss(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonAccesss.prototype.getName = function () {
        console.log("Hello I am ".concat(this.firstName, " - ").concat(this.lastName));
    };
    PersonAccesss.prototype.public = function () {
    };
    return PersonAccesss;
}());
var ram = new PersonAccesss('Ram', 'Sham');
ram.getName();
