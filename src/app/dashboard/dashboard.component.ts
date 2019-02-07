import {Component, OnInit} from '@angular/core';

import {DashboardService} from '../services/dashboard.service';

import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    dashboard = [];

    public selectedId;


    tabs = {
        tab_1: 'all',
        tab_2: 'Design',
        tab_3: 'Branding',
        tab_4: 'Graphic',
        tab_5: 'Animation',
        tab_6: 'Illustration',
        tab_7: 'Photography',
    }

    constructor(private dashService: DashboardService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    // onSelect(dash) {
    //     this.router.navigate(['/home', dash.id]);
    // }


    ngOnInit() {
        this.dashService.getDash().subscribe(data => this.dashboard = data);

        const id = this.route.snapshot.paramMap.get('id');
        this.selectedId = id;

        // this.route.paramMap.subscribe((params: ParamMap) => {
        //     let id = parseInt(params.get('id'));
        //
        //     this.selectedId = id;
        // });
    }

    isSelected(dash) {
         return dash.id == this.selectedId;
    }

}
