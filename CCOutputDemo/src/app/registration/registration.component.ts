import { Component, OnInit } from '@angular/core';
import { Registration } from './registration.model';
import { Lookup } from './lookup.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registration : Registration = new Registration();

  stateList : Lookup[] = [new Lookup(1,'GUJ','Gujrat'),new Lookup(2,'MH','Maharashtra'),new Lookup(3,'MP','Madhya Pradesh')];
  cityList : Lookup[] = [];

  defaultState : Lookup;
  defaultCity : Lookup;


  constructor() { }

  ngOnInit() {
    let city1 = new Lookup(1,'SRT','Surat');
    let city2 = new Lookup(2,'BRD','Baroda');
    let city3 = new Lookup(3,'MB','Mumbai');
    let city4 = new Lookup(4,'PN','Pune');
    let city5 = new Lookup(5,'IND','Indore');
    let city6 = new Lookup(6,'BP','Bhopal');

    this.cityList.push(city1);
    this.cityList.push(city2);
    this.cityList.push(city3);
    this.cityList.push(city4);
    this.cityList.push(city5);
    this.cityList.push(city6);

    this.defaultState = this.stateList[0];
    this.defaultCity = this.cityList[1];
    this.registration.state = new Lookup();
    this.registration.city = new Lookup();
  }

  save() : void {
    console.log(this.registration.name+" "+this.registration.state.desc+" "+this.registration.city.desc);
  }

  setState(event) : void{
    alert(2);
    this.registration.state = event;
  }

  setCity(event) : void{
    alert(2);
    this.registration.city = event;
  }
}
