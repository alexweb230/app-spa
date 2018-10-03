import {Component, OnInit} from '@angular/core';
import {
    Image,
    LineLayout,
    PlainGalleryConfig,
    PlainGalleryStrategy,
} from 'angular-modal-gallery';

@Component({
    selector: 'app-dashitem',
    templateUrl: './dashitem.component.html',
    styleUrls: ['./dashitem.component.scss']
})
export class DashitemComponent implements OnInit {
    constructor() {
    }
    plainGalleryRow: PlainGalleryConfig = {
        strategy: PlainGalleryStrategy.ROW,
        layout: new LineLayout({width: '180px', height: '80px'}, {length: 1, wrap: true}, 'flex-start')
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

    ngOnInit() {
    }

}
