import { Component,Input } from '@angular/core';
//import { homedir } from 'os';

@Component({
    selector: 'home-home',
    templateUrl: './gohome.component.html',
    styleUrls: ['./gohome.component.css']
})

export class GoHomeComponent {
    @Input ()
    title: string;
    count = 0;
    items = [1,2,3,4,5];
    constructor () {}
    countNumber() {
        this.count = this.count + 1;
    }
}