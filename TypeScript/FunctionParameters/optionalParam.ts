function optionalValues(name:string,age:number,email?:string):void
{
	
	var str = `Name is : ${name}; Age is : ${age};` 
	if(email != undefined){
		var str = str + `${email}`;
	}
	console.log(str);
}

optionalValues("Narendra",28);
optionalValues("chintu",04," chintu@gmail.com");

function defaultValues(ename:string,salary:number,discount:number = 5): void
{
	var str = ` Ename is : ${ename}, salary is : ${salary}, discount is : ${discount};`
	console.log(str);
}
defaultValues("Sahastra", 100000,25);
defaultValues("siromany" , 56000);

function restSum(...narendra:number[]):void //...narendra is replaced from ...ar 
{
	var total:number = 0;
	for(let i in narendra)
	{
		total = total + narendra[i];
	}
	console.log("sum of Results :" + total );
}

restSum(15,20);
restSum(10,20,30,40);

		




