import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DashboardService} from '../services/dashboard.service';

@Component({
    selector: 'app-dashboard-detail',
    templateUrl: './dashboard-detail.component.html',
    styleUrls: ['./dashboard-detail.component.scss']
})


export class DashboardDetailComponent implements OnInit {
    public dashId;
    dashdetail = [];

    constructor(private dashService: DashboardService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.dashService.getDash().subscribe(data => this.dashdetail = data);

        this.route.paramMap.subscribe((params: ParamMap) => {
            let id = parseInt(params.get('id'));
            this.dashId = id;
        });
    }

    goPrevious() {
        let previousId = this.dashId - 1;
        this.router.navigate(['/home', previousId]);

        console.log(this.dashdetail[0]);
    }

    goNext() {
        let nextId = this.dashId + 1;
        this.router.navigate(['/home', nextId]);
    }

    gotoDashboard() {
        let selectedId = this.dashId ? this.dashId : null;
        this.router.navigate(['/home', {id: selectedId}]);
    }


    // hideArrowPrev() {
    //     if (this.router.url === '/home/1') {
    //         return false;
    //     }
    //     return true;  
    // }

}
