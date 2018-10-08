import {Component, OnInit} from '@angular/core';
import {DASHBOARD} from './model/dashboard-list';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    dashboard = DASHBOARD;

    tabs = [
        { tab: 'all' },
        { tab: 'Design' },
        { tab: 'Branding' },
        { tab: 'Graphic' },
        { tab: 'Animation' },
        { tab: 'Illustration' },
        { tab: 'Photography' }
    ]

    constructor() {
    }

    ngOnInit() {
    }

}
