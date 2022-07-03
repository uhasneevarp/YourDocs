import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentUrl } from '../constants/app-constant';
import { LoginCommandModel } from '../typings/login-model';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public _http:HttpClient) { }

  checkLoginInformation(input: LoginCommandModel){
   return this._http.post<any>(environmentUrl + 'Login/CheckMemberInfoForLogin', input, httpOptions)
  }

}
