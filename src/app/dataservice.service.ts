import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders,} from '@angular/common/http';
import { SingletonService } from './singleton.service';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(public http: HttpClient, public singleton: SingletonService) { }

getData(url:any) {

return this.http.get(`${this.singleton.baseAPIUrl}/${url}`);

}

postDataSubscribe(url: any, data: any) {
  return this.http
  .post<any>(`${this.singleton.baseAPIUrl}/${url}`, data)
}


postData(url:any, data:any) {

    return this.http

      .post<any>(`${this.singleton.baseAPIUrl}/${url}`, data)

      .subscribe({

        next: (data) => {

          console.log('Data' + data);

        },

        error: (error) => {

          console.error('Error! ', error.message);

        },

      });

  }
}

