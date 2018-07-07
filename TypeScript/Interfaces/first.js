var emp = /** @class */ (function () {
    function emp() {
        this.firstName = "";
        this.lastName = "";
        this.employeeId = 0;
        this.employeeDesig = "";
        this.duration = 60;
        this.workingDays = 0;
        this.marks = [];
        this.totalbudget = 10000000;
    }
    emp.prototype.printData = function () {
        console.log("Total budget is 1,0000000/-00");
        var str = "firstName is : " + this.firstName + " , lastName is : " + this.lastName + ", employeeDesig is :" + this.employeeDesig + ", employeeId is  : " + this.employeeId + ", workingDays is : " + this.workingDays + ",marks:" + this.marks;
        if (this.workingDays < this.duration && this.workingDays <= 30 && this.workingDays >= 55 || this.workingDays <= 59) {
            if (this.workingDays < this.duration) {
                str = str + (" , remaining progress is available : " + (this.duration - this.workingDays));
            }
            if (this.workingDays <= 30) {
                str = str + (" , total amount been tranformed :" + this.totalbudget / 2 + " ");
            }
            else if (this.workingDays >= 55 && this.workingDays <= 59) {
                str = str + (" , total amount been tranformed :" + this.totalbudget * 3 / 4 + " ");
            }
        }
        else {
            alert("Successfully Done Your project..");
            str = str + (" , total amount been tranformed :" + this.totalbudget);
        }
        console.log(str);
    };
    return emp;
}());
var e1 = new emp();
e1.firstName = "Narendra";
e1.lastName = "Kundla";
e1.employeeId = 102;
e1.employeeDesig = "Engineer";
e1.workingDays = 59;
e1.marks = [20, 30, 50];
e1.printData();
var e2 = new emp();
e2.firstName = "Chintu";
e2.lastName = "Kundla";
e2.employeeId = 200;
e2.employeeDesig = "software";
e2.workingDays = 61;
e2.printData();
