import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-fetched-users',
  templateUrl: './fetched-users.component.html',
  styleUrls: ['./fetched-users.component.css']
})
export class FetchedUsersComponent {
 constructor(private http: HttpClient, private service: UserService, private router: Router, private toastr: ToastrService){

 }
}
