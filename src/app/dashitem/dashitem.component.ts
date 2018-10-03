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
            {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img1.jpg',
                extUrl: 'http://www.google.com'
            }
        ),
        new Image(
            1,
            {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img2.png',
                description: 'Description 2'
            }
        ),
        new Image(
            2,
            {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img3.jpg',
                description: 'Description 3',
                extUrl: 'http://www.google.com'
            },
            {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/img3.png',
                title: 'custom title 2',
                alt: 'custom alt 2',
                ariaLabel: 'arial label 2'
            }
        ),
        new Image(
            3,
            {
                img: '../assets/img/jpg/1.jpg',
                description: 'Description 4',
                extUrl: 'http://www.google.com'
            }
        ),
        new Image(
            4,
            {
                img: '../assets/img/jpg/2.jpg'
            },

        )
    ];

    ngOnInit() {
    }

}
