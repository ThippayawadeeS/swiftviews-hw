import { Component,Input } from '@angular/core';
//import { homedir } from 'os';

@Component({
    selector: 'search-home',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent {
    @Input ()
    title: string;
    count = 0;
    items = [1,2,3,4,5];
    constructor () {}
    countNumber() {
        this.count = this.count + 1;
    }
}