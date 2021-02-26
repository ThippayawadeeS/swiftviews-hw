import { Component,Input } from '@angular/core';
//import { homedir } from 'os';

@Component({
    selector: 'help-home',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.css']
})

export class HelpComponent {
    @Input ()
    title: string;
    count = 0;
    items = [1,2,3,4,5];
    constructor () {}
    countNumber() {
        this.count = this.count + 1;
    }
}