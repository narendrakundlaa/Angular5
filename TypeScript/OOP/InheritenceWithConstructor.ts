class sellerDetails
{
	public sellerName: string;
	public sellerId: number;
	public sellerPhone : number;
	public isAvailability: boolean = true;
	public sellerEmail?:string;

	constructor(sellerName:string,sellerId:any,sellerPhone:number,isAvailability: boolean,sellerEmail?:any)
	{
		this.sellerName = sellerName;
		this.sellerId = sellerId;
		this.sellerPhone = sellerPhone;
		this.sellerEmail = sellerEmail;
	}

}
class samsungInfo extends sellerDetails
{
	public pname : string;
	public model:any;
	public price:number;
	
	constructor(sellerName:string,sellerId:any,sellerPhone:number,pname:any,model:any,price:any,sellerEmail?:any)
	{
		super(sellerName,sellerId,sellerPhone,sellerEmail);
		this.pname = pname;
		this.model = model;
		this.price = price;
	}

	public display():void
	{
		var str = ` sellerName is : ${this.sellerName} , sellerId is : ${this.sellerId} , sellerPhone is :${this.sellerPhone}`;
		var str2 = ` product Name is : ${this.pname} , model is : ${this.model}, price is : ${this.price}`;
		if(this.sellerEmail != undefined)
		{
			str = str + ` Seller email is : ${this.sellerEmail}`;			
		}
		else if( this.isAvailability != undefined)
		{
			str = str + ` Seller isAvailability  : ${this.isAvailability}`;
		}
		console.log(" seller Info : " );
		console.log(str);
		console.log("Product Info : " );
		console.log(str2);

	}
}


var s1 = new samsungInfo("FLIPKART", "100",040-8051680, "Nokia","A002B6",98225);
/*s1.sellerName = "FLIPKART";
s1.sellerId = 100;
s1.sellerPhone = 9494931945;
s1.sellerEmail = "narendra@gmail.com";
s1.pname = "Nokia";
s1.model = "A002B6";
s1.price = 98988;*/
s1.display();