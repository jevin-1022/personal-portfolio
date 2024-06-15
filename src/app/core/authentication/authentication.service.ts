import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()

export class AuthenticationService {

  constructor(
    private httpClient : HttpClient
  ) { }

  apiCall(method:string, url:string, payload?:any, params?:any){
    let apiData : Observable<Object> | any
    if(method === "post" || method === "put"){
      apiData = this.httpClient[method](url, payload, { params });
    }else if(method === "get"){
      apiData = this.httpClient[method](url, { params });
    }else if(method === "delete"){
      apiData = this.httpClient[method](url, { params });
    }
    return apiData.pipe(
      map((body: any) => {
        return body;
      })
    );
  }
}
