import { Component } from '@angular/core';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public name = 'Narendra';
    public age = 28;
    public GIT = 'Added this content after GIt';
    public result = '';
    public Message(): void {
       this.result = this.name;
    }
}
