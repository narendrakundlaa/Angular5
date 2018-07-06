import {Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
    selector: 'app-binding',
    templateUrl: './propertyBinding.component.html',
    styleUrls: ['./propertyBinding.component.css']
})
export class PropertyBindingComponent {
public id = 102;
public name = 'Sahastra Darling';
public school = 'ZPHS School';
public color = 'red';
public fontsize = '25px';
public input = 'Chintu';
}
