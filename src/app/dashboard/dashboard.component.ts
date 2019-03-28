import {Component, OnInit} from '@angular/core';

import {DashboardService} from '../services/dashboard.service';

import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import {Dashboard} from "./model/dashboard";



@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    dashboard = [];

    public selectedId;

    public searchDash: string = '';


    // display: string = 'all';
    // catName: string = '';


    PageNav = [
        {name: 'all'},
        {name: 'desing'},
        {name: 'dranding'},
        {name: 'graphic'},
        {name: 'animation'},
        {name: 'illustration'},
        {name: 'photography'}
    ]

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


    filters = {}

    getSort(val) {



        this.filters = this.dashboard.filter(das => {
                return das.category.includes(val);

            });

        console.log(this.filters);


    }


}
