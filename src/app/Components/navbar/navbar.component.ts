import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck{
isMenuRequired=false;
constructor(private router:Router, ){

}
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
onClickSignUp(){
  this.router.navigate(['/signup']);
}
onClickLogin(){
  this.router.navigate(['login']);
}

}
