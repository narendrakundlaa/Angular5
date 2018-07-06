import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
@Component({
    selector: 'app-bind-twoway',
    templateUrl: './dataBind.component.html',
})
export class DataBindComponent {
public str = 'Chintu';
public x = false;
public fontsize = '30px';
public radius = '25px 0px 25px 25px';
public images = 'image1.jpg';
public images2 = 'image1.jpg';
}
