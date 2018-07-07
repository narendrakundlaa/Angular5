class Student //studentclass created as class Student
{ 
	public sid:number = 0;
	public sname:string = "";
	public age:number = 0;
}
class Demo
{
	public ar:Student[]=[];//before creating object persure create class first --->Student array of object created as class Student

	constructor()
	{
		this.ar=
		[
			{sid:100,sname:"Narendra",age:28},
			{sid:101,sname:"chintu",age:1},
			{sid:102,sname:"sahastra", age:4},//dont use 04 it causes Octal literal but 4 is accepted..
			{sid:103,sname:"manoj",age:25}
		];
	}
	public showData()
	{
		console.log(this.ar);
	}



public addStudentDetails(): void
{
	var s1 = new Student();
	s1.sid = 104;
	s1.sname = "Ramu";
	s1.age = 28;
	this.ar.push(s1);
}
// remove string or number or etc,
public removeStudent(n:string) : void
{
	//arrow function start here
	var x = this.ar.map(item=> item.sname).indexOf(n);//var x = this.ar.map(item=> item.sname); var y = x.indexOf(n);
	this.ar.splice(x,1);
}
/*public removeStudent(n:number) : void
{
	let x = this.ar.map(item=> item.sid).indexOf(n);
	this.ar.splice(x,1);
}*/
}
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