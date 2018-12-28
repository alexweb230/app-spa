import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import {HttpClient} from '@angular/common/http';

import {Blog} from '../blog/model/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private _urlBlog: string = '/assets/json/data/blog.json';
  constructor(private http: HttpClient) { }

  getBlog(): Observable<Blog[]>{
    return this.http.get<Blog[]>(this._urlBlog);
  }
}
