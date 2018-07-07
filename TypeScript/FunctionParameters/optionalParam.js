function optionalValues(name, age, email) {
    var str = "Name is : " + name + "; Age is : " + age + ";";
    if (email != undefined) {
        var str = str + ("" + email);
    }
    console.log(str);
}
optionalValues("Narendra", 28);
optionalValues("chintu", 04, " chintu@gmail.com");
function defaultValues(ename, salary, discount) {
    if (discount === void 0) { discount = 5; }
    var str = " Ename is : " + ename + ", salary is : " + salary + ", discount is : " + discount + ";";
    console.log(str);
}
defaultValues("Sahastra", 100000, 25);
defaultValues("siromany", 56000);
function restSum() {
    var narendra = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        narendra[_i] = arguments[_i];
    }
    var total = 0;
    for (var i in narendra) {
        total = total + narendra[i];
    }
    console.log("sum of Results :" + total);
}
restSum(15, 20);
restSum(10, 20, 30, 40);
