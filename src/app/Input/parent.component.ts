import { Component } from '@angular/core';
@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html'
})
export class ParentComponent {
    public data: any = [
        {name: 'Narendra', job: 'software'},
        {name: 'Chintu', job: 'NA'}
    ];
}
