import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Footer} from '../footer/footer';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private http: HttpClient) { }
  private _urlFooter: string = '/assets/json/data/footer.json';

   getLastPost(): Observable<Footer[]>{
     return this.http.get<Footer[]>(this._urlFooter);
   }





}
