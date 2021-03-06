import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DashboardService} from '../services/dashboard.service';

import {Location} from '@angular/common';
import {Dashboard} from '../dashboard/model/dashboard';

@Component({
    selector: 'app-dashboard-detail',
    templateUrl: './dashboard-detail.component.html',
    styleUrls: ['./dashboard-detail.component.scss']
})


export class DashboardDetailComponent implements OnInit {
    public dashId;

    @Input() dashdetail: Dashboard[];


    constructor(private dashService: DashboardService,
                private location: Location,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getDashB();

        // this.route.paramMap.subscribe((params: ParamMap) => {
        //     let id = parseInt(params.get('id'));
        //     this.dashId = id;
        // });
    }

    getDashB(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.dashId = id;

        this.dashService.getDash().subscribe(data => this.dashdetail = data);

    }


    goBack(): void {
        // this.location.back();
        let selId = this.dashId ? this.dashId : null;
        this.router.navigate(['/home', {id: selId}]);
    }


    goPrev() {
        let count = (this.dashId - 2) + 1;
        this.dashId = count;
        this.router.navigate(['/detail', this.dashId]);
    }

    goNext() {
        let count = (this.dashId + 2) - 1;
        this.dashId = count;
        this.router.navigate(['/detail', this.dashId]);
    }
}