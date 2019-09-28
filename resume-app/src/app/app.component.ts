import { Component, OnInit } from '@angular/core';
import { Person } from './personal-detail/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'resume-app';

  personList : Person[] = [];

  person : Person = new Person();
  person1 : Person = new Person();

  ngOnInit(): void {
    this.person.name = 'denish';
    this.person.gender = 'Male';
    this.person.mobileNo = '7387029121';
    this.person.dob = '24/05/1985';
    this.person.email = 'denishjava26@gmail.com',    
    this.person.age = 33;

    this.person1.name = 'Ami';
    this.person1.gender = 'FeMale';
    this.person1.mobileNo = '7387029333';
    this.person1.dob = '14/02/1987';
    this.person1.email = 'ami@14@gmail.com',    
    this.person1.age = 30;

    let person3 = new Person();
    person3.name = 'Nisha';
    person3.gender = 'FeMale';
    person3.mobileNo = '7387029777';
    person3.dob = '14/02/1988';
    person3.email = 'nisha@14@gmail.com',    
    person3.age = 29;

    this.personList.push(this.person);
    this.personList.push(this.person1);
    this.personList.push(person3);
  }

}
