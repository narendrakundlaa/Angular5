import { Component } from '@angular/core';
import { DemoService } from './demo.service';
@Component({
selector: 'app-service',
templateUrl: './service.component.html',
styleUrls: ['./service.component.css']
})
export class ServiceComponent {
    public s1 = '';
    public result = '';
    constructor(private _seviceOnject: DemoService) {}
public f1(): void {
    this.result = this._seviceOnject.getData(this.s1);
}
}
