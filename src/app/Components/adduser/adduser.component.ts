import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/Services/api.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  constructor(private service: UserService, private router: Router, private toastr: ToastrService, private api: ApiService){

  }
ngOnInit(): void {
  
}
addUser= new FormGroup({
"username":new FormControl(null,[Validators.required]),
"picture": new FormControl(null,Validators.required),
"bio": new FormControl(null,Validators.required),
"interest": new FormControl(null,Validators.required),
"role": new FormControl(null,Validators.required)
});

OnSubmit(){
  debugger
  this.service.postUser(this.addUser.value)
  .subscribe(
    ()=>{
      this.toastr.success("user sent successfully");
      this.addUser.reset();
      this.router.navigate(['/fetchedusers'])
    },
    (error)=>{
      console.error("Error");
      if(error.status===500){
        this.toastr.warning('Username already exists');
      }else{
        this.toastr.warning('Something went wrong!')
      }
    },
  );
}
}
