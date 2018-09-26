import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    title = 'Welcome Ladies & Gents to Calm Website.';
    slogan = 'theme more stylish than any other on ThemeForest.';
    constructor() { }

    ngOnInit() {
    }

}
