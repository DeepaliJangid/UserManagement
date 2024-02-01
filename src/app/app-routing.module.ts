import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AboutComponent } from './Components/about/about.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FetchedUsersComponent } from './Components/fetched-users/fetched-users.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'login', component:LoginComponent, title:'Login'},
  {path:'signup',component:SignupComponent, title:"Signup"},
  {path:'about',component:AboutComponent, title:"About"},
  {path:'navbar',component:NavbarComponent, title:"Navbar"},
  {path:'fetchedusers',component:FetchedUsersComponent, title:"FetchedUsers"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
