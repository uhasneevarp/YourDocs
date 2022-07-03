import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { AuthService } from './@authenthication/auth.service';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
newVariable = 'something';
private _subsSink = new SubSink();
isLoggedInToSystem: boolean = false;
  title = 'YourDocs';
  constructor(private _appService: AppService,
    private _authService: AuthService){
  }
  ngOnInit(): void {
    this._authService.isLoginSuccessful.subscribe(response=>{
      this.isLoggedInToSystem = response;
    })
  }
  getCurrentLocation(){
    this._appService.getCurrentLocation().subscribe(response=>{
      this.newVariable = response.data;
    })
  }
  ngOnDestroy(): void {
      this._subsSink.unsubscribe();
  }
}
