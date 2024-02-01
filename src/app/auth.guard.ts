import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Router, ActivatedRouteSnapshot,CanActivate,RouterStateSnapshot,UrlTree } from "@angular/router";
@Injectable({
    providedIn: 'root'
    })
    export class authGuard implements CanActivate{
        constructor(private authService :AuthService, private router: Router){}

        canActivate(
            route: ActivatedRouteSnapshot, 
            state: RouterStateSnapshot): Observable<boolean | UrlTree>| Promise<boolean | UrlTree> | boolean|UrlTree {
            if(this.authService.IsAuthenticated())
        {
          return true;
        }
        else{
            alert('Please login as admin before you add user!!')
          this.router.navigate(['login']);
          return false;
        }
          }

}