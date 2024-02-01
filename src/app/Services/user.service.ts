import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

// User-related methods

  // Method to post user data to the server
  postUser(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/signupusers', data);
  }

  // Method to get user data from the server
  getUser(): Observable<any> {
    return this.http.get<any>('');
  }

  // Method to update user data on the server
  updateUser(id: any, data: any): Observable<any> {
    return this.http.put<any>('' + id, data);
  }

  // Method to delete user data on the server
  deleteUser(id: any): Observable<any> {
    return this.http.delete<any>('' + id);
  }

  // Method to get a specific user's data by ID from the server
  getUserById(id: any): Observable<any> {
    return this.http.get<any>('' + id);
  }

  // Admin-related methods

  // Method to post admin data to the server
  postAdmin(data: any): Observable<any> {
    return this.http.post<any>('', data);
  }

  // Method to get admin data from the server
  getAdmin(): Observable<any> {
    return this.http.get<any>('');
  }

  // Method to update admin data on the server
  updateAdmin(id: number, data: any): Observable<any> {
    return this.http.put<any>('' + id, data);
  }

  // Method to delete admin data on the server
  deleteAdmin(id: number): Observable<any> {
    return this.http.delete<any>('' + id);
  }

  // Manager-related methods

  // Method to post manager data to the server
  postManager(data: any): Observable<any> {
    return this.http.post<any>('', data);
  }

  // Method to get manager data from the server
  getManager(): Observable<any> {
    return this.http.get<any>('');
  }

  // Method to get a specific manager's data by ID from the server
  getManagerById(id: any): Observable<any> {
    return this.http.get<any>('' + id);
  }

  // Method to update manager data on the server
  updateManager(id: number, data: any): Observable<any> {
    return this.http.put<any>('' + id, data);
  }

  // Method to delete manager data on the server
  deleteManager(id: number): Observable<any> {
    return this.http.delete<any>('' + id);
  }

  // Authentication-related methods

  // Variable to track login status
  loggedIn: boolean = false;

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
  getUserRole(): any{
    console.log(sessionStorage.getItem('role'), '=============> from service', sessionStorage.getItem('role').toString());
    return sessionStorage?.getItem('role')!==null ? sessionStorage?.getItem('role')?.toString() : 'jdfyrgyufgry'
   
    
  }
  getById(id:any){
    return this.http.get(' '+'/'+id)
  }
}




