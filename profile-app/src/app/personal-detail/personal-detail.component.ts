import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  firstName : string = 'keyur';
  lastName : string = 'Thakor';
  age : number = 31;
  gender : string = 'Male';
  contactNo : string = '7387029671';
  email : string = 'keyurjava27@gmail.com';  

  
  
  constructor() { }

  ngOnInit() {
  }

}
