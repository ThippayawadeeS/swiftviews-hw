import { Component,Input } from '@angular/core';
//import { homedir } from 'os';

@Component({
    selector: 'try-home',
    templateUrl: './try.component.html',
    styleUrls: ['./try.component.css']
})

export class TryComponent {
    @Input ()
    title: string;
    count = 0;
    items = [1,2,3,4,5];
    constructor () {}
    countNumber() {
        this.count = this.count + 1;
    }
}