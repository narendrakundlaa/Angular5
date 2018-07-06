import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
    selector: 'app-reactiveform',
    templateUrl: './ReactiveForms.component.html',
    styleUrls: ['./ReactiveForms.component.css']
})
export class ReactiveFormComponent {
    public customerform = new FormGroup({
        fname: new FormControl(null, Validators.required),
        lname: new FormControl(null, Validators.required)

    });
}
