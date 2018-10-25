import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Dashboard} from '../dashboard/model/dashboard';
import {DASHBOARD} from '../dashboard/model/dashboard-list';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getDash(): Observable<Dashboard[]>{
    return of(DASHBOARD);
  }
}
