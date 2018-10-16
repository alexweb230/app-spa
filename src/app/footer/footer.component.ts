import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

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
    ]


    constructor() {
    }


    ngOnInit() {
    }

}
