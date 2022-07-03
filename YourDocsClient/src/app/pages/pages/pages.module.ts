import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { HomeComponent } from './home/home.component';
const COMPONENTS = [
  LoginComponent,
  HomeComponent
]
@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class PagesModule { }
