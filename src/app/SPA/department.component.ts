import { Component } from '@angular/core';
@Component({
    selector: 'app-dept',
    templateUrl: './department.component.html',
    styleUrls: ['./department.component.css']
})
export class DepartmentSPAComponent {
public department: any[] = [
    {deptno: 100, dname: 'Accounts'},
    { deptno: 101, dname: 'Accounts' },
    { deptno: 102, dname: 'Accounts' },
    { deptno: 103, dname: 'Accounts' }
];
}
