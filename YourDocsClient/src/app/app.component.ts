import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
newVariable = 'something'
  title = 'YourDocs';
  constructor(private _appService: AppService){
  }
  ngOnInit(): void {
  }
  getCurrentLocation(){
    this._appService.getCurrentLocation().subscribe(response=>{
      this.newVariable = response.data;
    })
  }
}
