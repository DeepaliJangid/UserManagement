import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient){
  
  }
loggedIn: boolean=false;

login(){
  this.loggedIn=true;
}
IsAuthenticated(){
return this.loggedIn;
}
}
