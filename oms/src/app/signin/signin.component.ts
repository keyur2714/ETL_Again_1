import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../auth/authentication.service';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  errorMessage : string = '';
  loginForm : FormGroup;

  constructor(private formBuilder : FormBuilder,private authenticationService : AuthenticationService,private router:Router) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() : void {
    this.loginForm = this.formBuilder.group({
      userName : this.formBuilder.control(['']),
      password : this.formBuilder.control([''])
    })
  }

  login() : void{
    if(this.loginForm){
      this.authenticationService.autheticate(this.loginForm.get('userName').value,this.loginForm.get('password').value).subscribe(
        (user : User)=>{
          if(user !== null && user !== undefined){
            sessionStorage.setItem("token",user.token);
            sessionStorage.setItem("user",JSON.stringify(user)),
            this.router.navigate([this.authenticationService.defaultSuccessPage]);
          }else{
            this.errorMessage = 'Invalid Username or Password';
          }
        }
      )
    }
  }

}
