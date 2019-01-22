import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';

import {Dashboard} from '../dashboard/model/dashboard';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private _url: string = '/assets/json/data/dashboard.json';



  constructor(private http: HttpClient) {}

  getDash(): Observable<Dashboard[]>{
    return this.http.get<Dashboard[]>(this._url);
  }

}
