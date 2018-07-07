class productInfo
{
	public Pname:string;
	public Pid:number;
	public Price:number;

	constructor(Pname:any,Pid:any,Price:any)
	{
		this.Pname = Pname;
		this.Pid = Pid;
		this.Price = Price;
	}
	public SHowProductDtls():void
	{
		var products = `product Name is : ${this.Pname} ,product id is : ${this.Pid},Price is :${this.Price}`;
		console.log("----------Product Informations-------");
		console.log(products);
	}
}
var P1 = new productInfo("Samsung",123,99999);

P1.SHowProductDtls();