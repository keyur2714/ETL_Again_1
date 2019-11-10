import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userRegistration : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.createUserRegistrationForm();
  }

  createUserRegistrationForm() : void{
    this.userRegistration = this.formBuilder.group({
      userName : this.formBuilder.control(''),
      password : this.formBuilder.control(''),
      name : this.formBuilder.control(''),
      mobileNo : this.formBuilder.control(''),
      hobbies : this.formBuilder.array([this.formBuilder.control('')])
    })
  }

  save() : void {
    console.log(this.userRegistration.value);
  }

  addMore() : void {
    let control = this.formBuilder.control('');
    (<FormArray>this.userRegistration.controls['hobbies']).push(control);
  }
}
