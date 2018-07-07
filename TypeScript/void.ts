function f1():void
{
	console.log("This is f1() typescript  demo");
}

f1();
function f2(uname:string):void
{
	let str:string = "";
	str = "Welcome Mr." + uname;
	console.log(str);
}

f2("Narendra");
function f3(x:number,y:number):number
{
	var z = x+y;
	return z;
}
var result = f3(10,30);
console.log("The Sum of Result is " + result);

/* //here type is number but parameters have 1 number and 1 string so, when we
are mention type as number must be parameters contain numbers only

 function f4(x:number,y:string):number   
 {    
  var z = x+y;     return z; } var result =
f4(10,"Narendra"); console.log("The Sum of Result is " + result);
*/

// in order to get both string and number while mentioned number type, instead of mentioning of either number or string better to mention "any" 
function f5(x:any,y:any):number
{
	var z = x+y;
	return z;
} 
var result = f5(10," Narendra ");
console.log("The Sum of Result is " + result);