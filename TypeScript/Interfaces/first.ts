interface Itest
{
	firstName:string;
	lastName:string;
	duration:number;
	printData();
}
class emp implements Itest
{
	public firstName:string="";
	public lastName:string="";
	public employeeId:number=0;
	public employeeDesig:string="";
	public duration:number=60;
	public workingDays:number=0;
	public marks:number[]=[];
	public totalbudget :number = 10000000;


	public printData():void
	{
		console.log("Total budget is 1,0000000/-00");
		var str = `firstName is : ${this.firstName} , lastName is : ${this.lastName}, employeeDesig is :${this.employeeDesig}, employeeId is  : ${this.employeeId}, workingDays is : ${this.workingDays},marks:${this.marks}`;
		if(this.workingDays < this.duration && this.workingDays<=30 && this.workingDays>=55 || this.workingDays<=59)
		{
			if(this.workingDays < this.duration)
				{
					str = str + ` , remaining progress is available : ${this.duration-this.workingDays}`;
				}
				  if(this.workingDays<=30){
					str = str + ` , total amount been tranformed :${this.totalbudget/2} `;
				}
				else if(this.workingDays>=55 && this.workingDays<=59 )
				{
					str = str + ` , total amount been tranformed :${this.totalbudget*3/4} `;
				}
			}
		else{
			alert("Successfully Done Your project..");
			str = str + ` , total amount been tranformed :${this.totalbudget}`;
		}
		
		console.log(str);
	}
}
var e1 = new emp();
e1.firstName = "Narendra";
e1.lastName = "Kundla";
e1.employeeId = 102;
e1.employeeDesig = "Engineer";
e1.workingDays=59;
e1.marks=[20,30,50];
e1.printData();

var e2 = new emp();
e2.firstName = "Chintu";
e2.lastName = "Kundla";
e2.employeeId = 200;
e2.employeeDesig = "software";
e2.workingDays=61;
e2.printData();