import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { SearchRequest } from '../Class/search-request';
import { SearchResponse } from '../Class/search-response';

@Injectable({
  providedIn: 'root'
})
export class InsuranceServiceService {

  constructor(private http : HttpClient) {

  }

  // private baseurl:string ='https://dynamicsearch-app.herokuapp.com/';
  // private baseurl:string="http://localhost:9090";

  getPlanNames() :Observable<any>{
    // return this.http.get<any>('http://localhost:9090/plannames');
    return this.http.get<any>('https://dynamicsearch-app.herokuapp.com/plannames');
  }

  getPlanStatus() :Observable<any>{
    // return this.http.get<any>('http://localhost:9090/planstatus');
    return this.http.get<any>('https://dynamicsearch-app.herokuapp.com/planstatus');
  }

  search(req:SearchRequest)  :Observable<SearchResponse[]>{
    // return this.http.post<SearchResponse[]>('http://localhost:9090/plans',req);
    return this.http.post<SearchResponse[]>('https://dynamicsearch-app.herokuapp.com/plans',req)
  }

  getexcel():Observable<any>{
    // return this.http.get('http://localhost:9090/excel' ,{responseType:'blob'});
    return this.http.get('https://dynamicsearch-app.herokuapp.com/excel' ,{responseType:'blob'});
  }

  getpdf():Observable<any>{
    // return this.http.get('http://localhost:9090/pdf',{responseType:'blob'});
    return this.http.get('https://dynamicsearch-app.herokuapp.com/pdf',{responseType:'blob'});
  }
}
