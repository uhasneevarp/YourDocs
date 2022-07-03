import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@authenthication/auth.service';
import { LoginService } from 'src/app/@shared/services/login.service';
import { LoginCommandModel } from 'src/app/@shared/typings/login-model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loadingLogin: boolean = false;
  loginLoadingValue: number = 0;
  loginDetails = {} as LoginCommandModel;
  constructor(private _loginService: LoginService,
    private _authService: AuthService
    ) { }

  ngOnInit(): void {
  }
  checkLoginDetails(){
    this._loginService.checkLoginInformation(this.loginDetails).subscribe(response=>{

      if(response.loginSuccess){
        this.loadingLogin = true;
        this._authService.loginSuccessful();
      } else{
        this.loadingLogin = false;
        alert('Login Failed!!!');
      }
    })
  }
}
