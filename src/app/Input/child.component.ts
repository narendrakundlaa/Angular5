import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-child',
    template: `<h1>Child page</h1>
    <div>Name is : {{uname.name}}<br/> job is : {{uname.job}}
    </div>    `
})
export class ChildComponent {
   @Input() public uname: string;
}
