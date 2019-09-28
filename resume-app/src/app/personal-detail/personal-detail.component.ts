import { Component, OnInit, Input } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  @Input("personal-info")
  person : Person = {
      name : 'keyur',
      gender : 'Male',
      dob : '27/12/1986',
      mobileNo : '787029671',
      email : 'keyurjava27@gmail.com',
      age : 32
  };

  @Input()
  color : string = 'text-info';

  @Input('background')
  bgColor : string = 'bg-dark';

  //  person = {
  //   name : 'keyur',
  //   gender : 'Male',
  //   dob : '27/12/1986',
  //   mobileNo : '787029671',
  //   email : 'keyurjava27@gmail.com',
  //   age : 32
  // };

  constructor() {
    console.log("Person Detail Component Object Created...");
  }

  ngOnInit() {
    console.log("Always After Constructor...!");
    // this.person.name = 'keyur';
    // this.person.gender = 'Male';
    // this.person.mobileNo = '7387029671';
    // this.person.dob = '27/12/1986';
    // this.person.email = 'keyurjava27@gmail.com',
    // this.person.mobileNo = '7387029671';
    // this.person.age = 32;
  }

}
