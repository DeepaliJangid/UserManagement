import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FetchedUsersComponent } from './Components/fetched-users/fetched-users.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AdduserComponent } from './Components/adduser/adduser.component'
import { ApiService } from './Services/api.service';
import { UserService } from './Services/user.service';
import { HighlightDirective } from './Directives/highlight.directive';
import { HoverDirective } from './Directives/hover.directive';
import { ContactComponent } from './Components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { EdituserprofileComponent } from './Components/edituserprofile/edituserprofile.component';
// import { AuthModule} from  './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FetchedUsersComponent,
    LoginComponent,
    SignupComponent,
    AdduserComponent,
    HighlightDirective,
    HoverDirective,
    ContactComponent,
    EdituserprofileComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
      ToastrModule.forRoot({
        timeOut: 10000,
        positionClass: "toast-top-right",
        preventDuplicates: true,
        progressBar:true,
        closeButton:true,
        tapToDismiss:true,
        progressAnimation:'increasing',
        newestOnTop: true,
        toastClass:'toastr',
      }),
      BrowserAnimationsModule,
      
    
  ],
  providers: [ApiService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
