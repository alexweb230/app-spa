import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss']
})
export class DashboardDetailComponent implements OnInit {
  public dashId;
  constructor(
      private route: ActivatedRoute,
      private router: Router,
  ) { }

  ngOnInit() {

    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //
    // this.dashId = id;

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt (params.get('id'));

        this.dashId = id;
    });
  }


  goPrevious(){
    let previousId = this.dashId - 1;
    this.router.navigate(['/home', previousId]);
  }

    goNext(){
        let nextId = this.dashId + 1;
        this.router.navigate(['/home', nextId]);
    }

}
