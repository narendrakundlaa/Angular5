import { Component } from '@angular/core';
@Component({
    selector: 'app-emp',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeSPAComponent {
    public emp: any[] = [
        { name: 'Narendra', age: 28, desig: 'Softwarre' },
        { name: 'Chintu', age: 4, desig: 'GOVT employee' },
        { name: 'Sahastra Darling', age: 2, desig: 'Student' },
        { name: 'Manoj', age: 28, desig: 'MBA' },
        { name: 'Narendra', age: 28, desig: 'Softwarre' },
        { name: 'Narendra', age: 28, desig: 'Softwarre' },
        { name: 'Narendra', age: 28, desig: 'Softwarre' },
    ];
}
