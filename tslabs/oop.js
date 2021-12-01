var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person_YUJ = /** @class */ (function () {
    function Person_YUJ(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person_YUJ.prototype.name = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person_YUJ.prototype.whoAreYou = function () {
        return "Hi i'm ".concat(this.name());
    };
    return Person_YUJ;
}());
var Student_YUJ = /** @class */ (function (_super) {
    __extends(Student_YUJ, _super);
    function Student_YUJ(firstName, lastName, course) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.course = course;
        return _this;
    }
    Student_YUJ.prototype.whoAreYou = function () {
        return "".concat(_super.prototype.whoAreYou.call(this), " and i'm studying ").concat(this.course);
    };
    return Student_YUJ;
}(Person_YUJ));
var ss = new Student_YUJ("Surekha", "Shelake", "typescript");
console.log(ss.whoAreYou());
