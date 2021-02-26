import { Component,Input } from '@angular/core';
//import { homedir } from 'os';

@Component({
    selector: 'owner-home',
    templateUrl: './owner.component.html',
    styleUrls: ['./owner.component.css']
})

export class OwnerComponent {
    @Input ()
    title: string;
    count = 0;
    items = [1,2,3,4,5];
    constructor () {}
    countNumber() {
        this.count = this.count + 1;
    }
}