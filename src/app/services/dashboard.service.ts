import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';

import {Dashboard} from '../dashboard/model/dashboard';
import {DashDetail} from '../dashboard-detail/model/dash-detail';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private _url: string = '/assets/json/data/dashboard.json';

  private  _urlDetail: string = '/assets/json/data/dashboard-detail.json';

  constructor(private http: HttpClient) {}

  getDash(): Observable<Dashboard[]>{
    return this.http.get<Dashboard[]>(this._url);
  }

  getDashDetail(): Observable<DashDetail[]>{
    return this.http.get<DashDetail[]>(this._urlDetail);
  }
}
