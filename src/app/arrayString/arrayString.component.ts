import { Component } from '@angular/core';
@Component({
    selector: 'app-string',
    templateUrl: './arrayString.component.html',
    styleUrls: ['./arrayString.component.css']
})
export class ArrayStringComponent {
public ar: string[] = ['Narendra', 'Chintu', 'Sahastra Darling', 'Siromany', 'Bhava'];
public obj: any = {custId: 105, name: 'Narendra'};
}
