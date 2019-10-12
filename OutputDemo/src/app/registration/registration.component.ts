import { Component, OnInit } from '@angular/core';
import { Lookup } from '../my-dropdown/lookup.model';
import { Registration } from './registration.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registration : Registration = new Registration();

  cityList : Lookup[] = [];

  constructor() { }

  ngOnInit() {
    let city1 = new Lookup('PUN','Pune');
    let city2 = new Lookup('SRT','Surat');
    let city3 = new Lookup('IND','Indore');
    this.cityList = [city1,city2,city3];
  }

  setCity(selectedCity : Lookup) : void {
    //alert(2);
    //alert(selectedCity.desc);
    this.registration.city = selectedCity;
  }

  save() : void {
    alert(this.registration.name+" "+this.registration.city.desc);
  }
}
