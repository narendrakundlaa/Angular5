class studentConstrucor
{
	public village : string;
	public state:string;
	public pin:number;

	constructor(village:string,state:string,pin?:number)
	{
		this.village = village;
		this.state = state;
		this.pin = pin;		
	}
	public showDetails():void
	{
		var str = ` village Name is : ${this.village} , state is : ${this.state} , `;
		if(this.pin != undefined)
		{
			str = str + ` Pin is  : ${this.pin}`;
		}
		console.log(str);
		document.write(str);
	}
}
// if its a contructor initialise the variables at the time of object create
var a1 = new studentConstrucor("EGRP" , "AP");
a1.showDetails();

var a2 = new studentConstrucor("PTP", "AP" , 531654)

a2.showDetails();
