import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck, OnInit{
isMenuRequired=false;
constructor(private router:Router, private api:ApiService ){

}
user:any;
ngDoCheck(): void {
  let currentUrl= this.router.url;
    if(currentUrl=='/login' || currentUrl=='/signup'){
      this.isMenuRequired= false;
    }
    else{
      this.isMenuRequired=true;
    }
}
// logout(){
//   localStorage.removeItem('token');
// }
ngOnInit(){
this.user=this.api.userData
}
logout() {
  this.api.Logout();
  this.router.navigate(["/login"])
}

onClickSignUp(){
  this.router.navigate(['/signup']);
}
onClickLogin(){
  this.router.navigate(['login']);
}

isLoggedIn(){
  return this.api.loggedIn;
}

isLoggedOut(){
  return !this.isLoggedIn();
}
}
