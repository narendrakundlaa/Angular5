import { Component } from '@angular/core';
@Component({
    selector: 'app-parameterspipe',
    templateUrl: './parameterPipe.component.html',
    styleUrls: ['./parameterPipe.component.css']
})
export class ParametersPipeComponent {
    public emp: any[] = [
        { eno: 100, ename: 'Narendra Kundla-1', deptno: 10},
        { eno: 101, ename: 'Narendra Kundla-2', deptno: 20 },
        { eno: 102, ename: 'Narendra Kundla-3', deptno: 20 },
        { eno: 103, ename: 'Narendra Kundla-4', deptno: 30 },
        { eno: 104, ename: 'Narendra Kundla-5', deptno: 30 },
        { eno: 105, ename: 'Narendra Kundla-6', deptno: 20 },
        { eno: 106, ename: 'Narendra Kundla-7', deptno: 20 },
        { eno: 107, ename: 'Narendra Kundla-8', deptno: 20 },
        { eno: 108, ename: 'Narendra Kundla-9', deptno: 10 },
        { eno: 109, ename: 'Narendra Kundla-10', deptno: 10 },
        { eno: 110, ename: 'Narendra Kundla-11', deptno: 20 },
        { eno: 111, ename: 'Narendra Kundla-12', deptno: 30 },
        { eno: 112, ename: 'Narendra Kundla-13', deptno: 10 }
    ];
    public x = 10;
    public all = this.emp.length;
}
