class person
{
	public sname:string;
	public ssalary:number;
	consrtuctor(name:string,salary:number)
	{
		this.sname = name;
		this.ssalary = salary;
	}
	public showDetails():void
	{
		var str= `${this.sname},${this.ssalary}`;
		console.log(str);
	}
}
var s1= new person();
s1.sname = "naren";
s1.ssalary=56000;
s1.showDetails();
