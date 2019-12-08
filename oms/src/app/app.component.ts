import { Component } from '@angular/core';
import { AuthenticationService } from './auth/authentication.service';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oms';
  isLoggedIn : boolean = false;
  userRole  :string = '';

  constructor(private authenticationService : AuthenticationService){}

  checkLogin() : void{
    this.isLoggedIn = this.authenticationService.isLoggedIn;
    let user:User = JSON.parse(sessionStorage.getItem("user"));
    if(user !== null && user !== undefined){
      this.userRole = user.role;
    }    
  }
}
