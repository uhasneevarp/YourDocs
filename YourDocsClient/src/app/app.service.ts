import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs';
import { environmentUrl } from './@shared/constants/app-constant';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient) { }

  getCurrentLocation(){
    return this._http.get<any>(environmentUrl +"WeatherForecast/GetLocationForWeather", httpOptions);
  }

}
