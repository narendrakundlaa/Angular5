var x = 10;
var y = 20;
function f1() {
    var A = 50;
    if (y > x) {
        var Z = 100; // let can have only within the if condition  even not accesable within function
        console.log("block Z :" + Z);
    }
    console.log("local of A is " + A);
    console.log("Globle of X is " + x);
    console.log("Globle of Y is " + y);
    //console.log("block scope of Z is " + Z);
}
f1();
