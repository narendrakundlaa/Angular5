var empname:string = "Narendra";
var empID:string = "A001";
var job:string = "software";
var salary:number = 55000;
var isfullTime:boolean = true;
/*var str:string = "";
str = str + "Employee Name is " + empname + ",";
str = str + "Employee ID is " + empID + ",";
str = str + "Employee job is " + job + ",";
str = str + "Employee salary is " + salary + ",";
console.log(str);*/

// using backquote ` symbol

var str:string = `Employee Name is : ${empname}, Employee ID is : ${empID}, Employee job is:${job},Employee salary is:${salary},isfullTime : ${isfullTime}`;
console.log(str);
document.getElementById("data").innerHTML = str;