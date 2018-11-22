import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss']
})
export class DashboardDetailComponent implements OnInit {
  public dashId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    let id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.dashId = id;
  }

}
