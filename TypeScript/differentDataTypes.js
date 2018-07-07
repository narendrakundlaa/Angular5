var empname = "Narendra";
var empID = "A001";
var job = "software";
var salary = 55000;
var isfullTime = true;
/*var str:string = "";
str = str + "Employee Name is " + empname + ",";
str = str + "Employee ID is " + empID + ",";
str = str + "Employee job is " + job + ",";
str = str + "Employee salary is " + salary + ",";
console.log(str);*/
// using backquote ` symbol
var str = "Employee Name is : " + empname + ", Employee ID is : " + empID + ", Employee job is:" + job + ",Employee salary is:" + salary + ",isfullTime : " + isfullTime;
console.log(str);
document.getElementById("data").innerHTML = str;
