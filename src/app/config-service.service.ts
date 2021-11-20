import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import { Data } from '@angular/router';
import { Templerature } from './data';

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<Data>('https://catfact.ninja/breeds');
  }

  getTemperature() {

    var token = localStorage.getItem('currentUser');

    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  'bearer '+token)
    }

    return this.http.get<Templerature>('http://localhost:61072/weatherforecast', header);
  }

}
