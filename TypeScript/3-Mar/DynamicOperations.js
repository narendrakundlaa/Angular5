var Student //studentclass created as class Student
 = /** @class */ (function () {
    function Student() {
        this.sid = 0;
        this.sname = "";
        this.age = 0;
    }
    return Student;
}());
var Demo = /** @class */ (function () {
    function Demo() {
        this.ar = []; //before creating object persure create class first --->Student array of object created as class Student
        this.ar =
            [
                { sid: 100, sname: "Narendra", age: 28 },
                { sid: 101, sname: "chintu", age: 1 },
                { sid: 102, sname: "sahastra", age: 4 },
                { sid: 103, sname: "manoj", age: 25 }
            ];
    }
    Demo.prototype.showData = function () {
        console.log(this.ar);
    };
    Demo.prototype.addStudentDetails = function () {
        var s1 = new Student();
        s1.sid = 104;
        s1.sname = "Ramu";
        s1.age = 28;
        this.ar.push(s1);
    };
    // remove string or number or etc,
    Demo.prototype.removeStudent = function (n) {
        //arrow function start here
        var x = this.ar.map(function (item) { return item.sname; }).indexOf(n); //var x = this.ar.map(item=> item.sname); var y = x.indexOf(n);
        this.ar.splice(x, 1);
    };
    return Demo;
}());
var d1 = new Demo();
d1.showData();
console.log("After Add items");
d1.addStudentDetails();
d1.showData();
console.log("After Removed ");
//string removed here
//d1.removeStudent(100);
d1.removeStudent("manoj");
d1.showData();
