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
var employee = /** @class */ (function () {
    function employee() {
        this.empName = "";
        this.empId = 0;
        this.esal = 0;
        this.employeeExperience = 0;
        this.total = 0;
        this.Incesal = 0;
    }
    return employee;
}());
var dept = /** @class */ (function (_super) {
    __extends(dept, _super);
    function dept() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.empDesignation = "";
        _this.eCompany = "";
        return _this;
    }
    dept.prototype.showDetails = function () {
        var str = "employee Name is :" + this.empName + ", employee salary is : " + this.esal + ", employee Experience is : " + this.employeeExperience + ",employee designtion :" + this.empDesignation + ", eCompany : " + this.eCompany;
        if (this.employeeExperience >= 3) {
            str = str + (", isFullTime : " + (this.isFullTime = true));
            //document.querySelector("#demo").innerHTML = str;
        }
        else {
            str = str + (" , isFullTime : " + (this.isFullTime = false));
            //document.querySelector("#demo2").innerHTML = str;
        }
        if (this.esal >= 56000) {
            str = str + (", employee salary increment is : " + (this.Incesal = 5000) + " , employee total getting is : " + (this.total = this.Incesal + this.esal));
            document.querySelector("#demo").innerHTML = str;
            alert("salary increment" + " " + (" " + this.empName));
        }
        console.log(str);
    };
    return dept;
}(employee));
var e1 = new dept();
e1.empName = "Narendra";
e1.esal = 56000;
e1.employeeExperience = 5;
e1.eCompany = "IBM";
e1.empDesignation = "Software";
e1.showDetails();
var e2 = new dept();
e2.empName = "Chintu";
e2.esal = 5800;
e2.employeeExperience = 2;
e2.eCompany = "IBM";
e2.empDesignation = "Software";
e2.showDetails();
var e3 = new dept();
e3.empName = "ABCD";
e3.esal = 56000;
e3.employeeExperience = 6;
e3.eCompany = "IBM";
e3.empDesignation = "Software";
e3.showDetails();
