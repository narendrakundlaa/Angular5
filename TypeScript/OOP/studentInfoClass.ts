class StudentInfo
{
	public sname:string;
	public sid?:number;

	public showInfo():void
	{
		var str = `name is : ${this.sname}`;
		if(this.sid != undefined){
			str = str + `, id is : ${this.sid}`;
		}
		console.log(str);
	}
}

var s1 = new StudentInfo();
s1.sname = "Chintu";
s1.sid = 123;
s1.showInfo();
var s2 = new StudentInfo();
s2.sname = "Narndra";

s2.showInfo();
