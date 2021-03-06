import {Component, OnInit} from '@angular/core';
import {FooterService} from '../services/footer.service';
import {Footer} from './footer';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    footerPost: Footer[];
    gridImg = [
        {
            src: '/assets/img/png/1.png'
        },
        {
            src: '/assets/img/png/2.png'
        },
        {
            src: '/assets/img/png/3.png'
        },
        {
            src: '/assets/img/png/4.png'
        },
        {
            src: '/assets/img/png/5.png'
        },
        {
            src: '/assets/img/png/6.png'
        },
        {
            src: '/assets/img/png/7.png'
        },
        {
            src: '/assets/img/png/8.png'
        },
        {
            src: '/assets/img/png/9.png'
        },
        {
            src: '/assets/img/png/10.png'
        },
        {
            src: '/assets/img/png/11.png'
        },
        {
            src: '/assets/img/png/12.png'
        },
    ];



    footerNav = [
        {navitem: 'Home'},
        {navitem: 'About'},
        {navitem: 'Portfolio'},
        {navitem: 'Blog'},
        {navitem: 'Features'},
        {navitem: 'Contact'}
    ];


    constructor(private footerservice: FooterService) {
    }

    getPost(): void{
        this.footerservice.getLastPost().subscribe(data => this.footerPost = data)
    }

    ngOnInit() {
        this.getPost();
    }

}
