import {Component, OnInit} from '@angular/core';
import {MainNav} from './model/main-nav';


@Component({
    selector: 'app-main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

    menu: MainNav = {
        linkfirst: 'home',
        linksecond: 'about',
        linkthird: 'portfolio',
        linkfourth: 'support',
        linkfive: 'contact'
    }


    constructor() {
    }

    ngOnInit() {
    }

}
