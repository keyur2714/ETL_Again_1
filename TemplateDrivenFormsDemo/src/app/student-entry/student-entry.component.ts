import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  save(frm : NgForm) : void {
    console.log(frm);
    if(frm.valid){
      console.log(frm.value);
      console.log(frm.controls['name'].value);
    }
  }
}
