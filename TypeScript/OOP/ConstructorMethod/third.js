var productInfo = /** @class */ (function () {
    function productInfo(Pname, Pid, Price) {
        this.Pname = Pname;
        this.Pid = Pid;
        this.Price = Price;
    }
    productInfo.prototype.SHowProductDtls = function () {
        var products = "product Name is : " + this.Pname + " ,product id is : " + this.Pid + ",Price is :" + this.Price;
        console.log("----------Product Informations-------");
        console.log(products);
    };
    return productInfo;
}());
var P1 = new productInfo("Samsung", 123, 99999);
P1.SHowProductDtls();
