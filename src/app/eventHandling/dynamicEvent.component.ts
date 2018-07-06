import {Component } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

class Student {
        public sname = '';
        public course = '';
        public age = 0;
        public  image = '';
        }
@Component({
    selector: 'app-dynamic-event',
    templateUrl: './dynamicEvent.component.html',
    styleUrls: ['./dynamicEvent.component.css']
})
export class DynamicEventHandlingComponent {
public array: Student[] = [];
// Binding with text boxes
public s1 = '';
public s2 = '';
public s3 = 0;
public s4 = '';
constructor() {
this.array = [
    { sname: 'Chintu', course: 'LKG', age: 4, image: 'image1.jpg' },
    { sname: 'Narendra', course: 'MBA', age: 29, image : 'image2.jpg' },
    { sname: 'Sahastra Darling', course: 'Nursery', age: 3, image: 'image3.jpg' },
    { sname: 'Manoj', course: 'MBA', age: 26, image: 'image1.jpg' },
    { sname: 'Dhanu', course: 'MBA', age: 26, image: 'image2.jpg' },
    { sname: 'Anil', course: 'Btech', age: 19, image: 'image1.jpg' }
];
}
public addItems(): void {
    const obj = new Student();
    obj.sname = this.s1;
    obj.course = this.s2;
    obj.age = this.s3;
    obj.image = this.s4;
    this.array.push(obj);
    this.clearFields();
}
// clear input fields after entered
public clearFields(): void {
    this.s1 = '';
    this.s2 = '';
    this.s3 = 0;
    this.s4 = '';
}
public removeItems(n: number): void {
this.array.splice(n, 1);
// console.log(n);
}
public selectItems(n: number): void {
    const obj = this.array[n];
    this.s1 = obj.sname;
    this.s2 = obj.course;
    this.s3 = obj.age;
    this.s4 = obj.image;
    console.log(obj);
}
}
