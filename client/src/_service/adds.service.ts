import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {forkJoin } from "rxjs/observable/forkJoin";

@Injectable()
export class AddsService {

  constructor(private http: HttpClient) { }

  config = [
    {
    company:"xyz",
    api:'/index?company="xyz'
    },
    {
      company:"abc",
      api:'/index?company="abc'
    },
    {
      company:"efg",
      api:'/index?company="efg'
    },
    {
      company:"lmn",
      api:'/index?company="lmn'
    },
    {
      company:"qpr",
      api:'/index?company="qpr'
    }];
  public getAdvertisements(): Observable<any[]>{
    let advertiseList = [];
    for( let companies of this.config){
      advertiseList.push(this.http.get(companies.api))
    }
    return forkJoin(advertiseList)
  }

  public recordClick(addObj:any): Observable<any>{
    return this.http.post(`/conversions?company=${addObj.company}&id=${addObj.id}`, {});
  }
}
