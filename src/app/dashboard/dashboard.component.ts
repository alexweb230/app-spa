import {Component, OnInit} from '@angular/core';
import {Dashboard} from './model/dashboard';
import {DashboardService} from '../services/dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    dashboard = Dashboard;
    tabs = {
        tab_1: 'all',
        tab_2: 'Design',
        tab_3: 'Branding',
        tab_4: 'Graphic',
        tab_5: 'Animation',
        tab_6: 'Illustration',
        tab_7: 'Photography',
    }


    constructor(private dashService: DashboardService) {
    }

    getDash(): void {
        this.dashService.getDash().subscribe(dashboard => this.dashboard = dashboard);
    }
    ngOnInit() {
        this.getDash();
    }

}
