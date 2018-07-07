class StudentDetails
{
	public empno:number = 0;
	public ename:string = "";
	public job:string = "";
	public salary:number = 0;

	public showData() : any
	{
		var str:string =
		 `<span>Employee id is</span> :${this.empno} <br/> <span>Employee name is </span>: ${this.ename}<br/> <span>job is </span>: ${this.job}<br/> <span>Employee Salary is </span>: ${this.salary}<br/>`;
		console.log(str);
		document.write(str);
		
    } 
}
var s1 = new StudentDetails;
s1.empno = 001;
s1.ename = "Narendra";
s1.job = "Software";
s1.salary = 58000;
s1.showData();

var s2 = new StudentDetails;
s2.ename= "chintu";
s2.empno = 2;
s2.job = "Teacher";
s2.salary = 50000;

s2.showData();
