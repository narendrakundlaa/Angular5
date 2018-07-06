import {Injectable } from '@angular/core';
@Injectable()
export class DemoService {
    public getData(uname: string): string {
        const message: string = 'Welcome to ' + uname;
        return message;
    }
}
