import {Component, OnInit} from '@angular/core';
import {
    Image,
    LineLayout,
    PlainGalleryConfig,
    PlainGalleryStrategy,
} from 'angular-modal-gallery';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

    tabs = {
        tab_1: 'all',
        tab_2: 'Design',
        tab_3: 'Branding',
        tab_4: 'Graphic',
        tab_5: 'Animation',
        tab_6: 'Illustration',
        tab_7: 'Photography'
    }

    plainGalleryRow: PlainGalleryConfig = {
        strategy: PlainGalleryStrategy.ROW,
        layout: new LineLayout({width: '100%', height: '100%'}, {length: 1, wrap: true}, 'flex-start')
    };

    images: Image[] = [
        new Image(
            0,
            { img: '../assets/img/jpg/1.jpg' }
        ),
        new Image(
            1,
            { img: '../assets/img/jpg/2.jpg' }
        ),
        new Image(
            2,
            { img: '../assets/img/jpg/3.jpg' }
        ),
        new Image(
            3,
            { img: '../assets/img/jpg/5.jpg' }
        ),
        new Image(
            4,
            { img: '../assets/img/jpg/6.jpg' }
        )
    ];
    constructor() {
    }

    ngOnInit() {
    }

}
