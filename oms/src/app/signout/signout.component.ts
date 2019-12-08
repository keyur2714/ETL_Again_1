import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-signout',
  template: ''  
})
export class SignoutComponent implements OnInit {

  constructor(private router:Router,private authenticationService : AuthenticationService) { }

  ngOnInit() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    this.authenticationService.isLoggedIn = false;
    this.router.navigate(['signin']);
  }

}
