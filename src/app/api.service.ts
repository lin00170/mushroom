import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string
  constructor(private http: HttpClient) {
    this.url = 'https://myprojectcms.tk/mushroom/show';
  }
//get data from api of server
  getData(params: { id: any }){
    return this.http.get<unknown>(this.url,{
      params:params
    })

  }
  rateForm(value: number) {
    // @ts-ignore
    const a = [];
    for (let i = 1; i < 6; i++) {
      if (i <= value) {
        a.push({
          name: 'grade',
        })
      } else {
        a.push({
          name: 'star_border',
        })
      }
    }
    return a;
  };
}



