var studentConstrucor = /** @class */ (function () {
    function studentConstrucor(village, state, pin) {
        this.village = village;
        this.state = state;
        this.pin = pin;
    }
    studentConstrucor.prototype.showDetails = function () {
        var str = " village Name is : " + this.village + " , state is : " + this.state + " , ";
        if (this.pin != undefined) {
            str = str + (" Pin is  : " + this.pin);
        }
        console.log(str);
        document.write(str);
    };
    return studentConstrucor;
}());
// if its a contructor initialise the variables at the time of object create
var a1 = new studentConstrucor("EGRP", "AP");
a1.showDetails();
var a2 = new studentConstrucor("PTP", "AP", 531654);
a2.showDetails();
