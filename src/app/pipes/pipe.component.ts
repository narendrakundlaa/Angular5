import {Component } from '@angular/core';
@Component({
    selector: 'app-pipe',
    templateUrl: './pipe.component.html',
    styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
public name = 'narendra';
public course = 'angular5';
public email = 'NARENDRA.AIMS@GMAIL.COM';
public joinDate = new Date();
public fee = 5600;
public x = 2;
public student: any[] = [
    { sid: 1, village: 'EGRP', state: 'AP'},
    { sid: 2, village: 'ATP', state: 'AP'},
    { sid: 3, village: 'EGRP', state: 'AP' },
    { sid: 4, village: 'ATP', state: 'AP' },
    { sid: 5, village: 'EGRP', state: 'AP' },
    { sid: 6, village: 'ATP', state: 'AP' },
    { sid: 7, village: 'EGRP', state: 'AP' },
    { sid: 8, village: 'ATP', state: 'AP' }
];
}
