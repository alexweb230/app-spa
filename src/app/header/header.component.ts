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

    blog = true;

    onClick(){
        this.active = !this.active;
        this.expand = !this.expand;

        // console.log(this.routeBlog);
    }


    constructor(private router: Router) { }

     //
     // routeBlog = this.router.navigate(['/blog']);
     //


    ngOnInit() {
    }




}
