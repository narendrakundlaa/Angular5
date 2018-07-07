var person = /** @class */ (function () {
    function person() {
    }
    person.prototype.consrtuctor = function (name, salary) {
        this.sname = name;
        this.ssalary = salary;
    };
    person.prototype.showDetails = function () {
        var str = this.sname + "," + this.ssalary;
        console.log(str);
    };
    return person;
}());
var s1 = new person();
s1.sname = "naren";
s1.ssalary = 56000;
s1.showDetails();
