import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edituserprofile',
  templateUrl: './edituserprofile.component.html',
  styleUrls: ['./edituserprofile.component.css']
})
export class EdituserprofileComponent {

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

