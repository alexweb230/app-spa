import {Component, OnInit} from '@angular/core';
import {Dashboard} from './model/dashboard';
import{DASHBOARD} from './model/dashboard-list';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    dashboard = DASHBOARD;

    tabs = {
        tab_1: 'all',
        tab_2: 'Design',
        tab_3: 'Branding',
        tab_4: 'Graphic',
        tab_5: 'Animation',
        tab_6: 'Illustration',
        tab_7: 'Photography'
    }







    constructor() {
    }

    ngOnInit() {
    }

}
