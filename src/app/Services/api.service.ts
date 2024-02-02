
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Constructor to inject HttpClient
  constructor(private http: HttpClient) { }



  // Method to post user data to the server by Admin
  sendUser(data:any):Observable<any>{
    return this.http.post('https://localhost:3000/users',data);
  }

  fetchUser(){
  return this.http.get("https://localhost:3000/users");
}



  // Authentication-related methods

  // Variable to track login status
  loggedIn: boolean = false;
  userData:any;

  // Method to set login status to true
  Login() {
    this.loggedIn = true;
  }

  // Method to set login status to false
  Logout() {
    this.loggedIn = false;
  }

  // Method to check if the user is authenticated
  IsAuthenticated() {
    return this.loggedIn;
  }
  getUserRole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():''
  }
}