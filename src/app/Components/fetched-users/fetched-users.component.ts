import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/Services/api.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-fetched-users',
  templateUrl: './fetched-users.component.html',
  styleUrls: ['./fetched-users.component.css']
})
export class FetchedUsersComponent implements OnInit {
 constructor(private http: HttpClient, private service: UserService, private router: Router, private toastr: ToastrService, private api: ApiService){
}
users:any;

 ngOnInit(){
this.service.getUser()
.subscribe((data)=>{
  this.users=data;
},err=>{
  this.toastr.warning('some error occurred');
})

}
}