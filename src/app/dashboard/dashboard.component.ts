import {Component, OnInit} from '@angular/core';

import {DashboardService} from '../services/dashboard.service';

import {Router} from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    dashboard = [];
    tabs = {
        tab_1: 'all',
        tab_2: 'Design',
        tab_3: 'Branding',
        tab_4: 'Graphic',
        tab_5: 'Animation',
        tab_6: 'Illustration',
        tab_7: 'Photography',
    }

    constructor(
        private dashService: DashboardService,
        private router: Router) {
    }

    onSelect(dash){
        console.log('test');
       this.router.navigate(['/home', dash.id]);
    }





    ngOnInit() {
      this.dashService.getDash().subscribe(data => this.dashboard = data);
    }

}
