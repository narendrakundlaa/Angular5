import { Component } from '@angular/core';
@Component({
    selector: 'app-templatedriven',
    templateUrl: './templateDriven.component.html',
    styleUrls: ['./templateDriven.component.css']
})
export class TemplateDrivenComponent {
    public fname = '';
    public lname = '';
    public city = '';
    public email = '';
    public pincode = '';
    public get() {
        console.log(this.fname);
        document.querySelector('#demo').innerHTML = this.fname;
    }
}
