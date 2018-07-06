import { Component } from '@angular/core';
class Department {
    public sname = '';
    public sloc = '';
    public depts = '';
    public img = '';
}
@Component({
    selector: 'app-object-arry',
    templateUrl: './dept.component.html'
})
export class DepartmentComponent {
public dept: Department[] = [];
constructor() {
this.dept = [
    {sname: 'Chintu', sloc: 'NRP', depts: 'Maths', img: 'image1.jpg'},
    {sname: 'Narendra', sloc: 'EGRP' , depts: 'English', img: 'krishna.jpg'}
];
}
}
