var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var sellerDetails = /** @class */ (function () {
    function sellerDetails(sellerName, sellerId, sellerPhone, isAvailability, sellerEmail) {
        this.isAvailability = true;
        this.sellerName = sellerName;
        this.sellerId = sellerId;
        this.sellerPhone = sellerPhone;
        this.sellerEmail = sellerEmail;
    }
    return sellerDetails;
}());
var samsungInfo = /** @class */ (function (_super) {
    __extends(samsungInfo, _super);
    function samsungInfo(sellerName, sellerId, sellerPhone, pname, model, price, sellerEmail) {
        var _this = _super.call(this, sellerName, sellerId, sellerPhone, sellerEmail) || this;
        _this.pname = pname;
        _this.model = model;
        _this.price = price;
        return _this;
    }
    samsungInfo.prototype.display = function () {
        var str = " sellerName is : " + this.sellerName + " , sellerId is : " + this.sellerId + " , sellerPhone is :" + this.sellerPhone;
        var str2 = " product Name is : " + this.pname + " , model is : " + this.model + ", price is : " + this.price;
        if (this.sellerEmail != undefined) {
            str = str + (" Seller email is : " + this.sellerEmail);
        }
        else if (this.isAvailability != undefined) {
            str = str + (" Seller isAvailability  : " + this.isAvailability);
        }
        console.log(" seller Info : ");
        console.log(str);
        console.log("Product Info : ");
        console.log(str2);
    };
    return samsungInfo;
}(sellerDetails));
var s1 = new samsungInfo("FLIPKART", "100", 040 - 8051680, "Nokia", "A002B6", 98225);
/*s1.sellerName = "FLIPKART";
s1.sellerId = 100;
s1.sellerPhone = 9494931945;
s1.sellerEmail = "narendra@gmail.com";
s1.pname = "Nokia";
s1.model = "A002B6";
s1.price = 98988;*/
s1.display();
