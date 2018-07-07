class person
{
	public sname:string = " ";
	public sage:number = 0;
}
class student extends person
{
	public scourse:string = " ";
	public sfee:number = 0;

	public showDetails():void
	{
		
		var str= `Sname is : ${this.sname}, sage is : ${this.sage}, scourse is : ${this.scourse}, sfee is : ${this.sfee}`;
		console.log(str);
	}
}

var s1 = new student();
s1.sname = "Narndra";
s1.sage=28;
s1.scourse="Angular";
s1.sfee=2500;
s1.showDetails();