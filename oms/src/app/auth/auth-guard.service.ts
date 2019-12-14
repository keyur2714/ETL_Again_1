import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate,CanActivateChild{
  

  constructor(private authService : AuthenticationService,private router:Router) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    let url = state.url;
    console.log("From Guard."+url);
    this.authService.defaultSuccessPage = url;
    if(this.authService.isLoggedIn){
      return true;
    }
    this.router.navigate(['signin']);
    return false;
  }

  canActivateChild(childRoute: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {    
    let currentUser : User= JSON.parse(sessionStorage.getItem("user"));
    if(currentUser.role === 'ADMIN'){
      alert("Sorry but you can not purchase...!");
      return false;
    }
    return true;
  }
}
