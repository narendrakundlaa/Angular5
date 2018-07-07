var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person() {
        this.sname = " ";
        this.sage = 0;
    }
    return person;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scourse = " ";
        _this.sfee = 0;
        return _this;
    }
    student.prototype.showDetails = function () {
        var str = "Sname is : " + this.sname + ", sage is : " + this.sage + ", scourse is : " + this.scourse + ", sfee is : " + this.sfee;
        console.log(str);
    };
    return student;
}(person));
var s1 = new student();
s1.sname = "Narndra";
s1.sage = 28;
s1.scourse = "Angular";
s1.sfee = 2500;
s1.showDetails();
