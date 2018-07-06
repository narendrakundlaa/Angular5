import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
    selector: 'app-event-bind',
    templateUrl: './eventHandling.component.html',
    styleUrls: ['./eventHandling.component.css']
})
export class EventHandlingComponent {
public str = '';
public result: any = '';
public error = '';
public Myfunction(): void {
                this.result = 'Welcome to ' + this.str;
                if (this.str === '' || this.result === 'undefined' || this.str === ' ') {
                alert('Field Not Empty');
                this.error = 'Manditory Field';
                this.result = '';
                }
                }
}
