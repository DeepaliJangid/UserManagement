import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from  './Components/login/login.component'
import { SignupComponent } from './Components/signup/signup.component';
import { AboutComponent } from './Components/about/about.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FetchedUsersComponent } from './Components/fetched-users/fetched-users.component';
import { AdduserComponent } from './Components/adduser/adduser.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './Components/home/home.component';
import { EdituserprofileComponent } from './Components/edituserprofile/edituserprofile.component';
import { ContactComponent } from './Components/contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'home', component:HomeComponent},
  {path: 'login', component:LoginComponent, title:'Login'},
  {path:'signup',component:SignupComponent, title:"Signup"},
  {path:'about',component:AboutComponent, title:"About"},
  {path:'navbar',component:NavbarComponent, title:"Navbar"},
  {path:'fetchedusers',component:FetchedUsersComponent, title:"FetchedUsers"},
  {path:'adduser',component:AdduserComponent},
  {path:"edituserprofile",component:EdituserprofileComponent,canActivate:[authGuard]},
  {path:"contact",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
