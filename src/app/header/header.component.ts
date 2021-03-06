import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    title = 'Welcome Ladies & Gents to Calm Website.';
    slogan = 'theme more stylish than any other on ThemeForest.';

    active = false;
    expand = false;

    onClick(){
        this.active = !this.active;
        this.expand = !this.expand;
    }


    constructor(private router:Router) { }


    getBlog(){
        if (this.router.url === '/blog'){
            return 'header-blog';
        }
    }



    ngOnInit() {
    }




}
