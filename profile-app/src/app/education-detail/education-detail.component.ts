import { Component, OnInit } from '@angular/core';
import { Education } from './education.model';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {

  educationList : Education[] = [];

  constructor() { 
    console.log("Education Detail Component Object Created....!");
  }

  ngOnInit() {
    console.log("Education Detail Component Object Initialized....!");
    let education1 = new Education();
    education1.degree = 'S.S.C';
    education1.per = 72.14;
    education1.year = 2001;

    let education2 = new Education();
    education2.degree = 'H.S.C';
    education2.per = 66.50;
    education2.year = 2003;

    let education3 = new Education();
    education3.degree = 'B-Tech';
    education3.per = 60.14;
    education3.year = 2007;

    let education4 = new Education();
    education4.degree = 'M-Tech';
    education4.per = 65.14;
    education4.year = 2009;

    this.educationList.push(education1);
    this.educationList.push(education2);
    this.educationList.push(education3);
    this.educationList.push(education4);

  }

}
