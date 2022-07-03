import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitationFormComponent } from './pages/invitation-form/invitation-form.component';
import { HomeComponent } from './pages/pages/home/home.component';
import { LoginComponent } from './pages/pages/login/login.component';


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'invitation-form', component: InvitationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
