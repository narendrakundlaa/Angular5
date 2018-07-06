import { Component } from '@angular/core';
@Component({
    selector: 'app-rangepipe',
    templateUrl: '/raangepipe.component.html',

})
export class RangePipeComponent {
    public employee: any[] = [
        {
            name: 'Narendra', sal: 600
        },
        {
            name: 'Narendra-2', sal: 4600
        },
        {
            name: 'Narendra3', sal: 2600
        },
        {
            name: 'Narendra4', sal: 3600
        },
        {
            name: 'Narendra5', sal: 9600
        },
        {
            name: 'Narendra6', sal: 7600
        },
        {
            name: 'Narendra7', sal: 52600
        }
    ];
    public min = 500;
    public max = 1500;
    public minimum = 600;
    public maximum = 15000;
}

