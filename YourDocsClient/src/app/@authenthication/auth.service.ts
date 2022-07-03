import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoginSuccessful: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router) { }
  checkLoginSuccessful(){
    return this.isLoginSuccessful.asObservable();
  }
  loginSuccessful(){
    this.isLoginSuccessful.next(true);
    this.router.navigate(['/invitation-form']);
    }
}
