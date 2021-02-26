import { Component,Input } from '@angular/core';
//import { homedir } from 'os';

@Component({
    selector: 'sign-home',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignComponent {
    @Input ()
    title: string;
    count = 0;
    items = [1,2,3,4,5];
    constructor () {}
    countNumber() {
        this.count = this.count + 1;
    }
}