import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

// // User-related methods

  // Method to post user data to the server
  postUser(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/users', data);
  }

  // Method to get user data from the server
  getUser(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/users');
  }

//   // Method to update user data on the server
//   updateUser(id: any, data: any): Observable<any> {
//     return this.http.put<any>('http://localhost:3000/users' + `/${id}`, data);
//   }

//   // Method to delete user data on the server
//   deleteUser(id: any): Observable<any> {
//     return this.http.delete<any>('http://localhost:3000/users' + `/${id}`);
//   }

//   // Method to get a specific user's data by ID from the server
  

//   getAccessbyrole(role:any){
//     return this.http.get("http://localhost:3000/roleaccess?");
//   }

//   // Authentication-related methods

//   // Variable to track login status
//   loggedIn: boolean = false;

//   // Method to set login status to true
//   Login() {
//     this.loggedIn = true;
//   }

//   // Method to set login status to false
//   Logout() {
//     this.loggedIn = false;
//   }

//   // Method to check if the user is authenticated
//   IsAuthenticated() {
//     return this.loggedIn;
//   }
//   getUserRole(): any{
//     console.log(sessionStorage.getItem('role'), '=============> from service', sessionStorage.getItem('role').toString());
//     return sessionStorage.getItem('role')!=null ? sessionStorage.getItem('role')?.toString() : ''
   
    
//   }
//   // getById(id:any){
//   //   return this.http.get(' '+'/'+id)
//   // }
}




