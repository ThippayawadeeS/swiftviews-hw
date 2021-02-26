import { Component,Input } from '@angular/core';
//import { homedir } from 'os';

@Component({
    selector: 'feed-home',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.css']
})

export class FeedComponent {
    @Input ()
    title: string;
    count = 0;
    items = [1,2,3,4,5];
    constructor () {}
    countNumber() {
        this.count = this.count + 1;
    }
}